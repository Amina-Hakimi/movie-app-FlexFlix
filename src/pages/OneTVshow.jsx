
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";



const OneTVshow = () => {
    const [show, setShow] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=95a6f403a2fb9ba787881e6b280497d1`)
          .then((response) => response.json())
          .then((dat) => {
            setShow(dat);
          })
          .catch((err) => console.error(err));
      }, [id]);

      const truncate = (str, length) => {
        if (!str) return "";
        return str.length > length ? str.slice(0, length) + '...' : str
       }
  return (
    <div className='text-white'>
      { show && (
        <div className='w-full h-[500px] lg:h-[850px]'>
        <div className='w-full h-full '>
          <div className='absolute w-full h-[500px] lg:h-[850px] bg-gradient-to-r from-black'/>
      <img 
      className='w-full h-full object-cover object-top'
      src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`} alt={show.title}/>
      <div className='absolute w-full top-[20%] lg:top-[35%] p-4 md:p-8'>
      <h1 className='text-3xl md:text-6xl'>{show.title}</h1>
      <div className='mt-8 mb-4'>
        <button className='text-black border bg-gray-300 py-2 px-5 ml-4 rounded'>Regarder</button>
        <button className='border border-gray-300 py-2 px-5 ml-4 rounded'>Regarder plutards</button>
      </div>
      <p className='text-gray-400 text-sm'>{show.release_date}</p>
      <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>{truncate(show.overview, 165)}</p>
      </div>
      </div>
      </div>
















        //  <div>
        // <img src={`https://image.tmdb.org/t/p/w500${show.backdrop_path}`}/>
        // <h2>{show.title}</h2>
        // <p>{show.overview}</p>
        // <h3>{show.release_date}</h3>
        // </div>
      )}
    </div>
  )
}

export default OneTVshow;