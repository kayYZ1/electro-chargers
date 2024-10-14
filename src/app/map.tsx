"use client"
import { MapContainer, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css';
import getChargers from './api/chargers';

const MapComponent = () => {
  const chargers = getChargers("Opole");

  console.log(chargers)

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}

export default MapComponent