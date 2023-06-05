import React from 'react'

import styles from './about.module.css'
import aboutText from '../../data/aboutText'
import ImagesCarrossel from './ImagesCarrossel'

function About() {
  return (
    <section className={ styles.about__container } id="about">
      <div>
        <h2 className={ styles.about__title }> Sobre nós </h2>
        <span className={ styles.about__slogan }></span>
      </div>

      <section className={ styles.about__content }>
        <article className={ styles.about__article }>
          { aboutText }
        </article>

        <ImagesCarrossel />
      </section>
    </section>
  )
}

export default About