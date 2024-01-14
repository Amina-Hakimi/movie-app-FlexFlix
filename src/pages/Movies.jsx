import React, { useEffect, useState } from "react";
import PosterMovie from "../components/PosterMovie";
import { Link } from "react-router-dom";
const Movies = () => {
  const [films, setFilms] = useState([]);
  const getMovies = async () => {
    try {
      await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=95a6f403a2fb9ba787881e6b280497d1"
      )
        .then((res) => res.json())
        .then((json) => setFilms(json.results));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <div>
        <Link>
        <button 
        type="button"
        className="text-white border-solid border-2 border-purple-600 rounded px-3 py-2 hover:bg-purple-600">Les plus populaires</button>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4 mx-5 my-5">
        {films.map((data) => {
          return (
            <div>
              <PosterMovie data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
