export default function SectionTitle({
    eyebrow,
    title,
    description
}) {
    return (
        <div className="text-center">
            {
                eyebrow &&
                <p
                    className="
                    uppercase
                    tracking-[0.4em]
                    text-sm
                    text-[#F05A27]
                    "
                >
                    {eyebrow}
                </p>
            }

            <h2
                className="
                mt-4
                text-4xl
                lg:text-6xl
                font-bold
                text-[#1d1d1d]
                "
            >
                {title}
            </h2>

            {
                description &&
                <p
                    className="
                    mt-6
                    max-w-2xl
                    mx-auto
                    text-gray-500
                    text-lg
                    "
                >
                    {description}
                </p>
            }
        </div>
    );
}