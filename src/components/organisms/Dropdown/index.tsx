import { List, Item } from "./styles";
import { useKeyboardNavigation } from "../../../hooks/useKeyboardNavigation";
import type { DropdownProps } from "./types";
import { DropdownItemSimple } from "../../atoms/DropdownItemSimple";
import { DropdownItemHighlight } from "../../molecules/DropdownItemHighlight";

export function Dropdown({
  items,
  onToggleFav,
  favs,
  highlight,
}: DropdownProps) {
  const { activeIndex } = useKeyboardNavigation(items);

  return (
    <List role="listbox">
      {items.map((movie, index) => {
        const isFirstWithPoster = index === 0 && movie.poster_path;
        const isActive = index === activeIndex;
        const isFav = favs.has(movie.id);

        return (
          <Item key={movie.id} role="option" active={isActive}>
            {isFirstWithPoster ? (
              <DropdownItemHighlight
                movie={movie}
                fav={isFav}
                onToggleFav={() => onToggleFav(movie.id)}
                highlight={highlight}
              />
            ) : (
              <DropdownItemSimple
                movie={movie}
                fav={isFav}
                onToggleFav={() => onToggleFav(movie.id)}
                highlight={highlight}
              />
            )}
          </Item>
        );
      })}
    </List>
  );
}
