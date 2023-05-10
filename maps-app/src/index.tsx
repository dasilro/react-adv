import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";
//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFzaWxyb2dtYWlsY29tIiwiYSI6ImNsaDdiZjVhcTBkNmYzZHBnb2t2NnFvamUifQ.1QcAi4Q1Uf4kN9T73WnnOA";

if (!navigator.geolocation) {
  alert("Tu navegador no proporciona información de geolocalización.");
  throw new Error(
    "Tu navegador no proporciona información de geolocalización."
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
