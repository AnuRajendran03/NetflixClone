import { useEffect,useState} from 'react';
import YouTube from 'react-youtube';

import './Banner.css'
import Axios from '../../Statics/Axios'
import { API_KEY, img_url } from '../../Statics/static';
function Ban()
{
            const [movie, setMovie] = useState([])
            const [trailer,setTrailer] = useState("");
            useEffect(() => {
                Axios.get(`/trending/all/day?api_key=${API_KEY}`).then((response)=>{
                    console.log("trendins",response.data.results)
                    var i =0 ;
                    setInterval(function() {
                       
                        setMovie(response.data.results[i])
                        i++
                        if(i==19){
                            i=0;
                        }
                    }, 2000);

                })
            }, [])
            const  getMovie=(id)=>{
                    console.log(id,"id kityy---")
                    Axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
                            setTrailer(response.data.results[0].key)
                            console.log(response.data,"trailer")
                    })
            }   
            const opts = {
                height: '450',
                width: '1300',
                playerVars: {
                  // https://developers.google.com/youtube/player_parameters
                  autoplay: 1,
                },
              };
            
    return(

        <div className='banner' style={{backgroundImage:`url(${movie ? img_url + movie.backdrop_path:""})`}}>
             <h4 className='bannername'>{movie? movie.title:"Not avilable"}</h4>
             <span className='des'>{movie ? movie.overview: "not available"}</span>
             <div className='play'>
               <button className='b1'>
                    <div>
                        <span className='b11' onClick={()=>getMovie(movie.id)}>Play</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-play" viewBox="0 0 15 15">
                        <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/></svg>
                    </div>
                </button>
                <button className='b2'><span className='b12'>Add to playlist</span>
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" class="bi bi-play" viewBox="0 0 15 15">
                                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/></svg>
                </button>
             </div>
             {
                    trailer ?  <YouTube videoId={trailer} opts={opts}  /> : ""

             }
        </div>
    )
}

export default Ban;