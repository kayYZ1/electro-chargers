"use client"

import { MapContainer, TileLayer } from 'react-leaflet'
import { Fragment } from "react";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";

import 'leaflet/dist/leaflet.css';

import BottomBar from '../components/bottom-bar';
import CustomMarker from '../components/custom-marker';
import { Charger } from '../types';

export default function Page({ params }: { params: { city: string } }) {
  const { data, isSuccess, isError, error } = useQuery({
    queryKey: ['chargers', params.city],
    queryFn: async () => {
      const response = await axios.get(`/api/chargers/Opole`) //Change to {params.city}
      return response.data
    }
  }) // Add toast/snackbar to display errors

  return (
    <Fragment>
      <MapContainer
        center={[50.672, 17.925]}
        zoom={16}
        minZoom={12}
        className="h-screen z-0"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data && data.map((charger: Charger) => (
          <CustomMarker {...charger} key={charger.id} />
        ))}
      </MapContainer>
      {isSuccess && <BottomBar numberOfChargers={data.length} />}
    </Fragment>
  )
}