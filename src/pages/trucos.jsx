
import PoPShovit from "./media/popShovit.mp4"
import KicKFlip from "./media/kickFlip.mp4"
import Olli from "./media/Olli.mp4"
import DobleFlip from "./media/dobleflip.mp4"
import powerSlite from "./media/powerSlite.mp4"
import { useState } from "react"

import LupaTrucos from "../components/lupaTrucos"
import { videoTrucosSkate } from "./videoTrucos"

import "./style/trucos.css"

export default function Trucos(){

    const [busqueda, setBusqueda] = useState("");

    // 🟢 Filtrar los trucos según la búsqueda
    const resultadosTrucos = videoTrucosSkate.filter((item) =>
        item.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return(
            <div className="trucos-skates">
                <div className="text-skate">
                    <h1>Trucos de skate</h1>
                    <LupaTrucos onBuscar={(texto) => setBusqueda(texto)} className="icon-lupa"/>
                </div>

                <div className="trucos-truk">
                {resultadosTrucos.map((item) => (
                    <div className="truco" key={item.nombre}>
                        <video
                            src={item.video}
                            className="video-hoot"
                            controls
                            loop
                        />
                        <h1>{item.nombre}</h1>
                    </div>
                ))}

                {resultadosTrucos.length === 0 && (
                    <p className="no-result">No se encontró el truco...</p>
                )}
            </div>

                
            </div>
    );
}