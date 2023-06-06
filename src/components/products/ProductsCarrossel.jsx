import React from 'react'
import images from '../../data/imagesCarrossel'

import styles from './productsCarrossel.module.css'

function ProductsCarrossel() {
  return (
    <div
      className={ styles.productsCarrossel__container }
    >
      {images.map((image, index) => (
        <div key={ index }>
          <img
            className={ styles.productsCarrossel__image }
            alt="Produto a venda dos jovens"
            src={ image }
          />
        </div>
      ))}
    </div>
  )
}

export default ProductsCarrossel