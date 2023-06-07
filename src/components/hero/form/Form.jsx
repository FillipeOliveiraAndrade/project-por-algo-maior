import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { ImWhatsapp } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'

import styles from './form.module.css';
import Modal from 'react-bootstrap/Modal';

function Form() {
  const [showModal, setShowModal] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [inputValue, setInputValue] = useState({
    name: '',
    whatsapp: '',
    email: '',
    firstCheckbox: false,
    secondCheckbox: false,
  });

  const form = useRef();

  const handleChangeInput = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

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
      firstCheckbox: false,
      secondCheckbox: false,
    });

    setShowModal(true);
  };

  useEffect(() => {
    const { firstCheckbox, secondCheckbox } = inputValue;

    if (!firstCheckbox || !secondCheckbox) {
      return setButtonDisable(true);
    }

    return setButtonDisable(false);
  }, [inputValue.firstCheckbox, inputValue.secondCheckbox])
  
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

      <div className={ styles.form__termos }>
        <label className={ styles.form__checkbox_text }>
          <input
            className={ styles.form__checkbox }
            type="checkbox"
            name="firstCheckbox"
            checked={ inputValue.firstCheckbox }
            onChange={ handleChangeInput }
          />

          Estou ciente que o sorteio será presencial durante o evento, no <br />
          dia 29 de julho, o(a) ganhador(a) precisa está presente. 
        </label>

        <label className={ styles.form__checkbox_text }>
          <input
            className={ styles.form__checkbox }
            type="checkbox"
            name="secondCheckbox"
            checked={ inputValue.secondCheckbox }
            onChange={ handleChangeInput }
          />

          Autorizo receber notificações e lembrete sobre o congresso via <br />
          WhatsApp e E-mail.
        </label>

        <span className={ styles.form__checkbox_text }>
          Salientamos que os dados fornecidos não serão divulgados e que <br />
          nada será utilizado para outra finalidade que não aquela descrita <br />
          acima, após o uso da forma referida, os dados serão inutilizados.
        </span>
      </div>

      <button
        className={ styles.form__button }
        type='submit'
        disabled={ buttonDisable }
      >
        Inscreva-se
      </button>

    <Modal
      className={ styles.modal__container }
      size="md"
      show={ showModal }
      onHide={ () => setShowModal(false) }
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header
        className={ styles.modal__header }
        closeButton
      >
        <Modal.Title
          className={ styles.modal__title }
          id="example-modal-sizes-title-sm"
        >
          Inscrição realizada com sucesso!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={ styles.modal__body }>
        Parabéns, você já está concorrendo ao moletom.
        <br />
        Nos vemos dia 29/07 😊
      </Modal.Body>
    </Modal>
    </form>
  )
}

export default Form