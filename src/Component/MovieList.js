import React from 'react'
import MovieCard from './MovieCard'
 
const MovieList =({movieList,searchMovieName,searchByRate})=>{
return (
<div  style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        
      }}>
{movieList.filter((el)=>el.name.toLowerCase().includes(searchMovieName.toLowerCase().trim())&& el.rating>=searchByRate).map((movie,i)=>(<MovieCard key={i} movie={movie}/>))}

</div>


)

}
export default MovieList