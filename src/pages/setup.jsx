
import "./style/setup.css"
import Marca from "./img/Setup/marcas.png"
import Tabla from "./img/Setup/tabla.png"

import SkateBoard from "./img/Setup/skateariba.png"
import SkateCostado  from "./img/Setup/skatecostado.png"
import SkateAbajo from "./img/Setup/skateabajo.png"

import Tabla1 from "./img/Setup/tabla1.png"
import Tabla2 from "./img/Setup/tabla2.png"
import Tabla3 from "./img/Setup/tabla3.png"

import { SetupImg } from "./setup"
import { SetupImgTabla } from "./setup"

export default function Setup(){
    return(
        <div className="setup">
            <div className="ttl-setup">
                <h1>Setup de Skater</h1>
            </div>
            <div className="setupSkater">
                <div className="setup-img-f1">
                    <img src={Marca} alt="marca" className="img-setup"/>
                    <img src={Tabla} alt="Tabla" className="img-setup"/>
                </div>
                <div className="setup-img-f2">
                    {
                        SetupImg.map((item)=> (
                            <div className="ttl-f2-section" key={item.nombre}>
                                <div className="ttl-f2">
                                    <h2>{item.nombre}</h2>
                                </div>
                                <div className="imgs-f2">
                                    <div className="img-f2"><img src={item.imagen[0].subIMG} alt="SkateBoard" className="img-f2-img"/></div>
                                    <div className="img-f2"><img src={item.imagen[1].subIMG} alt="SkateCostado" className="img-f2-img"/></div>
                                    <div className="img-f2"><img src={item.imagen[2].subIMG} alt="SkateAbajo" className="img-f2-img"/></div>
                                </div>
                            </div>
                        ))
                    }

                    {/* {
                        SetupImgTabla.map((item)=> (
                            <div className="ttl-f3-section" key={item.nombre}>
                                <div className="ttl-f3">
                                    <h2>{item.nombre}</h2>
                                </div>
                                <div className="imgs-f3">
                                    <img src={item.imagen[0].subIMG} alt="SkateBoard" style={{width: "40rem"}}/>
                                    <img src={item.imagen[1].subIMG} alt="SkateCostado" style={{width: "70rem"}}/>
                                    <div className="img-f3">
                                        <h2>Medidas</h2>
                                        <img src={item.imagen[2].subIMG} alt="SkateAbajo"  style={{width: "80rem"}}/>
                                    </div>
                                </div>
                            </div>
                        ))
                    } */}

                    {/* <div className="ttl-f2-section">
                        <div className="ttl-f2">
                            <h2>SkateBoard</h2>
                        </div>
                        <div className="imgs-f2">
                            <div className="img-f2"><img src={Tabla1} alt="SkateBoard" /></div>
                            <div className="img-f2"><img src={Tabla2} alt="SkateCostado" /></div>
                            <div className="img-f2"><img src={Tabla3} alt="SkateAbajo" /></div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}