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
          <img alt="Produto a venda dos jovens" src={ image } height={260} />
        </div>
      ))}
    </div>
  )
}

export default ProductsCarrossel