// Container: horizontal spacing, 108px on desktop, 16px on mobile
export default function Container({ children }) {
    return (
        <div className="px-4 md:px-[108px] max-w-[1920px] mx-auto">
            {children}
        </div>
    )
}
