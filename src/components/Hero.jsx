import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';



const Hero = () => {
const [movie, setMovie] = useState([]);

const getMovie = async () => {
  try {
    await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=95a6f403a2fb9ba787881e6b280497d1"
    )
      .then((res) => res.json())
      .then((json) => setMovie(json.results));
      const movies = json.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      console.log(randomMovie);
  } catch (err) {
    console.error(err);
  }
};

useEffect(() => {
  
  getMovie();
}, []);

const truncate = (str, length) => {
  if (!str) return "";
  return str.length > length ? str.slice(0, length) + '...' : str
 }

// const movies = json.results;
// const randomMovie = movies[Math.floor(Math.random() * 19)];
// console.log(randomMovie);
  return (
    <div>
     { movie && (
         <div className='w-full h-[500px] lg:h-[850px]'>
          <div className='w-full h-full '>
            <div className='absolute w-full h-[500px] lg:h-[850px] bg-gradient-to-r from-black'/>
        <img 
        className='w-full h-full object-cover object-top'
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title}/>
        <div className='absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-6xl'>{movie.title}</h1>
        <div className='mt-8 mb-4'>
          <button className='text-black border bg-gray-300 py-2 px-5 ml-4 rounded'>Regarder</button>
          <button className='border border-gray-300 py-2 px-5 ml-4 rounded'>Regarder plutards</button>
        </div>
        <p className='text-gray-400 text-sm'>{movie.release_date}</p>
        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>{truncate(movie.overview, 165)}</p>
        </div>
        </div>
        </div>
      )}
    </div>
  )
}

export default Hero