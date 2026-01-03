import React, { useState } from 'react'
import { searchMovies } from '../utils/api'
import MovieCard from './MovieCard';

function Home() {
    let [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    let handleSearch = async () => {
        if (!query) return;
        const data = await searchMovies(query);
        console.log(data)
        setMovies(data.Search || [])
    }

    return (
        <div>
            <div style={{ padding: "20px" }}>
                <h1>Movie Finder 🎬</h1>

                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search movie..."
                />
                <button onClick={handleSearch}>Search</button>

                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                    {movies.map((movie)=>(
                        <MovieCard key={movie.imdbID} movie={movie}/>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Home