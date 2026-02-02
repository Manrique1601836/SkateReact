
import "./style/cultura.css"

import Cultura1 from "./img/Cultura/cultura1.png"

export default function Cultura(){
    return(
        <div className="cultura-skater">
            <div className="ttl-cultura">
                <h1>Cultura Skater</h1>
            </div>
            <div className="culturaSkate">
                <img src={Cultura1} alt="Cultura1" />
            </div>
        </div>
    );
}