import { useState, useEffect } from "react"

export function useScrollTracker() {
    const [currentSection, setCurrentSection] = useState(null)

    const intersectionFunction = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setCurrentSection(entry.target.id)
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(intersectionFunction)

        const sections = document.querySelectorAll("section")
        sections.forEach((section) => observer.observe(section))
    }, [])

    return currentSection
}
