
import SkateHoot from "./img/skatehoot.png"
import "./style/hoot.css"
import PoPShovit from "./media/PoPShovit.mp4"
import KicKFlip from "./media/kickFlip.mp4"
import Olli from "./media/Olli.mp4"

export default function Hoot(){
    return(
        <div className="hoot">
            <img src={SkateHoot} alt="SkateHoot" className="img-skate-hoot"/>
            <div className="trucos-skates">
                <div className="truco">
                    <video 
                        src={PoPShovit} 
                        className="video-hoot" 
                        controls  // muestra play, pausa, etc.
                        autoPlay  // empieza solo
                        loop      // se repite
                        playbackRate="2.0"
                    />
                    <h1>POP SHOVIT</h1>
                </div>
                <div className="truco">
                    <video 
                        src={KicKFlip} 
                        className="video-hoot" 
                        controls  // muestra play, pausa, etc.
                        autoPlay  // empieza solo
                        loop      // se repite
                        playbackRate="2.0"
                    />
                    <h1>KICK FLIP</h1>
                </div>
                <div className="truco">
                    <video 
                        src={Olli} 
                        className="video-hoot" 
                        controls  // muestra play, pausa, etc.
                        autoPlay  // empieza solo
                        loop      // se repite
                        playbackRate="2.0"
                    />
                    <h1>Olli</h1>
                </div>
            </div>
        </div>
    )
}