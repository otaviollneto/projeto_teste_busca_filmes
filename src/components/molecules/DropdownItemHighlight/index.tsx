import { Poster, Tags, HighlightedItem } from "./styles";
import { Star, Star as StarOutline } from "@phosphor-icons/react";
import type { DropdownItemHighlightProps } from "./types";

export const DropdownItemHighlight = ({
  movie,
  fav,
  onToggleFav,
  highlight,
}: DropdownItemHighlightProps) => (
  <HighlightedItem>
    <Poster
      src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
      alt={movie.title}
    />
    <div style={{ flex: 1 }}>
      <a
        href={`https://www.imdb.com/find?q=${encodeURIComponent(
          movie.original_title
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ flex: 1, textDecoration: "none" }}
      >
        <div
          dangerouslySetInnerHTML={{ __html: highlight(movie.title) }}
          style={{ fontWeight: "bold", color: "#1e40af" }}
        />
        <small>({movie.release_date?.slice(0, 4)})</small>
        <Tags>
          {Array.isArray(movie.genre_names)
            ? movie.genre_names.map((g: string) => <span key={g}>{g}</span>)
            : null}
        </Tags>
      </a>
    </div>
    <button onClick={onToggleFav}>
      {fav ? (
        <Star weight="fill" color="#f4c542" size={18} />
      ) : (
        <StarOutline color="#ccc" size={18} />
      )}
    </button>
  </HighlightedItem>
);
