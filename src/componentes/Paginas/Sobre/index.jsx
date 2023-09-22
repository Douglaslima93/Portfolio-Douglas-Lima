import React from "react";
import "./style.css"
import EstruturaPagina from "../../EstruturaPagina";
import { Link } from "react-router-dom";

export default function Sobre() {
    return (
        <EstruturaPagina>

        <section className="sobre-mim">

        <p><strong>Desenvolvedor Front-End</strong>, cursando 4° semestre de Analise e Desenvolvimento 
        de Sistemas, conclusão Dezembro 2023 e formado em Manutenção Industrial (Fatec TA)
        </p>

        <p>Minha última ocupação profissional foi como coordenador de projetos mobiliário corporativo. 
        Hoje trabalho muito bem em equipe e também sob grande demanda de projetos com prazo curto de entrega. 
        </p>

        <p>Trabalho com as tecnologias: React js, TypeScript, JavaScript, CSS e HTML.</p>
        <p>E também estou fazendo curso de JAVA, assim aprimorar mais conhecimentos com Back-end.</p>

        <p>Hoje tenho feito diversos projetos, landing pages, web sites, cadastro de usuário, ficha de inscrição, calculadora. 
        Cada um desses projetos pude aplicar o conhecimento que venho adquirindo no dia a dia, HTML semântico, responsividade, 
        interação usuário com a interface da página, elementos dinâmicos com atualização em tempo real, consumo de API.
        </p>

        <Link className="botao-curriculo" to="https://drive.google.com/file/d/1H46NnF1W6CSBy0wZ9yE1tcyJH6aVWzvN/view?usp=sharing" target="_blank">Curriculo</Link>

       </section>
        
        </EstruturaPagina>
    )
}