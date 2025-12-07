
import SkateHoot from "./img/skatehoot.png"
import Fri2SKate from "./img/dobleSkate.png"
import CrodSkate from "./img/CrodSkate.png"
import GirlsSkate from "./img/GirlSkate.png"
import "./style/hoot.css"


export default function Hoot(){
    return(
        <div className="hoot">
            <img src={SkateHoot} alt="SkateHoot" className="img-skate-hoot"/>
            <div className="img-subhoot">
                <img src={Fri2SKate} alt="Fri2SKate" className="img-1"/>
                <img src={GirlsSkate} alt="GirlsSkate" />

            </div>
            {/* <div className="hoot-text">
                <p>🛹✨ “El skate es un viaje increíble: disfruta cada caída, aprende de cada truco y celebra cada logro. La tabla no solo rueda, también te enseña.”</p>
            </div> */}
        </div>
    )
}