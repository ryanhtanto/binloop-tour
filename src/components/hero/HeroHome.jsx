import Container from "../ui/Container";
import Button from "../ui/Button";
import HomeHero from "../../assets/home.jpeg";

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

            {/* Background */}
            <div
                className="
                absolute
                inset-0
                bg-cover
                bg-center
                "
                style={{
                    backgroundImage: `url(${HomeHero})`
                }}
            />


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

                    {/* Eyebrow */}
                    <p
                        className="
                        uppercase
                        tracking-[0.15em]
                        text-[#F05A27]
                        text-xl
                        font-bold
                        "
                        style={{
                            fontFamily: "Goudy, serif"
                        }}
                    >
                        Binloop Ultra Tour 2027
                    </p>



                    {/* Title */}
                    <h1
                        className="
                        mt-8
                        text-6xl
                        sm:text-7xl
                        md:text-8xl
                        lg:text-[110px]
                        xl:text-[130px]
                        leading-[0.85]
                        text-white
                        font-bold
                        uppercase
                        "
                        style={{
                            fontFamily: "Goudy, serif"
                        }}
                    >
                        Wherever

                        <span className="block">
                            Miles
                        </span>

                        <span className="block">
                            Take You
                        </span>

                    </h1>



                    <div
                        className="
                        mt-10
                        mb-10
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