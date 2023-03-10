import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App"
import Index from "./Pages/Index"
import Edit from "./Pages/Edit"
import Show from "./Pages/Show"
import Create from "./Pages/Create"
import CatShow from "./Pages/CatShow"
import { createAction, deleteAction, updateAction } from "./actions";
import { showLoader, indexLoader, catLoader } from "./loaders";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path='/' element = {<App/>}>
            <Route path = "" element = {<Index/>} loader = {indexLoader}/>
            <Route path = "catshow/:cat" element = {<CatShow/>} loader={catLoader}/>
            <Route path = "create" element = {<Create/>}/>
            <Route path = "createAction" action = {createAction}/> 
            <Route path = "edit/:id" element = {<Edit/>} loader={showLoader} action = {updateAction}/>    
            <Route path = "delete/:id" action = {deleteAction}/>
            <Route path = "show/:id" element = {<Show/>} loader ={showLoader} />
        </Route>
    </>
))

export default router
