import ArrowUpRight from "../components/Icons/ArrowUpRight"
import grainImage from "../assets/images/grain.jpg"

function Contact() {
    return (
        <div className="py-16 pt-14 lg:py-24 lg:pt-20">
            <div className="container">
                <div className="to relative z-0 overflow-hidden rounded-3xl bg-sky-400 bg-gradient-to-r from-emerald-300 px-10 py-8 text-center text-gray-900 md:text-left">
                    <div
                        className="absolute inset-0 -z-10 opacity-5"
                        style={{ backgroundImage: `url(${grainImage})` }}
                    ></div>
                    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
                        <div className="">
                            <h2 className="font-calistoga text-2xl md:text-3xl">
                                Let's Create Something Amazing Together.
                            </h2>
                            <p className="mt-2 text-sm md:text-base">
                                Ready to bring your next project to life? Let's
                                connect and discuss how I can help you achieve
                                your goals.
                            </p>
                        </div>
                        <div>
                            <button className="inline-flex h-12 w-max items-center gap-2 rounded-xl border border-gray-900 bg-gray-900 px-6 text-white">
                                <span className="font-semibold">
                                    Contact me
                                </span>
                                <ArrowUpRight className="size-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
