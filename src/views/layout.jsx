
import Navbar from "../components/header"
import Footer from "../components/footer"

import Hoot from "../pages/hoot"
import InfoSkate from "../pages/info";
import Trucos from "../pages/trucos";
import Outfit from "../pages/Outfit";
import Setup from "../pages/setup";

export default function Layout(){
    return(
        <>
            <Navbar/>
            <main>
                <Hoot/>
                <section id="info-skate">
                    <InfoSkate/>
                </section>
                <section id="setup-skater">
                    <Setup/>
                </section>
                <section id="outfit-Skater">
                    <Outfit/>
                </section>
                <section id="trucos-skate">
                    <Trucos/>
                </section>
            </main>
            <Footer/>
        </>
    );
}
