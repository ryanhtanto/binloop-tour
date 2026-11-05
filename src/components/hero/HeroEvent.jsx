import Container from "../ui/Container";


export default function HeroEvent({ event }) {


    return (

        <section
            className="
            relative
            min-h-screen
            overflow-hidden
            flex
            items-center
            justify-center
            "
        >


            {/* ================= BACKGROUND ================= */}

            <div
                className="
                absolute
                inset-0
                "
            >

                {
                    event.heroImage &&

                    <img
                        src={event.heroImage}
                        alt={event.title}
                        className="
                        w-full
                        h-full
                        object-cover
                        scale-110
                        "
                    />

                }



                {/* Overlay */}

                <div
                    className="
                    absolute
                    inset-0
                    "
                    style={{
                        background:
                        `
                        linear-gradient(
                            180deg,
                            rgba(0,0,0,0.25),
                            rgba(0,0,0,0.45),
                            ${event.theme.background}
                        )
                        `
                    }}
                />


            </div>





            {/* ================= CONTENT ================= */}


            <Container>


                <div
                    className="
                    relative
                    z-10

                    min-h-screen

                    flex
                    flex-col

                    justify-center
                    items-center

                    text-center

                    mx-auto

                    max-w-5xl
                    mt-24
                    px-6
                    "
                >





                    {/* LOGO */}


                    {
                        event.logo &&

                        <img
                            src={event.logo}
                            alt={event.title}
                            className="
                            h-24
                            md:h-32

                            object-contain

                            drop-shadow-2xl

                            mb-8
                            "
                        />

                    }






                    {/* EVENT LABEL */}


                    <p
                        className="
                        uppercase

                        tracking-[0.5em]

                        text-xs
                        md:text-sm

                        font-semibold

                        text-white/90
                        "
                    >
                        Binloop Ultra Tour 2027
                    </p>







                    {/* TITLE */}


                    <h1
                        className="
                        mt-6

                        text-5xl
                        sm:text-6xl
                        md:text-8xl

                        font-black

                        uppercase

                        leading-[0.9]

                        tracking-tight

                        text-white

                        drop-shadow-2xl

                        "
                    >

                        {event.title}

                    </h1>






                    {/* LOCATION */}


                    <div
                        className="
                        mt-8

                        flex

                        items-center

                        justify-center

                        gap-4

                        "
                    >


                        <span
                            className="
                            w-10
                            h-px
                            bg-white/50
                            "
                        />


                        <p
                            className="
                            text-lg
                            md:text-2xl

                            font-bold

                            uppercase

                            tracking-[0.3em]
                            
                            text-white
                            "
                        >

                            {event.location}

                        </p>


                        <span
                            className="
                            w-10
                            h-px
                            bg-white/50
                            "
                        />


                    </div>







                    {/* DATE */}


                    <p
                        className="
                        mt-5

                        text-sm
                        md:text-lg

                        uppercase

                        tracking-[0.4em]

                        text-white/80
                        "
                    >

                        {event.date}

                    </p>



                </div>


            </Container>


        </section>

    )

}