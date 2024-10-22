"use client"

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-cluster";
import { Fragment, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

import 'leaflet/dist/leaflet.css';

import BottomBar from '../components/bottom-bar';
import MarkerIcon from '../components/marker-icon';
import MarkerPopup from '../components/marker-popup';
import { Charger } from '../types';
import { CITIES_COORDINATES } from '../cities-coordinates';

export default function Page({ params }: { params: { city: string } }) {
  const [popup, setPopup] = useState(false);
  const [activeCharger, setActiveCharger] = useState<Charger>();

  const { data, isSuccess } = useQuery({
    queryKey: ['chargers', params.city],
    queryFn: async () => {
      const response = await axios.get(`/api/chargers/${params.city}`)
      return response.data
    }
  }) // Add toast/snackbar to display errors

  return (
    <Fragment>
      <MapContainer
        center={CITIES_COORDINATES[params.city]}
        zoom={16}
        minZoom={11}
        className="h-screen z-0"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          chunkedLoading
          showCoverageOnHover={false}
        >
          {data && data.map((charger: Charger) => (
            <Marker
              key={charger.id}
              icon={MarkerIcon}
              position={[charger.latitude, charger.longitude]}
              eventHandlers={{
                click: () => {
                  setActiveCharger(charger)
                  setPopup(true)
                }
              }}
            />
          ))}
        </MarkerClusterGroup>
      </MapContainer>
      {popup && <MarkerPopup setPopup={setPopup} charger={activeCharger!} />}
      {isSuccess && <BottomBar numberOfChargers={data.length} city={params.city} />}
    </Fragment>
  )
}