import { create } from "zustand";

export const useStore = create((set) => ({
  message: "",
  email: "",
  setMessage: (message) => set({ message }),
  setEmail: (email) => set({ email }),
}));
