import HeroEvent from "../../components/hero/HeroEvent";
import EventInfo from "../../components/event/EventInfo";
import baliLogo from "../../assets/baliLogo.png"
import baliHero from "../../assets/balibg.jpeg"
import Footer from "../../components/layout/Footer";
import EventCategory from "../../components/event/EventCategory";
import RaceInfo from "../../components/event/RaceInfo";
import SportPlus from "../../assets/sportplus.png"
import RunIndo from "../../assets/runindo.png"


export default function BaliPage() {
    const baliEvent = {
        title: "Bali",
        location: "Sanur Beach",
        date: "30 - 31 January 2027",
        logo: baliLogo,
        heroImage:baliHero,
        categories: [
            "24H",
            "100K",
            "50K",
            "10K",
            "Relay 50K"
        ],
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
        registrationDate: '2027-01-31T00:00:00'
    }

    const categories = [
        {
            id: "24h",
            name: "24H",
            distance: "Minimum 10 Loops (100 KM)",
            cutOff: "24 Hours",
            flagOff: "Saturday, 30 January 2027, 06:00 WITA",
            loopInfo: "Minimum 10 Loops",
            image: "/images/xtra.jpeg",
            description: "Sunrise to Sunrise",
            registrationUrl: "https://sportplus.myr.id/pl/binloop-ultra-bali-24-hours",
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
            flagOff: "Saturday, 30 January 2027, 06:00 WITA",
            loopInfo: "10 Loops",
            image: "/images/duaratus.jpeg",
            description: "Sunrise to Midnight",
            registrationUrl: "https://sportplus.myr.id/pl/binloop-ultra-bali-2027-100k",
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
            flagOff: "Saturday, 30 January 2027, 06:00 WITA",
            loopInfo: "5 Loops",
            image: "/images/satuduapuluh.jpeg",
            description: "Sunrise to Sunset",
            registrationUrl: "https://sportplus.myr.id/pl/binloop-ultra-bali-2027-50k",
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
            flagOff: "Saturday, 30 January 2027, 06:30 WITA",
            loopInfo: "5 × 1 Loop",
            image: "/images/relay.jpeg",
            description: "Minimum 1 Female Runner",
            requirement: "Minimum 1 Female Runner",
            registrationUrl: "https://sportplus.myr.id/pl/binloop-ultra-bali-2027-50k-relay",

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

    const baliRaceInfo = {

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
            <HeroEvent event={baliEvent} />
            <EventInfo event={baliEvent} />
            <EventCategory 
                categories={categories} 
                theme={baliEvent.theme}
            />
            <RaceInfo 
                data={baliRaceInfo}
                theme={baliEvent.theme}
            />
            <Footer
                logo={baliLogo}
                copyright="Binloop Tour Bali"
                text="Collaboration of Logo Sportplus, Logo Runindo"
                logo1={SportPlus}
                logo2={RunIndo}
            /> 
        </>

    )
}