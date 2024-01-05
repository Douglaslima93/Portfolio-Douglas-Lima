import React from "react";
import "./style.css"
import EstruturaPagina from "../../EstruturaPagina";
import { Link } from "react-router-dom";

export default function Sobre() {
    return (
        <EstruturaPagina>

        <section className="sobre-mim">

        <p><strong>Desenvolvedor de Software</strong>, formado em Analise e Desenvolvimento de Sistemas (Unip - Universidade Paulista) e formado em Manutenção Industrial (Fatec TA)
        </p>

        <p>Venho de uma transição de carreira, pude atuar na área industrial por 10 anos, 
            onde cresci profissionalmente, minha ultima ocupação profissional nesta empresa 
            na função de coordenador de projetos, na qual estava responsável pela equipe de engenharia,
             desenvolvimento de novos produtos, sistema ERP desenvolvendo logicas para 
             deixar o produto mais inteligente e de fácil acesso para pessoas que não tem 
             experiência nesta área, hoje trabalho muito bem em equipe e também sob grande demanda 
             de projetos com curto prazo de entrega. 
        </p>

        <p>Hoje trabalho com desenvolvimento Front-end, utilizando as tecnologias: React js, TypeScript, JavaScript, Node js, CSS e HTML.</p>
        <p>E também estou aprendendo a utilizar a tecnologia Java, tenho realizado alguns projetos 
            utilizando as IDEs NetBeans e Eclipse.</p>

        <p>Já realizei diversos projetos, landing pages, web sites, cadastro de usuário, ficha de inscrição, calculadora. 
        Cada um desses projetos pude aplicar o conhecimento que venho adquirindo no dia a dia, HTML semântico, responsividade, 
        interação usuário com a interface da página, elementos dinâmicos com atualização em tempo real, consumo de API.
        </p>

        <Link className="botao-curriculo" to="https://drive.google.com/file/d/1lfYWzMIvUTExk0hGPE9s2DcD_3tsB0gR/view?usp=sharing" target="_blank">Curriculo</Link>

       </section>
        
        </EstruturaPagina>
    )
}