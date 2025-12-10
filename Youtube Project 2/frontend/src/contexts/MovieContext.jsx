// import { createContext, useState, useContext, useEffect } from "react";

// const MovieContext = createContext();

// export const useMovieContext = () => useContext(MovieContext);

// export const MovieProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     try {
//       const storedFavs = localStorage.getItem("favorites");
//       console.log("[localStorage] raw value on load:", storedFavs);

//       if (storedFavs) {
//         const parsed = JSON.parse(storedFavs);
//         console.log("[localStorage] parsed value on load:", parsed);
//         if (Array.isArray(parsed)) {
//           setFavorites(parsed);
//           console.log("[localStorage] favorites state loaded:", parsed);
//         }
//       } else {
//         console.log("[localStorage] no favorites found in localStorage");
//       }
//     } catch (err) {
//       console.error("Failed to load favorites from localStorage:", err);
//       // If parsing fails, clear the bad value so it doesn't break future loads
//       try {
//         localStorage.removeItem("favorites");
//       } catch (e) {
//         /* ignore */
//       }
//     }
//   }, []);

//   useEffect(() => {
//     try {
//       localStorage.setItem("favorites", JSON.stringify(favorites));
//       console.log("[localStorage] favorites saved:", favorites);
//     } catch (err) {
//       console.error("Failed to save favorites to localStorage:", err);
//     }
//   }, [favorites]);

//   const addToFavorites = (movie) => {
//     setFavorites((prev) => {
//       // prevent duplicates by movie id
//       if (prev.some((m) => m.id === movie.id)) return prev;
//       return [...prev, movie];
//     });
//   };

//   const removeFromFavorites = (movieId) => {
//     setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
//   };

//   const isFavorite = (movieId) => {
//     return favorites.some((movie) => movie.id === movieId);
//   };

//   const value = {
//     favorites,
//     addToFavorites,
//     removeFromFavorites,
//     isFavorite,
//   };

//   return (
//     <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
//   );
// };


import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")
        if (storedFavs) setFavorites(JSON.parse(storedFavs))
        setLoaded(true)
    }, [])

    useEffect(() => {
        if (!loaded) return   // 👈 localStorage overwrite se bachayega
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites, loaded])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => favorites.some(m => m.id === movieId)

    return (
        <MovieContext.Provider value={{
            favorites,
            addToFavorites,
            removeFromFavorites,
            isFavorite
        }}>
            {children}
        </MovieContext.Provider>
    )
}
