import { X, MapPin, Home, Cable, Mail } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Charger } from "../types"

interface MarkerPopup {
  setPopup: (val: boolean) => void
  charger: Charger
}

export default function MarkerPopup({ setPopup, charger }: MarkerPopup) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto overflow-hidden">
        <div className="relative">
          <img
            src="https://picsum.photos/600/300"
            alt="Charger location"
            className="w-full h-auto aspect-video object-cover"
          />
          <button
            onClick={() => setPopup(false)}
            className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors"
            aria-label="Close popup"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex items-center mb-4">
            <Cable className="h-6 w-6 mr-2" />
            <h2 className="text-xl sm:text-2xl font-bold">{charger.name}</h2>
          </div>
          <div className="space-y-3 mb-6">
            <p className="flex items-start">
              <Home className="h-5 w-5 mr-2 mt-1" />
              <span>
                <span className="font-semibold">Adres:</span><br />
                {charger.street} {charger.house_number}, {charger.postal_code} {charger.city}
              </span>
            </p>
            <p className="flex items-center">
              <MapPin className="h-5 w- mr-2" />
              <span>
                <span className="font-semibold">Koordynaty: </span>
                {charger.latitude.toFixed(4)}, {charger.longitude.toFixed(4)}
              </span>
            </p>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Jeśli znajdują się jakieś nieścisłości prosimy o ich zgłoszenie tutaj.</AccordionTrigger>
              <AccordionContent>
                <form className="py-2 px-6">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 text-sm sm:text-base border 
                      border-gray-300 rounded-md focus:outline-none 
                      focus:ring-2 focus:ring-black"
                      placeholder="Imię"
                    />
                  </div>
                  <div className="py-2">
                    <textarea
                      id="problem"
                      name="problem"
                      rows={4}
                      className="w-full px-3 py-2 text-sm sm:text-base border 
                      border-gray-300 rounded-md focus:outline-none 
                      focus:ring-2 focus:ring-black"
                      placeholder="Treść"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2 px-4 rounded-md text-sm font-semibold"
                  >
                    Prześlij
                  </button>
                </form>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}