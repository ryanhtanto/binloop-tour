import padangLogo from "../../assets/padangLogo.png";
import baliLogo from "../../assets/baliLogo.png";
import { Link } from "react-router-dom";

export default function TourHighlight() {
    return (

       <section
            className="
            relative
            overflow-hidden
            py-24
            bg-white
            "
            id="tour"
        >

            {/* Center Bloom */}
            <div
                className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[600px]
                h-[600px]
                rounded-full
                opacity-40
                blur-3xl
                "
                style={{
                    background:
                    `
                    radial-gradient(
                        circle,
                        #F05A27 0%,
                        rgba(240,90,39,0.25) 25%,
                        rgba(237,30,36,0.12) 45%,
                        transparent 70%
                    )
                    `
                }}
            />


            {/* Small dots */}
            <div
                className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[280px]
                h-[280px]
                rounded-full
                "
                style={{
                    background:
                    `
                    radial-gradient(
                        circle,
                        rgba(240,90,39,0.35) 1px,
                        transparent 2px
                    )
                    `,
                    backgroundSize:"22px 22px"
                }}
            />



            <div
                className="
                relative
                z-10
                max-w-6xl
                mx-auto
                px-6
                "
            >

                <div
                    className="
                    text-center
                    "
                >

                    <p
                        className="
                        uppercase
                        tracking-[0.5em]
                        text-sm
                        text-gray-400
                        "
                    >
                        DIVERSE DESTINATIONS
                    </p>

                    <h2
                        className="
                        mt-4
                        text-5xl
                        md:text-7xl
                        font-black
                        text-[#252525]
                        "
                    >
                        ONE ULTRA
                        <span className="text-[#F05A27]">
                            {" "}JOURNEY
                        </span>
                    </h2>
                </div>

                <div
                    className="
                        mt-16
                        grid
                        md:grid-cols-2
                        gap-8
                    "
                >
                    {/* BALI */}
                    <Link
                        to="/bali2027"
                        className="
                        block
                        rounded-3xl
                        bg-white
                        border
                        border-gray-100
                        shadow-xl
                        p-8
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-2xl
                        hover:border-[#be6b25]
                        "
                    >
                        <p className="text-center tracking-widest text-gray-600 mb-0">
                        30 - 31 JANUARY 2027
                        </p>

                        <p
                        className="
                            uppercase
                            tracking-[0.5em]
                            text-gray-400
                            text-center
                        "
                        >
                        SANUR BEACH
                        </p>

                        <img
                        src={baliLogo}
                        alt="Binloop Ultra Bali"
                        className="
                            mt-4
                            h-full
                            w-full
                            object-contain
                            mx-auto
                        "
                        />
                    </Link>

                    {/* PADANG */}
                    <Link
                        to="/padang2027"
                        className="
                            relative
                            block
                            overflow-hidden
                            rounded-3xl
                            bg-white
                            border
                            border-gray-100
                            shadow-xl
                            p-8
                            transition-all
                            duration-300
                            hover:-translate-y-2
                            hover:shadow-2xl
                            hover:border-[#ed1e24]
                        "
                    >
                        {/* Watermark */}
                        <div
                            className="
                                absolute
                                inset-0
                                z-10
                                flex
                                items-center
                                justify-center
                                bg-white/55
                                backdrop-blur-[2px]
                            "
                        >
                            <span
                                className="
                                    -rotate-12
                                    text-3xl
                                    md:text-5xl
                                    font-black
                                    uppercase
                                    tracking-[0.3em]
                                    text-[#ed1e24]/80
                                    select-none
                                    opacity-50
                                "
                            >
                                Coming Soon
                            </span>
                        </div>

                        <p className="text-center tracking-widest text-gray-600 mb-0">
                            03 - 04 APRIL 2027
                        </p>

                        <p
                            className="
                                uppercase
                                tracking-[0.5em]
                                text-gray-400
                                text-center
                            "
                        >
                            PADANG BEACH
                        </p>

                        <img
                            src={padangLogo}
                            alt="Binloop Ultra Padang"
                            className="
                                mt-4
                                h-full
                                w-full
                                object-contain
                                mx-auto
                            "
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}