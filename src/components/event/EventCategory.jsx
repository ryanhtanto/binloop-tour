import {
    useEffect,
    useRef,
    useState
} from "react";


export default function EventCategory({
    categories,
    theme = {}
}) {


    const [active, setActive] =
        useState(categories[0]);


    const sliderRef =
        useRef(null);


    const isDragging =
        useRef(false);


    const startX =
        useRef(0);


    const scrollStart =
        useRef(0);



    const shadowColor = theme.secondary;




    // ================= MARQUEE =================

    useEffect(() => {

        const slider =
            sliderRef.current;


        if (!slider)
            return;


        const timer =
            setInterval(() => {


                if (!isDragging.current) {


                    slider.scrollLeft += 1.5;


                    if (
                        slider.scrollLeft >=
                        slider.scrollWidth / 3
                    ) {

                        slider.scrollLeft = 0;

                    }

                }


            }, 20);



        return () =>
            clearInterval(timer);


    }, []);






    // ================= DRAG =================


    const mouseDown = (e) => {


        isDragging.current = true;


        startX.current =
            e.pageX -
            sliderRef.current.offsetLeft;


        scrollStart.current =
            sliderRef.current.scrollLeft;


    };



    const mouseMove = (e) => {


        if (!isDragging.current)
            return;



        const x =
            e.pageX -
            sliderRef.current.offsetLeft;



        sliderRef.current.scrollLeft =
            scrollStart.current -
            ((x - startX.current) * 1.5);


    };



    const mouseUp = () => {

        isDragging.current = false;

    };






    return (

        <section

            className="
            min-h-screen
            bg-[#fafafa]
            overflow-hidden
            flex
            items-center
            "

        >


            <div

                className="
                w-full
                flex
                flex-col
                lg:flex-row
                "

            >






                {/* =====================================================
                    IMAGE MARQUEE
                ===================================================== */}


                <div

                    className="
                    w-full
                    lg:w-1/2
                    overflow-hidden
                    py-28
                    "

                >


                    <div

                        ref={sliderRef}

                        onMouseDown={mouseDown}
                        onMouseMove={mouseMove}
                        onMouseUp={mouseUp}
                        onMouseLeave={mouseUp}

                        className="
                        flex
                        gap-4
                        overflow-hidden
                        cursor-grab
                        active:cursor-grabbing
                        select-none
                        "

                    >


                        {
                            [
                                ...categories,
                                ...categories,
                                ...categories
                            ]
                            .map((item,index)=>(


                                <div

                                    key={index}

                                    onClick={() =>
                                        setActive(item)
                                    }

                                    className="
                                    relative
                                    shrink-0

                                    w-[280px]
                                    md:w-[340px]

                                    h-[520px]

                                    cursor-pointer
                                    "

                                >





                                    {/* IMAGE */}


                                    <div

                                        className="
                                        absolute
                                        inset-0

                                        overflow-hidden

                                        rounded-3xl

                                        skew-x-[-10deg]

                                        shadow-xl

                                        "

                                        style={{

                                            boxShadow:
                                            active.id === item.id

                                            ?

                                            `0 25px 50px ${shadowColor}50`

                                            :

                                            "0 15px 30px rgba(0,0,0,.15)"

                                        }}

                                    >


                                        <img

                                            src={item.image}

                                            alt={item.name}

                                            draggable="false"

                                            className={`
                                            
                                            w-full
                                            h-full

                                            object-cover

                                            skew-x-[10deg]

                                            scale-110

                                            transition-all
                                            duration-700


                                            ${
                                                active.id === item.id

                                                ?

                                                "opacity-100 scale-[1.15]"

                                                :

                                                "opacity-40"
                                            }

                                            `}

                                        />

                                    </div>







                                    {/* IMAGE TEXT */}


                                    <div

                                        className="
                                        absolute
                                        inset-0

                                        flex
                                        flex-col

                                        justify-end

                                        p-8

                                        "

                                    >


                                        <h3

                                            className={`
                                            text-4xl
                                            font-black
                                            uppercase

                                            transition

                                            ${
                                                active.id === item.id

                                                ?

                                                "text-white drop-shadow-xl"

                                                :

                                                "text-black"
                                            }

                                            `}

                                        >

                                            {item.name}

                                        </h3>





                                        <p

                                            className={`
                                            mt-2

                                            uppercase

                                            tracking-[0.5em]

                                            text-xs

                                            font-bold

                                            ${
                                                active.id === item.id

                                                ?

                                                "text-white"

                                                :

                                                "text-black"
                                            }

                                            `}

                                        >

                                            {item.distance}

                                        </p>





                                        <span

                                            className="
                                            mt-8

                                            inline-flex

                                            w-fit

                                            rounded-full

                                            bg-white

                                            px-7

                                            py-3

                                            text-xs

                                            uppercase

                                            tracking-[0.3em]

                                            font-bold

                                            text-black

                                            "

                                            style={{

                                                boxShadow:
                                                `0 15px 35px ${shadowColor}80`

                                            }}

                                        >

                                            Price Details

                                        </span>


                                    </div>



                                </div>


                            ))

                        }


                    </div>


                </div>









                {/* =====================================================
                    DETAIL
                ===================================================== */}



                <div

                    className="
                    w-full
                    lg:w-1/2

                    px-8
                    lg:px-16

                    py-16

                    "

                >



                    <p

                        className="
                        uppercase

                        tracking-[0.5em]

                        text-sm

                        font-bold

                        "

                        style={{

                            color:shadowColor

                        }}

                    >

                        Race Category

                    </p>




                    <h2

                        className="
                        mt-5

                        text-6xl

                        font-black

                        uppercase

                        leading-none

                        "

                    >

                        {active.name}

                    </h2>




                    <p

                        className="
                        mt-6

                        max-w-xl

                        text-gray-500

                        leading-8

                        "

                    >

                        {active.description}

                    </p>








                    {/* DISTANCE + CUTOFF */}



                    <div

                        className="
                        mt-8

                        grid

                        grid-cols-2

                        gap-4

                        "

                    >


                        <InfoCard

                            title="Distance"

                            value={active.distance}

                            color={shadowColor}

                        />


                        <InfoCard

                            title="Cut Off Time"

                            value={active.cutOff}

                            color={shadowColor}

                        />


                    </div>








                    {/* PRICE */}


                    <div
                        className="
                            mt-10
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            gap-6
                        "
                    >


                        <PriceCard

                            title="Early Bird"

                            data={active.pricing.earlyBird}

                            color={shadowColor}

                        />



                        <PriceCard

                            title="Normal Price"

                            data={active.pricing.normal}

                            color={shadowColor}

                        />


                    </div>







                    {/* <button

                        className="
                        mt-10

                        w-full

                        rounded-full

                        py-5

                        text-white

                        font-bold

                        uppercase

                        tracking-[0.3em]

                        transition

                        hover:scale-[1.02]

                        "

                        style={{

                            backgroundColor:shadowColor,

                            boxShadow:
                            `0 20px 40px ${shadowColor}70`

                        }}

                    >

                        Register Now

                    </button> */}



                </div>




            </div>


        </section>

    )

}








function InfoCard({
    title,
    value,
    color
}) {


    return (

        <div

            className="
            bg-white

            rounded-2xl

            p-5

            "

            style={{

                boxShadow:
                `0 15px 35px ${color}25`

            }}

        >

            <p
                className="
                text-xs

                uppercase

                tracking-[0.3em]

                text-gray-400
                "
            >

                {title}

            </p>


            <h4

                className="
                mt-2

                text-2xl

                font-black

                "

            >

                {value}

            </h4>


        </div>

    )

}









function PriceCard({
    title,
    data,
    color
}) {


    return (

        <div

            className="
            rounded-3xl

            bg-white

            p-6

            "

            style={{

                boxShadow:
                `0 20px 45px ${color}25`

            }}

        >


            <h3

                className="
                uppercase

                tracking-[0.35em]

                text-xs

                font-bold

                text-gray-400

                "

            >

                {title}

            </h3>



            <div

                className="
                mt-6

                space-y-4

                "

            >


                {
                    data.map(item=>(


                        <div

                            key={item.label}

                            className="
                            rounded-2xl

                            bg-gray-50

                            p-4

                            "

                        >


                            <div

                                className="
                                flex

                                justify-between

                                gap-4

                                "

                            >


                                <div>


                                    <p

                                        className="
                                        font-bold

                                        uppercase

                                        "

                                    >

                                        {item.label}

                                    </p>



                                    {
                                        item.subtitle &&

                                        <p

                                            className="
                                            mt-1

                                            text-xs

                                            text-gray-500

                                            "

                                        >

                                            {item.subtitle}

                                        </p>

                                    }


                                </div>





                                <div

                                    className="
                                    text-right

                                    "

                                >


                                    <p

                                        className="
                                        font-black

                                        "

                                        style={{

                                            color

                                        }}

                                    >

                                        {item.price}

                                    </p>


                                </div>



                            </div>



                        </div>


                    ))
                }


            </div>


        </div>

    )

}