export default function RaceInfo({ data, theme }) {
    return (
        <section
            className="
            py-24
            bg-[#fafafa]
            "
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* TITLE */}
                <div className="text-center mb-16">

                    <span
                        className="
                        tracking-[0.3em]
                        uppercase
                        text-sm
                        font-bold
                        "
                        style={{
                            color: theme.secondary
                        }}
                    >
                        {data.label}
                    </span>


                    <h2
                        className="
                        mt-4
                        text-4xl
                        lg:text-5xl
                        font-black
                        
                        "
                        style={{
                            color: theme.secondary
                        }}
                    >
                        {data.title}
                    </h2>


                    <p
                        className="
                        mt-4
                        
                        max-w-2xl
                        mx-auto
                        "
                    >
                        {data.subtitle}
                    </p>

                </div>



                <div
                    className="
                    grid
                    lg:grid-cols-2
                    gap-8
                    "
                >


                    {/* ================= INCLUDED ================= */}

                    <div
                        data-aos="fade-right"
                        className="
                        rounded-3xl
                        border
                        p-8
                        "
                        style={{
                            borderColor: `${theme.secondary}40`,
                            background:
                                `linear-gradient(
                                    135deg,
                                    ${theme.secondary}20,
                                    transparent
                                )`
                        }}
                    >

                        <h3
                            className="
                            text-3xl
                            font-black
                            
                            mb-8
                            "
                        >
                            {data.included.title}
                        </h3>



                        <div className="space-y-6">

                            {data.included.items.map((item) => (

                                <div
                                    key={item.title}
                                    className="
                                    flex
                                    gap-4
                                    items-start
                                    "
                                >

                                    <div className="text-4xl">
                                        {item.icon}
                                    </div>


                                    <div>

                                        <h4
                                            className="
                                            font-bold
                                            
                                            "
                                        >
                                            {item.title}
                                        </h4>


                                        <p
                                            className="
                                            /70
                                            "
                                        >
                                            {item.description}
                                        </p>

                                    </div>


                                </div>

                            ))}

                        </div>

                    </div>




                    {/* ================= QUALIFICATION ================= */}

                    <div
                        data-aos="fade-left"
                        className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
                        p-8
                        "
                    >

                        <h3
                            className="
                            text-3xl
                            font-black
                            mb-8
                            "
                        >
                            {data.qualification.title}
                        </h3>


                        <div className="space-y-5">

                            {data.qualification.categories.map((item)=>(
                                <div key={item.cat}>

                                    <div
                                        className="
                                        text-2xl
                                        font-black
                                        "
                                        style={{
                                            color: theme.secondary
                                        }}
                                    >
                                        {item.cat}
                                    </div>


                                    <p className="">
                                        {item.req}
                                    </p>

                                </div>
                            ))}



                            <div
                                className="
                                mt-6
                                rounded-2xl
                                p-5
                                text-center
                                "
                                style={{
                                    border:
                                        `1px solid ${theme.secondary}50`,
                                    background:
                                        `${theme.secondary}20`
                                }}
                            >

                                <div
                                    className="
                                    font-black
                                    uppercase
                                    tracking-wider
                                    "
                                    style={{
                                        color: theme.secondary
                                    }}
                                >
                                    {data.qualification.allCategories}
                                </div>


                                <div
                                    className="
                                    mt-2
                                    text-lg
                                    "
                                >
                                    {data.qualification.minAge}
                                </div>

                            </div>



                            {
                                data.qualification.relayNote && (
                                    <div
                                        className="
                                        mt-6
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-black/10
                                        p-5
                                        "
                                    >

                                        <div
                                            className="
                                            text-sm
                                            font-black
                                            uppercase
                                            tracking-wider
                                            mb-2
                                            "
                                            style={{
                                                color: theme.secondary
                                            }}
                                        >
                                            Relay Category
                                        </div>


                                        <p className="
                                            text-sm
                                            leading-7
                                            
                                        ">
                                            {data.qualification.relayNote}
                                        </p>

                                    </div>
                                )
                            }

                        </div>

                    </div>



                </div>


            </div>

        </section>
    )
}