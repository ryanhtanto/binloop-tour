import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logoBlack.png"
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";
import RunnerDropdown from "./RunnerDropdown";

export default function Navbar() {

    const [open, setOpen] = useState(false);

    const menus = [
        {
            title: "Tour",
            url: "/"
        },
        {
            title: "Bali",
            url: "/bali2027"
        },
        {
            title: "Padang",
            url: "/padang2027"
        }
    ];

    const runnerMenus = [
        {
            title: "Login",
            url: "/runner/login"
        },
        {
            title: "Runner Entitlement",
            url: "/runner/entitlement"
        },
        {
            title: "Rules & Regulation",
            url: "/runner/rules"
        },
        {
            title: "Waiver",
            url: "/runner/waiver"
        },
        {
            title: "Race Pack Collection",
            url: "/runner/rpc"
        },
        {
            title: "Loop Guide",
            url: "/runner/loop-guide"
        },
        {
            title: "Participant",
            url: "/runner/participant"
        }
    ];

    return (

        <>

            <header
                className="
                    fixed
                    top-6
                    left-1/2
                    -translate-x-1/2
                    z-50
                    w-[92%]
                    max-w-7xl
                "
            >

                <div
                    className="
                        rounded-full
                        border
                        border-white/50
                        bg-white/80
                        backdrop-blur-xl
                        shadow-xl
                        px-8
                        py-4
                        flex
                        items-center
                        justify-between
                    "
                >

                    <Link
                        to="/"
                        className="flex items-center"
                    >

                        <img
                            src={logo}
                            alt="Binloop Tour"
                            className="h-16 w-auto"
                        />

                    </Link>

                    <nav
                        className="
                            hidden
                            lg:flex
                            items-center
                            gap-10
                        "
                    >

                        {

                            menus.map(menu => (

                                <NavLink

                                    key={menu.url}

                                    to={menu.url}

                                    className={({ isActive }) => `
                                        font-medium
                                        transition
                                        ${
                                            isActive
                                                ? "text-[#F05A27]"
                                                : "text-gray-600 hover:text-[#F05A27]"
                                        }
                                    `}

                                >

                                    {menu.title}

                                </NavLink>

                            ))

                        }

                        <RunnerDropdown menus={runnerMenus} />

                    </nav>

                    <div
                        className="
                            hidden
                            lg:block
                        "
                    >
                        <Link to="/bali2027">
                            <Button>
                                REGISTER BALI
                            </Button>
                        </Link>
                    </div>

                    <button

                        onClick={() => setOpen(true)}

                        className="lg:hidden"

                    >

                        <Menu size={28} />

                    </button>

                </div>

            </header>

            <MobileMenu

                open={open}

                onClose={() => setOpen(false)}

                menus={menus}

                runnerMenus={runnerMenus}

            />

        </>

    );

}