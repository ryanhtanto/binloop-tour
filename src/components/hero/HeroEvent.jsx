import Container from "../ui/Container";

export default function HeroEvent({ event }) {
    
    return (
        <section
            className="
            min-h-screen
            flex
            items-center
            "
            style={{
                backgroundColor:
                    event.theme.background
            }}
        >
            <Container>
                <div
                    className="
                    text-center
                    "
                >
                    {
                        event.logo &&
                        <img
                            src={event.logo}
                            alt={event.title}
                            className="
                            mx-auto
                            h-24
                            object-contain
                            "
                        />
                    }

                    <h1
                        className="
                        mt-10
                        text-5xl
                        lg:text-7xl
                        font-bold
                        "
                        style={{
                            color:
                            event.theme.secondary
                        }}
                    >
                        {event.title}
                    </h1>
                    <p
                        className="
                        mt-6
                        text-xl
                        text-gray-500
                        "
                    >
                        {event.location}
                    </p>
                    <p
                        className="
                        mt-2
                        text-lg
                        "
                    >
                        {event.date}
                    </p>
                </div>
            </Container>
        </section>
    );
}