import React from 'react'
import image from '../../assets/imageYoungPeople.jpeg'

import styles from './local.module.css'

function Local() {
  return (
    <section className={ styles.local__container } id="local">
      <div>
        <h2 className={ styles.local__title }> Local </h2>
        <span className={ styles.local__slogan }></span>
      </div>

      <div className={ styles.local__content }>
        <img
          className={ styles.local__image }
          src={ image }
        />

        <iframe
          className={ styles.local__map }
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d117729.98164557933!2d-43.483532!3d-22.763083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99676028c11389%3A0x1ad926a19e2b720!2sIgreja%20Batista%20Peniel%20em%20Nova%20Igua%C3%A7u!5e0!3m2!1spt-BR!2sbr!4v1685943562310!5m2!1spt-BR!2sbr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}

export default Local