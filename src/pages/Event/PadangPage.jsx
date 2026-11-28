import HeroEvent from "../../components/hero/HeroEvent";
import EventInfo from "../../components/event/EventInfo";
import padangLogo from "../../assets/padangLogo.png";
import padangHero from "../../assets/bg-padang.jpeg"
import Footer from "../../components/layout/Footer";
import EventCategory from "../../components/event/EventCategory";
// import ComingSoon from "../../components/layout/ComingSoon";
import RaceInfo from "../../components/event/RaceInfo";
import SportPlus from "../../assets/sportplus.png"
import Oudpro from "../../assets/oudpro.png"

export default function PadangPage() {
    const padangEvent = {
        title: "Padang",
        location: "Padang Beach",
        date: "3 - 4 April 2027",
        logo: padangLogo,
        target: "The Afterglow",
        heroImage:padangHero,
        categories: [
            "24H",
            "100K",
            "50K",
            "10K",
            "Relay 50K"
        ],
        theme: {
            primary: "#F05A27",
            secondary: "#dcb728",
            background: "#FFF8F4",
            pattern:
                `
                    linear-gradient(
                        45deg,
                        transparent 40%,
                        rgba(255,215,120,.35) 40%,
                        rgba(255,215,120,.35) 60%,
                        transparent 60%
                    ),
                    linear-gradient(
                        -45deg,
                        transparent 40%,
                        rgba(255,215,120,.35) 40%,
                        rgba(255,215,120,.35) 60%,
                        transparent 60%
                    )
                `
        },
        registrationDate: '2027-04-03T00:00:00'
    }

    const categories = [
        {
            id: "24h",
            name: "24H",
            distance: "Minimum 10 Loops (100 KM)",
            cutOff: "24 Hours",
            flagOff: "Saturday, 3 April 2027, 06:00 WIB",
            loopInfo: "Minimum 10 Loops",
            image: "/images/xtra.jpeg",
            description: "Sunrise to Sunrise",
            // registrationUrl: "https://sportplus.myr.id/pl/binloop-ultra-bali-24-hours",
            registrationUrl: "https://sportplus.myr.id/pl/binloop-ultra-padang-24-hours",
            pricing: {
            earlyBird: [
                {
                label: "Regular",
                price: "IDR 1,000,000",
                },
            ],
            normal: [
                {
                label: "Regular",
                price: "IDR 1,250,000",
                },
            ],
            },
        },

        {
            id: "100k",
            name: "100K",
            distance: "100 KM",
            cutOff: "20 Hours",
            flagOff: "Saturday, 3 April 2027, 06:00 WIB",
            loopInfo: "10 Loops",
            image: "/images/duaratus.jpeg",
            description: "Sunrise to Midnight",
            // registrationUrl: "https://sportplus.myr.id/pl/binloop-ultra-bali-2027-100k",
            registrationUrl: "https://sportplus.myr.id/pl/binloop-ultra-padang-2027-100k",
            pricing: {
            earlyBird: [
                {
                label: "Regular",
                price: "IDR 1,000,000",
                },
            ],
            normal: [
                {
                label: "Regular",
                price: "IDR 1,250,000",
                },
            ],
            },
        },

        {
            id: "50k",
            name: "50K",
            distance: "50 KM",
            cutOff: "9 Hours",
            flagOff: "Saturday, 3 April 2027, 06:00 WIB",
            loopInfo: "5 Loops",
            image: "/images/satuduapuluh.jpeg",
            description: "Sunrise to Sunset",
            // registrationUrl: "https://sportplus.myr.id/pl/binloop-ultra-bali-2027-50k",
            registrationUrl: "https://sportplus.myr.id/pl/binloop-ultra-padang-2027-50k",
            pricing: {
            earlyBird: [
                {
                label: "Regular",
                price: "IDR 800,000",
                },
            ],
            normal: [
                {
                label: "Regular",
                price: "IDR 1,000,000",
                },
            ],
            },
        },

        {
            id: "relay50k",
            name: "Relay 50K",
            distance: "5 × 10 KM",
            cutOff: "9 Hours",
            flagOff: "Saturday, 3 April 2027, 06:30 WIB",
            loopInfo: "5 × 1 Loop",
            image: "/images/Relay.jpeg",
            description: "Minimum 1 Female Runner",
            requirement: "Minimum 1 Female Runner",
            // registrationUrl: "https://sportplus.myr.id/pl/binloop-ultra-bali-2027-50k-relay",
            registrationUrl: "https://sportplus.myr.id/pl/binloop-ultra-padang-2027-50k-relay",
            pricing: {
            earlyBird: [
                {
                label: "Team",
                price: "IDR 1,200,000",
                },
            ],
            normal: [
                {
                label: "Team",
                price: "IDR 1,500,000",
                },
            ],
            },
        },
    ];

    const padangRaceInfo = {

        label: "Race Information",

        title: "CAUSE THE WALLS START SHAKING",

        subtitle:
            "Experience Bali through an unforgettable ultra running adventure.",


        included: {

            title: "WHAT'S INCLUDED",

            items: [

                {
                    icon: "🏃",
                    title: "Race Tee",
                    description:
                        "Provided for all registered participants."
                },

                {
                    icon: "🏅",
                    title: "Finisher Medal",
                    description:
                        "Awarded to all finishers under Cut Off Time (COT)."
                },


                {
                    icon: "👕",
                    title: "Exclusive Finisher Tee",
                    description:
                        "Available for The 24H, 100K, 50K finishers under COT."
                },

            ]

        },


        qualification: {

            title: "QUALIFICATION",

            categories: [

                {
                    cat: "24H",
                    req:
                        "Must have previously completed a 50K road race or an equivalent trail race."
                },


                {
                    cat: "100K",
                    req:
                        "Must have previously completed a 50K road race or an equivalent trail race."
                },


                {
                    cat: "50K",
                    req:
                        "Must have previously completed a full marathon road race or an equivalent trail race."
                },

            ],


            allCategories:
                "All Categories",


            minAge:
                "Minimum Age: 18 Years Old",

            relayNote:
                "Participants aged 12-17 years old are eligible to participate as team members, subject to submission of a parental consent letter at Race Pack Collection."

        }

    }
    
    return (
        <>
            <HeroEvent event={padangEvent} />
            <EventInfo event={padangEvent} />
            <EventCategory 
                categories={categories}  
                theme={padangEvent.theme}
                registerTrue={true}
            />
            <RaceInfo 
                data={padangRaceInfo}
                theme={padangEvent.theme}
            />
            {/* <ComingSoon
                title="Race Category"
                theme={padangEvent.theme}
            /> */}

            <Footer
                logo={padangLogo}
                copyright="Binloop Tour Padang"
                logo1={SportPlus}
                logo2={Oudpro}
            />
        </>

    )
}