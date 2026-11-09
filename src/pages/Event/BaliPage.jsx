import HeroEvent from "../../components/hero/HeroEvent";
import EventInfo from "../../components/event/EventInfo";
import baliLogo from "../../assets/baliLogo.png"
import baliHero from "../../assets/balibg.jpeg"
import Footer from "../../components/layout/Footer";
import EventCategory from "../../components/event/EventCategory";
import RaceInfo from "../../components/event/RaceInfo";


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
            distance: "Minimum 10 Loops",
            cutOff: "24 Hours",
            image: "/images/xtra.jpeg",
            description:
                "Sunrise to Sunrise",

            pricing: {
                earlyBird: [
                    {
                        label: "Regular",
                        price: "TBA",
                    },
                ],

                normal: [
                    {
                        label: "Regular",
                        price: "TBA",
                    },
                ],
            },
        },

        {
            id: "100k",
            name: "100K",
            distance: "100 KM",
            cutOff: "20 Hours",
            image: "/images/duaratus.jpeg",
            description:
                "Sunrise to Midnight",

            pricing: {
                earlyBird: [
                    {
                        label: "Regular",
                        price: "TBA",
                    },
                ],

                normal: [
                    {
                        label: "Regular",
                        price: "TBA",
                    },
                ],
            },
        },

        {
            id: "50k",
            name: "50K",
            distance: "50 KM",
            cutOff: "9 Hours",
            image: "/images/satuduapuluh.jpeg",
            description:
                "Sunrise to Sunset",

            pricing: {
                earlyBird: [
                    {
                        label: "Regular",
                        price: "TBA",
                    },
                ],

                normal: [
                    {
                        label: "Regular",
                        price: "TBA",
                    },
                ],
            },
        },

        {
            id: "relay50k",
            name: "Relay 50K",
            distance: "5 X 10 KM",
            cutOff: "9 Hours",
            image: "/images/relay.jpeg",
            description:
                "Minimum 1 Female",

            requirement:
                "Minimum 1 Female Runner",

            pricing: {
                earlyBird: [
                    {
                        label: "Team",
                        price: "TBA",
                    },
                ],

                normal: [
                    {
                        label: "Team",
                        price: "TBA",
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
                "Minimum Age: 18 Years Old"

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
            /> 
        </>

    )
}