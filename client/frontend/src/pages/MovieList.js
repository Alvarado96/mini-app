import React, {useState, useEffect} from 'react';

// const movies = [
//     {title: 'Mean Girls'},
//     {title: 'Hackers'},
//     {title: 'The Grey'},
//     {title: 'Sunshine'},
//     {title: 'Ex Machina'},
//   ];

const MovieList = () => {

  let [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/movies')
    .then (res => res.json())
    .then (data => {
      console.log(data)
      setMovies(data)
    })
  }, [])

  return (
    <>
    <h1>
      Movies List
    </h1>
      <ul>
        {movies.map((el) => {
          return <li key={el.id}>{el.title}</li>
        })}
      </ul>
      
    </>
  );
}

export default MovieList;