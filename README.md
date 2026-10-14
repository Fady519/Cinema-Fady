<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F0F0F,50:DC2626,100:991B1B&height=240&section=header&text=Cinema%2B&fontSize=68&fontColor=ffffff&fontAlignY=38&desc=Modern%20Movie%20Discovery%20%26%20Streaming%20Web%20Platform%20%7C%20React%2019%20%2B%20TMDB%20API&descSize=18&descAlignY=58&descColor=fca5a5" width="100%"/>

</div>

<div align="center">

[![Live Demo](https://img.shields.io/badge/🎬%20Live%20Streaming%20Platform-Visit%20Now-DC2626?style=for-the-badge&logo=googleplay&logoColor=white)](https://fady519.github.io/Cinema-Fady/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Source%20Code-181717?style=for-the-badge&logo=github)](https://github.com/Fady519/Cinema-Fady)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fady%20Kaiser-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fady-kaiser/)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit%20Now-6366F1?style=for-the-badge)](https://fady519.github.io/MyPortfolio2/)

</div>

---

<div align="center">

## 🍿 Discover what's worth watching — instantly.
**A Netflix-inspired streaming discovery & entertainment platform powered by the TMDB REST API.**  
*React 19 · Vite · React Router 7 · Tailwind CSS · Framer Motion · React YouTube · Context API*  
Engineered with production-grade UI responsiveness, fluid micro-animations, multi-category exploration, and integrated HD trailer streaming.

</div>

---

## 🖥️ Live Preview

<div align="center">

> 🔗 **Live Demo:** [fady519.github.io/Cinema-Fady](https://fady519.github.io/Cinema-Fady/)

</div>

### 1. Hero Spotlight & Real-Time Trending Carousels
Dynamic backdrop hero featuring randomized trending titles, instant playback triggers, synopsis previews, and categorized horizontal scrolling rows.
![Hero & Trending](docs/screenshots/01_hero_trending.png)

### 2. Immersive Details, Cast Lineup & Interactive Trailer Integration
Deep-dive movie intelligence displaying high-res key art, synopsis, release metadata, vote ratings, full cast carousel, and embedded YouTube trailer streaming.
![Movie Details](docs/screenshots/02_movie_details.png)

### 3. Dynamic Genre Filtering & Infinite Exploration Catalog
Comprehensive media catalog with multi-genre dropdown filtering (Action, Comedy, Horror, Romance, Sci-Fi, Thriller) and responsive card scaling.
![Genre Catalog](docs/screenshots/03_genre_catalog.png)

### 4. Multi-Entity Real-Time Search with Live Filtering
Instant multi-match search engine parsing movies, TV series, and media titles with real-time query parameters and fallback artwork handling.
![Search Engine](docs/screenshots/04_search_modal.png)

### 5. LocalStorage-Backed Persistent Watchlist ("My List")
Client-side state persistence allowing users to bookmark and manage their personal watchlist across sessions without external authentication bottlenecks.
![Watchlist](docs/screenshots/05_watchlist.png)

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🔥 **Hero Spotlight Banner** | Automated random showcase of high-rated weekly trending releases with dynamic high-resolution backdrops |
| 🎬 **Live HD Trailer Player** | Embedded video playback engine powered by `react-youtube` fetching official TMDB teaser & trailer keys |
| 🔍 **Multi-Entity Search Engine** | Fast multi-search query matching against TMDB database with URL query string synchronization |
| 🎭 **Multi-Genre Exploration** | Dedicated Movies & TV Shows explorers with genre filtering across 10+ cinematic categories |
| ❤️ **Persistent Watchlist (My List)** | Client-side bookmarking engine storing favorite movies and shows with instantaneous reactive toggling |
| 🔐 **Client Auth Gate & Route Guard** | Protected route wrapper guarding content views, profile settings, and personal watchlists |
| 💀 **Shimmer Loading Skeletons** | Polished skeleton states mimicking layout geometry to prevent content layout shifts (CLS) |
| 📱 **Mobile-First Responsive UI** | Custom Tailwind grid system adapting seamlessly from mobile handhelds to ultra-wide 4K monitors |
| ⚡ **Vite + React 19 Modern Architecture** | Sub-second cold starts, optimized ESM bundles, and modern React 19 functional hooks |

---

## 🏗️ Architecture & Component Flow

```
┌────────────────────────────────────────────────────────┐
│                   Cinema+ Platform                     │
│               React 19 + React Router 7                │
└───────────────────────────┬────────────────────────────┘
                            │
       ┌────────────────────┴────────────────────┐
       ▼                                         ▼
┌──────────────┐                          ┌──────────────┐
│ Public Gate  │                          │  Protected   │
│ SignIn/SignUp│                          │ Content Hub  │
└──────────────┘                          └──────┬───────┘
                                                 │
          ┌───────────────────────┬──────────────┴───────────────┬──────────────────────┐
          ▼                       ▼                              ▼                      ▼
   ┌─────────────┐        ┌──────────────┐               ┌──────────────┐        ┌──────────────┐
   │ Home & Hero │        │ Explore Grid │               │ Media Detail │        │  Watchlist   │
   │ Row Sliders │        │ Multi-Genre  │               │ & HD Player  │        │ (My List)    │
   └──────┬──────┘        └──────┬───────┘               └──────┬───────┘        └──────┬───────┘
          │                      │                              │                       │
          └──────────────────────┴───────────────┬──────────────┴───────────────────────┘
                                                 ▼
                              ┌──────────────────────────────────┐
                              │     TMDB REST API Services       │
                              │ Trending · Discover · Credits    │
                              │ Videos · Multi-Search            │
                              └──────────────────────────────────┘
```

---

## 🔌 TMDB API Integration

Cinema+ consumes **8 high-throughput REST endpoints** from [The Movie Database (TMDB) API](https://developer.themoviedb.org/docs):

```
Base URL: https://api.themoviedb.org/3
```

| Endpoint | Method | Purpose & Usage in Cinema+ |
|---|---|---|
| `/trending/all/week` | `GET` | Powers the randomized hero spotlight and top trending slider |
| `/discover/movie` | `GET` | Fetches filtered catalog movies with sorting and genre IDs |
| `/discover/tv` | `GET` | Fetches TV shows and streaming series |
| `/movie/top_rated` | `GET` | Populates the top-rated critically acclaimed movie row |
| `/search/multi` | `GET` | Real-time search query matching across all titles |
| `/movie/{id}` | `GET` | Retrieves full movie metadata, runtime, overview, and budget |
| `/movie/{id}/credits` | `GET` | Retrieves director and top 10 cast members with profile photos |
| `/movie/{id}/videos` | `GET` | Resolves official YouTube trailer video keys for HD playback |

---

## 🛠️ Tech Stack & Libraries

<div align="center">

### Frontend Core & UI
![React](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite%208-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router%207-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS%203.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

### Media & Networking
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![TMDB](https://img.shields.io/badge/TMDB%20REST%20API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)
![YouTube API](https://img.shields.io/badge/React%20YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide%20Icons-F56565?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-181717?style=for-the-badge&logo=github&logoColor=white)

</div>

---

## 📁 Project Structure

```
Cinema-Fady/
├── docs/
│   └── screenshots/              # High-resolution production showcase captures
│       ├── 01_hero_trending.png
│       ├── 02_movie_details.png
│       ├── 03_genre_catalog.png
│       ├── 04_search_modal.png
│       └── 05_watchlist.png
├── public/                       # Static public assets & favicons
├── src/
│   ├── components/               # Modular UI building blocks
│   │   ├── AuthInput.jsx         # Reusable floating label input
│   │   ├── ExploreGrid.jsx       # Multi-category media grid with genre select
│   │   ├── Footer.jsx            # Cinema+ footer with brand links
│   │   ├── MovieDetail.jsx       # Metadata, backdrop, cast & actions
│   │   ├── Navbar.jsx            # Responsive navigation & search input
│   │   ├── Row.jsx               # Horizontal movie poster carousel
│   │   └── ScrollToTop.jsx       # Automated route scroll reset
│   ├── pages/                    # Route-level views
│   │   ├── Account.jsx           # User profile & preferences
│   │   ├── Help.jsx              # Customer support & FAQ
│   │   ├── Home.jsx              # Hero showcase & trending rows
│   │   ├── Movies.jsx            # Discover movies catalog
│   │   ├── MyList.jsx            # LocalStorage personal watchlist
│   │   ├── NewAndPopular.jsx     # Latest releases & buzz titles
│   │   ├── NotFound.jsx          # Custom 404 error experience
│   │   ├── Player.jsx            # HD YouTube trailer streaming player
│   │   ├── Search.jsx            # Live query results explorer
│   │   ├── SignIn.jsx            # Access portal & authentication
│   │   ├── SignUp.jsx            # User registration portal
│   │   └── TVShows.jsx           # Discover television series
│   ├── routes/
│   │   └── AppRoutes.jsx         # HashRouter routing table & route guards
│   ├── App.jsx                   # Root layout & navbar conditional visibility
│   ├── index.css                 # Tailwind directives & custom animations
│   └── main.jsx                  # React 19 root bootstrap
├── index.html                    # HTML5 application shell
├── package.json                  # NPM dependencies & deploy scripts
├── tailwind.config.js            # Design tokens & color extensions
└── vite.config.js                # Vite build configuration
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `v18.0.0` or higher
- [TMDB API Key](https://www.themoviedb.org/settings/api) *(Free registration)*

### Installation & Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/Fady519/Cinema-Fady.git
cd Cinema-Fady

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Production Build & Deployment

```bash
# Build optimized static bundle
npm run build

# Deploy directly to GitHub Pages
npm run deploy
```

---

## 📬 Contact & Connect

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fady%20Kaiser-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fady-kaiser/)
[![GitHub](https://img.shields.io/badge/GitHub-Fady519-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Fady519)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit%20Now-6366F1?style=for-the-badge)](https://fady519.github.io/MyPortfolio2/)

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F0F0F,50:DC2626,100:991B1B&height=100&section=footer" width="100%"/>

**⭐ If you liked Cinema+, feel free to give it a star on GitHub!**

</div>
