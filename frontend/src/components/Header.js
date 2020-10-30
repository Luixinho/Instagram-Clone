import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../assets/logo.svg'
import camera from '../assets/camera.svg'

// colocar {} no html para imbutir códigos javascripts
// <Link to="" /> usado para transformar uma imagem em um link como o "a" do html

export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">

                <Link to="/">
                    <img src={logo} alt="InstaRocket" />
                </Link>
                <Link to="/new">
                    <img src={camera} alt="Enviar publicação" />
                </Link>
            </div>
        </header>
    );
};