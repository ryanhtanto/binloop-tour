import { Link } from "react-router-dom";
import { X } from "lucide-react";

export default function MobileMenu({

    open,
    onClose,
    menus

}){

    return(

        <>

            <div

                className={`
                fixed
                inset-0
                bg-black/40
                backdrop-blur-sm
                z-50
                transition

                ${open
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }

                `}

                onClick={onClose}

            />

            <aside

                className={`
                fixed
                right-0
                top-0
                h-screen
                w-72
                bg-white
                z-50
                transition
                shadow-xl

                ${open
                    ? "translate-x-0"
                    : "translate-x-full"
                }

                `}

            >

                <div
                    className="
                    p-6
                    flex
                    justify-end
                    "
                >

                    <button onClick={onClose}>

                        <X />

                    </button>

                </div>

                <div
                    className="
                    px-8
                    flex
                    flex-col
                    gap-8
                    "
                >

                    {menus.map(menu => (

                        <Link

                            key={menu.url}

                            to={menu.url}

                            onClick={onClose}

                            className="
                            text-xl
                            font-semibold
                            "

                        >

                            {menu.title}

                        </Link>

                    ))}

                </div>

            </aside>

        </>

    )

}