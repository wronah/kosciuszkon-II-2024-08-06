import React, { useState } from "react";
import { supabase } from "../createClient";

const CsvReader = () => {
  const [data, setData] = useState([]);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const parsedData = parseCSV(text);
        setData(parsedData);
        console.log("Parsed data:", parsedData);
        importDataToSupabase(parsedData);
      };
      reader.readAsText(file);
    }
  };

  const parseCSV = (text) => {
    const rows = text.trim().split("\r\n");
    const headers = rows[0].split(";").map((header) => header.replaceAll('"', ""));
    const data = rows.slice(1).map((row) => {
      const values = row.split(";");
      const fixedVal = values.map((value) => {
        const newValue = value.replaceAll('"', "");
        if (newValue === "") return null;
        return newValue;
      });
      const rowData = {};
      headers.forEach((header, index) => {
        rowData[header] = fixedVal[index];
      });
      return rowData;
    });
    return data;
  };

  const importDataToSupabase = async (data) => {
    try {
      const { data: response, error } = await supabase.from("readings").insert(data);
      if (error) {
        console.error("Error importing data to Supabase:", error.message);
      } else {
        console.log("Data imported successfully:", response);
      }
    } catch (error) {
      console.error("Error importing data to Supabase:", error.message);
    }
  };
  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <h3>File: {fileName}</h3>
      {data.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((val, i) => (
                  <td key={i}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CsvReader;
