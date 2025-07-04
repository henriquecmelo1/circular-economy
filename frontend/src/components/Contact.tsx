import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

interface FormData {
  nome: string;
  email: string;
  mensagem: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    mensagem: ''
  });


  const [isSubmitting, setIsSubmitting] = useState(false); // estado do botão de envio
  const [statusMessage, setStatusMessage] = useState(''); // mensagem de status para o usuário

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(''); // limpa mensagens anteriores

    try {
      const response = await fetch('https://circular-economy.onrender.com/formularios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData) 
        
      });
      console.log(response);

      if (!response.ok) {
        throw new Error('Falha ao enviar a mensagem. Por favor, tente novamente.');
      }

      // Sucesso!
      setStatusMessage('Obrigado! Sua mensagem foi recebida com sucesso.');
      setFormData({ nome: '', email: '', mensagem: '' }); // limpa o formulário

    } catch (error: unknown) {
      if (error instanceof Error) {
        setStatusMessage(error.message || 'Ocorreu um erro inesperado.');
      } else {
        setStatusMessage('Ocorreu um erro inesperado.');
      }
    } finally {
      
      setIsSubmitting(false); // restaura o botão de envio
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2>Entre em Contato</h2>
      
      <div className={styles.contactFormContainer}>
        <h3>Inicie uma conversa</h3>
        <p>Compartilhe suas ideias, perguntas e pensamentos sobre práticas sustentáveis</p>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          
          <div className={styles.formGroup}>
            <label htmlFor="nome">👤 Nome</label>
            <input type="text" id="nome" placeholder="Seu nome" value={formData.nome} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">✉️ Email</label>
            <input type="email" id="email" placeholder="seu.email@examplo.com" value={formData.email} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="mensagem">💬 Mensagem</label>
            <textarea id="mensagem" rows={5} placeholder="Nos conte sobre seu interesse..." value={formData.mensagem} onChange={handleChange} required></textarea>
          </div>

          
          <button type="submit" className={styles.btnSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : '✈️ Mandar mensagem'}
          </button>
          {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;