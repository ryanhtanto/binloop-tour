export default function Container({ children, className = "" }) {
    return (
        <div
            className={`
                px-6
                lg:px-10
                ${className}
            `}
        >
            {children}
        </div>
    );
}