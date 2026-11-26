/* All copy is ported verbatim from the static site (legacy/index.html,
   legacy/case-study-dovira.html). No projects, numbers or links were invented. */

export const SITE = {
  name: "Khalid Bin Masud",
  title: "Khalid Bin Masud — Full-Stack Developer",
  email: "khalidmasud22@gmail.com",
  github: "https://github.com/Khalid635",
  githubHandle: "github.com/Khalid635",
  linkedin: "https://www.linkedin.com/in/khalid-bin-masud-817a913b9/",
  codeforces: "https://codeforces.com/profile/Khalid_Bin_Masud",
  codeforcesHandle: "Khalid_Bin_Masud",
  previousPortfolio: "https://khalidbinmasud-portfolio.netlify.app/",
  liveUrl: "https://khalid-portfolio-lac.vercel.app/",
} as const;

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "activity", label: "Activity" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
] as const;

export const TYPED_PHRASES = [
  "REST APIs with JWT & PostgreSQL",
  "real products — live on the internet",
  "DSA solutions in C++, every week",
  "AI / ML with Python, step by step",
  "backends that hold up in production",
] as const;

export const TERMINAL_COMMANDS: Record<string, string> = {
  help:
    "Available commands:\n  help      — show this list\n  whoami    — who is Khalid?\n  skills    — languages, frontend, backend, databases\n  projects  — the 5 shipped projects\n  contact   — email and profiles\n  clear     — clear the terminal",
  whoami:
    "Khalid Bin Masud — CSE student at Presidency University, Dhaka.\nFull-stack developer. Learning by shipping, now going deeper into AI/ML.",
  skills:
    "Languages:  Python, Java, C, C++, JavaScript\nFrontend:   React 19, Tailwind CSS, Bootstrap 5, HTML/CSS, Axios, Vite\nBackend:    FastAPI, SQLAlchemy, Pydantic, JWT Auth, REST APIs\nDatabases:  PostgreSQL, SQLite\nDeployment: Vercel, Render, Netlify, GitHub Pages",
  projects:
    "1. DOVIRA — open-source AI download manager (live: getdovira.vercel.app)\n2. Hisab AI — AI receipt scanner & expense manager\n3. RAG Web — document Q&A with citations\n4. Swift Logistics — parcel booking & tracking (live demo)\n5. SaveClip — video downloader web app (live)",
  contact:
    "Email:      khalidmasud22@gmail.com\nGitHub:     github.com/Khalid635\nLinkedIn:   linkedin.com/in/khalid-bin-masud-817a913b9\nCodeforces: codeforces.com/profile/Khalid_Bin_Masud",
};

export const STATS = [
  { value: 5, label: "Projects shipped", sub: "Full-stack apps, live on the web" },
  { value: 3, label: "Live sites", sub: "Swift Logistics, SaveClip & DOVIRA" },
  { value: 28, label: "Codeforces problems", sub: "Solved in C++ & counting" },
  { value: "4.0", label: "Phitron CGPA", sub: "Programming & Problem Solving track" },
] as const;

export const MARQUEE_ITEMS = [
  "Python",
  "FastAPI",
  "React",
  "PostgreSQL",
  "Tailwind CSS",
  "JavaScript",
  "C++",
  "SQLAlchemy",
  "JWT Auth",
  "REST APIs",
  "Git & GitHub",
  "Docker",
] as const;

export type ProjectCategory = "ai" | "live" | "opensource";

