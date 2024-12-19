import { create } from "zustand";

export const useFavoritesJobs = create((set, get) => ({
  favorites: [], //Storing array of saved jobs

  addFavorite: (job) =>
    set((state) => ({
      favorites: [...state.favorites, job],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((job) => job.id !== id),
    })),

  //Checking if its already saved or not

  isFavorite: (id) => {
    const favorites = get().favorites;
    return favorites.some((job) => job.id === id);
  },
}));
