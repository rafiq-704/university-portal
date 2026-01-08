
const Typography = ({ children, className }: { children: string, className?: string }) => {
    return (
        <h2 className={`inline-block font-bold text-transparent bg-clip-text bg-linear-to-r from-black to-primary ${className}`}>{children}</h2>
    )
}

export default Typography
