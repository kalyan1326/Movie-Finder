import React from 'react'
import { Link } from "react-router-dom";


function MovieCard({movie}) {
  return (
    <div style={{ border: "1px solid #de1b1bff", width: "200px", padding: "10px" }}>
        <img src={movie.Poster} alt={movie.title} style={{width:"100%"}} />
        <h3>{movie.Title}</h3>
        <Link to={`details/${movie.imdbID}`}>view details</Link>
    </div>
  )
}

export default MovieCard




