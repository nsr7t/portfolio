import { twMerge } from "tailwind-merge"

function HeroOrbitAnimation({
    children,
    size,
    rotation,
    orbitDuration,
    shouldSpin = false,
    spinDuration,
    shouldOrbit = false,
}) {
    return (
        <div className="absolute top-1/2 left-1/2 -z-20 -translate-x-1/2 -translate-y-1/2">
            <div
                className={twMerge(shouldOrbit === true && "animate-spin")}
                style={{ animationDuration: orbitDuration }}
            >
                <div
                    className={`flex items-start justify-start`}
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        transform: `rotate(${rotation}deg)`,
                    }}
                >
                    <div
                        className={twMerge(
                            shouldSpin === true && "animate-spin",
                        )}
                        style={{ animationDuration: spinDuration }}
                    >
                        <div
                            className="inline-flex"
                            style={{
                                transform: `rotate(${rotation * -1}deg)`,
                            }}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroOrbitAnimation
