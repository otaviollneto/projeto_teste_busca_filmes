/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Star } from "@phosphor-icons/react";
import axios from "axios";
import { useFavoritesStore } from "../../../store/favorites";
import {
  HighlightedItem,
  Poster,
  Tags,
} from "../../molecules/DropdownItemHighlight/styles";
import { NavButton } from "../../atoms/NavButton";

const TMDB_IMAGE = "https://image.tmdb.org/t/p/w92";
const TMDB_API = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_KEY;

export default function FavoritesPage() {
  const ids = useFavoritesStore((s) => s.ids);
  const toggle = useFavoritesStore((s) => s.toggle);
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ids.size === 0) {
      setMovies([]);
      return;
    }

    async function fetchFavorites() {
      setLoading(true);
      const responses = await Promise.all(
        [...ids].map((id) =>
          axios
            .get(`${TMDB_API}/movie/${id}`, {
              params: { api_key: API_KEY, language: "pt-BR" },
            })
            .then((res) => res.data)
        )
      );
      setMovies(responses);
      setLoading(false);
    }

    fetchFavorites();
  }, [ids]);

  if (loading) return <p>Carregando favoritos...</p>;
  if (movies.length === 0)
    return <p>Você ainda não adicionou nenhum favorito.</p>;

  return (
    <div style={{ width: 640, margin: "2rem auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <label htmlFor="movie-search" style={{ fontWeight: "bold" }}>
          Meus Filmes Favoritos
        </label>
        <NavButton text="Pesquisar mais filmes <" link="/" />
      </div>
      {movies.map((movie) => (
        <HighlightedItem key={movie.id} style={{ marginBottom: 12 }}>
          <Poster src={`${TMDB_IMAGE}${movie.poster_path}`} alt={movie.title} />
          <div style={{ flex: 1 }}>
            <a
              href={`https://www.imdb.com/find?q=${encodeURIComponent(
                movie.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: "bold",
                color: "#1e40af",
                textDecoration: "none",
              }}
              dangerouslySetInnerHTML={{ __html: movie.title }}
            />
            <small> ({movie.release_date?.slice(0, 4)})</small>
            <Tags>
              {movie.genres.map((g: any) => (
                <span key={g.id}>{g.name}</span>
              ))}
            </Tags>
          </div>
          <button
            onClick={() => toggle(movie.id)}
            title="Remover dos favoritos"
          >
            <Star weight="fill" color="#f4c542" size={18} />
          </button>
        </HighlightedItem>
      ))}
    </div>
  );
}
