import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function RunnerDropdown({

    menus

}) {

    const [open, setOpen] = useState(false);

    return (

        <div

            className="relative"

            onMouseEnter={() => setOpen(true)}

            onMouseLeave={() => setOpen(false)}

        >

            <button

                className="
                    flex
                    items-center
                    gap-1
                    font-medium
                    text-gray-600
                    hover:text-[#F05A27]
                    transition
                "

            >

                Runners

                <ChevronDown

                    size={18}

                    className={`
                        transition
                        ${open ? "rotate-180" : ""}
                    `}

                />

            </button>

            <div

                className={`
                    absolute
                    left-1/2
                    -translate-x-1/2
                    mt-5
                    w-72
                    rounded-3xl
                    bg-white
                    shadow-2xl
                    border
                    border-gray-100
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                        open
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-3"
                    }
                `}

            >

                {

                    menus.map(item => (

                        <NavLink

                            key={item.url}

                            to={item.url}

                            className="
                                block
                                px-6
                                py-4
                                text-gray-600
                                transition
                                hover:bg-orange-50
                                hover:text-[#F05A27]
                            "

                        >

                            {item.title}

                        </NavLink>

                    ))

                }

            </div>

        </div>

    );

}