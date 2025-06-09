export interface FavoritesState {
  ids: Set<string>;
  toggle: (id: string) => void;
}
