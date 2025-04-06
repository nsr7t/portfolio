import { twMerge } from "tailwind-merge"
import StarIcon from "./Icons/StarIcon"

function CardHeader({ title, description, className }) {
    return (
        <div className={twMerge("flex flex-col", className)}>
            <div className="flex items-center gap-2">
                <StarIcon className="size-9 text-emerald-300" />
                <h3 className="font-calistoga text-3xl">{title}</h3>
            </div>
            <p className="mt-2 text-sm text-white/60">{description}</p>
        </div>
    )
}

export default CardHeader
