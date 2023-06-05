import React from 'react'
import ProductsCarrossel from './ProductsCarrossel'

import styles from './products.module.css'

function Products() {
  return (
    <section className={ styles.products__container } id="products">
      <div className={ styles.products__content }>
        <div>
          <h2 className={ styles.products__title }> Lojinha </h2>
          <span className={ styles.products__slogan }></span>
        </div>

        <h3 className={ styles.products__subtitle }> OBS: VENDAS APENAS NO LOCAL </h3>
      </div>

      <ProductsCarrossel />
    </section>
  )
}

export default Products