import HeroHome from "../../components/hero/HeroHome";
import TourHighlight from "../../components/hero/TourHighlight";
import Footer from "../../components/layout/Footer";
import IndonesiaMap from "../../components/map/IndonesiaMap";
import tourLogo from "../../assets/logoBlack.png"

export default function TourHomePage(){
    return (
        <main>
            
            <HeroHome />
            <TourHighlight />
            <IndonesiaMap />
            <Footer
                logo={tourLogo}
                copyright="Binloop Tour"
            />
        </main>
    )
}