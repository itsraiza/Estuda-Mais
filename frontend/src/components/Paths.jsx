import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PlanoDeEstudo from "../pages/PlanoDeEstudo";
import SalaDeEstudo from "../pages/SalaDeEstudo";

const Paths = () => {
    return ( 
        <>
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/plano" element={<PlanoDeEstudo/>}/>
                <Route path="/estudo" element={<SalaDeEstudo/>}/>
            </Routes>
         </BrowserRouter>
        </>
     );
}
 
export default Paths;
