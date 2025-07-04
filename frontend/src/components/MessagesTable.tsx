import React, { useState } from 'react';

// Importando os mesmos estilos, pois as classes CSS são usadas aqui
import styles from '../styles/MessagesTable.module.css';

// A interface define o formato dos dados que este componente espera receber
interface Message {
  id: number;
  nome: string;
  email: string;
  mensagem: string;
  data_envio: string;
}

// 1. Defina as props que o componente vai receber
interface MessagesTableProps {
  messages: Message[]; // Ele espera receber um array de mensagens
}

// O componente agora recebe 'messages' como uma prop
const MessagesTable: React.FC<MessagesTableProps> = ({ messages }) => {
  // 2. Toda a lógica de estado e manipulação de clique foi movida para cá
  const [expandedRowId, setExpandedRowId] = useState<number | null>(null);

  const handleRowClick = (messageId: number) => {
    setExpandedRowId(prevId => (prevId === messageId ? null : messageId));
  };

  return (
    <table className={styles.messagesTable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Mensagem</th>
          <th>Data de Envio</th>
        </tr>
      </thead>
      <tbody>
        {/* 3. Mapeamos o array de 'messages' recebido via props */}
        {messages.map((msg) => {
          const isExpanded = expandedRowId === msg.id;
          const messageCellClasses = `
            ${styles.messageCell} 
            ${isExpanded ? styles.messageCellExpanded : ''}
          `;

          return (
            <tr key={msg.id} onClick={() => handleRowClick(msg.id)} className={styles.messageRow}>
              <td>{msg.id}</td>
              <td>{msg.nome}</td>
              <td>{msg.email}</td>
              <td className={messageCellClasses}>
                {msg.mensagem}
              </td>
              <td>
                {msg.data_envio}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MessagesTable;