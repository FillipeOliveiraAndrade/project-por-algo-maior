import React from 'react'

import imageOne from '../../assets/imageYoungPeople.jpeg'
import imageTwo from '../../assets/imageConjuban.jpeg'
import imageThree from '../../assets/imageShowTalents.jpeg'

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import styles from './imagesCarrossel.module.css';

function ImagesCarrossel() {
  return (
    <Carousel className={ styles.imagesCarrossel__container }>
      <Carousel.Item interval={ 1900 }>
        <img
          className={ styles.imagesCarrossel__image }
          src={ imageOne }
          alt="Carrossel com imagens dos jovens de Peniel"
        />
      </Carousel.Item>

      <Carousel.Item interval={ 1900 }>
        <img
          className={ styles.imagesCarrossel__image }
          src={ imageTwo }
          alt="Carrossel com imagens dos jovens de Peniel"
        />
      </Carousel.Item>

      <Carousel.Item interval={ 1900 }>
        <img
          className={ styles.imagesCarrossel__image }
          src={ imageThree }
          alt="Carrossel com imagens dos jovens de Peniel"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default ImagesCarrossel