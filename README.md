# 🗓️ folha-diaria

## 📌 Descrição

**folha-diaria** é uma aplicação web construída com **React**, **Vite** e **TypeScript**, com o objetivo de fornecer uma interface interativa e organizada para controle de obrigações diárias(prioridades do dia). Também possibilita a criação de Todo List.
A interface foi desenvolvida com foco em usabilidade, organização de componentes e experiência fluida para o usuário.

A aplicação está configurada para funcionar como um site estático moderno, com deploy automatizado e performance otimizada.

🔗 Deploy em produção:  
👉 https://folha-diaria.vercel.app :contentReference[oaicite:1]{index=1}

---

## 🧠 Tecnologias utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **React** — Biblioteca principal para construção da interface de usuário.
- **Vite** — Ferramenta moderna de build e ambiente de desenvolvimento rápido.
- **TypeScript** — Tipagem estática para maior segurança e clareza no código.
- **CSS** — Estilização customizada sem utilização de frameworks de UI.
- **Vercel** — Plataforma de hospedagem e deploy contínuo.

---

## 🚀 Funcionalidades

- 🗓️ Exibição das prioridades do dia.
- Todo List.
- 📄 Estrutura de componentes modular e reutilizável.
- 📈 Layout responsivo para diferentes tamanhos de tela.
- ⚡ Inicialização rápida com ambiente de desenvolvimento já configurado.
- 🌐 Deploy estático em Vercel com suporte a atualizações contínuas.

---

## 📁 Estrutura do projeto

```text
folha-diaria/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/        # Componentes reutilizáveis da interface
│   ├── data/              # Arquivos de dados e fixtures
│   ├── hooks/             # Hooks customizados
│   ├── lib/               # Funções utilitárias
│   ├── pages/             # Páginas principais da aplicação
│   ├── styles/            # Estilos globais e específicos
│   ├── App.tsx            # Componente raiz da aplicação
│   └── main.tsx           # Ponto de entrada do React
├── .gitignore
├── README.md
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vercel.json
├── vite.config.ts
└── eslint.config.js
