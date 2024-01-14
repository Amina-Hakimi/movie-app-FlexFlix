import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Movies from './pages/Movies';
import Home from "./pages/Home";
import TVShow from './pages/TVShow';
import Login from "./pages/Login";
import { AuthContextProvider } from './context/AuthContext';
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/films' element={<Movies/>}/>
        <Route path='/séries' element={<TVShow/>}/>
        <Route path="/se connecter" element={<Login/>}/>
        <Route path="/s'identifier" element={<Signup/>}/>
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
