import { motion } from "framer-motion";

export default function MapMarker({
    city,
    position,
    color,
    link
}) {
    return (
        <motion.a
            href={link}
            className="
                absolute
                cursor-pointer
            "
            style={{
                left: position.x,
                top: position.y
            }}
            whileHover={{
                scale: 1.2
            }}
        >
            <div
                className="
                relative
                "
            >
                {/* Glow */}
                <span
                    className="
                    absolute
                    inset-0
                    rounded-full
                    blur-md
                    opacity-50
                    "
                    style={{
                        backgroundColor: color
                    }}
                />
                {/* Dot */}
                <span
                    className="
                    block
                    w-5
                    h-5
                    rounded-full
                    border-4
                    border-white
                    shadow-lg
                    relative
                    "
                    style={{
                        backgroundColor: color
                    }}
                />
                <p
                    className="
                    mt-3
                    text-sm
                    font-semibold
                    whitespace-nowrap
                    "
                >
                    {city}
                </p>
            </div>
        </motion.a>
    )
}