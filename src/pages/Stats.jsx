import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapComponent from "../components/MapComponent";
import Usage from "../components/Usage";
import React, { Component } from "react";

export default class Stats extends Component {
  render() {
    return (
      <div className="Stats">
        <section className="heading">
          <h1 className="header">Statystyki dla pojazdu: EAN-G2</h1>
          <table className="table">
            <th>Mierz się z najlepszymi</th>
            <tr>
              <td>
                <img src="./assets/avatar.png" alt="" />
                Will Smith
              </td>
            </tr>
            <tr>
              <td>Hubert Wrona</td>
            </tr>
          </table>
        </section>
        <section className="charts">
          <Usage />
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
