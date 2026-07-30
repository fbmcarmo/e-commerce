# 🛍️ E-commerce

Aplicação web desenvolvida em **Next.js** e **TypeScript** para um sistema de **E-commerce**, oferecendo uma interface moderna, responsiva e intuitiva para gerenciamento e visualização de produtos.

O projeto foi desenvolvido com foco em escalabilidade, reutilização de componentes e boas práticas de desenvolvimento Front-end, utilizando **Redux** para gerenciamento de estado global, **Contexts** para compartilhamento de informações entre componentes, **Services** para comunicação com APIs e **Mocks** para simulação de dados durante o desenvolvimento.

A aplicação também pode ser executada em ambiente containerizado utilizando **Docker**, facilitando a configuração e implantação do projeto.

---

## 🚀 Funcionalidades

* 👤 Cadastro de usuários
* 🔐 Login e autenticação
* ✉️ Ativação de conta por e-mail
* 📦 Listagem de produtos
* 🔍 Pesquisa de produtos
* 🏷️ Navegação por categorias
* 📄 Visualização dos detalhes dos produtos
* 🛒 Interface preparada para funcionalidades de e-commerce
* ⚡ Gerenciamento de estado global com Redux
* 🌐 Integração com API REST
* 📱 Interface responsiva

---

## 🛠️ Tecnologias Utilizadas

* Next.js
* React.js
* TypeScript
* Redux Toolkit
* Axios
* Context API
* CSS Modules
* Docker
* Docker Compose

---

## 📂 Estrutura do Projeto

```text
.
├── components/
├── contexts/
├── helpers/
├── mocks/
├── pages/
│   ├── api/
│   ├── index.tsx
│   └── ...
├── public/
├── redux/
├── services/
├── styles/
├── types/
├── .env.local
├── Dockerfile
├── docker-compose.yml
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🏗️ Arquitetura

A aplicação foi organizada em camadas para facilitar a manutenção e evolução do projeto.

### Components

Componentes reutilizáveis da interface.

### Pages

Páginas da aplicação utilizando o sistema de roteamento do Next.js.

### Redux

Gerenciamento do estado global da aplicação.

### Contexts

Compartilhamento de estados e funcionalidades entre componentes.

### Services

Responsáveis pela comunicação com a API REST.

### Helpers

Funções auxiliares reutilizadas em diferentes partes da aplicação.

### Mocks

Dados simulados utilizados durante o desenvolvimento e testes da interface.

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, certifique-se de possuir instalado:

* Node.js 18 ou superior
* Docker (opcional)
* Docker Compose (opcional)

Também é necessário que a API esteja em execução para utilização completa da aplicação.

---

## 📥 Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/ecommerce-frontend.git
```

Entre na pasta do projeto:

```bash
cd ecommerce-frontend
```

Instale as dependências:

```bash
npm install
```

---

## 🔑 Variáveis de Ambiente

Crie um arquivo **.env.local** na raiz do projeto.

Exemplo:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

# 🚀 Getting Started

Este é um projeto desenvolvido com **Next.js**, criado utilizando o **create-next-app**.

Inicie o servidor de desenvolvimento:

```bash
npm run dev

# ou

yarn dev

# ou

pnpm dev

# ou

bun dev
```

Abra **http://localhost:3000** no navegador para visualizar a aplicação.

Você pode iniciar o desenvolvimento modificando:

```text
pages/index.tsx
```

As alterações são refletidas automaticamente durante o desenvolvimento.

---

## 📡 API Routes

O Next.js permite criar rotas de API através da pasta:

```text
pages/api
```

Os arquivos presentes nesse diretório são automaticamente mapeados para:

```text
/api/*
```

Por exemplo:

```text
pages/api/hello.ts
```

fica disponível em:

```text
/api/hello
```

Neste projeto, entretanto, toda a lógica de negócio está concentrada em uma API REST externa desenvolvida em Node.js.

---

## 🔤 Otimização de Fontes

O projeto utiliza o recurso **next/font**, responsável pela otimização automática do carregamento de fontes.

A fonte **Geist**, disponibilizada pela Vercel, pode ser utilizada para oferecer melhor desempenho e experiência ao usuário.

---

## 🔄 Comunicação com a API

Fluxo da aplicação:

```text
Usuário

      │
      ▼

Frontend (Next.js)

      │
      ▼

Redux / Context API

      │
      ▼

Services (Axios)

      │
      ▼

API REST (Node.js)

      │
      ▼

PostgreSQL
```

---

## 🐳 Executando com Docker

Construir a imagem:

```bash
docker compose build
```

Subir os containers:

```bash
docker compose up
```

Executar em segundo plano:

```bash
docker compose up -d
```

Parar os containers:

```bash
docker compose down
```

---

## 📚 Saiba Mais

Para aprender mais sobre o Next.js, consulte os links abaixo:

* https://nextjs.org/docs
* https://nextjs.org/learn-pages-router
* https://github.com/vercel/next.js

---

## 🚀 Deploy

A forma mais simples de publicar uma aplicação Next.js é utilizando a **Vercel**.

Gerar uma versão de produção:

```bash
npm run build
```

Mais informações:

https://nextjs.org/docs/pages/building-your-application/deploying

---

## 🌐 Acesse a Aplicação

### Frontend

🔗 https://SEU_FRONTEND.vercel.app/

### Backend

🔗 https://SUA_API.onrender.com/

---

## 👨‍💻 Desenvolvedor

**Bruno Moreira**

Full Stack Software Engineer

* GitHub: https://github.com/fbmcarmo
* LinkedIn: https://www.linkedin.com/in/fbmcarmo

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e demonstração de conhecimentos em desenvolvimento Full Stack.
