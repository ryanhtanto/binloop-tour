import Container from "../ui/Container";
import Button from "../ui/Button";
import baliHero from "../../assets/bali.jpeg";

export default function HeroHome() {
    return (
        <section
            className="
                relative
                min-h-screen
                overflow-hidden
                flex
                items-center
            "
        >
            {/* Background Images */}
            <div className="
                absolute
                inset-0
            ">


                {/* Padang */}

                <div
                    className="
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                    "
                    style={{
                        backgroundImage:
                        `url(${baliHero})`
                    }}
                />


                {/* Bali */}

                <div
                    className="
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                    mix-blend-multiply
                    "
                    style={{
                        backgroundImage:
                        `url(${baliHero})`
                    }}
                />


                {/* White Blend */}

                <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-white
                    via-white/70
                    to-transparent
                    "
                />


                <div
                    className="
                    absolute
                    inset-0
                    bg-white/20
                    "
                />

            </div>

            {/* Content */}
            <Container>
                <div
                    className="
                        relative
                        z-10
                        max-w-4xl
                        mt-24
                        lg:mt-32
                    "
                >
                    <p
                        className="
                        uppercase
                        tracking-[0.5em]
                        text-[#F05A27]
                        text-sm
                        font-semibold
                        "
                    >
                        Binloop Ultra Tour 2027
                    </p>
                    <h1
                        className="
                        mt-8
                        text-6xl
                        md:text-8xl
                        font-bold
                        leading-[0.9]
                        text-[#252525]
                        "
                    >
                        THE JOURNEY

                        <span
                            className="
                            block
                            text-[#F05A27]
                            "
                        >
                            STARTS HERE
                        </span>

                    </h1>
                    <p
                        className="
                        mt-8
                        text-2xl
                        text-gray-600
                        "
                    >
                        Coming To Your Backyard.
                    </p>
                    <p
                        className="
                        mt-5
                        max-w-xl
                        text-gray-500
                        leading-relaxed
                        "
                    >
                        Two races. Two destinations. One passion for going beyond the finish line.
                    </p>
                    <div
                        className="
                        mt-10
                        "
                    >
                        <Button>
                            Explore Tour
                        </Button>

                    </div>
                </div>
            </Container>
        </section>
    );
}