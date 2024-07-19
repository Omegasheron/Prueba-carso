import React from "react";
import ReactPlayer from "react-player"
import { useState, useEffect} from "react";
import './Video.css'

const Video = (url1) => {

  const [url, setUrl] = useState('')

  useEffect(() => {
    const UrlSlected = () =>{
      switch (url1.video) {
        case 'seleccion1':
         return  setUrl('https://www.youtube.com/watch?v=peuVFBTt47o')
        case 'seleccion2':
          return setUrl('https://www.youtube.com/watch?v=wgoQdMUdsZE')
        case 'seleccion3':
         return  setUrl('https://www.youtube.com/watch?v=82b4u7ba4Ps')
        case 'seleccion4':
          return setUrl('https://www.youtube.com/watch?v=o3SftJsjrSI')
        default:
          return setUrl('https://www.youtube.com/watch?v=peuVFBTt47o')
      }
    }
    
    UrlSlected()
    
  }, [url1])

    return (
      <>
      <div className="player">
      <ReactPlayer 
        url={url}
        playing
        width="100%"
        height="100%"
      ></ReactPlayer>
      </div>
      </>
    );
  }

export default Video;
