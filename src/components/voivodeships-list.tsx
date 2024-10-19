"use client"
import { useRouter } from "next/navigation"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Voivodeships } from "@/utils/voivodeships"

export default function VoivodeshipsList() {
  const router = useRouter();

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white/90 backdrop-blur-sm shadow-lg">
      <CardHeader className="py-4">
        <CardTitle className="text-xl font-bold text-center">Wybierz województwo</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[70vh] w-full pr-4">
          {Voivodeships.map((voivodeship) => {
            const isOpolskie = voivodeship.name === "Opolskie"
            return (
              <div
                key={voivodeship.id}
                className={`flex items-start space-x-3 p-2 rounded-lg mb-2 transition-all duration-200 ${isOpolskie
                  ? "hover:bg-blue-50 hover:border hover:border-blue-500 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
                  }`}
                onClick={() => router.push(`map/${voivodeship.city}`)}
              >
                <img
                  src={voivodeship.imageUrl}
                  alt={voivodeship.name}
                  className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                />
                <div>
                  <h3 className="text-sm font-semibold mb-1">{voivodeship.name}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2">{voivodeship.description}</p>
                </div>
              </div>
            )
          })}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}