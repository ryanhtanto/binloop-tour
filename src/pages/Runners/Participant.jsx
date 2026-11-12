import ComingSoon from "../../components/layout/ComingSoon";
import Footer from "../../components/layout/Footer";
import tourLogo from "../../assets/logoBlack.png"

export default function Participant() {
    const defaultEvent = {
        theme:{
            background:"#FFF8F4",
            primary:"#544741",
            secondary:"#BE6B25",
            pattern:
                `
                    linear-gradient(
                        45deg,
                        rgba(255,255,255,.25) 25%,
                        transparent 25%
                    ),
                    linear-gradient(
                        -45deg,
                        rgba(255,255,255,.25) 25%,
                        transparent 25%
                    )
                `
        },
    }
    
    return (
        <>
            <ComingSoon
                title="Participant"
                theme={defaultEvent.theme}
            />

            <Footer
                logo={tourLogo}
                copyright="Binloop Tour Padang"
            />
        </>

    )
}