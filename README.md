# 🎬 Projeto: Buscador de Filmes com Favoritos

Este projeto é uma aplicação React + Vite que permite ao usuário pesquisar filmes via API TMDB, favoritar resultados e visualizar seus favoritos com destaque visual e navegação por teclado.

---

## 🚀 Tecnologias Utilizadas

- React 18
- Vite
- TypeScript
- Zustand (para favoritos)
- Styled-components
- @phosphor-icons/react
- Axios

---

## 📦 Funcionalidades

- 🔍 Pesquisa de filmes com destaque
- 🧠 Debounce para otimizar chamadas à API
- ⭐ Sistema de favoritos com persistência
- 🎞 Exibição de gêneros e ano de lançamento
- ⌨️ Navegação por teclado (↑ ↓)
- 🌐 Link direto para resultados no IMDB
- 🔄 Paginação de resultados
- 📱 Layout responsivo

---

## ⚙️ Instalação Local

```bash
# Clone o projeto
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

# Instale as dependências
npm install

# Crie um arquivo .env.local com sua API KEY da TMDB:
VITE_TMDB_KEY=xxxxxx

# Inicie a aplicação
npm run dev
```

---

## 🐳 Executando com Docker

1. Crie o `.env` com sua chave:

```
VITE_TMDB_KEY=sua_api_key_aqui
```

2. `Dockerfile` na raiz:

```Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]
```

3. `docker-compose.yml`:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "5173:4173"
    env_file:
      - .env
```

4. Execute:

```bash
docker-compose up --build
```

---

## 📂 Estrutura de Pastas

```
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── pages/
├── hooks/
├── services/
├── store/
├── types/
└── App.tsx
```

---

## 📝 Licença

Este projeto está sob licença MIT.