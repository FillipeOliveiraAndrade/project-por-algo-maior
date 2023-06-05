import React from 'react'
import logo from '../../assets/logoPorAlgoMaior.png'
import logoInstagram from '../../assets/logoInstagram.png'
import logoSpotify from '../../assets/logoSpotify.png'

import styles from './footer.module.css'

function Footer() {
  const instagram = 'https://www.instagram.com/poralgomaior.ibpni/';
  const spotify = 'https://open.spotify.com/playlist/2iVqZ69P4cYox0ukgDlrLA?si=GFXClH7KRtSn5F10uwbcog';

  return (
    <footer className={ styles.footer__container }>
      <div className={ styles.footer__content }>
        <img
          className={ styles.footer__logo }
          src={ logo }
          alt="Imagem da logo Por Algo Maior"
        />
        <h1 className={ styles.footer__title }> Por Algo Maior </h1>
      </div>

      <div className={ styles.footer__social }>
        { /* Instagram */ }
        <a href={ instagram }>
          <img
            className={ styles.footer__logo }
            src={ logoInstagram }
            alt="Instagram dos jovens"
          />
        </a>

        { /* Instagram */ }
        <a href={ spotify }>
          <img
            className={ styles.footer__spotify }
            src={ logoSpotify }
            alt="Spotify dos jovens"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer