/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { searchMovies } from "../services/tmdb";
import { useDebounce } from "./useDebounce";
import { useFavoritesStore } from "../store/favorites";

export function useLiveSearch() {
  const [term, setTerm] = useState("");
  const [res, setRes] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const favs = useFavoritesStore((s) => s.ids);
  const toggle = useFavoritesStore((s) => s.toggle);
  const deb = useDebounce(term, 300);

  useEffect(() => {
    if (!deb) {
      setRes([]);
      return;
    }
    setLoading(true);
    searchMovies(deb, page)
      .then((r) => {
        setRes(r.movies);
        setTotalPages(r.totalPages);
      })
      .finally(() => setLoading(false));
  }, [deb, page]);

  return {
    term,
    setTerm,
    page,
    setPage,
    res,
    totalPages,
    loading,
    favs,
    toggle,
    deb,
  };
}
