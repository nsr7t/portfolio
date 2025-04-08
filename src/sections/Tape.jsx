import { Fragment } from "react"
import StarIcon from "../components/Icons/SparkleIcon"

const words = [
    "Performant",
    "Scalable",
    "Interactive",
    "Secure",
    "Accessible",
    "User Friendly",
    "Maintainable",
    "Responsive",
    "Search Optimized",
    "Usable",
    "Reliable",
]

function Tape() {
    return (
        <div className="overflow-x-clip py-16 lg:py-24">
            <div className="-mx-1 -rotate-3 bg-gradient-to-r from-emerald-300 to-sky-400">
                <div className="mask flex">
                    <div className="animate-move-left flex flex-none gap-4 py-3 [animation-duration:30s]">
                        {[...new Array(2)].fill(0).map((_, id) => (
                            <Fragment key={id}>
                                {words.map((word) => (
                                    <div
                                        key={word}
                                        className="flex items-center gap-4"
                                    >
                                        <span className="text-sm font-extrabold text-gray-900 uppercase">
                                            {word}
                                        </span>
                                        <StarIcon className="size-6 -rotate-12 text-gray-900" />
                                    </div>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tape
