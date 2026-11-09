import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logoBlack.png"
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

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

                    {/* Logo */}

                    <Link
                        to="/"
                        className="
                        flex
                        items-center
                        gap-3
                        "
                    >

                        {/* nanti logo client */}

                        <img
                            src={logo}
                            alt="Binloop Tour"
                            className="h-16 w-auto"
                        />

                    </Link>

                    {/* Desktop */}

                    <nav
                        className="
                        hidden
                        lg:flex
                        items-center
                        gap-10
                        "
                    >

                        {menus.map(menu => (

                            <NavLink

                                key={menu.url}

                                to={menu.url}

                                className={({ isActive }) => `
                                    font-medium
                                    transition
                                    ${isActive
                                        ? "text-[#F05A27]"
                                        : "text-gray-600 hover:text-[#F05A27]"
                                    }
                                `}

                            >

                                {menu.title}

                            </NavLink>

                        ))}

                    </nav>

                    {/* Right */}

                    <div
                        className="
                        hidden
                        lg:block
                        disabled
                        "
                    >

                        <Button>

                            COMING SOON

                        </Button>

                    </div>

                    {/* Mobile */}

                    <button

                        onClick={() => setOpen(true)}

                        className="
                        lg:hidden
                        "

                    >

                        <Menu size={24} />

                    </button>

                </div>

            </header>

            <MobileMenu
                open={open}
                onClose={() => setOpen(false)}
                menus={menus}
            />

        </>

    );

}