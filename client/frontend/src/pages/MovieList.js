import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

//import Searchbar from '../components/Searchbar';
// const movies = [
//     {title: 'Mean Girls'},
//     {title: 'Hackers'},
//     {title: 'The Grey'},
//     {title: 'Sunshine'},
//     {title: 'Ex Machina'},
//   ];

//filtered posts



const MovieList = ({input}) => {
  let [movies, setMovies] = useState([])
  let filteredData = [];
  const url = useLocation();
  let location = url.pathname;

  let [inputMovie, setInputMovie] = useState({})

  let navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/movies')
    .then (res => res.json())
    .then (data => {
      //console.log(data)
      setMovies(data)
    })
  }, [])

  if(movies){
    
    filteredData = movies.filter((el) => {
      console.log(el);
      // If no input then return the original array
      console.log(input);
      if(input === '') {
        return el;
      }
      // return the item which contains the user input
      else {
        return el.title.toLowerCase().includes(input);
      }
  
    })
  }

  // Handle when the submit button is clicked to add a movie
  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await fetch('http://localhost:8080/movies', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputMovie)
    })
    console.log('Submitted Successfully!')
    console.log(res);
    window.location.reload(false);
    navigate(location);
  }

  // When user is typing, secretly make this object
  const handleChange = (event) => {
    setInputMovie({'title' : event.target.value})
  }


  return (
    <>
    <h1>
      Movies List
    </h1>
      <ul>
        {filteredData.map((el) => {
          return <li key={el.id}>{el.title}</li>
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      
    </>
  );
}

export default MovieList;