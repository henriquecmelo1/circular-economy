import React from 'react';

// 1. Importe o novo componente da tabela
import MessagesTable from '../components/MessagesTable'; 

// Importando os estilos para a página
import styles from '../styles/MessagesBox.module.css';

// A interface e os dados mocados permanecem aqui, pois representam
// os "dados da página" que seriam buscados de uma API, por exemplo.
interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  sentAt: Date;
}

const mockMessages: Message[] = [
  { id: 1, name: 'Ana Silva', email: 'ana.silva@email.com', message: 'Gostaria de saber mais sobre como posso implementar a reciclagem na minha empresa. Vocês oferecem consultoria?', sentAt: new Date('2025-07-03T10:30:00') },
  { id: 2, name: 'Bruno Costa', email: 'bruno.c@email.com', message: 'Parabéns pelo projeto! É uma iniciativa fantástica e muito necessária para o nosso futuro.', sentAt: new Date('2025-07-02T18:45:00') },
  { id: 3, name: 'Carla Dias', email: 'carla.dias@email.com', message: 'Tenho interesse em voluntariado. Como posso participar das ações da comunidade?', sentAt: new Date('2025-07-02T15:12:00') },
  { id: 4, name: 'Daniel Alves', email: 'd.alves@email.com', message: 'Olá, represento uma escola e gostaria de agendar uma palestra sobre economia circular para os alunos.', sentAt: new Date('2025-07-01T09:05:00') },
];

const MessagesBox: React.FC = () => {
  // 2. Note que não há mais 'useState' ou 'handleRowClick' aqui.
  // A lógica da tabela foi encapsulada no componente filho.

  return (
    <>
      <main className={styles.pageContainer}>
        <div className={styles.titleContainer}>
          <h1>Caixa de Mensagens</h1>
          <p>Mensagens recebidas através do formulário de contato.</p>
        </div>

        {/* 3. Renderize o componente da tabela e passe os dados para ele */}
        <MessagesTable messages={mockMessages} />

      </main>
    </>
  );
};

export default MessagesBox;