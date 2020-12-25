import './App.css';
import React ,{useState}from 'react'
import {moviesData} from './MoviesData'
import MovieList from './Component/MovieList';
import AddMovie from './Component/AddMovie'
import Search from './Component/Search'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom' 
import TheTrailer from './TheTrailer';
function App() {
  const [movieList,setMoviesList]=useState(moviesData);
  const [searchMovieName,setSearchMovieName]=useState('');
  const [searchByRate,setSearchByRate] =useState(1)
const addMovie=(x)=>{
  setMoviesList([...movieList, x])}

  return (<div>

<Router>
  <Route exact path='/'>
<Search setSearchMovieName={setSearchMovieName} searchByRate={searchByRate} setSearchByRate={setSearchByRate}/>
<MovieList searchMovieName={searchMovieName} movieList={movieList} searchByRate={searchByRate} setSearchByRate={setSearchByRate}  />
<AddMovie addMovie={addMovie} />
</Route>
<Route path ='/trailer/:name' render={(props)=><TheTrailer movieList={movieList} {...props}/>}/>
</Router>


  </div> 
  )
}

export default App;
