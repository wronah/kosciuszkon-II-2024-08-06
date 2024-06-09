import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { Component } from "react";

export default class Stats extends Component {
  render() {
    return (
      <div className="Stats">
        <h1 className="header">Statystyki dla pojazdu: EAN-G2</h1>
        <table className="table">
          <th>Mierz się z najlepszymi</th>
          <tr>
            <td>Will Smith</td>
          </tr>
          <tr>
            <td>Hubert Wrona</td>
          </tr>
        </table>
      </div>
    );
  }
}
