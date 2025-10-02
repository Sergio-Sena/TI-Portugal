# PT Tech Navigator

Aplicação web para profissionais de TI que desejam migrar para Portugal, com foco em oportunidades inclusivas para profissionais experientes.

## Tecnologias Utilizadas

- React
- React Router
- Tailwind CSS (via CDN)
- Lucide React (ícones)

## Funcionalidades

- Tema claro/escuro
- Pesquisa sobre o mercado de TI em Portugal
- Guia de migração passo a passo
- Informações sobre Portugal
- Recursos úteis para migração

## Estrutura do Projeto

```
pt/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── badge.jsx
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   └── sidebar.jsx
│   │   └── Layout.jsx
│   ├── entities/
│   │   └── MigrationStep.js
│   ├── integrations/
│   │   └── Core.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Migration.jsx
│   │   ├── Portugal.jsx
│   │   ├── Research.jsx
│   │   └── Resources.jsx
│   ├── styles/
│   │   └── theme.css
│   ├── utils/
│   │   └── index.js
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## Instalação

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```
   npm start
   ```

## Tema Escuro

O aplicativo suporta tema escuro, que pode ser alternado clicando no botão de lua/sol na barra lateral ou no cabeçalho mobile.

## Desenvolvimento

Este projeto foi desenvolvido com React e utiliza o localStorage para simular um banco de dados para os passos de migração.