import { useLiveSearch } from "../../../hooks/useLiveSearch";
import { Input } from "../../atoms/Input";
import { Dropdown } from "../../organisms/Dropdown";
import { NavButton } from "../../atoms/NavButton";
import { SearchInfo } from "../../atoms/SearchInfo";

export default function LiveSearchPage() {
  const {
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
  } = useLiveSearch();

  return (
    <div style={{ width: 600, margin: "2rem auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <label htmlFor="movie-search" style={{ fontWeight: "bold" }}>
          Pesquise um filme
        </label>
        <NavButton text="Ver favoritos ★" link="/favoritos" />
      </div>

      <Input
        id="movie-search"
        placeholder="Ex: Star Wars"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
          setPage(1);
        }}
      />

      <SearchInfo />

      {loading && <p>Carregando...</p>}

      {!loading && res.length === 0 && deb && (
        <div style={{ marginTop: 12 }}>
          <p>Nenhum resultado encontrado.</p>
          <p>
            Tente buscar:{" "}
            <a
              href={`https://www.imdb.com/find?q=${encodeURIComponent(deb)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              no IMDB
            </a>{" "}
            ou{" "}
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(
                deb
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              no Google
            </a>
          </p>
        </div>
      )}

      {res.length > 0 && (
        <>
          <Dropdown
            items={res}
            onToggleFav={(id: number) => toggle(id.toString())}
            favs={new Set(Array.from(favs).map(Number))}
            highlight={(t: string) =>
              t.replace(RegExp(term, "gi"), (match) => `<b>${match}</b>`)
            }
          />

          <div style={{ marginTop: 16, fontSize: "0.9rem", color: "#555" }}>
            Página {page} de {totalPages}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 8,
            }}
          >
            <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
              ← Anterior
            </button>
            <button
              disabled={page >= totalPages}
              onClick={() => setPage(page + 1)}
            >
              Próxima →
            </button>
          </div>
        </>
      )}
    </div>
  );
}
