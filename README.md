<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F0F0F,50:DC2626,100:991B1B&height=220&section=header&text=Cinema%2B&fontSize=75&fontColor=ffffff&fontAlignY=38&desc=Streaming%20Discovery%20Platform%20%E2%80%94%20Powered%20by%20TMDB&descSize=20&descAlignY=58&descColor=ffffff" width="100%"/>

</div>

<div align="center">

[![Live Demo](https://img.shields.io/badge/🎬%20Live%20Demo-Visit%20Now-DC2626?style=for-the-badge)](https://fady519.github.io/Cinema-Fady/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Source%20Code-181717?style=for-the-badge&logo=github)](https://github.com/Fady519/Cinema-Fady)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fady%20Kaiser-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fady-kaiser/)

</div>

---

<div align="center">

## 🎥 Discover what's worth watching — instantly.

A Netflix-inspired streaming discovery platform powered by the **TMDB API**.  
Trending titles. Genre filters. Real-time search. Your personal watchlist. All in one place.

</div>

---

## 🖥️ Live Preview

<div align="center">

> 🔗 **[fady519.github.io/Cinema-Fady](https://fady519.github.io/Cinema-Fady/)**

> _Add a screenshot or GIF here_

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔥 **Trending Titles** | Real-time trending movies & shows via TMDB API |
| 🔍 **Smart Search** | Debounced input handling for smooth, instant results |
| 🎭 **Genre Filters** | Browse content filtered by genre |
| ❤️ **My List** | Persistent watchlist using Context API — no backend needed |
| 🔐 **Protected Routes** | 3 content routes behind an auth gate with redirect restore |
| 💀 **Skeleton Screens** | 5 async data states covered for consistent UX |
| 📱 **Mobile-First UI** | Fully responsive across all screen sizes |
| ⚡ **8 TMDB Endpoints** | Trending, search, genres, details, and more |

---

## 🛠️ Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Context API](https://img.shields.io/badge/Context%20API-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TMDB](https://img.shields.io/badge/TMDB%20API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-181717?style=for-the-badge&logo=github&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

---

## 🔌 TMDB API Integration

This app consumes **8 endpoints** from the [TMDB REST API](https://developer.themoviedb.org/docs):

```
Base URL: https://api.themoviedb.org/3
```

| Endpoint | Description |
|---|---|
| `GET /trending/all/week` | Fetch weekly trending titles |
| `GET /trending/movie/day` | Fetch daily trending movies |
| `GET /trending/tv/day` | Fetch daily trending TV shows |
| `GET /search/multi` | Real-time multi-search |
| `GET /genre/movie/list` | Fetch movie genres |
| `GET /genre/tv/list` | Fetch TV show genres |
| `GET /movie/{id}` | Fetch movie details |
| `GET /tv/{id}` | Fetch TV show details |

---

## 🔐 Authentication & Route Protection

```
/login          → Public
/register       → Public
/home           → 🔒 Protected
/movie/:id      → 🔒 Protected
/mylist         → 🔒 Protected
```

> Unauthenticated users are redirected to `/login` and returned to their **intended destination** after successful login.

---

## 📁 Project Structure

```
Cinema-Fady/
│
├── public/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── MovieCard.jsx
│   │   ├── SkeletonCard.jsx
│   │   └── ...
│   ├── pages/             # Route-level pages
│   │   ├── Login.jsx
│   │   ├── Home.jsx
│   │   ├── MovieDetails.jsx
│   │   └── MyList.jsx
│   ├── context/           # Context API — My List & Auth state
│   ├── services/          # Axios + TMDB API calls
│   ├── routes/            # Protected route components
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── vite.config.js
└── tailwind.config.js
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `v18+`
- TMDB API Key → [Get one free here](https://www.themoviedb.org/settings/api)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/Fady519/Cinema-Fady.git
cd Cinema-Fady

# 2. Install dependencies
npm install

# 3. Add your TMDB API key
# Create a .env file in the root:
VITE_TMDB_API_KEY=your_api_key_here

# 4. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build & Deploy

```bash
npm run build
npm run deploy
```

---

## 📬 Contact

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Fady%20Kaiser-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fady-kaiser/)
[![GitHub](https://img.shields.io/badge/GitHub-Fady519-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Fady519)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live%20Now-6366F1?style=for-the-badge)](https://fady519.github.io/MyPortfolio2/)

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F0F0F,50:DC2626,100:991B1B&height=100&section=footer" width="100%"/>

**⭐ If you enjoyed Cinema+, drop a star — it helps a lot!**

</div>
