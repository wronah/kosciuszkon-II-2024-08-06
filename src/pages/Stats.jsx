import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <h2>Zuzycie energii</h2>
          <h1 className="usage">1000kWh</h1>
          <h2>Rekuperacja</h2>
          <h1 className="usage">1000kWh</h1>
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
