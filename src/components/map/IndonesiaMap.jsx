import indonesiaMap from "../../assets/map/indonesia.svg";
import sumbar from "../../assets/map/sumbar.svg";
import bali from "../../assets/map/bali.svg";


export default function IndonesiaMap() {
    return (
        <section
            className="
            relative
            min-h-screen
            overflow-hidden
            bg-[#fafafa]
            "
        >

            {/* ================= MOBILE MAP BACKGROUND ================= */}
            <div
                className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    lg:hidden
                    pointer-events-none
                "
            >
                {/* Indonesia */}
                <img
                    src={indonesiaMap}
                    alt=""
                    className="
                        absolute
                        w-[150%]
                        opacity-30
                        rotate-6
                        scale-110
                        object-contain
                    "
                />

                {/* Sumbar */}
                <img
                    src={sumbar}
                    alt=""
                    className="
                        absolute
                        w-[150%]
                        rotate-6
                        scale-[1.12]
                        object-contain
                        drop-shadow-[0_8px_16px_rgba(240,90,39,.6)]
                        animate-pulse
                    "
                />

                {/* Bali */}
                <img
                    src={bali}
                    alt=""
                    className="
                        absolute
                        w-[150%]
                        rotate-6
                        scale-[1.12]
                        object-contain
                        drop-shadow-[0_8px_16px_rgba(190,107,37,.6)]
                        animate-pulse
                    "
                />
            </div>

            {/* ================= CONTENT ================= */}
            <div
                className="
                    relative
                    min-h-screen
                    flex
                    flex-col
                    lg:flex-row
                "
            >
                {/* ================= MAP DESKTOP ================= */}
                <div
                    className="
                        hidden
                        lg:flex
                        relative
                        w-2/3
                        items-center
                        justify-center
                    "
                >

                    <div
                        className="
                            relative
                            w-[90%]
                            h-[90%]
                        "
                    >
                        {/* Indonesia */}
                        <img
                            src={indonesiaMap}
                            alt=""
                            className="
                                absolute
                                inset-0
                                w-full
                                h-full
                                object-contain
                                opacity-70
                            "
                        />

                        {/* SUMATERA BARAT */}
                        <img
                            src={sumbar}
                            alt=""
                            className="
                                absolute
                                inset-0
                                w-full
                                h-full
                                object-contain
                                z-20
                                left-[8%]
                                scale-[1.25]
                                drop-shadow-[0_10px_18px_rgba(240,90,39,.45)]
                                transition-all
                                duration-500
                               
                            "
                        />

                        {/* BALI */}
                        <img
                            src={bali}
                            alt=""
                            className="
                                absolute
                                inset-0
                                w-full
                                h-full
                                object-contain
                                z-20
                                top-[-8.5%]
                                left-[2.5%]
                                scale-[1.5]
                                drop-shadow-[0_10px_18px_rgba(190,107,37,.45)]
                                transition-all
                                duration-500
                                
                            "
                        />
                    </div>
                </div>

                {/* ================= TEXT ================= */}
                <div
                    className="
                    relative
                    z-20
                    flex
                    flex-col
                    justify-center
                    w-full
                    lg:w-1/3
                    min-h-screen
                    px-8
                    md:px-16
                    "
                >

                    <p
                        className="
                        uppercase
                        tracking-[0.4em]
                        text-sm
                        font-semibold
                        text-[#F05A27]
                        "
                    >
                        2027 Tour
                    </p>

                    <h2
                        className="
                        mt-4
                        text-5xl
                        md:text-6xl
                        font-bold
                        tracking-tight
                        leading-tight
                        text-[#1d1d1d]
                        "
                    >
                        Coming To Your
                        <br />
                        Backyard.
                    </h2>

                    <p
                        className="
                        mt-6
                        max-w-md
                        text-gray-500
                        leading-8
                        "
                    >
                        Discover Binloop Ultra journey across Indonesia and experience diverse destinations
                    </p>

                    <button
                        className="
                        mt-10
                        w-fit
                        rounded-full
                        bg-[#F05A27]
                        px-8
                        py-4
                        text-white
                        font-semibold
                        transition
                        hover:scale-105
                        hover:shadow-xl
                        "
                    >
                        Explore Tour
                    </button>

                </div>
            </div>
        </section>
    );
}