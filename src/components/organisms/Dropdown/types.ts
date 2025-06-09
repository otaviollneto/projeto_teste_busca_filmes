export interface DropdownProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  onToggleFav: (id: number) => void;
  favs: Set<number>;
  highlight: (title: string) => string;
}
