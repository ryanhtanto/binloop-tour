import {
    useEffect,
    useState
} from "react";


function CountdownBanner({
    targetDate,
    theme = {},
    name
}) {


    const calculateTimeLeft = () => {

        const difference =
            new Date(targetDate) - new Date();


        if (difference <= 0) {

            return {
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00",
            };

        }


        return {

            days: String(
                Math.floor(
                    difference /
                    (1000 * 60 * 60 * 24)
                )
            ).padStart(2,"0"),


            hours: String(
                Math.floor(
                    (difference /
                    (1000 * 60 * 60)) % 24
                )
            ).padStart(2,"0"),


            minutes: String(
                Math.floor(
                    (difference /
                    (1000 * 60)) % 60
                )
            ).padStart(2,"0"),


            seconds: String(
                Math.floor(
                    (difference / 1000) % 60
                )
            ).padStart(2,"0"),

        };

    };



    const [timeLeft,setTimeLeft] =
        useState(
            calculateTimeLeft()
        );



    useEffect(()=>{


        const interval =
            setInterval(()=>{

                setTimeLeft(
                    calculateTimeLeft()
                );

            },1000);



        return ()=>clearInterval(interval);


    },[targetDate]);





    const items = [
        {
            value:timeLeft.days,
            label:"DAYS"
        },
        {
            value:timeLeft.hours,
            label:"HOURS"
        },
        {
            value:timeLeft.minutes,
            label:"MINUTES"
        },
        {
            value:timeLeft.seconds,
            label:"SECONDS"
        },
    ];




    const primary =
        theme.primary || "#242021";


    const secondary =
        theme.secondary || "#F05A27";




    return (

        <section
            className="
            w-screen
            overflow-hidden
            "
        >



            <div
                className="
                flex
                flex-col
                lg:flex-row
                "
            >





                {/* ================= LEFT COUNTDOWN ================= */}


                <div
                    style={{
                        background:`
                            linear-gradient(
                                135deg,
                                ${primary},
                                ${primary}dd
                            )
                        `
                    }}


                    className="
                    relative

                    flex
                    flex-1

                    items-center
                    justify-center

                    px-6
                    py-14

                    text-white
                    "
                >



                    <div
                        className="
                        flex
                        gap-4
                        md:gap-10
                        "
                    >


                        {
                            items.map((item,index)=>(


                                <div
                                    key={item.label}

                                    className="
                                    flex
                                    items-center
                                    "
                                >


                                    <div
                                        className="
                                        text-center
                                        "
                                    >


                                        <h2
                                            className="
                                            text-4xl
                                            md:text-6xl

                                            font-black

                                            leading-none
                                            "
                                        >
                                            {item.value}
                                        </h2>



                                        <p
                                            className="
                                            mt-3

                                            text-[10px]
                                            md:text-xs

                                            tracking-[0.4em]

                                            text-white/60
                                            "
                                        >
                                            {item.label}
                                        </p>


                                    </div>





                                    {
                                        index !== items.length-1 && (

                                            <div
                                                className="
                                                h-14

                                                w-px

                                                bg-white/20

                                                mx-4
                                                md:mx-8
                                                "
                                            />

                                        )
                                    }



                                </div>


                            ))
                        }


                    </div>


                </div>







                {/* ================= RIGHT MESSAGE ================= */}



                <div
                    style={{
                        background:`
                            linear-gradient(
                                135deg,
                                ${secondary},
                                ${secondary}dd
                            )
                        `
                    }}

                    className="
                    relative

                    flex

                    items-center

                    justify-center

                    px-10

                    py-14

                    text-white

                    lg:w-[38%]
                    "
                >




                    {/* diagonal */}

                    <div
                        style={{
                            backgroundColor:secondary
                        }}

                        className="
                        hidden
                        lg:block

                        absolute

                        left-[-60px]

                        top-0

                        h-full

                        w-28

                        skew-x-[-15deg]
                        "
                    />






                    <div
                        className="
                        relative
                        z-10

                        text-center

                        "
                    >


                        <p
                            className="
                            uppercase

                            tracking-[0.5em]

                            text-xs

                            text-white/70
                            "
                        >
                            Binloop Ultra {name}
                        </p>




                        <h3
                            className="
                            mt-5

                            text-3xl
                            md:text-5xl

                            font-black

                            uppercase

                            leading-tight
                            "
                        >
                            BEYOND THE 
                            <br/>
                            DAWN
                        </h3>

                    </div>


                </div>




            </div>



        </section>

    );

}


export default CountdownBanner;