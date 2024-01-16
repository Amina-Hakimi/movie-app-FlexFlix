import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const TopRatedShow = () => {
const [topRatedShow, setTopRatedShow] = useState([]);
useEffect(() => {
    const fetchTopRatedShow = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/tv/top_rated?api_key=95a6f403a2fb9ba787881e6b280497d1&page=1'
        );

        if (!response.ok) {
          throw new Error('La réponse réseau n\'est pas correcte');
        }

        const data = await response.json();
        setTopRatedShow(data.results.slice(0, 5)); // Récupérer les 5 premiers films
      } catch (error) {
        console.error('Erreur lors de la récupération des films les mieux notés:', error);
      }
    };

    fetchTopRatedShow();
  }, []);


  return (
    <div>
     <h1 className='text-center text-purple-600 text-2xl'>Les 5 séries les mieux notées</h1>
      <div className='grid grid-cols-5 gap-4 mx-5 my-5'>
        {topRatedShow.map((show) => (
            <div>
            <h1 className='text-center my-5' key={show.id}>{show.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}/>
            <div className='flex flex-col items-center'>
            <Link to="/séries/id"> 
            <button className='mx-auto border-solid border-2 bg-purple-400 hover:bg-purple-600 rounded px-2 my-10'>Voir plus</button>
            </Link>
            </div>
            </div>
          
        ))}
      </div>



    </div>
  )
}

export default TopRatedShow