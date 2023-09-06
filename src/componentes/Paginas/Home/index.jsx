import React from "react";
import './style.css';
import fotoPerfil from '../../../assets/foto-perfil.jpg';
import EstruturaPagina from "../../EstruturaPagina";


const Home = () => {
    return(
        <EstruturaPagina>

            <main>

            <section className="container-sobre">
            <img src={fotoPerfil} rel="Foto-perfil"/>

            <h2>Olá sou Douglas Lima</h2>

            </section>
            </main>

        </EstruturaPagina>
    )
}

export default Home;

