import React from "react";
import './style.css';
import fotoPerfil from '../../../assets/foto-perfil.jpg';
import EstruturaPagina from "../../EstruturaPagina";
import { Link } from "react-router-dom";


const Home = () => {
    return(
        <EstruturaPagina>

            <main>

            <section className="container-sobre">
            <img src={fotoPerfil} rel="Foto-perfil"/>

            <div className="sobre">

            <h2>Olá, sou Douglas Lima</h2>
            <span>Desenvolvedor Front end</span>
            <Link to='/projetos' className="link-projetos">Meus projetos</Link>

            </div>
            </section>
            
            <section className="tecnologias">

            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="Douglas-Js"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="Douglas-CSS"/>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="Douglas-HTML"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Douglas-git"/>
    
            </section>
            </main>

        </EstruturaPagina>
    )
}

export default Home;

