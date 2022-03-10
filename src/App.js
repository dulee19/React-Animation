import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';
import Filter from './components/Filter'
import './App.css';

const App = () => {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=5c5766867e4e97455b2ced3b4f10ba60&language=en-US&page=1');
    const movies = await data.json();
    setPopular(movies.results)
    setFiltered(movies.results)
  }

  useEffect(() => {
    fetchPopular();
  }, [])

  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <div className='popular-movies'>
        {filtered.map(movie => {
          return <Movie key={movie.id} movie={movie} />
        })}
      </div>
    </div>
  );
}

export default App;
