# 🎬 Movie App - Project Overview (Seminar के लिए)

## 📌 Project का Purpose
यह एक **Movie Discovery Application** है जो users को movies देखने, search करने और अपनी favorites list बनाने देता है।

---

## 🏗️ Architecture - कैसे काम करता है

### Entry Point से शुरुआत:

```
index.html (में <div id="root"> है)
    ↓
main.jsx (React app को mount करता है)
    ↓
<BrowserRouter> (routing enable करता है)
    ↓
<App /> (main component)
```

---

## 📁 Project Structure Explanation

### **1. Root Level Files**
- **package.json** → सभी dependencies और scripts
  - `npm run dev` → development server चलाता है (Vite)
  - React, React-DOM, React-Router-DOM installed हैं

- **vite.config.js** → Vite build tool का configuration
- **index.html** → HTML entry point

---

## 🔄 App Flow (Step by Step)

### **Step 1: App.jsx - Main Component**
```
<MovieProvider> - Context को wrap करता है
  ├── <NavBar /> - Navigation bar (Home और Favorites links)
  └── <main>
      └── <Routes>
          ├── "/" → <Home /> page
          └── "/Favorites" → <Favorites /> page
```

### **Step 2: Context - State Management (MovieContext.jsx)**

**क्या करता है:** 
- सभी favorites को **global state** में रखता है
- LocalStorage में save करता है (ताकि refresh करने के बाद भी data रहे)

**Functions:**
```javascript
{
  favorites: [],                    // सभी favorite movies की list
  addToFavorites(movie),            // movie को favorites में add करना
  removeFromFavorites(movieId),     // movie को favorites से remove करना
  isFavorite(movieId)              // check करना कि movie favorite है या नहीं
}
```

---

## 📄 Pages & Components

### **1. Home Page (pages/Home.jsx)**
```
┌─────────────────────────────────┐
│  Search Bar                     │
│  [Search for movies...] [Search]│
└─────────────────────────────────┘
           ↓
┌─────────────────────────────────┐
│  Popular Movies Grid            │
│ ┌──────────┐ ┌──────────┐      │
│ │ Movie 1  │ │ Movie 2  │ ...  │
│ └──────────┘ └──────────┘      │
└─────────────────────────────────┘
```

**Functionality:**
1. Page load होने पर Popular movies display करता है (API से)
2. Search bar से movies search कर सकते हो
3. हर movie के लिए favorite button (❤️) होता है

**API Calls:**
- `getPopularMovies()` → TMDB API से popular movies fetch करता है
- `searchMovies(query)` → user के query के अनुसार movies search करता है

---

### **2. Favorites Page (pages/Favorites.jsx)**
```
┌─────────────────────────────────┐
│  Your Favorites                 │
│ ┌──────────┐ ┌──────────┐      │
│ │ Fav 1    │ │ Fav 2    │ ...  │
│ └──────────┘ └──────────┘      │
└─────────────────────────────────┘

या अगर कोई favorite नहीं:
┌─────────────────────────────────┐
│ No Favorite Movies Yet          │
│ Start adding movies...          │
└─────────────────────────────────┘
```

**Flow:**
1. Context से `favorites` array निकालता है
2. अगर favorites हैं तो grid में display करता है
3. अगर खाली है तो "No Favorites" message दिखाता है

---

### **3. MovieCard Component (components/MovieCard.jsx)**
```
┌──────────────────────┐
│  Movie Poster Image  │
│   (जब hover करो)    │
│  [❤️ Favorite Btn]  │  ← यह button है
│  ┌────────────────┐  │
│  │ Movie Title    │  │
│  │ Release Year   │  │
│  └────────────────┘
└──────────────────────┘
```

**क्या करता है:**
```javascript
// Button click होने पर:
if (movie पहले से favorite है)
  → removeFromFavorites() call करो
else
  → addToFavorites() call करो
```

---

### **4. NavBar Component (components/NavBar.jsx)**
```
┌─────────────────────────────────┐
│ Movie App    [Home] [Favorites] │
└─────────────────────────────────┘
```

