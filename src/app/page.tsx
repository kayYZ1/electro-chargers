import dynamic from "next/dynamic"
import { Fragment } from "react"
import { VoivodeshipsList } from "../components/voivodeshipList"
const MapComponent = dynamic(() => import("../components/map"), {
  ssr: false
})

const App = () => {
  return (
    <Fragment>
      <VoivodeshipsList />
      <MapComponent />
    </Fragment>
  )
}

export default App