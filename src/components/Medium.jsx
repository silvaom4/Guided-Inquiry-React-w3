import React, { useEffect, useState } from "react";
import MediumCSS from '../css/medium.css'


export default function Medium() {
  const [movie, setMovie] = useState("");
  //   const [search, setSearch] = useState("");
  const [movieResults, setMovieResults] = useState([]);
  const [newMovie, setNewMovie] = useState("");

  //   const movieChanges = () => {
  //     setNewMovie(movie)
  //   }

  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log("hello world");
    // console.log(e.target.value);
    setNewMovie(movie);
  };

  useEffect(() => {
    if (newMovie) {
      fetch("http://localhost:5101/movies?movie=" + newMovie)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (typeof data === "object" && !Array.isArray(data)) {
            const movieArray = Object.values(data);
            setMovieResults(movieArray);
          } else {
            setMovieResults(data);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [newMovie]);

  return (
    <div>
      <h1>Hello from Medium</h1>

      <form onSubmit={handleSubmitButton}>
        <label>Enter movie here: </label>
        <input
          className="movie-label"
          type="text"
          placeholder="Enter movie"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />

        <button className="submit-btn" >SEARCH</button>
        {/* {movieResults && <p>{JSON.stringify(movieResults)}</p>}
        {movieResults && <p>{JSON.stringify(movieResults[0])}</p>}
        {movieResults && <p>{JSON.stringify(movieResults[1])}</p>}
        {movieResults && <p>{JSON.stringify(movieResults[2])}</p>} */}

      </form>

      {movieResults.length > 0 && (
        <div className="movie-container">
          {movieResults.map((movie, index) => (
            <div key={`data-${index}`} className="movie-results">
              <p>{movie}</p>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
