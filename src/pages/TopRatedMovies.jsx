
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopRatedMovies = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    useEffect(() => {
        const fetchTopRatedMovies = async () => {
          try {
            const response = await fetch(
              'https://api.themoviedb.org/3/movie/top_rated?api_key=95a6f403a2fb9ba787881e6b280497d1&page=1'
            );
    
            if (!response.ok) {
              throw new Error('La réponse réseau n\'est pas correcte');
            }
    
            const data = await response.json();
            setTopRatedMovies(data.results.slice(0, 5)); // Récupérer les 5 premiers films
          } catch (error) {
            console.error('Erreur lors de la récupération des films les mieux notés:', error);
          }
        };
    
        fetchTopRatedMovies();
      }, []);
  return (
    <div>
       <h1 className='text-center text-purple-600 text-2xl'>Les 5 films les mieux notés</h1>
      <div className='grid grid-cols-5 gap-4 mx-5 my-5'>
        {topRatedMovies.map((movie) => (
            <div>
            <h1 className='text-center my-5' key={movie.id}>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            <div className='flex flex-col items-center'>
            <Link to="/films/id"> 
            <button className='mx-auto border-solid border-2 bg-purple-400 hover:bg-purple-600 rounded px-2 my-10'>Voir plus</button>
            </Link>
            </div>
            </div>
          
        ))}
      </div>
    </div>
  )
}

export default TopRatedMovies;