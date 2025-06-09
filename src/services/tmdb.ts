/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const client = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env,
    language: "pt-BR",
  },
});

let genresMap: Record<number, string> = {};

async function fetchGenres() {
  if (Object.keys(genresMap).length === 0) {
    const res = await client.get("/genre/movie/list");
    genresMap = res.data.genres.reduce(
      (acc: Record<number, string>, g: { id: number; name: string }) => {
        acc[g.id] = g.name;
        return acc;
      },
      {}
    );
  }
}

export async function searchMovies(query: string, page = 1) {
  await fetchGenres();

  const res = await client.get("/search/movie", {
    params: { query, page },
  });

  const movies = res.data.results.map((m: any) => ({
    ...m,
    genre_names: m.genre_ids.map((id: number) => genresMap[id]).filter(Boolean),
  }));

  return {
    movies,
    totalPages: res.data.total_pages,
  };
}
