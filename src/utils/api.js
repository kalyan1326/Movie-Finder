const API_KEY = "fd7e5552";
const API_URL = "https://www.omdbapi.com/";

export const searchMovies = async(query)=>{
    const res = await fetch(`${API_URL}?s=${query}&apikey=${API_KEY}`)
    const data = await res.json();
    // console.log(data)
    return data
}

export const getMovieDetails = async (id) => {
    const res = await fetch(`${API_URL}?i=${id}&apikey=${API_KEY}`)
    const data = await res.json();
    // console.log(data)
    return data
}