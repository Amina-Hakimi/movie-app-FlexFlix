import React, { useEffect, useState } from "react";
import PosterMovie from "../components/PosterMovie";
import { Link, json } from "react-router-dom";
import Pagination from "../components/Pagination";
const Movies = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const perPage = 10;
  const getMovies = async () => {
    try {
      await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=95a6f403a2fb9ba787881e6b280497d1&page=${page}&per_page=${perPage}`
      )
        .then((res) => res.json())
        .then((json) => setFilms(json.results));
        setNumOfPages(json.total_pages);
        
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getMovies();
  }, [page, perPage]);
  return (
    <div>
      <div className="flex flex-col items-center">
        <Link to="/films/les plus populaires">
        <button 
        type="button"
        className="text-white text-xl border-solid border-2 border-purple-600 rounded px-3 py-2 hover:bg-purple-600">Les plus populaires</button>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4 mx-5 my-5">
        {films.map((data) => {
          return (
            <div key={data.id}>
              <PosterMovie data={data} />
            </div>
          );
        })}
      </div>
      <div>{numOfPages > 1 && (
      <Pagination setPage={setPage} numOfPages={numOfPages}/>
       ) }
      </div>
    </div>
  );
};

export default Movies;
