import React from "react";
import './style.css'
import EstruturaPagina from "../../EstruturaPagina";
import { Link } from "react-router-dom";
import deploy from "../../../assets/shuttle.png";
import imagemProjeto1 from "../../../assets/imagem1.jpg";
import imagemProjeto2 from "../../../assets/imagem2.jpg";
import imagemProjeto3 from "../../../assets/imagem3.jpg";
import imagemProjeto4 from "../../../assets/imagem4.jpg";
import imagemProjeto5 from "../../../assets/imagem5.jpg";
import imagemProjeto6 from "../../../assets/imagem6.jpg";
import imagemProjeto7 from '../../../assets/imagem7.png';




export default function Projetos() {
    return(
        <EstruturaPagina>
        <section>
            <div className="texto-projetos">

            <h2>Abaixo meus projetos mais recentes. Confira também meus demais projetos: </h2>
            <Link className="icon" to="https://github.com/Douglaslima93" target="_blank">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"/></Link>
            </div>
            

            <div className="container-card">
        
            <div className="card">
                <img src={imagemProjeto7} rel="imagem-do-projeto"/>

                <div className="container-icon">

                <Link className="icon" to="https://github.com/Douglaslima93/web-movie" target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" 
                    rel="icone-git-hub"/>
                </Link>
                
                <Link className="icon" to="https://top-movies-10.netlify.app/" target="_blank">
                <img src={deploy} rel="Deploy"/></Link>
            </div>
            </div>

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

            <div className="card">
                <img src={imagemProjeto2} rel="imagem-do-projeto"/>

                <div className="container-icon">

                <Link className="icon" to="https://github.com/Douglaslima93/agencia-branding" target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" 
                    rel="icone-git-hub"/>
                </Link>
                
                <Link className="icon" to="https://agencia-branding.netlify.app/" target="_blank">
                <img src={deploy} rel="Deploy"/></Link>
            </div>
            </div>

            <div className="card">
                <img src={imagemProjeto3} rel="imagem-do-projeto"/>

                <div className="container-icon">

                <Link className="icon" to="https://github.com/Douglaslima93/Consultorio-Dentes_Saudaveis" target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" 
                    rel="icone-git-hub"/>
                </Link>
                
                <Link className="icon" to="https://consultorio-dentes-saudaveis.netlify.app/" target="_blank">
                <img src={deploy} rel="Deploy"/></Link>
            </div>
            </div>

            <div className="card">
                <img src={imagemProjeto4} rel="imagem-do-projeto"/>

                <div className="container-icon">

                <Link className="icon" to="https://github.com/Douglaslima93/signos" target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" 
                    rel="icone-git-hub"/>
                </Link>
                
                <Link className="icon" to="https://card-de-signos.netlify.app/" target="_blank">
                <img src={deploy} rel="Deploy"/></Link>
            </div>
            </div>

            <div className="card">
                <img src={imagemProjeto5} rel="imagem-do-projeto"/>

                <div className="container-icon">

                <Link className="icon" to="https://github.com/Douglaslima93/Barbershop" target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" 
                    rel="icone-git-hub"/>
                </Link>
                
                <Link className="icon" to="https://barber-shop-23.netlify.app/" target="_blank">
                <img src={deploy} rel="Deploy"/></Link>
            </div>
            </div>

            <div className="card">
                <img src={imagemProjeto6} rel="imagem-do-projeto"/>

                <div className="container-icon">

                <Link className="icon" to="https://github.com/Douglaslima93/Gelateria" target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" 
                    rel="icone-git-hub"/>
                </Link>
                
                <Link className="icon" to="https://gelateria-tropical.netlify.app/" target="_blank">
                <img src={deploy} rel="Deploy"/></Link>
            </div>
            </div>

            </div>

        </section>
        </EstruturaPagina>
    )
}