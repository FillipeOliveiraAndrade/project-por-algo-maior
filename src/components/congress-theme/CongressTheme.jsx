import React from 'react'
import logo from '../../assets/logoBrancaCongresso.svg'

import styles from './congressTheme.module.css'
import congressText from '../../data/congressText'

function CongressTheme() {
  return (
    <section className={ styles.congressTheme__container } id="congress">
      <img
        className={ styles.congressTheme__logo }
        src={ logo }
        alt="Logo do congresso dos jovens"
      />

      <div className={ styles.congressTheme__content }>
        <h2 className={ styles.congressTheme__title }> Por algo maior, eu nego a mim mesmo! </h2>
        <span className={ styles.congressTheme__subtitle }> Lucas 9:23 </span>
      </div>

      <article className={ styles.congressTheme__article }>
        { congressText }
      </article>
    </section>
  )
}

export default CongressTheme