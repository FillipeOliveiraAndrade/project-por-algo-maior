import React from 'react'

import styles from './programming.module.css'

function Programming() {
  return (
    <section className={ styles.programming__container } id="programming">
      <div>
        <h2 className={ styles.programming__title }> Programação </h2>
        <span className={ styles.programming__slogan }></span>
      </div>

      <section className={ styles.programming__content }>
        <div 
          className={`
            ${ styles.programming__data }
            ${ styles.programming__culto }
          `}
        >
          <h3 className={ styles.programming__dataTitle }> Culto Jovem </h3>

          <div>
            <p> 01/07 </p>
            <span> Pré-Congresso - 19:00h </span>
          </div>
        </div>

        <div
          className={`
            ${ styles.programming__data }
            ${ styles.programming__congresso }
          `}
        >
          <h3 className={ styles.programming__dataTitle }> Congresso </h3>

          <div>
            <p> 29/07 </p>
            <span> 1º Dia - 19:00h </span>
          </div>

          <div>
            <p> 30/07 </p>
            <span> 2º Dia (Manhã) - 9:00h </span>
          </div>

          <div>
            <p> 30/07 </p>
            <span> 2º Dia (Noite) - 18:00h </span>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Programming