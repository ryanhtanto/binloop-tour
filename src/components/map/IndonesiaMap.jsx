import indonesiaMap from "../../assets/map/indonesia.svg";

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

                <img
                    src={indonesiaMap}
                    alt=""
                    className="
                    w-[150%]
                    max-w-none
                    object-contain
                    opacity-[0.5]
                    rotate-6
                    scale-110
                    select-none
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

                        <img
                            src={indonesiaMap}
                            alt="Indonesia Map"
                            className="
                            absolute
                            inset-0
                            w-full
                            h-full
                            object-contain
                            "
                        />

                        {/*
                            Nanti provinsi Sumbar & Bali
                            yang clickable ditaruh di sini
                        */}

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
                        Discover the Binloop Ultra journey
                        across Indonesia and explore two
                        unforgettable destinations in
                        Padang and Bali.
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