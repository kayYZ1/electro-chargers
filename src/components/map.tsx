"use client"
import { MapContainer, TileLayer } from 'react-leaflet'
import { useEffect } from "react";
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const fetchChargers = async (city: any) => {
    try {
      const response = await fetch(`/api/chargers/${city}`);
      if (!response.ok) {
        throw new Error("Failed to fetch chargers");
      }
      const data = await response.json();

      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchChargers("Opole");
  }, []);

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