import { create } from "zustand";
import { fetchGithubProfile, fetchGithubRepos, GithubProfile, GithubRepo } from "../utils/github";
import { Language } from "../utils/translations";

interface PortfolioState {
  theme: "light" | "dark";
  recruiterMode: boolean;
  language: Language;
  githubRepos: GithubRepo[];
  githubProfile: GithubProfile | null;
  loading: boolean;
  error: string | null;
  activeSection: string;
  
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
  setRecruiterMode: (mode: boolean) => void;
  setActiveSection: (section: string) => void;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  fetchData: () => Promise<void>;
}

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
  theme: "light",
  recruiterMode: false,
  language: "id",
  githubRepos: [],
  githubProfile: null,
  loading: false,
  error: null,
  activeSection: "home",

  setTheme: (theme) => {
    set({ theme });
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  },

  toggleTheme: () => {
    const nextTheme = get().theme === "light" ? "dark" : "light";
    get().setTheme(nextTheme);
  },

  setRecruiterMode: (recruiterMode) => set({ recruiterMode }),
  
  setActiveSection: (activeSection) => set({ activeSection }),

  setLanguage: (language) => set({ language }),

  toggleLanguage: () => {
    const next: Language = get().language === "id" ? "en" : "id";
    set({ language: next });
  },

  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const [profile, repos] = await Promise.all([
        fetchGithubProfile("ramsy97"),
        fetchGithubRepos("ramsy97")
      ]);
      set({ githubProfile: profile, githubRepos: repos, loading: false });
    } catch (err: any) {
      set({ error: err.message || "Failed to load data", loading: false });
    }
  }
}));
