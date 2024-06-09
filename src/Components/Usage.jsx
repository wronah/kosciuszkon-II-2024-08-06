// MyComponent.jsx
import React, { useRef, useEffect, useState, setError } from "react";
import { supabase } from "../createClient";

const Usage = () => {
  const [dataN, setDataN] = useState([]);
  const [totalEnergiaWejsciowa, setTotalEnergiaWejsciowa] = useState(0);
  const [totalEnergiaWyjsciowa, setTotalEnergiaWyjsciowa] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data, error } = await supabase.from("readings").select("energia_wejsciowa, energia_wyjsciowa");

        if (error) {
          throw error;
        }

        // Użyj map do przekształcenia danych na tablicę par liczb [energia_wejsciowa, energia_wyjsciowa]
        setDataN(data.map((item) => [parseFloat(item.energia_wejsciowa), parseFloat(item.energia_wyjsciowa)]));

        // Oblicz sumę tylko dla wartości parsowalnych jako liczby
        const sumEnergiaWejsciowa = data.reduce((total, item) => {
          // Sprawdź, czy energia_wejsciowa jest parsowalna jako liczba
          if (!isNaN(parseFloat(item.energia_wejsciowa))) {
            // Dodaj tylko parsowalne jako liczby wartości
            return total + parseFloat(item.energia_wejsciowa);
          }
          // W przeciwnym razie, zwróć aktualną wartość sumy
          return total;
        }, 0);

        const sumaEnergiaWyjsciowa = data.reduce((total, item) => {
          if (!isNaN(parseFloat(item.energia_wyjsciowa))) {
            return total + parseFloat(item.energia_wyjsciowa);
          }
          return total;
        }, 0);

        // Ustaw sumę na zmienną stanu
        setTotalEnergiaWejsciowa(sumEnergiaWejsciowa);
        setTotalEnergiaWyjsciowa(sumaEnergiaWyjsciowa);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Zuzycie energii</h2>
      <h1 className="usage">{(totalEnergiaWejsciowa - totalEnergiaWyjsciowa).toFixed(2)}</h1>
      <h2>Rekuperacja</h2>
      <h1 className="usage">
        {((totalEnergiaWejsciowa - totalEnergiaWyjsciowa) / totalEnergiaWejsciowa).toFixed(2) * 100}%
      </h1>
    </div>
  );
};

export default Usage;
