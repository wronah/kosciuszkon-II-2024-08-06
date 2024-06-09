import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapComponent from "../components/MapComponent";
import "@/App.css";
import Usage from "../components/Usage";
import { Award } from "lucide-react"
import React, { Component } from "react";
import chart from "@/assets/chart.png";

export default class Stats extends Component {
  render() {
    return (
      <div className="Stats">
        <section className="heading">
          <h1 className="big-text">EAN-G2</h1>
          <table className="table ml-2 mr-2">
            <th>Mierz się z najlepszymi</th>
            <tr>
              <td className="flex flex-row justify-between items-center">
                Will Smith
                <Award size={16} color="gold" />
              </td>
            </tr>
            <tr>
            <td className="flex flex-row justify-between items-center">
              Jan Kowalski
              <div>24.</div>
            </td>
            </tr>
          </table>
        </section>
        <section className="charts px-12 py-4 w-full">
          <div className="flex md:flex-row flex-col gap-5 justify-between items-center w-full ">
            <MapComponent />
            <img src={chart} alt="chart" style={{ minWidth: "200px" }} />
          </div>
          <div className="flex md:flex-row flex-col md:gap-10 gap-5 mt-5 justify-center items-center w-full">
              <Usage />
          </div>
        </section>
        <section className="ranking">
          <table className="table ml-2 mr-2 mb-2">
            <th>Najlepsze przejazdy</th>
            <tr>
              <td className="flex flex-row justify-between items-center">
                Will Smith
                <Award size={16} color="#F9Ad0e" />
              </td>
            </tr>
            <tr>
              <td className="flex flex-row justify-between items-center">
                Elon Musk
                <Award size={16} color="#d1d1d1" />
              </td>
            </tr>
            <tr>
              <td className="flex flex-row justify-between items-center">
                Andrew Tate
                <Award size={16} color="#cd7e32" />
              </td>
            </tr>
            <tr>
              <td className="flex flex-row justify-between items-center">
                Cristiano Ronaldo
                <div>4.</div>
              </td>
            </tr>
            <tr>
              <td className="flex flex-row justify-between items-center">
                Usain Bolt
                <div>5.</div>
              </td>
            </tr>
          </table>
        </section>
      </div>
    );
  }
}
