import ArrowUpRight from "../components/Icons/ArrowUpRight"

const footerLinks = [
    {
        title: "Instagram",
        href: "",
    },
    {
        title: "X",
        href: "",
    },
    {
        title: "Github",
        href: "",
    },
]

function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="relative -z-10 overflow-x-clip">
            <div className="footer-mask absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/30"></div>
            <div className="container">
                <div className="flex flex-col items-center gap-8 border-t border-white/15 py-6 text-sm md:flex-row md:justify-between">
                    <div className="text-white/40">
                        &copy; {year}. All Rights reserved.
                    </div>
                    <nav className="flex flex-col items-center gap-8 md:flex-row">
                        {footerLinks.map((link) => (
                            <a
                                href={link.href}
                                key={link.title}
                                className="inline-flex items-center gap-1.5"
                            >
                                <span className="font-semibold">
                                    {link.title}
                                </span>
                                <ArrowUpRight className="size-4" />
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
