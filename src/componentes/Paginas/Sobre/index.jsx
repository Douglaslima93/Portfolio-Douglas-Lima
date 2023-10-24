import React from "react";
import "./style.css"
import EstruturaPagina from "../../EstruturaPagina";
import { Link } from "react-router-dom";

export default function Sobre() {
    return (
        <EstruturaPagina>

        <section className="sobre-mim">

        <p><strong>Desenvolvedor de Software</strong>, cursando 4° semestre de Analise e Desenvolvimento 
        de Sistemas, conclusão Dezembro 2023 e formado em Manutenção Industrial (Fatec TA)
        </p>

        <p>Venho de uma transição de carreira, pude atuar na área industrial por 10 anos, 
            onde cresci profissionalmente, minha ultima ocupação profissional nesta empresa 
            na função de coordenador de projetos, na qual estava responsável pela equipe de engenharia,
             desenvolvimento de novos produtos, sistema ERP desenvolvendo logicas para 
             deixar o produto mais inteligente e de fácil acesso para pessoas que não tem 
             experiência nesta área, trabalho em equipe. 
        </p>

        <p>Hoje trabalho com desenvolvimento Front-end, utilizando as tecnologias: React js, TypeScript, JavaScript, CSS e HTML.</p>
        <p>E também estou aprendendo a utilizar a tecnologia Java, tenho realizado alguns projetos 
            utilizando as IDEs NetBeans e Eclipse.</p>

        <p>Já realizei diversos projetos, landing pages, web sites, cadastro de usuário, ficha de inscrição, calculadora. 
        Cada um desses projetos pude aplicar o conhecimento que venho adquirindo no dia a dia, HTML semântico, responsividade, 
        interação usuário com a interface da página, elementos dinâmicos com atualização em tempo real, consumo de API.
        </p>

        <Link className="botao-curriculo" to="https://drive.google.com/file/d/1H46NnF1W6CSBy0wZ9yE1tcyJH6aVWzvN/view?usp=sharing" target="_blank">Curriculo</Link>

       </section>
        
        </EstruturaPagina>
    )
}