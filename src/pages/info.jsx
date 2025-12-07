
import Moti from "./media/Motivacion.mp4"
import "./style/info.css"

export default function InfoSkate(){
    return(
        <div className="infoskate">
            <div className="ttl-info">
                <h1>Guia inicial</h1>
            </div>
            <div className="info-skate">
                <video src={Moti}
                    className="video-infoskate" 
                    controls  // muestra play, pausa, etc.
                    autoPlay  // empieza solo
                    loop      // se repite
                />
                <p>🛹✨ “El skate es un viaje increíble: 
                    disfruta cada caída, aprende de cada truco
                    y celebra cada logro. La tabla no solo rueda, 
                    también te enseña.”
                </p>
            </div>
        </div>
    );
}