**Routes:**
- "Movie App" logo → Home page (/)
- "Home" link → Home page (/)
- "Favorites" link → Favorites page (/Favorites)

---

## 🌐 API Integration (services/api.js)

### **TMDB (The Movie Database) API का Use:**

**1. getPopularMovies()**
```
GET https://api.themoviedb.org/3/movie/popular
  API_KEY: 33151ff823ef1236ed011e625128913a
  ↓
  Returns: { results: [{id, title, poster_path, release_date}, ...] }
```

**2. searchMovies(query)**
```
GET https://api.themoviedb.org/3/search/movie
  Query Params: query="{user_search}", api_key="{API_KEY}"
  ↓
  Returns: Same format as popular movies
```

---

## 💾 Data Flow (Complete)

```
User clicks "Add to Favorites" button
    ↓
MovieCard.jsx: onFavoriteClick() called
    ↓
useMovieContext().addToFavorites(movie) called
    ↓
MovieContext.jsx: setFavorites([...prev, movie])
    ↓
useEffect automatically saves to localStorage
    ↓
Favorites page re-render होता है और नई movie दिखती है
```

### **LocalStorage Integration:**
```javascript
// जब favorites change हो:
localStorage.setItem("favorites", JSON.stringify(favorites))

// जब page load हो:
const storedFavs = localStorage.getItem("favorites")
setFavorites(JSON.parse(storedFavs))
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19.2** | UI Framework |
| **React Router DOM 7.9** | Client-side routing |
| **Vite 7.2** | Build tool & dev server |
| **TMDB API** | Movie data |
| **LocalStorage** | Client-side persistence |
| **CSS** | Styling |

---

## 🔑 Key Features Explained

### **1. Search Movies**
- User search input को API query में convert करता है
- `encodeURIComponent()` से special characters handle होते हैं
- Results को state में save करके display करता है

### **2. Add to Favorites**
- Movie object को favorites array में add करता है
- Context automatically localStorage में save करता है
- Button visual (❤️ icon color) update होता है

### **3. Persistent Storage**
- LocalStorage से favorites page refresh के बाद भी रहती हैं
- Page load होने पर useEffect localStorage से data fetch करता है

### **4. Navigation**
- React Router से smooth page transitions होते हैं
- URL change होता है लेकिन page refresh नहीं होता (SPA)

---

## 🎯 User Journey

```
START
  ↓
Home Page Load → getPopularMovies() → Display Grid
  ↓
User Actions:
  ├─ Search करो → searchMovies() → नए results दिखें
  ├─ Favorite Add करो → Context update → localStorage save
  └─ Favorites link click करो → Favorites Page दिखे
      ↓
      Favorites Page → localStorage से data read करो → Grid दिखाओ
      ↓
      User Remove करे → Context update → Page re-render
      ↓
      Back to Home...
```

---

## 📊 Component Hierarchy

```
<App>
├── <MovieProvider>
│   ├── <NavBar>
│   │   └── Links (Home, Favorites)
│   └── <main>
│       └── <Routes>
│           ├── <Home>
│           │   └── <MovieCard> (multiple)
│           └── <Favorites>
│               └── <MovieCard> (multiple)
```

---

## 🐛 पहले जो Bug था:

**Favorites.jsx में:**
```javascript
// ❌ WRONG:
const { Favorites } = useMovieContext();  // Capital F
if (Favorites) {                          // Empty array = false

// ✅ CORRECT:
const { favorites } = useMovieContext();  // lowercase f
if (favorites.length > 0) {               // Proper check
```

---

## 🚀 Development Commands

```bash
npm run dev     # Start development server (http://localhost:5173)
npm run build   # Build for production
npm run preview # Preview production build
npm run lint    # Check code quality
```

---

## 📝 Summary

**यह project सिखाता है:**
1. ✅ React Components (functional)
2. ✅ React Hooks (useState, useEffect, useContext)
3. ✅ Context API (global state management)
4. ✅ React Router (multi-page navigation)
5. ✅ API Integration (async/await)
6. ✅ LocalStorage (persistence)
7. ✅ Component Communication (parent-child)

---

**Good luck for your seminar! 🎉**
