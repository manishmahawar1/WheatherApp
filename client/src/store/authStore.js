import { create } from "zustand";
import api from "../services/api.js";

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  checkingAuth: true,

  signup: async (formData) => {
    try {
      set({ loading: true });

      const res = await api.post("/api/auth/signup", formData);

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

      const res = await api.post("/api/auth/login", formData);

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
    await api.post("/api/auth/logout");

    set({ user: null });
  },

  updateUser: async (data) => {
    try {
      set({ loading: true });

      const res = await api.patch("/api/auth/user", data);

      set({
        user: res.data.user,
        loading: false,
      });

      return res.data;
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  checkAuth: async () => {
    try {
      const res = await api.get("/api/auth/me");

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
