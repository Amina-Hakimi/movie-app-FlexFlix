import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PosterTV from "../components/PosterTV";

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
       <div>
    <div className="flex flex-col items-center">
    <Link to="/séries/les plus populaires">
    <button 
    type="button"
    className="text-white text-xl border-solid border-2 border-purple-600 rounded my-5 px-3 py-2 hover:bg-purple-600">Les plus populaires</button>
    </Link>
  </div>




    <div className='grid grid-cols-4 gap-4 mx-5 my-1'>
        {tv.map((dat) => {
        return <div>
        <PosterTV dat={dat} />
        </div>
      })}
    </div>
    </div>
  )
  
}

export default TVShow