import { divIcon } from 'leaflet'

const MarkerIcon = divIcon({
  className: 'custom-icon',
  html: `
      <div class="relative">
        <div 
          class="w-10 h-10 bg-white border-4 border-black rounded-full 
          bg-[url('/images/charging-station.svg')] bg-contain"
        >
        </div>
        <div class="absolute -bottom-3 left-1/2 transform -translate-x-1/3
              w-0 h-0 
              border-l-[12px] border-l-transparent
              border-r-[12px] border-r-transparent
              border-t-[16px] border-t-black"
        >
      </div>
    `, //Think about better image to use
  iconSize: [32, 48],
  iconAnchor: [16, 48],
})

export default MarkerIcon
