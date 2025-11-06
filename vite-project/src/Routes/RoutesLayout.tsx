import { Route } from "react-router";
import { createBrowserRouter,createRoutesFromElements } from "react-router";
import Home from "../pages/Home";

const routes = createRoutesFromElements(
    <>
        <Route index element={<Home></Home>}/>
    </>
)

const router = createBrowserRouter(routes)
export default router