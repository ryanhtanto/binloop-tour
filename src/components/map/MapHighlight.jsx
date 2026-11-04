export default function MapHighlight({
    position,
    color
}) {

    return (
        <div
            className="
            absolute
            -translate-x-1/2
            -translate-y-1/2
            "
            style={{
                left: position.x,
                top: position.y
            }}
        >

            <div
                className="
                w-16
                h-16
                rounded-full
                blur-xl
                opacity-80
                animate-pulse
                "
                style={{
                    backgroundColor: color
                }}
            />

        </div>
    );
}