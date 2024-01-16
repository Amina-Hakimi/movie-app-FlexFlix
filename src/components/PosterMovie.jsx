import React from "react";
import { Link } from "react-router-dom";
function PosterMovie({data}) {
  return (
    <div>
      {/* <h2 className="text-white my-2">{data.title}</h2> */}
      <img className="w-80" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}  />
      <div className="flex flex-col items-center">
      <Link to ={`/films/${data.id}`}>
      <button type="button" className="border-solid border-2 bg-purple-400 hover:bg-purple-600 rounded px-2 py-1 my-3">Voir plus</button>
      </Link>
      </div>
    </div>
  );
}

export default PosterMovie;
