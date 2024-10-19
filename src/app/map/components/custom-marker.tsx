import { divIcon } from 'leaflet'
import { Marker } from 'react-leaflet'

import { Charger } from '../types'

export default function CustomMarker(charger: Charger) {
  const markerIcon = divIcon({
    className: 'custom-icon',
    html: `
      <div class="relative">
        <div 
          class="w-10 h-10 bg-white border-4 border-black rounded-full 
          bg-[url('/images/charging-station.svg')] bg-contain"
        ></div>
      </div>
    `, //Think about better image to use
    iconSize: [32, 48],
    iconAnchor: [16, 48],
  });

  return (
    <Marker icon={markerIcon} position={[charger.latitude, charger.longitude]} />
  )
}
