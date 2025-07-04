# Backend - Economia Circular

Este diretório contém o código do servidor da aplicação (API), desenvolvido com Node.js, Express, e PostgreSQL.

## Pré-requisitos

* [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
* [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
* Uma instância do **[PostgreSQL](https://www.postgresql.org/download/)** instalada e rodando localmente.

---

## Como Rodar o Backend

#### 1. Configure o Banco de Dados
Antes de iniciar o servidor, certifique-se de que seu serviço do PostgreSQL está ativo. Você precisará criar um banco de dados para a aplicação.

#### 2. Configure as Variáveis de Ambiente
Na raiz do projeto, crie um arquivo `.env` a partir do `.env.example`.

```bash
cp .env.example .env
```

Abra o arquivo .env e preencha as variáveis com suas credenciais locais do PostgreSQL e do serviço de e-mail (Nodemailer).

```bash
EMAIL_USER=seu@gmail.com
EMAIL_PASS=sua_senha_de_aplicativo

POSTGRES_USER=usuario
POSTGRES_PASSWORD=senha
POSTGRES_DB=database
DATABASE_HOST=localhost # Como não estamos usando a imagem do postgres no docker, use localhost
```

#### 3. Instale as Dependências
Navegue até esta pasta (/backend) e instale os pacotes necessários:
```bash
cd backend
npm install
``` 

#### 4. Inicie  o Servidor
Volte para a raiz do projeto e rode o servidor:
```bash
cd ..
node backend/app.js
``` 
O servidor da API estará rodando em http://localhost:3000

---

## Endpoints da API
* `GET` `/formularios` -> : Lista todas as mensagens salvas no banco de dados.
* `POST` `/formularios` -> : Recebe e salva uma nova mensagem vinda do formulário de contato.