export type Project = {
  id: string;
  title: string;
  kind: string;
  description: string;
  features: string[];
  stack: string[];
  image: string | null;
  imageAlt: string;
  mediaTag: string;
  metrics?: string[];
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
  caseStudy?: boolean;
  note?: string;
  demoLogin?: { user: string; pass: string };
  categories: ProjectCategory[];
  alt?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "dovira",
    title: "DOVIRA",
    kind: "Full Stack · Open Source",
    description:
      "Open-source AI download manager — “Download Smarter. Go Further.” Download videos and audio with quality choice, audio-only MP3, a floating Download button, and an AI Assistant that takes English and Bangla commands. Free, no ads, no tracking.",
    features: [
      "Quality choice or audio-only MP3, floating Download button",
      "AI Assistant takes English & Bangla commands",
      "Self-healing yt-dlp auto-update, auto-start with Windows",
    ],
    stack: ["Electron", "React", "TypeScript", "yt-dlp", "FFmpeg"],
    image: "/images/dovira-app.png",
    imageAlt: "DOVIRA app — Home view with a YouTube download in progress",
    mediaTag: "Open source · Free",
    metrics: ["v1.4.3", "15 releases", "68 commits", "374 unit tests", "8 E2E tests"],
    liveUrl: "https://getdovira.vercel.app",
    liveLabel: "Live site",
    repoUrl: "https://github.com/Khalid635/dovira",
    caseStudy: true,
    categories: ["ai", "live", "opensource"],
  },
  {
    id: "hisab-ai",
    title: "Hisab AI",
    kind: "Full Stack · AI",
    description:
      "AI receipt scanner and expense manager for Bangladeshi SMEs and freelancers — Gemini vision reads receipts, then expenses, categories, a dashboard and CSV export keep the books tidy.",
    features: [
      "Gemini vision extracts data from receipts",
      "Expenses CRUD, categories, dashboard, CSV export",
      "Built for Bangladeshi SMEs & freelancers",
    ],
    stack: ["FastAPI", "React 19", "SQLite", "Gemini", "JWT"],
    image: "/images/hisab-ai.png",
    imageAlt:
      "Hisab AI landing page — 'Your business hisab, done by AI' with the receipt-to-expense flow",
    mediaTag: "Landing page",
    note: "Private repo",
    categories: ["ai"],
    alt: true,
  },
  {
    id: "rag-web",
    title: "RAG Web",
    kind: "Full Stack · AI",
    description:
      "Document question-answering app — upload documents, ask questions, and get answers with citations, powered by Gemini embeddings and Gemini Flash.",
    features: [
      "Upload docs, ask questions, get answers with citations",
      "Gemini embeddings (768-dim) + Gemini Flash",
      "Email verification, 100 questions/month quota",
    ],
    stack: ["FastAPI", "Next.js", "Supabase", "pgvector", "Gemini"],
    image: "/images/rag-web.png",
    imageAlt: "RAG Web homepage — 'Understand more. Search less.' with a cited-answer example",
    mediaTag: "Homepage",
    metrics: ["Phases 1–3 done", "34 backend tests", "12/12 E2E"],
    note: "No public repo",
    categories: ["ai"],
  },
  {
    id: "swift-logistics",
    title: "Swift Logistics",
    kind: "Full Stack · Live demo",
    description:
      "Parcel booking & tracking platform — admins approve users, staff manage parcels, anyone can track by ID.",
    features: [
      "Role-based access with JWT auth & bcrypt",
      "4-stage timeline: Pending → Delivered",
      "District → Upazila → Thana hierarchy, CSV export",
    ],
    stack: ["React 19", "FastAPI", "PostgreSQL", "JWT"],
    image: "/images/asset-2.png",
    imageAlt:
      "Swift Logistics admin panel in full — parcel counts and the complete add-a-new-parcel form",
    mediaTag: "Featured · Live demo",
    liveUrl: "https://swift-logistics-frontend.vercel.app/",
    liveLabel: "Live demo",
    repoUrl: "https://github.com/Khalid635/Swift-logistics",
    demoLogin: { user: "user@swiftlogistics.com", pass: "user12345" },
    categories: ["live"],
  },
  {
    id: "saveclip",
    title: "SaveClip",
    kind: "Full Stack · Live app",
    description:
      "Video downloader web app — paste a link, preview the media, download it. FastAPI backend wrapping yt-dlp & FFmpeg.",
    features: [
      "Media info & format selection via /api/info",
      "Download pipeline with FFmpeg processing",
      "Swagger API docs & /health check endpoint",
    ],
    stack: ["React", "FastAPI", "yt-dlp", "FFmpeg"],
    image: null,
    imageAlt: "",
    mediaTag: "SaveClip — how it works",
    liveUrl: "https://saveclip-green.vercel.app/",
    liveLabel: "Live app",
    repoUrl: "https://github.com/Khalid635/saveclip",
    categories: ["live"],
    alt: true,
  },
];

