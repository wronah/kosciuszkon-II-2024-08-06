import React, { useRef, useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { supabase } from "../createClient";

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const polylineRef = useRef(null);
  const [dataN, setDataN] = useState([]);
  const [stationsData, setStationsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data, error } = await supabase.from("readings").select("dlugosc_geo, szerokosc_geo");

        if (error) {
          throw error;
        }

        let { data: fetchedStationsData, error: stationsError } = await supabase
          .from("stations")
          .select("nazwa_stacji, gps_n, gps_e, typ_obiektu");

        if (stationsError) {
          throw stationsError;
        }

        const filteredStationsData = fetchedStationsData.filter(({ typ_obiektu }) => typ_obiektu === "Kolej");
        const mappedStationsData = filteredStationsData.map(({ nazwa_stacji, gps_n, gps_e, typ_obiektu }) => ({
          nazwa_stacji,
          gps_n,
          gps_e,
          typ_obiektu,
        }));

        setStationsData(mappedStationsData);
        setDataN(data.map((item) => [item.szerokosc_geo, item.dlugosc_geo]));
        console.log(mappedStationsData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Initialize Leaflet map after component mounts
    mapRef.current = L.map(mapContainerRef.current, {
      minZoom: 3,
      maxZoom: 18,
    });

    // Add a tile layer (e.g., OpenStreetMap)
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(mapRef.current);

    // Set initial view (optional)
    mapRef.current.setView([50.0683947, 19.9475035], 13);

    // Handle cleanup when component unmounts
    return () => mapRef.current.remove();
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      // Clear existing markers
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];

      // Add new markers
      stationsData.forEach(({ nazwa_stacji, gps_n, gps_e }) => {
        const marker = L.marker([gps_n, gps_e]).addTo(mapRef.current);
        marker.bindPopup(nazwa_stacji);
        markersRef.current.push(marker);
      });

      // Draw polyline if not already drawn
      if (polylineRef.current) {
        polylineRef.current.remove();
      }
      polylineRef.current = L.polyline(dataN, { color: "blue" }).addTo(mapRef.current);
    }
  }, [stationsData, dataN]);

  return (
    <div ref={mapContainerRef} id="map-container" style={{ height: "400px", width: "400px", borderRadius: "30px" }} />
  );
};

export default MapComponent;
