import React from "react";

export default function EventCategory({ categories, theme = {} }) {

    const shadowColor = theme.secondary || "#F05A27";

    return (

        <section className="bg-[#fafafa] py-24 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <div className="space-y-36">

                    {categories.map((item, index) => {

                        const reverse = index % 2 === 1;

                        return (

                            <div
                                key={item.id}
                                className={`
                                grid
                                lg:grid-cols-2
                                gap-16
                                items-center
                                ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
                                `}
                            >

                                <div className="relative">

                                    <div
                                        className="overflow-hidden rounded-[32px]"
                                        style={{
                                            boxShadow: `0 30px 70px ${shadowColor}35`
                                        }}
                                    >

                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="
                                            w-full
                                            h-[560px]
                                            object-cover
                                            transition
                                            duration-700
                                            hover:scale-105
                                            "
                                        />

                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-[32px]" />

                                    <div className="absolute left-8 bottom-8">

                                        <p className="text-white uppercase tracking-[0.45em] text-xs font-bold">
                                            {item.distance}
                                        </p>

                                        <h2 className="mt-3 text-white text-6xl font-black uppercase leading-none">
                                            {item.name}
                                        </h2>

                                    </div>

                                </div>

                                <div>

                                    <p
                                        className="
                                        uppercase
                                        tracking-[0.45em]
                                        text-sm
                                        font-bold
                                        "
                                        style={{
                                            color: shadowColor
                                        }}
                                    >
                                        Race Category
                                    </p>

                                    <h2 className="
                                        mt-5
                                        text-5xl
                                        lg:text-6xl
                                        font-black
                                        uppercase
                                        leading-none
                                    ">
                                        {item.name}
                                    </h2>

                                    <p className="
                                        mt-6
                                        text-gray-500
                                        leading-8
                                    ">
                                        {item.description}
                                    </p>

                                    <p>
                                        <span className="font-bold text-black">
                                            Flag-off:
                                        </span>{" "}
                                        {item.flagOff}
                                    </p>

                                    <div className="
                                        mt-10
                                        grid
                                        grid-cols-2
                                        gap-5
                                    ">

                                        <InfoCard
                                            title="Loop"
                                            value={item.loopInfo}
                                            color={shadowColor}
                                        />

                                        <InfoCard
                                            title="Cut Off Time"
                                            value={item.cutOff}
                                            color={shadowColor}
                                        />

                                    </div>

                                    <div className="
                                        mt-10
                                        grid
                                        md:grid-cols-2
                                        gap-6
                                    ">

                                        <PriceCard
                                            title="Early Bird"
                                            data={item.pricing.earlyBird}
                                            color={shadowColor}
                                        />

                                        <PriceCard
                                            title="Normal Price"
                                            data={item.pricing.normal}
                                            color={shadowColor}
                                        />

                                    </div>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}

function InfoCard({ title, value, color }) {

    return (

        <div
            className="
            bg-white
            rounded-3xl
            p-6
            "
            style={{
                boxShadow: `0 18px 40px ${color}22`
            }}
        >

            <p className="
                uppercase
                tracking-[0.35em]
                text-xs
                text-gray-400
                font-bold
            ">
                {title}
            </p>

            <h3 className="
                mt-3
                text-3xl
                font-black
            ">
                {value}
            </h3>

        </div>

    );

}

function PriceCard({ title, data, color }) {

    return (

        <div
            className="
            bg-white
            rounded-3xl
            p-6
            "
            style={{
                boxShadow: `0 18px 40px ${color}22`
            }}
        >

            <h3 className="
                uppercase
                tracking-[0.35em]
                text-xs
                text-gray-400
                font-bold
            ">
                {title}
            </h3>

            <div className="
                mt-6
                space-y-4
            ">

                {data.map((item) => (

                    <div
                        key={item.label}
                        className="
                        rounded-2xl
                        bg-gray-50
                        p-5
                        "
                    >

                        <div className="
                            flex
                            justify-between
                            items-start
                            gap-5
                        ">

                            <div>

                                <p className="
                                    uppercase
                                    font-bold
                                ">
                                    {item.label}
                                </p>

                                {item.subtitle && (

                                    <p className="
                                        mt-1
                                        text-xs
                                        text-gray-500
                                    ">
                                        {item.subtitle}
                                    </p>

                                )}

                            </div>

                            <div className="text-right">

                                <p
                                    className="
                                    text-lg
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

                ))}

            </div>

        </div>

    );

}