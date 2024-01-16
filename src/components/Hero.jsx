import React, { useState, useEffect } from 'react';
import { json } from 'react-router-dom';
import OneMovie from '../pages/OneMovie';


const Hero = () => {
const [movie, setMovie] = useState([]);

const getMovie = async () => {
  try {
    await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=95a6f403a2fb9ba787881e6b280497d1"
    )
      .then((res) => res.json())
      .then((json) => console.log(json.results));
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
// const movies = json.results;
// const randomMovie = movies[Math.floor(Math.random() * 19)];
// console.log(randomMovie);
  return (
    <div>
      {movie.map((data) => {
          return (
            <div key={data.id}>
              <OneMovie data={data} />
            </div>
          );
        })}
    </div>
  )
}

export default Hero