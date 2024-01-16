import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';



const OneMovie = () => {
    const [movie, setMovie] = useState({});
    const [video, setVideo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=95a6f403a2fb9ba787881e6b280497d1`)
          .then((response) => response.json())
          .then((data) => {
            setMovie(data);
          })
          .catch((err) => console.error(err));
      }, [id]);

      
      const getVideos = async () => {
        try {
          await fetch(
            `https://api.themoviedb.org/3/movie/movie_id/videos?api_key=95a6f403a2fb9ba787881e6b280497d1&language=en-US`
          )
            .then((res) => res.json())
            .then((json) => console.log(json.results));
          
            
        } catch (err) {
          console.error(err);
        }
      };
      useEffect(() => {
        getVideos();
      }, []);




      const truncate = (str, length) => {
       if (!str) return "";
       return str.length > length ? str.slice(0, length) + '...' : str
      }
  return (
    <div className='text-white'>
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
          <button
          href={`https://www.youtube.com/watch?v=${video}`}
          className='border border-gray-300 py-2 px-5 ml-4 rounded'>Regarder plutards</button>
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

export default OneMovie;