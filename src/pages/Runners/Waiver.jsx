import Footer from "../../components/layout/Footer";
import tourLogo from "../../assets/logoBlack.png";


export default function Waiver() {

    const defaultEvent = {
        theme:{
            background:"#FFF8F4",
            primary:"#544741",
            secondary:"#BE6B25",
        }
    };


    const waiver = {
        title: "Waiver",

        introduction:
            "I, hereby declare as follows:",

        items:[
            "I voluntarily register myself to participate in the Binloop Ultra Bali 2027 Event.",

            "I am fully aware of the distance, tough weather conditions, and other challenges related to this event, including physical, logistical, and mental challenges.",

            "I understand that it is not the responsibility of the Organizer to help me overcome problems as described in the previous statement.",

            "I agree to obey any and all instructions from the Organizer.",

            "I hereby release and hold harmless the Organizer, including its members and volunteers, from any and all liability claims, demands, and causes of action of any kind or nature, including death or injury caused by negligence incurred in conjunction with the Event.",

            "I give permission to the Organizer of the Event to use any photographs or videos taken by the Organizer for publicity purposes.",

            "I certify that I am in good health condition and capable of participating in the Binloop Ultra Bali 2027 Event."
        ]
    };


    return (

        <>

            <main
                className="
                    min-h-screen
                    bg-[#FFF8F4]
                    pt-32
                    pb-20
                    px-6
                "
            >

                <div
                    className="
                        max-w-4xl
                        mx-auto
                    "
                >


                    <div
                        className="
                            bg-white
                            rounded-3xl
                            shadow-xl
                            border
                            border-gray-200
                            p-8
                            md:p-12
                        "
                    >

                        <h1
                            className="
                                text-4xl
                                md:text-5xl
                                font-black
                                uppercase
                                text-[#544741]
                                text-center
                                mb-10
                            "
                        >

                            {waiver.title}

                        </h1>


                        <div
                            className="
                                border-l-4
                                border-[#BE6B25]
                                pl-5
                                mb-10
                            "
                        >

                            <p
                                className="
                                    text-gray-600
                                    text-lg
                                    italic
                                "
                            >

                                {waiver.introduction}

                            </p>

                        </div>



                        <ol
                            className="
                                space-y-6
                                text-gray-700
                                leading-8
                            "
                        >

                            {
                                waiver.items.map(
                                    (item,index)=>(

                                    <li
                                        key={item}
                                        className="
                                            flex
                                            gap-4
                                        "
                                    >

                                        <span
                                            className="
                                                shrink-0
                                                w-8
                                                h-8
                                                rounded-full
                                                bg-[#BE6B25]
                                                text-white
                                                flex
                                                items-center
                                                justify-center
                                                font-bold
                                            "
                                        >

                                            {index + 1}

                                        </span>


                                        <p>

                                            {item}

                                        </p>


                                    </li>

                                ))
                            }

                        </ol>


                        <div
                            className="
                                mt-12
                                pt-8
                                border-t
                                text-sm
                                text-gray-500
                            "
                        >

                            By registering for the event, participants acknowledge and agree
                            to all statements above.

                        </div>


                    </div>


                </div>


            </main>


            <Footer
                logo={tourLogo}
                copyright="Binloop Tour Bali"
            />

        </>

    );

}