
import Navbar from "../components/header"
import Footer from "../components/footer"

import Hoot from "../pages/hoot"
import InfoSkate from "../pages/info";
import Trucos from "../pages/trucos";
import Outfit from "../pages/Outfit";
// import Setup from "../pages/setup";
import Setup from "../pages/setup.jsx";
import Cultura from "../pages/cultura.jsx";

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
                <section id="cultura-skate">
                    <Cultura/>
                </section>
            </main>
            <Footer/>
        </>
    );
}
