import { useState } from "react";
import { NavLink } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";

export default function MobileMenu({

    open,

    onClose,

    menus,

    runnerMenus

}) {

    const [runnerOpen, setRunnerOpen] = useState(false);

    return (

        <>

            <div

                onClick={onClose}

                className={`
                    fixed
                    inset-0
                    bg-black/40
                    z-40
                    transition
                    ${
                        open
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                    }
                `}

            />

            <div

                className={`
                    fixed
                    right-0
                    top-0
                    h-full
                    w-[85%]
                    max-w-sm
                    bg-white
                    z-50
                    shadow-2xl
                    transition-transform
                    duration-300
                    ${
                        open
                            ? "translate-x-0"
                            : "translate-x-full"
                    }
                `}

            >

                <div

                    className="
                        p-6
                        flex
                        justify-between
                        items-center
                        border-b
                    "

                >

                    <h2 className="text-xl font-bold">

                        Menu

                    </h2>

                    <button onClick={onClose}>

                        <X />

                    </button>

                </div>

                <div className="p-6">

                    {

                        menus.map(menu => (

                            <NavLink

                                key={menu.url}

                                to={menu.url}

                                onClick={onClose}

                                className={({ isActive }) => `
                                    block
                                    py-4
                                    text-lg
                                    transition
                                    ${
                                        isActive
                                            ? "text-[#F05A27]"
                                            : "text-gray-700"
                                    }
                                `}

                            >

                                {menu.title}

                            </NavLink>

                        ))

                    }

                    <div className="border-t mt-3 pt-3">

                        <button

                            onClick={() => setRunnerOpen(!runnerOpen)}

                            className="
                                flex
                                justify-between
                                items-center
                                w-full
                                py-4
                                text-lg
                            "

                        >

                            Runners

                            <ChevronDown

                                className={`
                                    transition
                                    ${
                                        runnerOpen
                                            ? "rotate-180"
                                            : ""
                                    }
                                `}

                            />

                        </button>

                        <div

                            className={`
                                overflow-hidden
                                transition-all
                                duration-300
                                ${
                                    runnerOpen
                                        ? "max-h-96"
                                        : "max-h-0"
                                }
                            `}

                        >

                            {

                                runnerMenus.map(item => (

                                    <NavLink

                                        key={item.url}

                                        to={item.url}

                                        onClick={onClose}

                                        className="
                                            block
                                            py-3
                                            pl-5
                                            text-gray-500
                                            hover:text-[#F05A27]
                                        "

                                    >

                                        {item.title}

                                    </NavLink>

                                ))

                            }

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}