
import { Facebook , Youtube ,Instagram } from 'lucide-react';
import logoSkate from "../assets/logo.png";
import "./style/footer.css"

import logoTikok from "../assets/logoTik.jpg"

export default function Footer(){
    return(
        <footer>
            <div className="footer-pag">
                <div className="f-lefth">
                    <p>SkateBoard</p>
                    <div className="red-tiktok">
                        <img src={logoTikok} alt="logo-tiktok" />
                        <a href="https://www.tiktok.com/@edwin.manrique48" target='_blank'>
                            Edwin Manrique
                        </a>
                    </div>


                    {/* <div className="link-skate">
                        <a href="">
                            <Facebook className='icon-a'/>
                        </a>
                        <a href="">
                            <Youtube className='icon-a'/>
                        </a>
                        <a href="">
                            <Instagram className='icon-a'/>
                        </a>
                    </div> */}
                </div>
                <div className="f-rigth">
                    <img src={logoSkate} alt="logoSakate" className="f-img"/>
                    <p>Kickave</p>
                </div>
            </div>
        </footer>
    );
}