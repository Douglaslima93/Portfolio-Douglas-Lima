import React from "react";
import "./style.css"
import EstruturaPagina from "../../EstruturaPagina";
import { Link } from "react-router-dom";

export default function Sobre() {
    return (
        <EstruturaPagina>

        <section className="sobre-mim">

        <p><strong>Desenvolvedor Front-End</strong>, formado em Manutenção Industrial (Fatec TA) 
        e cursando 4° semestre de Analise e Desenvolvimento de Sistemas, conclusão Dezembro 2023.
        </p>

        <p>Minha última ocupação profissional foi como coordenador de projetos mobiliário corporativo, 
        hoje trabalho muito bem em equipe e também sob grande demanda de projetos com prazo curto de entrega. 
        </p>

        <p>Trabalho com as tecnologias: React js, TypeScript, JavaScript, CSS e HTML.</p>

        <p>Hoje tenho feito diversos projetos, landing pages, web sites, cadastro de usuário, ficha de inscrição, calculadora. 
        Cada um desses projetos pude aplicar o conhecimento que venho adquirindo no dia a dia, HTML semântico, responsividade, 
        interação usuário com a interface da página, elementos dinâmicos com atualização em tempo real, consumo de API.
        </p>

        <Link className="botao-curriculo" to="https://drive.google.com/file/d/1GAifuBxpuoy8uR8RwS_4XeA5HciFgkNV/view?usp=sharing" target="_blank">Curriculo</Link>

       </section>
        
        </EstruturaPagina>
    )
}