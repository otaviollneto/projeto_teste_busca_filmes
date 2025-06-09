# 📌 COMMENTS.md – Melhorias e Sugestões para o Projeto de Busca de Filmes

## ✅ Tipagem (TypeScript)
1. **Evitar uso de `any[]`**
   - Crie um tipo `Movie` com as propriedades esperadas:
     ```ts
     export interface Movie {
       id: number;
       title: string;
       original_title: string;
       poster_path?: string;
       release_date?: string;
       genre_names?: string[];
     }
     ```
   - Substitua `useState<any[]>` por `useState<Movie[]>` em todos os lugares.

2. **Tipar parâmetros e props de componentes**  
   Exemplo para `highlight` e `onToggleFav`:
   ```ts
   highlight: (title: string) => string;
   onToggleFav: (id: number) => void;
   ```

3. **Padronizar IDs como `number` ou `string`**
   - Reforce o uso consistente, evitando conversões dentro do `Dropdown`.

---

## 🎨 Design (Atomic + Clean)
1. **Separação por Atomic Design**:
   - `atoms`: Input, botão de favoritos, tags
   - `molecules`: Card com poster, título, gêneros
   - `organisms`: Dropdown completo
   - `pages`: LiveSearchPage, FavoritesPage

2. **Extração de estilos inline**
   - Mover estilos para styled-components reutilizáveis

3. **Reaproveitamento de UI entre páginas**
   - Componentes como `HighlightedItem` são usados no `Dropdown` e em `FavoritesPage` → separar como `MovieCard`

---

## 🚀 Performance e UX
1. **Paginação com rolagem infinita** (opcional)
2. **Feedback visual ao clicar em "favoritar"** (ex: loading ou animação)
3. **Evitar chamadas duplicadas à TMDB**
   - Armazenar gênero globalmente ou em cache
4. **Fallback para imagens quebradas (poster)**

---

## 📁 Organização de código
1. **Criar pasta `types/` com interfaces globais**:
   - `types/Movie.ts`
2. **Separar serviços da TMDB por responsabilidade**:
   - `services/tmdb/search.ts`, `services/tmdb/genres.ts`, etc.

---

## 🧪 Testabilidade
1. **Adicionar testes unitários aos átomos e hooks**:
   - Exemplo: `useKeyboardNavigation`, `DropdownItemHighlight`
2. **Testes de integração nas páginas com mocks de TMDB**

---

## 🧼 Código Limpo (Clean Code)
1. **Nomes autoexplicativos**: `res` → `results`, `deb` → `debouncedTerm`
2. **Evitar lógica duplicada no render**: extrair `renderMovieItem()`
3. **Evitar `dangerouslySetInnerHTML`**:
   - Alternativas com `<mark>` ou manipulação com `React.createElement`

---

## 🔒 Segurança e Acessibilidade
1. **Adicionar `aria-*` nos botões, roles e links**
2. **Tornar navegação com teclado mais robusta** (suporte a `Enter`, `Esc`)

---

Essas melhorias visam escalar o projeto com qualidade e facilidade de manutenção.