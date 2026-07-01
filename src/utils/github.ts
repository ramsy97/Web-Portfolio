export interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  homepage?: string | null;
}

export interface GithubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

// Full mock data matching Ramy Syafitri's real GitHub projects to use as a robust fallback
export const FALLBACK_REPOS: GithubRepo[] = [
  {
    name: "Warung-POS",
    description: "Smart Point of Sale (POS) & Inventory Management System for SMEs. Features interactive transactions, stock adjustment logs, debt management, role-based access control, low-stock alerts, and financial report exports (Excel/PDF).",
    html_url: "https://github.com/ramsy97/Warung-POS",
    stargazers_count: 5,
    forks_count: 1,
    language: "Python",
    topics: ["react", "fastapi", "typescript", "sqlite", "tailwind-css", "pos-system", "inventory-management", "fullstack"],
    updated_at: "2026-06-12T00:18:28Z",
    homepage: "https://warungkita-pos.vercel.app"
  },
  {
    name: "Real-time-Food-Ordering-System",
    description: "RestoFlow: A real-time food ordering and restaurant kitchen management application connecting customers, kitchen staff, cashiers, and admins using WebSocket. Optimized with state sync and instant status updates.",
    html_url: "https://github.com/ramsy97/Real-time-Food-Ordering-System",
    stargazers_count: 3,
    forks_count: 0,
    language: "Vue",
    topics: ["vue-3", "express-js", "postgresql", "socket-io", "prisma-orm", "typescript", "realtime-chat", "restaurant-management"],
    updated_at: "2026-05-18T23:23:14Z",
    homepage: "https://restoflow-demo.vercel.app"
  },
  {
    name: "quiz-app-menggunakan-react-js",
    description: "Interactive online quiz application built using React JS. Features dynamic timer, score tracking, question categorization, and performance breakdown.",
    html_url: "https://github.com/ramsy97/quiz-app-menggunakan-react-js",
    stargazers_count: 2,
    forks_count: 0,
    language: "JavaScript",
    topics: ["react", "javascript", "quiz-app", "interactive-ui", "state-management"],
    updated_at: "2025-02-06T03:21:57Z"
  },
  {
    name: "Sistem-Penjualan-berbasis-Web-menggunakan-PHP-dan-MySql",
    description: "D3 Diploma Final Project: Web-Based Sales Information System for food businesses. Manages transactions, stores inventory levels, and compiles automatic daily and monthly sales reports.",
    html_url: "https://github.com/ramsy97/Sistem-Penjualan-berbasis-Web-menggunakan-PHP-dan-MySql",
    stargazers_count: 2,
    forks_count: 1,
    language: "PHP",
    topics: ["php", "mysql", "sales-information-system", "diploma-final-project", "database-design"],
    updated_at: "2024-07-31T01:54:23Z"
  },
  {
    name: "aplikasi-menggunakan-reactjs",
    description: "A sandbox collection of miniature web apps (To-Do list, weather app, expense calculator) created to demonstrate core React hooks and state design patterns.",
    html_url: "https://github.com/ramsy97/aplikasi-menggunakan-reactjs",
    stargazers_count: 1,
    forks_count: 0,
    language: "JavaScript",
    topics: ["react", "javascript", "css-grid", "hooks-practice", "frontend"],
    updated_at: "2026-05-07T00:48:34Z"
  },
  {
    name: "game-pong-menggunakan-javascript",
    description: "Retro Pong game designed to run natively in browser canvas, featuring dynamic computer AI, ball speed acceleration, and audio feedback.",
    html_url: "https://github.com/ramsy97/game-pong-menggunakan-javascript",
    stargazers_count: 1,
    forks_count: 0,
    language: "JavaScript",
    topics: ["javascript", "canvas-api", "game-development", "retro-gaming"],
    updated_at: "2024-11-11T03:10:53Z"
  },
  {
    name: "gameboy",
    description: "Nostalgic game emulator interface designed using JavaScript and CSS grid to offer responsive controls and layout styling for mobile devices.",
    html_url: "https://github.com/ramsy97/gameboy",
    stargazers_count: 1,
    forks_count: 0,
    language: "JavaScript",
    topics: ["html5", "javascript", "css-variables", "emulator-ui"],
    updated_at: "2024-06-01T07:21:19Z"
  },
  {
    name: "game_sudoku",
    description: "Sudoku game board generator in JavaScript with immediate cell error validation, undo/redo logs, and three selectable levels of difficulty.",
    html_url: "https://github.com/ramsy97/game_sudoku",
    stargazers_count: 1,
    forks_count: 0,
    language: "JavaScript",
    topics: ["sudoku", "javascript", "algorithm", "puzzle-game"],
    updated_at: "2024-06-01T07:18:57Z"
  },
  {
    name: "snake_game",
    description: "Classic Snake game using canvas rendering, keeping local high scores, and utilizing responsive touch screen swipe controls.",
    html_url: "https://github.com/ramsy97/snake_game",
    stargazers_count: 1,
    forks_count: 0,
    language: "JavaScript",
    topics: ["javascript", "canvas-game", "classic-game", "localstorage"],
    updated_at: "2024-06-01T07:23:33Z"
  },
  {
    name: "todolist",
    description: "Advanced dashboard to-do application with custom theme settings, category grouping, and filter options (active, completed, overdue tasks).",
    html_url: "https://github.com/ramsy97/todolist",
    stargazers_count: 0,
    forks_count: 0,
    language: "CSS",
    topics: ["css", "todo-list", "task-management", "responsive-design"],
    updated_at: "2024-06-01T07:25:38Z"
  }
];

