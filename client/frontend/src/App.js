import './App.css';
import MovieList from './pages/MovieList';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path = '/movies' element = {<MovieList />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
