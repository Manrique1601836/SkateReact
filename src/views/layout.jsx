
import Navbar from "../components/header"
import Footer from "../components/footer"

import Hoot from "../pages/hoot"

export default function Layout(){
    return(
        <>
            <Navbar/>
            <main>
                <Hoot/>
            </main>
            <Footer/>
        </>
    );
}
