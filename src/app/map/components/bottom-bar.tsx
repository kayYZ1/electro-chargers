import { Info } from "lucide-react"

export default function BottomBar() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md mx-auto">
      <div className="bg-primary text-primary-foreground rounded-full shadow-lg p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Info className="h-5 w-5" />
          <span className="font-medium">Important Information</span>
        </div>
        <div className="text-sm">
          <span className="font-bold">42</span> new updates
        </div>
      </div>
    </div>
  )
}