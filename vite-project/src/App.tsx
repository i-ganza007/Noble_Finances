import { RouterProvider } from "react-router"
import routes from '../src/Routes/RoutesLayout'
function App() {

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
