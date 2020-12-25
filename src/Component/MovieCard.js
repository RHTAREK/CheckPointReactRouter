import React from 'react' 
  import Rate from './Rate'
  import {Link} from 'react-router-dom'
  import TheTrailer from '../TheTrailer'
import './MovieCardStyle.css';

const MovieCard =({movie:{name,date,rating,image,},})=>{
    return( 
<div className='card'>
<Link to={`/trailer/${name}`} >
<img src ={image} alt='img'/>
<div className='cardDescription'>
    <h1>{name}</h1>
    <h2>Date: {date}</h2>
    <Rate rating={rating}/>
    <h2 >Trailer</h2>
  
    </div>
    </Link>
</div>

    );
} ;
export default MovieCard  


