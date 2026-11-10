export default function ComingSoon({
    title,
    theme = {}
}) {

    const color = theme.secondary || "#F05A27";

    return (

        <section className="py-32 bg-[#fafafa]">

            <div className="max-w-5xl mx-auto px-6">

                <div
                    className="
                    rounded-[40px]
                    bg-white
                    px-8
                    py-20
                    text-center
                    "
                    style={{
                        boxShadow: `0 25px 60px ${color}20`
                    }}
                >

                    <p
                        className="
                        uppercase
                        tracking-[0.5em]
                        text-sm
                        font-bold
                        "
                        style={{
                            color
                        }}
                    >
                        {title}
                    </p>

                    <h2
                        className="
                        mt-6
                        text-5xl
                        md:text-7xl
                        font-black
                        uppercase
                        leading-none
                        "
                    >
                        Coming Soon
                    </h2>

                    <div
                        className="
                        w-24
                        h-1
                        rounded-full
                        mx-auto
                        mt-8
                        "
                        style={{
                            backgroundColor: color
                        }}
                    />

                    <p
                        className="
                        mt-8
                        max-w-2xl
                        mx-auto
                        text-gray-500
                        leading-8
                        "
                    >
                        We're putting the finishing touches on this section.
                        Stay tuned for exciting updates and complete information coming soon.
                    </p>

                </div>

            </div>

        </section>

    );

}