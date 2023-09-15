import React from "react";
import './style.css';
import EstruturaPagina from "../../EstruturaPagina";
import { Link } from "react-router-dom";
import whatsapp from "../../../assets/whatsapp.jpg";
import outlook from "../../../assets/outlook.jpg";
import gmail from "../../../assets/gmail.jpg";

export default function Contato() {
    return(
        <EstruturaPagina>
        <section className="conteiner-contato">

            <div className="texto-contato">
                <h2>Vamos Trabalhar Juntos!</h2>
            </div>

            <div className="icones-contato">

                <Link to="https://www.linkedin.com/in/douglas-lima-95073aa2/" target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                rel="linkedin"/></Link>
                
                <Link to="https://github.com/Douglaslima93" target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" 
                rel="icone-git-hub"/></Link>

                <Link to="https://api.whatsapp.com/send?phone=+5515996013651" target="_blank">
                <img src={whatsapp}
                rel="whatsapp"/></Link>

                <Link to="mailto:douglas.a.l@hotmail.com" target="_blank">
                <img src={outlook}
                rel="outlook"/></Link>

                <Link to="mailto:douglas07a@gmail.com" target="_blank">
                <img src={gmail}
                rel="gmail"/></Link>

            </div>

            <div className="texto">
                <p>Sinta-se a vontade para entrar em contato</p>
            </div>

        </section>
        </EstruturaPagina>
    )
}