import { twMerge } from "tailwind-merge"
import StarIcon from "./Icons/StarIcon"

function CardHeader({ title, description, className }) {
    return (
        <div
            className={twMerge("flex flex-col p-6 md:px-10 md:py-8", className)}
        >
            <div className="flex items-center gap-2">
                <StarIcon className="size-9 text-emerald-300" />
                <h3 className="font-calistoga text-3xl">{title}</h3>
            </div>
            <p className="mt-2 max-w-sm text-sm text-white/60 lg:text-base">
                {description}
            </p>
        </div>
    )
}

export default CardHeader
