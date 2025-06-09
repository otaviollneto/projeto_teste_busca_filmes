# 📘 AJUSTES E MELHORIAS PARA PROJETO EM REACT + VITE

Este documento contém sugestões organizadas para você melhorar seu projeto de busca de filmes com favoritos, utilizando React, Zustand e Vite, com base em Atomic Design e Clean Code.

---

## ✅ 1. TIPAGEM E TYPESCRIPT

### Criar um tipo central para filmes

```ts
// src/types/Movie.ts
export interface Movie {
  id: number;
  title: string;
  original_title: string;
  poster_path?: string;
  release_date?: string;
  genre_names?: string[];
}
```

### Aplicar nos hooks e estados

```ts
const [res, setRes] = useState<Movie[]>([]);
```

---

## 🧠 2. CLEAN CODE + ATOMIC DESIGN

### Separar responsabilidades:

```
components/
├── atoms/        ← Input, Tag, Botão Estrela
├── molecules/    ← MovieCard (poster, título, gênero, botão)
├── organisms/    ← Dropdown
├── pages/        ← LiveSearchPage, FavoritesPage
```

### Criar `MovieCard` reutilizável:

```tsx
// src/components/molecules/MovieCard.tsx
import { Poster, Tags, HighlightedItem } from "./styles";
import { Star, Star as StarOutline } from "@phosphor-icons/react";

export function MovieCard({ movie, fav, onToggleFav }: {
  movie: Movie;
  fav: boolean;
  onToggleFav: () => void;
}) {
  return (
    <HighlightedItem>
      <Poster src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} />
      <div style={{ flex: 1 }}>
        <a href={`https://www.imdb.com/find?q=${encodeURIComponent(movie.original_title)}`} target="_blank" rel="noopener noreferrer">
          <strong>{movie.title}</strong>
        </a>
        <small> ({movie.release_date?.slice(0, 4)})</small>
        <Tags>
          {movie.genre_names?.map((g) => <span key={g}>{g}</span>)}
        </Tags>
      </div>
      <button onClick={onToggleFav}>
        {fav ? <Star weight="fill" /> : <StarOutline />}
      </button>
    </HighlightedItem>
  );
}
```

---

## 🚀 3. UX E USABILIDADE

- Adicionar highlight com `<mark>` ao invés de `dangerouslySetInnerHTML`
- Exibir botão de favoritos com animação simples
- Navegação com teclado: suporte a Enter e Escape
- Scroll automático até o item ativo

---

## 📂 4. ORGANIZAÇÃO DO CÓDIGO

```
src/
├── components/
├── hooks/
├── services/
│   └── tmdb/
├── store/
├── types/
├── utils/
└── App.tsx
```

### Separar serviços TMDB:

```ts
// services/tmdb/search.ts
export async function searchMovies(query: string, page = 1): Promise<{ movies: Movie[]; totalPages: number }>;

// services/tmdb/genres.ts
export async function getGenreMap(): Promise<Record<number, string>>;
```

---

Essas mudanças mantêm seu projeto limpo, escalável, testável e pronto para ser apresentado profissionalmente.