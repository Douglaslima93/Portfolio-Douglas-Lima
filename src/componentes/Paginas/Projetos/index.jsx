import React from "react";
import './style.css'
import EstruturaPagina from "../../EstruturaPagina";
import { Link } from "react-router-dom";
import deploy from "../../../assets/shuttle.png";
import imagemProjeto1 from "../../../assets/imagem1.jpg";



export default function Projetos() {
    return(
        <EstruturaPagina>
        <section className="container-card">
        
            <div className="card">
                <img src={imagemProjeto1} rel="imagem-do-projeto"/>

                <div className="container-icon">

                <Link className="icon" to="https://github.com/Douglaslima93/pousada-secreta" target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" 
                    rel="icone-git-hub"/>
                </Link>
                
                <Link className="icon" to="https://pousadasecreta-angradosreis.netlify.app/" target="_blank">
                <img src={deploy} rel="Deploy"/></Link>
            </div>

            </div>
        </section>
        </EstruturaPagina>
    )
}