export const FALLBACK_PROFILE: GithubProfile = {
  login: "ramsy97",
  avatar_url: "https://avatars.githubusercontent.com/u/100412852?v=4", // fallback avatar placeholder or actual user avatar
  html_url: "https://github.com/ramsy97",
  name: "Ramy Syafitri",
  bio: "Software Engineer & Administration Specialist. Proficient in React, Node.js, FastAPIs and detailed spreadsheet automations.",
  public_repos: 14,
  followers: 12,
  following: 15
};

export async function fetchGithubProfile(username: string = "ramsy97"): Promise<GithubProfile> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error("Failed to fetch profile");
    return await res.json();
  } catch (err) {
    console.warn("Using fallback profile:", err);
    return FALLBACK_PROFILE;
  }
}

export async function fetchGithubRepos(username: string = "ramsy97"): Promise<GithubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
    if (!res.ok) throw new Error("Failed to fetch repos");
    const repos: any[] = await res.json();
    
    // Process repositories to add custom topics/descriptions if they are lacking
    return repos.map(repo => {
      // Find matching enriched info from fallback data
      const matched = FALLBACK_REPOS.find(f => f.name.toLowerCase() === repo.name.toLowerCase());
      return {
        name: repo.name,
        description: repo.description || matched?.description || "Personal web application developed by Ramy Syafitri.",
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count || matched?.stargazers_count || 0,
        forks_count: repo.forks_count || matched?.forks_count || 0,
        language: repo.language || matched?.language || "JavaScript",
        topics: repo.topics && repo.topics.length > 0 ? repo.topics : (matched?.topics || []),
        updated_at: repo.updated_at,
        homepage: repo.homepage || matched?.homepage || null
      };
    });
  } catch (err) {
    console.warn("Using fallback repositories:", err);
    return FALLBACK_REPOS;
  }
}

// Generate statistical insights from repositories
export function calculateLanguageStats(repos: GithubRepo[]) {
  const counts: { [key: string]: number } = {};
  let total = 0;
  
  repos.forEach(repo => {
    if (repo.language) {
      counts[repo.language] = (counts[repo.language] || 0) + 1;
      total++;
    }
  });

  return Object.entries(counts)
    .map(([name, count]) => ({
      name,
      value: count,
      percentage: Math.round((count / total) * 100)
    }))
    .sort((a, b) => b.value - a.value);
}

// Deterministic pseudo-random number generator (seeded) to avoid hydration mismatches
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Generate contributions structure (mock representation of last 12 months for GitHub graph)
export function getMockContributions() {
  const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  // Generate deterministic data for activity blocks (53 weeks * 7 days)
  const grid: number[] = [];
  
  for (let i = 0; i < 365; i++) {
    // Use seeded random so server and client produce the same values
    const rand = seededRandom(i + 42);
    let level = 0;
    if (rand > 0.85) level = 4;
    else if (rand > 0.7) level = 3;
    else if (rand > 0.5) level = 2;
    else if (rand > 0.3) level = 1;
    
    grid.push(level);
  }
  
  return {
    months,
    grid,
    totalCommits: 456
  };
}
