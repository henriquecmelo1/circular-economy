import nodemailer from 'nodemailer';
import { configDotenv } from 'dotenv';

configDotenv();

export async function sendEmail(formulario) {
    const { nome, email, mensagem } = formulario;
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Confirmação de recebimento',
        text: `Olá ${nome},\n\nSua mensagem foi recebida com sucesso:\n\n${mensagem}\n\nObrigado!`
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email enviado com sucesso');
    } catch (error) {
        console.error('Erro ao enviar email:', error);
    }
}

