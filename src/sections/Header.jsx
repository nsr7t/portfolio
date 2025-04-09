import { useScrollTracker } from "../hooks/useScrollTracker"

function Header() {
    const currentSection = useScrollTracker()
    return (
        <div className="fixed top-3 z-50 flex w-full items-center justify-center">
            <nav className="flex justify-between gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
                <a
                    href="#"
                    className={`nav-item ${currentSection === "home" ? "active" : ""}`}
                >
                    Home
                </a>
                <a
                    href="#feature-projects"
                    className={`nav-item ${currentSection === "projects" ? "active" : ""}`}
                >
                    Projects
                </a>
                <a
                    href="#about-section"
                    className={`nav-item ${currentSection === "about-section" ? "active" : ""}`}
                >
                    About
                </a>
                <a
                    href="#contact-us-section"
                    className={`nav-item ${currentSection === "contact-us-section" ? "active" : ""}`}
                >
                    Contact
                </a>
            </nav>
        </div>
    )
}

export default Header
