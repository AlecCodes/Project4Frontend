import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App"
import Index from "./Pages/Index"
import Show from "./Pages/Show"
import Create from "./Pages/Create"

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/' element = {<App/>}>
            <Route path = "" element = {<Index/>}/>
            <Route path = "create" element = {<Create/>}/>            
        </Route>
    </>
))

export default router
