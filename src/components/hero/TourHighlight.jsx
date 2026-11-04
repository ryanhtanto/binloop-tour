import padangLogo from "../../assets/padangLogo.png";
import baliLogo from "../../assets/baliLogo.png";


export default function TourHighlight() {
    return (

       <section
            className="
            relative
            overflow-hidden
            py-24
            bg-white
            "
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
                        Two Destinations
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
                    {/* PADANG */}
                    <div
                        className="
                            rounded-3xl
                            bg-white
                            border
                            border-gray-100
                            shadow-xl
                            p-8
                        "
                    >
                        <p className=" text-center tracking-widest text-gray-600 mb-0">
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
                                mx-auto
                                object-contain
                            "
                        />
                        
                    </div>

                    {/* BALI */}
                    <div
                        className="
                            rounded-3xl
                            bg-white
                            border
                            border-gray-100
                            shadow-xl
                            p-8
                        "
                    >
                        <p className=" text-center tracking-widest text-gray-600 mb-0">
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
                            alt="Binloop Ultra Padang"
                            className="
                                mt-4
                                h-full
                                w-full
                                object-contain
                                mx-auto
                            "
                        />
                        
                    </div>
                </div>
            </div>
        </section>
    )
}