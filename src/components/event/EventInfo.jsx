import CountdownBanner from "../layout/CountdownBanner";


export default function EventInfo({ event }) {


    return (

        <section
            className="
            relative
            bg-white
            overflow-hidden
            "
        >


            {/* ================= BATIK TOP BORDER ================= */}

            <div
                className="
                h-10
                w-full
                "
                style={{
                    backgroundColor:event.theme.secondary,
                    backgroundImage:event.theme.pattern,
                    backgroundSize:"32px 32px"
                }}
            />

            {/* ================= COUNTDOWN FULL WIDTH ================= */}


            <CountdownBanner
                targetDate={event.registrationDate}
                theme={event.theme}
            />


        </section>

    )

}