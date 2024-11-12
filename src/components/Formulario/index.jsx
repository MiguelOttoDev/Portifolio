import React, { useState } from 'react';
import { sendMessage } from '../../firebase'; 
import styles from './Formulario.module.css';

const Formulario = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(name, email, message); 

    setShowPopup(true); // Exibe o pop-up
    setTimeout(() => setShowPopup(false), 3000); // Esconde o pop-up após 3 segundos
  };

  return (
    <div className={styles.contactForm}>
      <h2>Contato</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            placeholder="Sua mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {showPopup && (
        <div className={styles.popup}>
          <p>Mensagem enviada com sucesso!</p>
        </div>
      )}
    </div>
  );
};

export default Formulario;
