import React from "react";
import { Route, Routes } from "react-router-dom";
import Pages from "./pages/Pages";
import Destinasi1 from "./destination/Destinasi1";
import Destinasi2 from "./destination/Destinasi2";

function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Pages />} />
                <Route path='/destinasi1' element={<Destinasi1/>} />
                <Route path='/destinasi2' element={<Destinasi2/>} />
            </Routes>
        </div>
    )
}

export default Router
