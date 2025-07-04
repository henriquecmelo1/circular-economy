import React, { useState } from 'react'; // 1. Importe o useState

// Importando os estilos que vamos criar para esta página
import styles from '../styles/MessagesBox.module.css';

// A interface não muda
interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  sentAt: Date;
}

// Os dados de exemplo não mudam
const mockMessages: Message[] = [
  { id: 1, name: 'Ana Silva', email: 'ana.silva@email.com', message: 'Gostaria de saber mais sobre como posso implementar a reciclagem na minha empresa. Vocês oferecem consultoria?', sentAt: new Date('2025-07-03T10:30:00') },
  { id: 2, name: 'Bruno Costa', email: 'bruno.c@email.com', message: 'Parabéns pelo projeto! É uma iniciativa fantástica e muito necessária para o nosso futuro.', sentAt: new Date('2025-07-02T18:45:00') },
  { id: 3, name: 'Carla Dias', email: 'carla.dias@email.com', message: 'Tenho interesse em voluntariado. Como posso participar das ações da comunidade?', sentAt: new Date('2025-07-02T15:12:00') },
  { id: 4, name: 'Daniel Alves', email: 'd.alves@email.com', message: 'Olá, represento uma escola e gostaria de agendar uma palestra sobre economia circular para os alunos.', sentAt: new Date('2025-07-01T09:05:00') },
];

const MessagesBox: React.FC = () => {
  // 2. Adicione um estado para guardar o ID da linha expandida
  const [expandedRowId, setExpandedRowId] = useState<number | null>(null);

  // 3. Adicione a função para lidar com o clique na linha
  const handleRowClick = (messageId: number) => {
    // Se a linha clicada já for a que está expandida, feche-a
    if (expandedRowId === messageId) {
      setExpandedRowId(null);
    } else {
      // Caso contrário, defina o ID desta linha como o expandido
      setExpandedRowId(messageId);
    }
  };

  return (
    <>
      <main className={styles.pageContainer}>
        <div className={styles.titleContainer}>
          <h1>Caixa de Mensagens</h1>
          <p>Mensagens recebidas através do formulário de contato.</p>
        </div>

        <table className={styles.messagesTable}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Mensagem</th>
              <th>Data de Envio</th>
            </tr>
          </thead>
          <tbody>
            {mockMessages.map((msg) => {
              // 4. Lógica para determinar se a linha atual está expandida
              const isExpanded = expandedRowId === msg.id;
              const messageCellClasses = `
                ${styles.messageCell} 
                ${isExpanded ? styles.messageCellExpanded : ''}
              `;

              return (
                // 5. Adicione o onClick à tag <tr>
                <tr key={msg.id} onClick={() => handleRowClick(msg.id)}>
                  <td>{msg.name}</td>
                  <td>{msg.email}</td>
                  {/* Aplica as classes dinâmicas à célula da mensagem */}
                  <td className={messageCellClasses}>
                    {msg.message}
                  </td>
                  <td>
                    {msg.sentAt.toLocaleDateString('pt-BR', {
                      day: '2-digit', month: '2-digit', year: 'numeric',
                      hour: '2-digit', minute: '2-digit',
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default MessagesBox;