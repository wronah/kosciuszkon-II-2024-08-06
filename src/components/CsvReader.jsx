import React, { useState } from "react";
import { supabase } from "../createClient";
import { Input } from "../components/shadcn/ui/input";

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
      <Input type="file" accept=".csv" onChange={handleFileChange} />
    </div>
  );
};

export default CsvReader;
