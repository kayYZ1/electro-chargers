"use client"

import { MapContainer, TileLayer } from 'react-leaflet'
import { useEffect, useState } from "react";

import 'leaflet/dist/leaflet.css';

import BottomBar from '../components/bottom-bar';

export default function Page({ params }: { params: { city: string } }) {
  const [chargers, setChargers] = useState([]);

  const fetchChargers = async (city: string) => {
    try {
      const response = await fetch(`/api/chargers/${city}`);
      if (!response.ok) {
        throw new Error("Failed to fetch chargers");
      }
      const data = await response.json();

      setChargers(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchChargers("Opole");
  }, []);

  return (
    <>
      <MapContainer
        center={[50.672, 17.925]}
        zoom={16}
        className="h-screen z-1"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      <BottomBar /> {/* Make it stop vanishing */}
    </>
  )
}