import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Paginas/Home";
import Contato from "../Paginas/Contato";
import Projetos from "../Paginas/Projetos";
import Sobre from "../Paginas/Sobre";

const Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>

            <Route exact path="/" element={ <Home/> }/>
            <Route exact path="/sobre" element={ <Sobre/> }/>
            <Route exact path="/projetos" element={ <Projetos/> }/>
            <Route exact path="/contato" element={ <Contato/> }/>

        </Routes>
        </BrowserRouter>
    )
}

export default Rotas;