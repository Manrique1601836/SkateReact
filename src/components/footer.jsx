
import { Facebook , Youtube ,Instagram } from 'lucide-react';
import logoSkate from "../assets/logo.png";
import "./style/footer.css"

export default function Footer(){
    return(
        <footer>
            <div className="footer-pag">
                <div className="f-lefth">
                    <p>SkateBoard</p>
                    <div className="link-skate">
                        <a href="">
                            <Facebook className='icon-a'/>
                        </a>
                        <a href="">
                            <Youtube className='icon-a'/>
                        </a>
                        <a href="">
                            <Instagram className='icon-a'/>
                        </a>
                        </div>
                </div>
                <div className="f-rigth">
                    <img src={logoSkate} alt="logoSakate" className="f-img"/>
                    <p>Kickave</p>
                </div>
            </div>
        </footer>
    );
}