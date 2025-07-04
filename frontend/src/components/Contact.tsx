import React, { useState } from 'react';
import styles from '../styles/Contact.module.css'


interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  // evento de mudança dos inputs do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  // evento de envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Obrigado, ${formData.name}! Sua mensagem foi recebida.`);
    console.log('Dados do formulário:', formData);
    //mandar request para o backend 
    setFormData({ name: '', email: '', message: '' }); // limpa o formulário
  };

  return (
    <section className={styles.contactSection} id="contact">
      <h2>Entre em Contato</h2>
      <p className="section-subtitle">
        Pronto para fazer parte da mudança? Entre em contato conosco para saber mais sobre como você pode contribuir para um futuro mais sustentável.
      </p>
      <div className={styles.contactFormContainer}>
        <h3>Inicie uma conversa</h3>
        <p>Compartilhe suas ideias, perguntas e pensamentos sobre práticas sustentáveis</p>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">👤 Nome</label>
            <input type="text" id="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">✉️ Email</label>
            <input type="email" id="email" placeholder="seu.email@examplo.com" value={formData.email} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">💬 Mensagem</label>
            <textarea id="message" rows={5} placeholder="Nos conte sobre seu interesse..." value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className={styles.btnSubmit}>✈️ Mandar mensagem</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;