import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import PosterMovie from "./PosterMovie";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      
      <ul className="text-white flex items-center justify-between  mx-5 px-2 text-lg">
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
          <form  autoComplete="off" role="search">
          <input
          className="text-black rounded px-2 py-2"
          type="search"
          placeholder="Recherche un film"
         />
          <button type="submit">Recherche</button>
          </form>
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
