import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { FavoritesState } from "./types";

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      ids: new Set(),
      toggle: (id) => {
        const s = new Set(get().ids);
        if (s.has(id)) {
          s.delete(id);
        } else {
          s.add(id);
        }
        set({ ids: s });
      },
    }),
    {
      name: "favorites",
      partialize: (state) => ({ ids: [...state.ids] }),
      merge: (persistedState, currentState) => ({
        ...currentState,
        ids: new Set((persistedState as { ids: string[] }).ids),
      }),
    }
  )
);
