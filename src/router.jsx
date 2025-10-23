import { Routes, Route,BrowserRouter } from "react-router";
import App from "./pages/home/app.jsx";
import Sobre from "./pages/sobre/App.jsx";

export default function Navegacao(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<App/>}/>
            <Route path="/sobre" element = {<Sobre/>}/>
        </Routes>
        </BrowserRouter>
    )
}