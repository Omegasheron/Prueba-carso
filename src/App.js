import React from "react";
import { useState } from "react";
import logo1 from "./img/logo-sochi.png"
import logo2 from "./img/logo-claro-sports.png"
import seleccion1 from "./img/team-latam.png"
import seleccion2 from "./img/travel-meets-fashion.png"
import seleccion3 from "./img/velocidad-riesgo.png"
import seleccion4 from "./img/experiencia.png"
import Timer from "./components/timer/Timer"
import Video from "./components/video/Video"
import './App.css'

function App() {
  const [video, setVideo] = useState('')

  
    const SelectedVideo = (video) => {
      setVideo(video)  
    }
  
    return (
      <>
      <div className="header">
        <section className="images-header">
          <img src={logo1} alt="logo"/>
          <img src={logo2} alt="logo"/>
        </section>
      </div>
      <div className="videoplayer">
        <section className="timer-video">
          <Timer/>
          <Video
           video={video}/>
        </section>
      </div>
      <div className="selection">
        <section className="Text">
          <p className="paragraph">CLARO SPORTS EN SOCHI 2014</p>
        </section>
        <section className="selections">
          <button className="iconos" onClick={() => SelectedVideo("seleccion1")}><img className="img-selec" src={seleccion1} alt="seleccion1"/>
            <span className="text-icons">TEAM LATAM</span>
          </button>
          <button className="iconos" onClick={() => SelectedVideo("seleccion2")}><img className="img-selec" src={seleccion2} alt="seleccion2"/>
            <span className="text-icons">TRAVEL MEETS FASHION</span>
          </button>
          <button className="iconos" onClick={() => SelectedVideo("seleccion3")}><img className="img-selec" src={seleccion3} alt="seleccion3"/>
            <span className="text-icons">VELOCIDAD Y RIESGO</span>
          </button>
          <button className="iconos" onClick={() => SelectedVideo("seleccion4")}><img className="img-selec" src={seleccion4} alt="seleccion4"/>
            <span className="text-icons">EXPERIENCIA MULTIMEDIA</span>
          </button>
        </section>
      </div>
      <div className="footer">
        <a href="https://www.clarosports.com/aviso-de-privacidad/" className="privacidad">Aviso de privacidad/Contacto</a>
        <img src={logo1} alt="Logo" className="logo-footer"></img>
        <div class="social">
                    <div class="media">
                        <a className="facebook_footer" href="https://www.facebook.com/clarosports/" target="_blank" rel="noreferrer" aria-label="Facebook"></a>
                        <a className="twitter_footer" href="https://twitter.com/ClaroSports" target="_blank" rel="noreferrer" aria-label="Twitter"></a>
                        <a clasNames="tube_footer" href="https://www.youtube.com/clarosports/" target="_blank" rel="noreferrer" aria-label="Youtube"></a>
                        <a className="insta_footer" href="https://www.instagram.com/clarosports/" target="_blank" rel="noreferrer" aria-label="Instagram"></a>
                        <a className="tiktok_footer" href="https://www.tiktok.com/@clarosports/" target="_blank" rel="noreferrer" aria-label="Tiktok"></a>
                    </div>
                </div>
      </div>
      </>
    );
  }

export default App;
