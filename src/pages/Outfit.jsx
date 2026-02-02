
import "./style/outfit.css"

import Relular from "./img/Outfit/Sregular.jpeg"
import Goofy from "./img/Outfit/Sgoofy.jpeg"
import FriendSkater from "./img/Outfit/friendSka.png"

import PostR from "./img/Outfit/posR.jpeg"
import PostG from "./img/Outfit/posG.jpeg"

export default function Outfit(){
    return(
        <div className="outfit">
            <div className="ttl-outfit">
                <h1>Outfit de Skater</h1>
            </div>
            
            <div className="outSkater">
                <img src={FriendSkater} alt="FriendSkater" />
            </div>
            
            <div className="outfitskater">
                <div className="skater-regular">
                    <img src={Relular} alt="Skater-Relular" />
                    <div className="sk-rg-tto">
                        <p>Pie izquierdo en el nose <br />
                        pie derecho en el tail</p>
                        <img src={PostR} alt="posicion-regular" className="posRegular"/>
                    </div>
                </div>
                <div className="skater-goofy">
                    <img src={Goofy} alt="Skater-Goofy" />
                    <div className="sk-gf-tto">
                        <p>Pie derecho en el nose <br />
                        pie izquierdo en el tail</p>
                        <img src={PostG} alt="posicion-goofy" className="posGoofy"/>
                    </div>
                </div>
            </div>
        </div>
    );
}