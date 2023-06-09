import { useEffect,useState } from 'react';
import './Card.css';
import Axios from '../../Statics/Axios';
import { API_KEY, img_url } from '../../Statics/static';

function Card(){
    const [movies, setMovies] = useState([])
   
useEffect(() => {
    Axios.get(`/discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
            console.log(response.data.results)
            setMovies(response.data.results)
    })
}, [])    
    return(
        <div>
             <h2 style={{color:'white'}}>Streaming Now...</h2>
        <div className='card'>
            {
                 movies.map((obj)=>{
                    return(
              <div className='card1'>
            
              <img src={movies ? img_url+obj.backdrop_path :""} alt='no img'/>
                                    <h3 className='filmName'>{ movies? obj.name:"Not availble" }</h3>
                                    <button className='playb'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-play" viewBox="0 0 15 15">
                                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/></svg>
                                    </button>                     
                                </div>
                    )
                 })
                }
        </div>
        </div>
    )
}
export default Card;