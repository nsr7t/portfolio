import memojiImage from "../assets/images/memoji-computer.png"
import ArrowDown from "../assets/icons/arrow-down.svg"
4
import grainImage from "../assets/images/grain.jpg"
import HeroOrbitAnimation from "../components/HeroOrbitAnimation"
import StarIcon from "../components/StarIcon"
import SparkleIcon from "../components/SparkleIcon"

function Hero() {
    return (
        <div className="relative z-1 overflow-x-clip py-32 md:py-48 lg:py-60">
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div
                    className="absolute inset-0 -z-1 opacity-5"
                    style={{ backgroundImage: `url(${grainImage})` }}
                ></div>
                <div className="hero-ring size-[620px]"></div>
                <div className="hero-ring size-[820px]"></div>
                <div className="hero-ring size-[1020px]"></div>
                <div className="hero-ring size-[1220px]"></div>
                {/* THE STARS */}
                <HeroOrbitAnimation size={800} rotation={-72}>
                    <StarIcon className="size-24 text-emerald-300" />
                </HeroOrbitAnimation>{" "}
                <HeroOrbitAnimation size={550} rotation={20}>
                    <StarIcon className="size-12 text-emerald-300" />
                </HeroOrbitAnimation>
                <HeroOrbitAnimation size={590} rotation={98}>
                    <StarIcon className="size-8 text-emerald-300" />
                </HeroOrbitAnimation>
                <HeroOrbitAnimation size={430} rotation={-14}>
                    <SparkleIcon className="size-8 text-emerald-300/20" />
                </HeroOrbitAnimation>{" "}
                <HeroOrbitAnimation size={440} rotation={79}>
                    <SparkleIcon className="size-5 text-emerald-300/20" />
                </HeroOrbitAnimation>
                <HeroOrbitAnimation size={530} rotation={178}>
                    <SparkleIcon className="size-10 text-emerald-300/20" />
                </HeroOrbitAnimation>
                <HeroOrbitAnimation size={710} rotation={144}>
                    <SparkleIcon className="size-10 text-emerald-300/20" />
                </HeroOrbitAnimation>
                <HeroOrbitAnimation size={720} rotation={85}>
                    <div className="size-3 rounded-full bg-emerald-300/20"></div>
                </HeroOrbitAnimation>
                <HeroOrbitAnimation size={520} rotation={-41}>
                    <div className="size-2 rounded-full bg-emerald-300/20"></div>
                </HeroOrbitAnimation>{" "}
                <HeroOrbitAnimation size={650} rotation={-5}>
                    <div className="size-2 rounded-full bg-emerald-300/20"></div>
                </HeroOrbitAnimation>
            </div>

            <div className="container">
                <div className="flex flex-col items-center">
                    <img
                        src={memojiImage}
                        className="size-[100px]"
                        alt="Person peeking from behind laptop"
                    />
                    <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
                        <div className="size-2.5 rounded-full bg-green-500"></div>
                        <div className="text-sm font-medium">
                            Available for new projects
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-lg">
                    <h1 className="font-calistoga mt-8 text-center text-3xl tracking-wide md:text-5xl">
                        Building Exceptional User Experiences
                    </h1>
                    <p className="mt-4 text-center text-white/60 md:text-lg">
                        I specialize in transforming designs into functional,
                        high-performing web applications. Let's discuss your
                        next project.
                    </p>
                </div>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
                    <button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6">
                        <span className="font-semibold">Explore My Work</span>
                        <img
                            src={ArrowDown}
                            alt="Arrow Down Icon"
                            className="size-4"
                        />
                    </button>
                    <button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900">
                        <span>👋</span>
                        <span className="font-semibold">Let's Connect</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
