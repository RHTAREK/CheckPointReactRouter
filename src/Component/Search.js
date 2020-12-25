import React from 'react'
import Rate from './Rate'
const Search =({setSearchMovieName,searchByRate,setSearchByRate})=>{
    return (
        <div >
            <div>
    <input type='text' placeholder='looking for a movie ?'
     onChange={(e)=>(setSearchMovieName(e.target.value))} />
     </div>
     <div>

        <Rate  setSearchByRate={setSearchByRate} rating={searchByRate}/>
     </div>
    </div>)}
export default Search 