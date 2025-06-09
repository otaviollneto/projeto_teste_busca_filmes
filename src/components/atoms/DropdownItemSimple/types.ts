/* eslint-disable @typescript-eslint/no-explicit-any */
export interface DropdownItemSimpleProps {
  movie: any;
  fav: boolean;
  onToggleFav: () => void;
  highlight: (title: string) => string;
}
