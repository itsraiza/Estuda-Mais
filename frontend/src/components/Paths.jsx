import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Agente from "../pages/Agente";
import HomePage from "../pages/HomePage";
import PlanoDeEstudo from "../pages/PlanoDeEstudo";

const Paths = () => {
    return ( 
        <>
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/plano" element={<PlanoDeEstudo/>}/>
                <Route path="/estudo" element={<Agente/>}/>
            </Routes>
         </BrowserRouter>
        </>
     );
}
 
export default Paths;
