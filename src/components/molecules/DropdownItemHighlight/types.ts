/* eslint-disable @typescript-eslint/no-explicit-any */
export interface DropdownItemHighlightProps {
  movie: any;
  fav: boolean;
  onToggleFav: () => void;
  highlight: (title: string) => string;
}
