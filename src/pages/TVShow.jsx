import React from 'react';
import { useEffect, useState } from 'react';
import PosterMovie from '../components/PosterMovie';
const TVShow = () => {
    const [tv, setTv] = useState([]);
    const getShows = async () => {
        try {
          await fetch("https://api.themoviedb.org/3/discover/tv?api_key=95a6f403a2fb9ba787881e6b280497d1")
          .then(res => res.json())
          .then(json => setTv(json.results))
        }catch(err) {
          console.error(err)
        }
      
      }
      useEffect (() => {
        getShows()
       }, [])
  return (
    <div className='grid grid-cols-4 gap-4 mx-5 my-1'>
        {tv.map((data) => {
        return <div>
        <PosterMovie data={data} />
        </div>
      })}
    </div>
  )
}

export default TVShow