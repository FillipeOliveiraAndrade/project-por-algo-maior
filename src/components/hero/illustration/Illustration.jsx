import React from 'react'
import imageMoletom from '../../../assets/imageMoletom.jpeg';

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
        src={ imageMoletom }
        alt="Gif do moletom sorteado"
      />
    </div>
  )
}

export default Illustration