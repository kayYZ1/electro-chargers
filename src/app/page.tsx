import dynamic from "next/dynamic"
import { Fragment } from "react"

const MapComponent = dynamic(() => import("./map"), {
  ssr: false
})

const App = () => {
  return (
    <Fragment>
      <MapComponent />
    </Fragment>
  )
}

export default App