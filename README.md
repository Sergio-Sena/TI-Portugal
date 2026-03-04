# 🇵🇹 PT Tech Navigator

[![Status](https://img.shields.io/badge/Status-🚧%20Em%20Desenvolvimento-yellow)]()
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-cyan)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> Aplicação web para profissionais de TI que desejam migrar para Portugal.

---

## ✨ Features

### 🎯 **Guia Completo de Migração**
- Pesquisa sobre mercado de TI em Portugal
- Guia de migração passo a passo
- Informações sobre Portugal (custo de vida, cidades, cultura)
- Recursos úteis (vistos, documentação, emprego)

### 🎨 **Interface Moderna**
- Tema claro/escuro
- Layout responsivo mobile-first
- Navegação intuitiva com sidebar
- Ícones modernos (Lucide React)

### 📊 **Conteúdo Inclusivo**
- Foco em profissionais experientes
- Oportunidades para todas as idades
- Dicas de networking e adaptação
- Recursos de aprendizado contínuo

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Framework UI
- **React Router 6** - Navegação
- **TailwindCSS 3** - Utility-first CSS (via CDN)
- **Lucide React** - Ícones modernos

### **Storage**
- **localStorage** - Simulação de banco de dados

---

## 🚀 Quick Start

### **Pré-requisitos**
- Node.js 18+
- npm ou yarn

### **1. Clone o repositório**
```bash
git clone https://github.com/Sergio-Sena/TI-Portugal.git
cd TI-Portugal
```

### **2. Instale as dependências**
```bash
npm install
```

### **3. Execute em desenvolvimento**
```bash
npm start
```

Acesse: http://localhost:3000

### **4. Build de produção**
```bash
npm run build
```

---

## 📁 Estrutura do Projeto

```
TI-Portugal/
├── src/
│   ├── assets/
│   │   └── images/           # Imagens e assets
│   ├── components/
│   │   ├── ui/               # Componentes UI reutilizáveis
│   │   │   ├── badge.jsx
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   └── sidebar.jsx
│   │   └── Layout.jsx        # Layout principal
│   ├── entities/
│   │   └── MigrationStep.js  # Entidades de dados
│   ├── integrations/
│   │   └── Core.js           # Integrações
│   ├── pages/
│   │   ├── Home.jsx          # Página inicial
│   │   ├── Migration.jsx     # Guia de migração
│   │   ├── Portugal.jsx      # Sobre Portugal
│   │   ├── Research.jsx      # Pesquisa de mercado
│   │   └── Resources.jsx     # Recursos úteis
│   ├── styles/
│   │   └── theme.css         # Estilos do tema
│   ├── utils/
│   │   └── index.js          # Utilitários
│   ├── App.jsx               # Componente principal
│   └── index.js              # Entry point
├── public/
│   ├── index.html
│   └── manifest.json
├── package.json
└── README.md
```

---

## 🎯 Funcionalidades

### ✅ **Implementado**
- [x] Tema claro/escuro
- [x] Navegação com React Router
- [x] Layout responsivo
- [x] Componentes UI reutilizáveis
- [x] Estrutura de páginas

### 🔄 **Em Desenvolvimento**
- [ ] Conteúdo completo das páginas
- [ ] Sistema de busca
- [ ] Filtros por cidade/área
- [ ] Calculadora de custo de vida
- [ ] Fórum de comunidade

### 🗺️ **Planejado**
- [ ] Integração com APIs de emprego
- [ ] Sistema de autenticação
- [ ] Perfil de usuário
- [ ] Favoritos e salvos
- [ ] Notificações de vagas

---

## 🎨 Design System

### **Tema Claro/Escuro**
- Alternância via botão na sidebar/header
- Persistência no localStorage
- Transições suaves

### **Componentes UI**
- Badge - Tags e labels
- Button - Botões estilizados
- Card - Cards de conteúdo
- Sidebar - Navegação lateral

---

## 📊 Conteúdo

### **Pesquisa de Mercado**
- Salários médios por área
- Empresas que contratam
- Tecnologias mais demandadas
- Tendências do mercado

### **Guia de Migração**
- Documentação necessária
- Processo de visto
- Reconhecimento de diplomas
- Abertura de conta bancária
- Aluguel de imóvel

### **Sobre Portugal**
- Custo de vida por cidade
- Sistema de saúde
- Educação
- Transporte público
- Cultura e lazer

### **Recursos Úteis**
- Sites de emprego
- Grupos de networking
- Cursos de português
- Comunidades de brasileiros
- Serviços de relocação

---

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

## 📄 Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

---

## 👨💻 Autor

**Sergio Sena**
- GitHub: [@Sergio-Sena](https://github.com/Sergio-Sena)
- LinkedIn: [Sergio Sena](https://linkedin.com/in/sergio-sena)
- Portfolio: [dev-cloud.sstechnologies-cloud.com](https://dev-cloud.sstechnologies-cloud.com)

---

<div align="center">

**⭐ Se este projeto foi útil, deixe uma estrela!**

**🇵🇹 Boa sorte na sua jornada para Portugal!**

[🐛 Issues](../../issues) • [📖 Docs](docs/)

</div>
