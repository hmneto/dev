import './Header.css'
import React from 'react'
export default () =>
    <>
        <header className="header">
            <a href="/">Logo</a>
            <ul className="menu">
                <li><a href='/'>Sobre</a></li>
                <li><a href='/'>Produtos</a></li>
                <li><a href='/'>Contato</a></li>
            </ul>
        </header>
    </>