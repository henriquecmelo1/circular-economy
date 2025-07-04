import React, { useState } from 'react';
import styles from '../styles/MessagesTable.module.css';

interface Message {
  id: number;
  nome: string;
  email: string;
  mensagem: string;
  data_envio: string;
}

interface MessagesTableProps {
  messages: Message[]; 
}

const MessagesTable: React.FC<MessagesTableProps> = ({ messages }) => {
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
                {new Date(msg.data_envio).toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MessagesTable;