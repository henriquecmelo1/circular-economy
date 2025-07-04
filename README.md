# ♻️ Economia Circular

Esta é uma aplicação web full-stack que consiste em um formulário de contato e uma exibição dos dados no frontend e uma API de backend para receber e armazenar as mensagens, com notificação por e-mail. O projeto é totalmente containerizado com Docker para facilitar a configuração e a execução em qualquer ambiente.

---

## 🚀 Deploy

A aplicação está com deploy e pode ser acessada nos seguintes links:

* **Frontend (Vercel):** [**https://circular-economy-ten.vercel.app/**](https://circular-economy-ten.vercel.app/)
* **Backend (Render):** [**https://circular-economy.onrender.com/**](https://circular-economy.onrender.com/)

> **Nota:** O backend está hospedado no plano gratuito do Render e pode levar de 30 a 60 segundos para responder à primeira requisição se estiver inativo (processo conhecido como *cold start*). Por favor, aguarde um momento ao enviar o formulário ou ao carregar as mensagens pela primeira vez.

---

## Índice


* [Funcionalidades](#funcionalidades)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Pré-requisitos](#pré-requisitos)
* [Como Rodar Localmente](#como-rodar-localmente)
* [Estrutura do Projeto](#estrutura-do-projeto)

---

## Funcionalidades
A aplicação possui as seguintes funcionalidades:

- ✅ Formulário de Contato: Permite que os usuários enviem mensagens com nome, e-mail e texto.
- ✅ Caixa de Mensagens: Uma página que lista todas as mensagens recebidas do banco de dados.
- ✅ Notificação por Email: O backend utiliza o Nodemailer para enviar uma notificação por e-mail a cada nova mensagem recebida.
- ✅ Interface Interativa: A tabela de mensagens permite expandir mensagens longas para facilitar a leitura.
- ✅ Validação de Dados: Tanto o frontend quanto o backend realizam validações para garantir que os dados enviados sejam consistentes.


--- 
## Tecnologias Utilizadas

Este projeto foi construído com um conjunto de tecnologias modernas para desenvolvimento web.

#### Frontend
* **[React](https://reactjs.org/)**: Biblioteca para construção de interfaces de usuário.
* **[Vite](https://vitejs.dev/)**: Ferramenta de build moderna e rápida para o frontend.
* **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.

#### Backend
* **[Node.js](https://nodejs.org/)**: Ambiente de execução para JavaScript no servidor.
* **[Express.js](https://expressjs.com/)**: Framework minimalista para criar a API REST.
* **[PostgreSQL](https://www.postgresql.org/)**: Banco de dados relacional para armazenar as mensagens.
* **[Nodemailer](https://nodemailer.com/)**: Módulo para envio de e-mails a partir do Node.js.

#### Containerização
* **[Docker](https://www.docker.com/)**: Plataforma para criar, implantar e executar aplicações em contêineres.
* **[Docker Compose](https://docs.docker.com/compose/)**: Ferramenta para definir e gerenciar aplicações Docker multi-contêiner.

---

## Pré-requisitos

Antes de começar, você precisa ter as seguintes ferramentas instaladas na sua máquina:

* **[Git](https://git-scm.com/downloads)**: Para clonar o repositório.
* **[Docker](https://www.docker.com/products/docker-desktop/)** e **Docker Compose**: Para construir e orquestrar os contêineres da aplicação.

Nenhuma outra instalação (Node.js, Postgres, etc.) é necessária na sua máquina local, pois o Docker cuidará de tudo.

---

## Como Rodar Localmente

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento.

#### 1. Clone o repositório
Abra seu terminal e clone este repositório para sua máquina local.

```bash
git clone https://github.com/henriquecmelo1/circular-economy.git
```

#### 2. Navegue até a página
Acesse o diretório raiz do projeto que você acabou de clonar

```bash
cd circular-economy 
```

#### 3. Configurando as Variáveis de Ambiente
Antes de iniciar os contêineres, você precisa configurar as variáveis de ambiente para o backend. Elas são usadas para as credenciais do banco de dados e para o serviço de envio de e-mails.

No diretório raiz, você encontrará um arquivo chamado .env.example. Crie uma cópia dele e renomeie-a para .env.

```bash
cp .env.example .env
```

Agora, abra o arquivo .env recém-criado e preencha os valores com suas próprias credenciais.

#### 4. Suba os contêineres com Docker Compose
Com as variáveis de ambiente configuradas, execute o seguinte comando no diretório raiz para construir as imagens e iniciar todos os serviços (frontend, backend e banco de dados).
```bash
docker-compose up --build -d
```

- --build: Garante que as imagens Docker serão reconstruídas caso haja alguma alteração nos Dockerfiles.

- -d: (detached mode) Executa os contêineres em segundo plano.

#### 5. Acesse a aplicação
Pronto! Os serviços estarão disponíveis nos seguintes endereços:

**Frontend (React):** http://localhost:5173

**Backend (Express API):** http://localhost:3000

>#### **Observação: Rodando sem Docker (Configuração Manual)**\
>Para desenvolvedores que preferem não usar o Docker, é possível executar o frontend e o backend separadamente. Este método exige a instalação de todas as dependências (Node.js, npm/yarn e PostgreSQL) diretamente na sua máquina
>* **[📄 Instruções do Frontend](./frontend/README.md)**
>* **[📄 Instruções do Backend](./backend/README.md)**

---



## Estrutura do Projeto

A estrutura de pastas principal do projeto está organizada da seguinte forma:

```bash
|
├── backend/              
│   ├── app.js
│   ├── README.md         # Instruções para rodar usando node
│   └── Dockerfile
├── frontend/             
│   ├── src/
│   ├── README.md         # Instruções para rodar usando o React
│   └── Dockerfile
├── .env.example          # Arquivo de exemplo para as variáveis de ambiente
├── .env                  # Arquivo que deve ser adicionado para a utilização das variáveis de ambiente
├── .gitignore
├── docker-compose.yml    
└── README.md  
```


