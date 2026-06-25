import { create } from "zustand";
import type { AuthUser } from "@/types/api";

type AuthState = {
  token: string | null;
  user: AuthUser | null;
  isAuthenticated: boolean;
  setToken: (token: string | null, user?: AuthUser | null) => void;
  logout: () => void;
  hydrate: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isAuthenticated: false,
  setToken: (token, user = null) => {
    if (typeof window !== "undefined") {
      if (token) {
        window.localStorage.setItem("token", token);
        if (user) {
          window.localStorage.setItem("user", JSON.stringify(user));
        }
      } else {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
      }
    }

    set({
      token,
      user,
      isAuthenticated: Boolean(token),
    });
  },
  logout: () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user");
    }

    set({
      token: null,
      user: null,
      isAuthenticated: false,
    });
  },
  hydrate: () => {
    if (typeof window === "undefined") {
      return;
    }

    const token = window.localStorage.getItem("token");
    const storedUser = window.localStorage.getItem("user");
    let user: AuthUser | null = null;

    if (storedUser) {
      try {
        user = JSON.parse(storedUser) as AuthUser;
      } catch {
        user = null;
      }
    }

    set({
      token,
      user,
      isAuthenticated: Boolean(token),
    });
  },
}));
