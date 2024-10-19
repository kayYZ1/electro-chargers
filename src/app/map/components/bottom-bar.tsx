import { ParkingMeter } from "lucide-react"

export default function BottomBar({ numberOfChargers }: { numberOfChargers: number }) {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md z-10">
      <div className="bg-slate-50 rounded-full shadow-lg p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <ParkingMeter className="h-5 w-5" />
          <span className="font-medium">Opolskie</span>
        </div>
        <div className="text-sm">
          <span className="font-bold">{numberOfChargers}</span> punktów ładowania
        </div>
      </div>
    </div>
  )
}