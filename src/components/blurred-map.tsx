"use client"

import { MapContainer, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css';

export default function BluredMap() {
  return (
    <MapContainer
      center={[50.672, 17.925]}
      zoom={8}
      className="blur-sm h-screen"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}