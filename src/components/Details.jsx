

import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../utils/api'

function Details() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const data = await getMovieDetails(id);
            setMovie(data);
            // console.log(movie)
        };

        fetchMovie();
    },[]);


    let addToFavorites = () => {

    }

    return (
        <div>
            <div style={{ padding: "20px" }}>
                <h2>{movie.Title}</h2>
                <img src={movie.Poster} alt={movie.Title} />
                <p>{movie.Plot}</p>
                {/* <button onClick={addToFavorites}>❤️ Add to Favorites</button> */}
            </div>
        </div>
    )
}

export default Details

