import HeroEvent from "../../components/hero/HeroEvent";
import EventInfo from "../../components/event/EventInfo";
import padangLogo from "../../assets/padangLogo.png";
import padangHero from "../../assets/padangbg.png"
import Footer from "../../components/layout/Footer";
import EventCategory from "../../components/event/EventCategory";
import ComingSoon from "../../components/layout/ComingSoon";

export default function PadangPage() {
    const padangEvent = {
        title: "Padang",
        location: "Padang Beach",
        date: "COMING SOON",
        logo: padangLogo,
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
            <HeroEvent event={padangEvent} />
            {/* <EventInfo event={padangEvent} /> */}
            {/* <EventCategory 
                categories={categories}  
                theme={padangEvent.theme}
            /> */}
            <ComingSoon
                title="Race Category"
                theme={padangEvent.theme}
            />

            <Footer
                logo={padangLogo}
                copyright="Binloop Tour Padang"
            />
        </>

    )
}