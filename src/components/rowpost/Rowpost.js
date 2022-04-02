import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {  imageUrl,API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'

function Rowpost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlid] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response => {
            console.log(`zamanzamnan${response.data.results}`);
            setMovies(response.data.results)
        }).catch(err => {
            console.log('error')
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleMovie = (id) =>{
          console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data);
            if(response.data.results.length!==0){
                setUrlid(response.data.results[0])
            }else{
                alert('trailer not available')
            }
        })
      }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj) => 
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="rowpost" />
                )}
            </div>
        { urlId && <Youtube videoId={urlId.key} opts={opts}/> }    

        </div>
    )
}

export default Rowpost