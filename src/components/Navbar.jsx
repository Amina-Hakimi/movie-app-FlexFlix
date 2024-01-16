import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


function Navbar() {
const [searchTerm, setSearchTerm] = useState("");
const [content, setContent] = useState([]);

const fetchSearch = async (e) => {
  try {
    await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=95a6f403a2fb9ba787881e6b280497d1&query=${searchTerm}`
    )
      .then((res) => res.json())
      .then((json) => setContent(json.results));
  } catch (err) {
    console.error('erreur lors de la recuperation des données');
  }
};
useEffect(() => {
  fetchSearch();
}, []);

const handleInputChange = (e) => {
  setSearchTerm(e.target.value)
};
const Search = (e) => {
  e.preventDefault()
      fetchSearch()
       };
  return (
    <div>
      
      <ul className="text-white flex items-center justify-between   mx-5 px-2 text-lg">
      <Link to="/">
      <img src={logo} alt="logo" width="250" height="250" />
      </Link> 
        <Link to="/accueil">
          <li>Accueil</li>
        </Link>
        <Link to="/films">
          <li>Films</li>
        </Link>
        <Link to="/séries">
          <li>Séries</li>
        </Link>
        <div>
          <form
          // onSubmit={hasFormSubmit}
            autoComplete="off" role="search">
          <input
          className="text-black rounded px-2 py-2"
          type="search"
          placeholder="Recherche un film"
          onChange={(e) => setSearchTerm(e.target.value)}
         />
          <button 
          className="mx-3 border-2 rounded border-purple-600 py-2 px-4"
          type="submit"
          onClick={fetchSearch}>
            Recherche
            </button>
          </form>
          {
            content && content.map((val) =>{
                const {
                    title,
                    poster_path,
                    id,
                    overview,
                } = val;
                return (
                    <div key={id}>
                       <h3>{title}</h3> 
                       {/* <img src={poster_path ? `${w500}/${poster_path}`: unvailable} /> */}
                       <img src={poster_path}/>
                       <p>{overview}</p>
                    </div>
                     )
                    
                      })
            
          } 
        </div>   
        <Link to="/se connecter" className="border-2 border-purple-600 rounded px-4 py-2">connexion</Link>
        <Link to="/s'identifier"
          className="bg-purple-600 focus:outline-none font-medium rounded-lg px-4 py-2 text-center">
            <li>Inscription</li>
          </Link>
        
      </ul>
      
    </div>
  );
}

export default Navbar;
