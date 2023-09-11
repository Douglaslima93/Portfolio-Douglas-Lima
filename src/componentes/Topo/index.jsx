import React from "react";
import './style.css'
import {Link} from 'react-router-dom'

export default function Topo() {
    return(
    <header className="topo">

        <p>Douglas Lima</p>

        <nav className="nav">
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link" to='/sobre'>Sobre mim</Link>
            <Link className="nav-link" to='/projetos'>Projetos</Link>
            <Link className="nav-link" to='/contato'>Contato</Link>

        </nav>
    </header>
    )
}