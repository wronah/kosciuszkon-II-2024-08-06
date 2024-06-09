import React, { useRef, useEffect } from 'react';

const MapComponent = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Initialize Leaflet map after component mounts
    const map = L.map(mapContainerRef.current, {
      minZoom: 3,
      maxZoom: 18,
    });

    // Add a tile layer (e.g., OpenStreetMap)
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map);
    
    // Set initial view (optional)
    map.setView([50.0683947, 19.9475035], 13);
    
    // Handle cleanup when component unmounts
    return () => map.remove();
  }, []);

  return (
    <>
      <div ref={mapContainerRef} id="map-container" style={{ height: '400px' }} />
    </>
  );
};

export default MapComponent;
