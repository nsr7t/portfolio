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
                {items.map((item) => (
                    <div
                        key={item.title}
                        className="inline-flex items-center gap-4 rounded-lg px-3 py-2 outline-2 outline-white/10"
                    >
                        <span>{item.icon}</span>
                        <span className="font-semibold">{item.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ToolboxItems
