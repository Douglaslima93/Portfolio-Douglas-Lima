import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../paginas/Home";
import Contato from "../paginas/Contato";
import Projetos from "../paginas/Projetos";

const Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>

            <Route exact path="/" element={ <Home/> }/>
            <Route exact path="/projetos" element={ <Projetos/> }/>
            <Route exact path="/contato" element={ <Contato/> }/>

        </Routes>
        </BrowserRouter>
    )
}

export default Rotas;