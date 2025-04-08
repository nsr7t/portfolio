import { twMerge } from "tailwind-merge"
import grainImage from "../assets/images/grain.jpg"

function Card({ className, children, style }) {
    return (
        <div
            className={twMerge(
                "relative z-10 overflow-hidden rounded-3xl bg-gray-800 outline-2 -outline-offset-2 outline-white/20 after:pointer-events-none",
                className,
            )}
            style={style}
        >
            <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                    backgroundImage: `url(${grainImage})`,
                }}
            ></div>
            {children}
        </div>
    )
}

export default Card
