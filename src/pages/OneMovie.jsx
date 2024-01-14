import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";



const OneMovie = () => {
    const [movie, setMovie] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie_id?api_key=95a6f403a2fb9ba787881e6b280497d1`)
          .then((response) => response.json())
          .then((data) => {
            setMovie(data);
          })
          .catch((err) => console.error(err));
      }, [id]);
  return (
    <div className='text-white'>
        <img src={movie.backdrop_path}/>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <h3>{movie.release_date}</h3>
         
    </div>
  )
}

export default OneMovie