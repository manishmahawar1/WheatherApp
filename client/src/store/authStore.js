import { create } from "zustand";
import api from "../services/api.js";

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  checkingAuth: true,

  signup: async (formData) => {
    try {
      set({ loading: true });

      const res = await api.post("/auth/signup", formData);

      set({
        user: res.data,
        loading: false,
      });

      return res.data;
    } catch (error) {
      set({ loading: false });

      throw error;
    }
  },

  login: async (formData) => {
    try {
      set({ loading: true });

      const res = await api.post("/auth/login", formData);

      set({
        user: res.data,
        loading: false,
      });

      return res.data;
    } catch (error) {
      set({ loading: false });

      throw error;
    }
  },

  logout: async () => {
    await api.post("/auth/logout");

    set({ user: null });
  },

  checkAuth: async () => {
    try {
      const res = await api.get("/auth/me");

      set({
        user: res.data,
        checkingAuth: false,
      });
    } catch (error) {
      set({
        user: null,
        checkingAuth: false,
      });
    }
  },
}));

export default useAuthStore;
