import { Star, Star as StarOutline } from "@phosphor-icons/react";
import type { DropdownItemSimpleProps } from "./types";

export const DropdownItemSimple = ({
  movie,
  fav,
  onToggleFav,
  highlight,
}: DropdownItemSimpleProps) => (
  <>
    <a
      href={`https://www.imdb.com/find?q=${encodeURIComponent(
        movie.original_title
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ flex: 1, textDecoration: "none" }}
    >
      <span dangerouslySetInnerHTML={{ __html: highlight(movie.title) }} />
    </a>
    <button onClick={onToggleFav}>
      {fav ? (
        <Star weight="fill" color="#f4c542" size={18} />
      ) : (
        <StarOutline color="#ccc" size={18} />
      )}
    </button>
  </>
);
