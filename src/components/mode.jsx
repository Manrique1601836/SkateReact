import { useState , useEffect } from "react";
import "./style/mode.css"

export default function Mode(){
    const [ lingth , setLingth ] = useState(true);

    const daymode = (e) => {
        e.preventDefault();
        setLingth(true);
        localStorage.setItem("tema-Actual","lingth")
    }

    const darkmode = (e) => {
        e.preventDefault();
        setLingth(false);
        localStorage.setItem("tema-Actual","dark");
    }
    useEffect(() => {
        const temaActual = localStorage.getItem("tema-Actual");
        if(temaActual === "dark"){
            setLingth(false);
        } else {
            setLingth(true);
        }
        
    }, []);
    return(
        <div className="mode">
            {
                lingth ? (
                    <button onClick={(e) => darkmode(e)} className="btn-tema"><span>🌙</span><span>DARKMODE</span></button>
                ) : (
                    <button onClick={(e) => daymode(e)} className="btn-tema"><span>DAYMODE</span><span>☀️</span></button>
                )
            }
        </div>
    );
}