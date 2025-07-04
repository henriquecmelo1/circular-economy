import React, { useState, useEffect } from 'react';

// Importe o componente da tabela, que não precisa de alterações na sua lógica principal
import MessagesTable from '../components/MessagesTable';
import styles from '../styles/MessagesTable.module.css';

// A interface continua a mesma para definir a estrutura dos dados


const Messages: React.FC = () => {
  
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    const fetchMessages = async () => {

      const response = await fetch('http://localhost:3000/formularios');
      if (!response.ok) {
        throw new Error(`Erro na rede: ${response.statusText}`);
      }
      const data = await response.json();
      setMessages(data); 

    };

    fetchMessages();
  }, []); 

  
  

  return (
    <main className={styles.pageContainer}>
      <div className={styles.titleContainer}>
        <h1>Caixa de Mensagens</h1>
        <p>Mensagens recebidas através do formulário de contato.</p>
      </div>
      <MessagesTable messages={messages} />
      
    </main>
  );
};

export default Messages;