import postgres from "postgres";
import dotenv from "dotenv";
dotenv.config();

export const sql = postgres(process.env.DATABASE_URL || `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@postgres:5432/${process.env.POSTGRES_DB}`);

// Usuários

await sql`
  CREATE TABLE IF NOT EXISTS formularios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL CHECK (char_length(nome) >= 2),
    email VARCHAR(255) NOT NULL CHECK (email ~* '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'),
    mensagem TEXT NOT NULL CHECK (char_length(mensagem) >= 1),
    data_envio TIMESTAMP NOT NULL DEFAULT NOW()
);
`.then(() => {
  console.log('Tabela formularios criada com sucesso!');
})
.catch((err) => {
    console.error('Erro ao criar tabela formularios:', err);
    process.exit(1);
  });

// Exportando a conexão para uso em outros módulos
