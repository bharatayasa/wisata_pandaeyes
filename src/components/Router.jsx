import React from "react";
import { Route, Routes } from "react-router-dom";
import Pages from "./pages/Pages";
import Destinasi1 from "./destination/Destinasi1";
import Destinasi2 from "./destination/Destinasi2";
import Destinasi3 from "./destination/Destinasi3";
import Destinasi4 from "./destination/Destinasi4";
import Destinasi5 from "./destination/Destinasi5";
import Destinasi6 from "./destination/Destinasi6";
import Destinasi7 from "./destination/Destinasi7";
import Destinasi8 from "./destination/Destinasi8";


function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Pages />} />
                <Route path='/destinasi1' element={<Destinasi1/>} />
                <Route path='/destinasi2' element={<Destinasi2/>} />
                <Route path='/destinasi3' element={<Destinasi3/>} />
                <Route path='/destinasi4' element={<Destinasi4/>} />
                <Route path='/destinasi5' element={<Destinasi5/>} />
                <Route path='/destinasi6' element={<Destinasi6/>} />
                <Route path='/destinasi7' element={<Destinasi7/>} />
                <Route path='/destinasi8' element={<Destinasi8/>} />
            </Routes>
        </div>
    )
}

export default Router
