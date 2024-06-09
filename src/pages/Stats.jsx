import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapComponent from "../components/MapComponent";
import "@/App.css";
import Usage from "../components/Usage";
import { Award } from "lucide-react"
import React, { Component } from "react";

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
          <div className="flex md:flex-row flex-col justify-between items-center w-full ">
            <MapComponent />
            <div>placeholder for chart</div>
          </div>
          <div className="flex flex-row gap-10 justify-center items-center w-full">
            <div>
              <h2>Zużycie energii</h2>
              <h1 className="usage">1000kWh</h1>
            </div>
            <div>
              <h2>Rekuperacja</h2>
              <h1 className="usage">1000kWh</h1>
            </div>
          </div>
        </section>
        <section className="ranking">
          <table className="table">
            <th>Najlepsze przejazdy</th>
            <tr>
              <td>
                <img src="./assets/avatar.png" alt="" />
                Will Smith
              </td>
            </tr>
            <tr>
              <td>Hubert Wrona</td>
            </tr>
            <tr>
              <td>
                <img src="./assets/avatar.png" alt="" />
                Will Smith
              </td>
            </tr>
            <tr>
              <td>
                <img src="./assets/avatar.png" alt="" />
                Will Smith
              </td>
            </tr>
            <tr>
              <td>
                <img src="./assets/avatar.png" alt="" />
                Will Smith
              </td>
            </tr>
          </table>
        </section>
      </div>
    );
  }
}
