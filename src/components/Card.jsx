import { twMerge } from "tailwind-merge"
import grainImage from "../assets/images/grain.jpg"

function Card({ className, children }) {
    return (
        <div
            className={twMerge(
                "relative overflow-hidden rounded-3xl bg-gray-800 outline-2 -outline-offset-2 outline-white/20 after:pointer-events-none",
                className,
            )}
        >
            <div
                className="absolute inset-0 -z-10 opacity-50"
                style={{
                    backgroundImage: `url(${grainImage})`,
                }}
            ></div>
            {children}
        </div>
    )
}

export default Card
