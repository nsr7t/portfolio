import { Fragment } from "react"
import { twMerge } from "tailwind-merge"

function ToolboxItems({ items, className, itemsWrapperClassName }) {
    return (
        <div className={twMerge("mask flex py-0.5", className)}>
            <div
                className={twMerge(
                    "flex flex-none gap-6",
                    itemsWrapperClassName,
                )}
            >
                {[...new Array(2)].fill(0).map((_, id) => (
                    <Fragment key={id}>
                        {items.map((item) => (
                            <div
                                key={item.title}
                                className="inline-flex items-center gap-4 rounded-lg px-3 py-2 outline-2 outline-white/10"
                            >
                                <span>{item.icon}</span>
                                <span className="font-semibold">
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default ToolboxItems
