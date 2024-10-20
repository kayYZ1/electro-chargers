"use client"

import { ParkingMeter } from "lucide-react"
import { useRouter } from "next/navigation"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function BottomBar({ numberOfChargers, city }: { numberOfChargers: number, city: string }) {
  const router = useRouter();

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md z-10">
      <div className="bg-slate-50 rounded-full shadow-lg p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <ParkingMeter className="h-5 w-5" onClick={() => router.push(`/`)} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Zmień obszar</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <span className="font-medium">{city}</span>
        </div>
        <div className="text-sm">
          <span className="font-bold">{numberOfChargers}</span> punktów ładowania
        </div>
      </div>
    </div>
  )
}