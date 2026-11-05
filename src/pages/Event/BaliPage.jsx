import HeroEvent from "../../components/hero/HeroEvent";
import EventInfo from "../../components/event/EventInfo";
import baliLogo from "../../assets/baliLogo.png"
import baliHero from "../../assets/balibg.png"
import Footer from "../../components/layout/Footer";
import EventCategory from "../../components/event/EventCategory";


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
            id: "xtra",
            name: "Xtra Miles",
            distance: "XTRA MILES",
            cutOff: "40 Hours",
            image: "/images/xtra.jpeg",
            description:
                "Challenge yourself through the longest Binloop Ultra distance.",

            pricing: {
                earlyBird: [
                    {
                        label: "Regular",
                        price: "Rp 1.250.000",
                    },
                    {
                        label: "Loyalty",
                        price: "Rp 1.100.000",
                        highlight: true,
                    },
                    {
                        label: "Community",
                        subtitle: "Minimum 5 Runners",
                        price: "Rp 1.100.000",
                        highlight: true,
                    },
                ],

                normal: [
                    {
                        label: "Regular",
                        price: "Rp 1.500.000",
                    },
                    {
                        label: "Loyalty",
                        price: "Rp 1.200.000",
                        highlight: true,
                    },
                    {
                        label: "Community",
                        subtitle: "Minimum 5 Runners",
                        price: "Rp 1.250.000",
                        highlight: true,
                    },
                ],
            },
        },

        {
            id: "200K",
            name: "200K",
            distance: "200 KM",
            cutOff: "40 Hours",
            image: "/images/duaratus.jpeg",
            description:
                "Experience the ultimate trail adventure.",

            pricing: {
                earlyBird: [
                    {
                        label: "Regular",
                        price: "Rp 1.250.000",
                    },
                    {
                        label: "Loyalty",
                        price: "Rp 1.100.000",
                        highlight: true,
                    },
                    {
                        label: "Community",
                        subtitle: "Minimum 5 Runners",
                        price: "Rp 1.100.000",
                        highlight: true,
                    },
                ],

                normal: [
                    {
                        label: "Regular",
                        price: "Rp 1.500.000",
                    },
                    {
                        label: "Loyalty",
                        price: "Rp 1.200.000",
                        highlight: true,
                    },
                    {
                        label: "Community",
                        subtitle: "Minimum 5 Runners",
                        price: "Rp 1.250.000",
                        highlight: true,
                    },
                ],
            },
        },

        {
            id: "120K",
            name: "120K",
            distance: "120 KM",
            cutOff: "22 Hours",
            image: "/images/satuduapuluh.jpeg",
            description:
                "Perfect distance for experienced ultra runners.",

            pricing: {
                earlyBird: [
                    {
                        label: "Regular",
                        price: "Rp 1.000.000",
                    },
                    {
                        label: "Loyalty",
                        price: "Rp 900.000",
                        highlight: true,
                    },
                    {
                        label: "Community",
                        subtitle: "Minimum 5 Runners",
                        price: "Rp 900.000",
                        highlight: true,
                    },
                ],

                normal: [
                    {
                        label: "Regular",
                        price: "Rp 1.250.000",
                    },
                    {
                        label: "Loyalty",
                        price: "Rp 1.000.000",
                        highlight: true,
                    },
                    {
                        label: "Community",
                        subtitle: "Minimum 5 Runners",
                        price: "Rp 1.050.000",
                        highlight: true,
                    },
                ],
            },
        },

        {
            id: "60K",
            name: "60K",
            distance: "60 KM",
            cutOff: "10 Hours",
            image: "/images/enampuluh.jpeg",
            description:
                "A fast and exciting ultra distance with stunning scenery.",

            pricing: {
                earlyBird: [
                    {
                        label: "Regular",
                        price: "Rp 800.000",
                    },
                    {
                        label: "Loyalty",
                        price: "Rp 725.000",
                        highlight: true,
                    },
                    {
                        label: "Community",
                        subtitle: "Minimum 5 Runners",
                        price: "Rp 725.000",
                        highlight: true,
                    },
                ],

                normal: [
                    {
                        label: "Regular",
                        price: "Rp 1.000.000",
                    },
                    {
                        label: "Loyalty",
                        price: "Rp 800.000",
                        highlight: true,
                    },
                    {
                        label: "Community",
                        subtitle: "Minimum 5 Runners",
                        price: "Rp 850.000",
                        highlight: true,
                    },
                ],
            },
        },

        {
            id: "12K",
            name: "12K",
            distance: "12 KM",
            cutOff: "3 Hours",
            image: "/images/duabelas.jpeg",
            description:
                "Perfect for beginners who want to experience the Binloop atmosphere.",

            pricing: {
                earlyBird: [
                    {
                        label: "Regular",
                        price: "Rp 360.000",
                    },
                ],

                normal: [
                    {
                        label: "Regular",
                        price: "Rp 450.000",
                    },
                ],
            },
        },

        {
            id: "relay",
            name: "Relay",
            distance: "Relay 60 KM",
            cutOff: "10 Hours",
            image: "/images/relay.jpeg",
            description:
                "Run together with your teammates and share the ultra experience.",

            pricing: {
                earlyBird: [
                    {
                        label: "Team",
                        price: "Rp 1.500.000",
                    },
                ],

                normal: [
                    {
                        label: "Team",
                        price: "Rp 1.800.000",
                    },
                ],
            },
        },
        
    ];

    return (
        <>
            <HeroEvent event={baliEvent} />
            <EventInfo event={baliEvent} />
            <EventCategory 
                categories={categories} 
                theme={baliEvent.theme}
            />
            <Footer
                logo={baliLogo}
                copyright="Binloop Tour Bali"
            /> 
        </>

    )
}