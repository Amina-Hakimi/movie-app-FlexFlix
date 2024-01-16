import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Movies from './pages/Movies';
import Home from "./pages/Home";
import TVShow from './pages/TVShow';
import Login from "./pages/Login";
import { AuthContextProvider } from './context/AuthContext';
import OneMovie from './pages/OneMovie';
import OneTVshow from './pages/OneTVshow';
import TopRatedMovies from './pages/TopRatedMovies';
import TopRatedShow from './pages/TopRatedShow';
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/accueil' element={<Home/>}/>
        <Route path='/films' element={<Movies/>}/>
        <Route path='/séries' element={<TVShow/>}/>
        <Route path='/films/:id' element={<OneMovie/>}/>
        <Route path='/films/les plus populaires' element={<TopRatedMovies/>}/>
        <Route path='/séries/les plus populaires' element={<TopRatedShow/>}/>
        <Route path='/séries/:id' element={<OneTVshow/>}/>
        <Route path="/se connecter" element={<Login/>}/>
        <Route path="/s'identifier" element={<Signup/>}/>
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
