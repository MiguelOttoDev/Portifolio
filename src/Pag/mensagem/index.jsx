// ContactMessages.jsx
import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../../firebase';
import styles from './ContactMessages.module.css';

const db = getFirestore(app);

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "messages")); 
        const messagesList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMessages(messagesList);
      } catch (error) {
        console.error("Erro ao buscar mensagens: ", error);
      }
    };
    
    fetchMessages();
  }, []);

  return (
    <div className={styles.contactMessages_module__contactMessages}>
      <h2 className={styles.contactMessages_module__title}>Mensagens de Contato</h2>
      {messages.length === 0 ? (
        <p>Não há mensagens de contato.</p>
      ) : (
        <ul className={styles.contactMessages_module__list}>
          {messages.map((msg) => (
            <li key={msg.id} className={styles.contactMessages_module__messageItem}>
              <p className={styles.contactMessages_module__messageText}>
                <strong className={styles.contactMessages_module__messageLabel}>Nome:</strong> {msg.name}
              </p>
              <p className={styles.contactMessages_module__messageText}>
                <strong className={styles.contactMessages_module__messageLabel}>Email:</strong> {msg.email}
              </p>
              <p className={styles.contactMessages_module__messageText}>
                <strong className={styles.contactMessages_module__messageLabel}>Mensagem:</strong> {msg.message}
              </p>
              <p className={styles.contactMessages_module__timestamp}>
                <strong className={styles.contactMessages_module__messageLabel}>Enviado em:</strong> {msg.timestamp ? new Date(msg.timestamp.seconds * 1000).toLocaleString() : "Data indisponível"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactMessages;
