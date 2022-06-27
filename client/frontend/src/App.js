import './App.css';
import React, {useState} from "react";
import MovieList from './pages/MovieList';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TextField from "@mui/material/TextField";

//testing searchbar
function App() {
  const [inputText, setInputText] = useState("");
  
  let keyUpHandler = (e) => {
    if(e.key === 'Enter'){
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    }
   
  }
  return (
    <>
    <div className="search">
        <TextField
          id="outlined-basic"
          onKeyUp={keyUpHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
    <Router>
        <Routes>
          <Route path = '/movies' element = {<MovieList input={inputText}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
