import Container from "../ui/Container";

import {
    Phone,
    Mail,
    MapPin,
    MessageCircle
} from "lucide-react";

export default function Footer({ logo, copyright }) {
    return (
        <footer
            className="
            relative
            overflow-hidden
            bg-white
            "
        >

            {/* Background Glow */}

            <div
                className="
                absolute
                inset-0
                pointer-events-none
                "
            >

                {/* Main Glow */}

                <div
                    className="
                    absolute
                    left-1/2
                    bottom-[-250px]
                    -translate-x-1/2
                    w-[900px]
                    h-[900px]
                    rounded-full
                    opacity-60
                    blur-3xl
                    "
                    style={{
                        background: `
                            radial-gradient(
                                circle,
                                rgba(240,90,39,.20) 0%,
                                rgba(237,30,36,.12) 35%,
                                rgba(190,107,37,.08) 55%,
                                transparent 75%
                            )
                        `
                    }}
                />

                {/* Dot Pattern */}

                <div
                    className="
                    absolute
                    inset-0
                    opacity-[0.05]
                    "
                    style={{
                        backgroundImage:
                            "radial-gradient(#F05A27 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />

            </div>



            <Container>

                <div
                    className="
                    relative
                    z-10
                    py-20
                    "
                >

                    {/* Top */}

                    <div
                        className="
                        grid
                        lg:grid-cols-[1.5fr_1fr_1fr]
                        gap-14
                        "
                    >

                        {/* Brand */}

                        <div>

                            <img
                                src={logo}
                                alt={copyright}
                                className="h-16 w-auto"
                            />

                            <p
                                className="
                                mt-6
                                max-w-md
                                leading-relaxed
                                text-gray-600
                                "
                            >
                                Join us for an unforgettable race experience.
                                Challenge yourself, connect with fellow runners,
                                and celebrate every finish line.
                            </p>

                        </div>



                        {/* Contact */}

                        <div>

                            <h3
                                className="
                                text-lg
                                font-bold
                                text-[#252525]
                                "
                            >
                                Contact
                            </h3>

                            <div
                                className="
                                mt-2
                                h-1
                                w-12
                                rounded-full
                                bg-gradient-to-r
                                from-[#ED1E24]
                                via-[#F05A27]
                                to-[#BE6B25]
                                "
                            />

                            <div
                                className="
                                mt-6
                                space-y-5
                                "
                            >

                                <div className="flex gap-3">

                                    <Phone
                                        size={18}
                                        className="text-[#ED1E24]"
                                    />

                                    <span className="text-gray-700">
                                        +62 852-8455-4548
                                    </span>

                                </div>


                                <div className="flex gap-3">

                                    <Mail
                                        size={18}
                                        className="text-[#BE6B25]"
                                    />

                                    <span className="text-gray-700">
                                        binloopultra120k@gmail.com
                                    </span>

                                </div>



                            </div>

                        </div>



                        {/* Follow */}

                        <div>

                            <h3
                                className="
                                text-lg
                                font-bold
                                text-[#252525]
                                "
                            >
                                Follow Us
                            </h3>

                            <div
                                className="
                                mt-2
                                h-1
                                w-12
                                rounded-full
                                bg-gradient-to-r
                                from-[#ED1E24]
                                via-[#F05A27]
                                to-[#BE6B25]
                                "
                            />

                            <div
                                className="
                                mt-6
                                space-y-5
                                "
                            >

                                <a
                                    href="#"
                                    className="
                                    text-gray-700
                                    hover:text-[#F05A27]
                                    transition-colors
                                    "
                                >
                                    BinLoopUltra120K
                                </a>


                                <a
                                    href="#"
                                    className="
                                    flex
                                    items-center
                                    gap-3
                                    text-gray-700
                                    hover:text-[#25D366]
                                    transition-colors
                                    "
                                >

                                    <MessageCircle
                                        size={18}
                                        className="text-[#25D366]"
                                    />

                                    WhatsApp Chat

                                </a>

                            </div>

                        </div>

                    </div>



                    {/* Divider */}

                    <div
                        className="
                        my-14
                        h-px
                        bg-gradient-to-r
                        from-transparent
                        via-[#F05A27]
                        to-transparent
                        "
                    />



                    {/* Bottom */}

                    <div
                        className="
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        justify-between
                        gap-5
                        "
                    >

                        <p
                            className="
                            text-sm
                            text-gray-500
                            "
                        >
                            © 2026 {copyright}. All Rights Reserved.
                        </p>


                        <div className="flex gap-3 text-xl">

                            <span className="text-[#ED1E24]">●</span>
                            <span className="text-[#F05A27]">●</span>
                            <span className="text-[#BE6B25]">●</span>

                        </div>

                    </div>

                </div>

            </Container>

        </footer>
    );
}