export const SKILL_GROUPS = [
  { n: "01", title: "Languages", items: ["Python", "Java", "C", "C++", "JavaScript"] },
  {
    n: "02",
    title: "Frontend",
    items: ["React 19", "Tailwind CSS", "Bootstrap 5", "HTML / CSS", "Axios", "Vite"],
  },
  {
    n: "03",
    title: "Backend",
    items: ["FastAPI", "SQLAlchemy", "Pydantic", "JWT Auth", "REST APIs", "yt-dlp · FFmpeg"],
  },
  { n: "04", title: "Databases", items: ["PostgreSQL", "SQLite"] },
  {
    n: "05",
    title: "Deployment",
    items: ["Vercel", "Render", "Netlify", "GitHub Pages"],
  },
  { n: "06", title: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Docker (basics)"] },
] as const;

export const JOURNEY = [
  {
    when: "2025",
    title: "Started B.Sc. in CSE — Presidency University",
    text: "Began the degree in Dhaka and, in parallel, Phitron's Programming & Problem Solving track: C, C++, then Data Structures & Algorithms.",
  },
  {
    when: "2025 — 2026",
    title: "Phitron track completed — CGPA 4.0",
    text: "Finished the first two semesters with a perfect CGPA, then moved from console programs to the web: Python, FastAPI and React.",
  },
  {
    when: "2026",
    title: "Five projects built & shipped",
    text: "Swift Logistics and SaveClip — the full-stack apps — are live on Vercel & Render. DOVIRA, Hisab AI and RAG Web are the newest builds.",
  },
  {
    when: "NOW — LATE 2026",
    title: "AI/ML path + daily DSA",
    text: "Studying AI Programming with Python on Phitron's AI/ML Batch 3, practising on Kaggle's free GPUs, keeping the Codeforces streak alive — and looking for internship opportunities.",
    now: true,
  },
  {
    when: "NEXT",
    title: "Internships & bigger products",
    text: "Real team experience, production code reviews, and ML features inside real products — the bridge from student projects to professional engineering.",
  },
] as const;

export const GOAL_POINTS = [
  "Master DSA & core CS fundamentals",
  "Ship full-stack products end to end",
  "Grow into AI/ML engineering",
  "Contribute, collaborate, learn in public",
] as const;

export const CASE_STUDY = {
  tag: "Case study — DOVIRA",
  title: "DOVIRA — an AI download manager, built in the open.",
  intro:
    "“Download Smarter. Go Further.” A free, open-source desktop app that downloads video and audio with quality choice, an AI Assistant, and no ads, no tracking, no paywall. Built in November 2026 — fifteen releases in five days, all in public on GitHub.",
  liveUrl: "https://getdovira.vercel.app",
  repoUrl: "https://github.com/Khalid635/dovira",
  launchPost:
    "https://www.linkedin.com/posts/khalid-bin-masud-817a913b9_buildinpublic-opensource-electron-share-7531080292997160960-Xa1Y/",
  stats: [
    { value: "v1.4.3", label: "Current version" },
    { value: "15", label: "Releases" },
    { value: "68", label: "Commits" },
    { value: "374", label: "Unit tests passing" },
    { value: "8/8", label: "Playwright E2E tests" },
    { value: "≈68%", label: "Line coverage" },
  ],
  blocks: [
    {
      heading: "The problem",
      paragraphs: [
        "Most download managers are closed-source, paid, Windows-only, or abandoned. The open ones are often single-platform or unmaintained. I wanted one that is free, open, cross-platform — and smart: it should understand what I ask for in plain English or Bangla, and keep working when video sites change.",
      ],
    },
    {
      heading: "What it does",
      list: [
        "Downloads video and audio with quality choice, or audio-only MP3",
        "A floating Download button in the browser, plus a browser extension that pairs with the app",
        "An AI Assistant that takes commands in English and Bangla",
        "Playlist and channel downloads, with a fallback when a direct download fails",
        "Self-healing engine updates — when YouTube breaks, the app updates yt-dlp itself and retries",
        "Auto-start with Windows, a progress window, and download history",
      ],
    },
    {
      heading: "How it is built",
      paragraphs: [
        "Electron + React + TypeScript + Tailwind, with electron-vite, Zustand for state and SQLite for history. The download engines are yt-dlp, aria2 and FFmpeg, bundled with the app. A small local API runs on the machine so the browser extension can talk to the app securely, with a Bearer token. The AI is rule-based first — an optional local model stays off by default, so the app works with no setup and no account.",
      ],
    },
    {
      heading: "Hard bugs I fixed",
      list: [
        "YouTube broke overnight. Video sites change constantly — I added a startup auto-update for yt-dlp plus a self-heal that updates the engine and retries the download once.",
        "A real bug caught by tests. My Playwright E2E suite found the download code requesting 32 connections when aria2 caps at 16 — fixed in the adaptive-network code.",
        "A dialog nobody could click. At 1280×800 the Add-download dialog's footer buttons were unreachable by mouse — fixed with a scrollable dialog, verified by a real click in the E2E suite.",
        "A corrupt cookies file. A bad cookies export used to break downloads — the app now validates the file and skips it safely instead of failing.",
      ],
    },
    {
      heading: "What is next",
      paragraphs: [
        "Public launch, a video on the README, and install validation on Mac and Linux. The code is MIT-licensed and every release, issue and fix is on GitHub.",
      ],
    },
  ],
} as const;
