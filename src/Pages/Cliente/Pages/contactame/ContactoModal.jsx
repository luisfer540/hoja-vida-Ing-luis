import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import styles from '../../Styles/Contactame/ContactoModal.module.css';
import { sendContactEmail } from '../../../../Service/emailService.js';

Modal.setAppElement('#root');

export const ContactoModal = ({ isOpen, onClose }) => {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) {
      console.error("Formulario no está montado.");
      setError(true);
      return;
    }

    const result = await sendContactEmail(form);
    if (result.success) {
      setEnviado(true);
      setError(false);
      form.current.reset();
    } else {
      console.error("Error al enviar:", result.error);
      setError(true);
      setEnviado(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      contentLabel="Formulario de contacto"
    >
      <button className={styles.closeBtn} onClick={onClose}>Cerrar</button>
      <h2 className={styles.titulo}>Contáctame</h2>
      <form ref={form} onSubmit={sendEmail} className={styles.formulario}>
        <input type="text" name="user_name" placeholder="Nombre completo" required />
        <input type="email" name="user_email" placeholder="Correo electrónico" required />
        <input type="tel" name="user_phone" placeholder="Número de teléfono" required />
        <input type="text" name="user_whatsapp" placeholder="WhatsApp (opcional)" />
        <textarea name="message" rows="5" placeholder="Mensaje" required />
        <button type="submit">Enviar mensaje</button>
        {enviado && <p className={styles.exito}>¡Mensaje enviado correctamente!</p>}
        {error && <p className={styles.error}>Hubo un error al enviar. Intenta de nuevo.</p>}
      </form>
    </Modal>
  );
};
