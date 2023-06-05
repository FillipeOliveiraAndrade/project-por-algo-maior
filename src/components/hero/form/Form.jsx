import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { ImWhatsapp } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'

import styles from './form.module.css';

function Form() {
  const [inputValue, setInputValue] = useState({
    name: '',
    whatsapp: '',
    email: '',
  });

  const form = useRef();

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;

    setInputValue((prevState) => ({ ...prevState, [name]: value }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_lzflgg5',
      'template_8nfivew',
      form.current,
      'LYu_ZqFHyAv9vCTuN'
    );

    setInputValue({
      name: '',
      whatsapp: '',
      email: '',
    });
  };
  
  return (
    <form
      className={ styles.form__container }
      ref={ form }
      onSubmit={ (event) => handleSubmit(event) }
    >
      <label className={ styles.form__label }>
        <div className={ styles.form__textlabel }>
          Nome
          <AiOutlineUser />
        </div>

        <input
          className={ styles.form__input }
          type="text"
          name="name"
          value={ inputValue.name }
          onChange={ handleChangeInput }
        />
      </label>

      <label className={ styles.form__label }>
        <div className={ styles.form__textlabel }>
          Whatsapp
          <ImWhatsapp />
        </div>

        <input
          className={ styles.form__input }
          type="text"
          name="whatsapp"
          value={ inputValue.whatsapp }
          onChange={ handleChangeInput }
        />
      </label>

      <label className={ styles.form__label }>
        <div className={ styles.form__textlabel }>
          Email
          <AiOutlineMail />
        </div>

        <input
          className={ styles.form__input }
          type="email"
          name="email"
          value={ inputValue.email }
          onChange={ handleChangeInput }
        />
      </label>

      <button
        className={ styles.form__button }
        type='submit'
      >
        Inscreva-se
      </button>
    </form>
  )
}

export default Form