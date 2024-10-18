import dynamic from "next/dynamic"

import VoivodeshipsList from "@/components/voivodeships-list"

const BlurredMap = dynamic(() => import("@/components/blurred-map"), {
  ssr: false
})

export default function App() {
  return (
    <div className="relative min-h-screen">
      <BlurredMap />
      <div className="absolute inset-0 flex items-center justify-center">
        <VoivodeshipsList />
      </div>
    </div>
  )
}
