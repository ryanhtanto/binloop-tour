export default function Button({
    children,
    onClick,
    variant = "primary"
}) {
    const styles = {
        primary: "bg-[#F05A27] text-white hover:bg-[#d94e20]",
        outline: "border border-[#F05A27] text-[#F05A27] hover:bg-[#F05A27] hover:text-white"
    };

    return (
        <button
            onClick={onClick}
            className={`
                px-8
                py-4
                rounded-full
                font-medium
                transition
                duration-300
                ${styles[variant]}
            `}
        >
            {children}
        </button>
    );  
}