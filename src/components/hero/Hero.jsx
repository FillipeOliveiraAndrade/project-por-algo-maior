import React from 'react'
import Form from './form/Form'
import Illustration from './illustration/Illustration'

import styles from './hero.module.css';

function Hero() {
  return (
    <section className={ styles.hero__container } id="home">
      <Form />
      <Illustration />
    </section>
  )
}

export default Hero