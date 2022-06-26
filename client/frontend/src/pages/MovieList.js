import React, {useState, useEffect} from 'react';
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
      
    </>
  );
}

export default MovieList;