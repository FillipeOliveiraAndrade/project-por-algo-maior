import React from 'react';
import logo from '../../assets/logoPorAlgoMaior.png';

import styles from './header.module.css';

function Header() {
  return (
    <header className={ styles.header__container }>
      <div className={ styles.header__content }>
        <img
          className={ styles.header__logo }
          src={ logo }
          alt="Imagem da logo Por Algo Maior"
        />
        <h1 className={ styles.header__title }> Por Algo Maior </h1>
      </div>

      <nav className={ styles.header__nav }>
        <li> <a href="#home"> Inicio </a> </li>
        <li> <a href="#about"> Sobre </a> </li>
        <li> <a href="#congress"> Congresso </a> </li>
        <li> <a href="#programming"> Programação </a> </li>
        <li> <a href="#products"> Produtos </a> </li>
        <li> <a href="#local"> Local </a> </li>
      </nav>
    </header>
  )
}

export default Header