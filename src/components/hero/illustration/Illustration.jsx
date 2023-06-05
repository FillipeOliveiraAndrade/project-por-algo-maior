import React from 'react'
import gif from '../../../assets/gifMoletom.gif';

import styles from './Illustration.module.css'

function Illustration() {
  return (
    <div>
      <h2 className={ styles.illustration__title }>
        Quer ganhar <br />
        um moletom?
        </h2>
      <img
        className={ styles.illustration__gif }
        src={ gif }
        alt="Gif do moletom sorteado"
      />
    </div>
  )
}

export default Illustration