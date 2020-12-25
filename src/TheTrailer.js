import {Link} from 'react-router-dom'

const TheTrailer =({movieList,match})=>{
    console.log(match)
    const movie=movieList.find(el=>el.name===match.params.name)
    return(
<div>
<p>{movie.description}</p>
<iframe width="560" height="315" src={movie.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<Link to='/'>
<button>Back</button>
</Link>
</div>
    )

}
export default TheTrailer