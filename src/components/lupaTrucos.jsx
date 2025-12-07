


import { useState } from "react";
import "./style/lupa.css"
import { Search  } from "lucide-react"

export default function LupaTrucos({ onBuscar }){

    const [ buscador , setBuscador ] = useState("");

    const handleSubmit = (e) => {
        const value = e.target.value;
        setBuscador(value);
        onBuscar(value);
    };

    return(
        <div className="lupa">
            <input  
                type="search" 
                placeholder="Busca ese truco"
                value={buscador}
                onChange={handleSubmit}
            />
            <Search className="lupa-icon"/>
        </div>
    );
}