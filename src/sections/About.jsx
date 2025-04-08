import SectionHeader from "../components/SectionHeader"
import StarIcon from "../components/Icons/StarIcon"
import Card from "../components/Card"
import bookImage from "../assets/images/book-cover.png"
import SquareJs from "../components/Icons/SquareJs"
import Html from "../components/Icons/Html"
import Css from "../components/Icons/Css"
import React from "../components/Icons/React"
import Chrome from "../components/Icons/Chrome"
import Github from "../components/Icons/Github"
import mapImage from "../assets/images/map.png"
import CardHeader from "../components/CardHeader"
import smileEmoji from "../assets/images/memoji-smile.png"
import ToolboxItems from "../components/ToolboxItems"
import { motion } from "framer-motion"
import { useRef } from "react"

const toolboxItems = [
    { title: "JavaScript", icon: <SquareJs className="size-10" /> },
    { title: "HTML5", icon: <Html className="size-10" /> },
    { title: "CSS3", icon: <Css className="size-10" /> },
    { title: "React", icon: <React className="size-10" /> },
    { title: "Chrome", icon: <Chrome className="size-10" /> },
    { title: "Github", icon: <Github className="size-10" /> },
]

const hobbies = [
    { title: "Gaming", emoji: "🎮", left: "5%", top: "5%" },
    { title: "Football", emoji: "⚽", left: "50%", top: "5%" },
    { title: "Photography", emoji: "📷", left: "50%", top: "65%" },
    { title: "Reading", emoji: "📖", left: "10%", top: "35%" },
    { title: "Hiking", emoji: "🥾", left: "60%", top: "35%" },
    { title: "Cooking", emoji: "🍳", left: "5%", top: "65%" },
]

function About() {
    const contrainetRef = useRef(null)
    return (
        <div className="py-20 lg:py-28">
            <div className="container">
                <SectionHeader
                    eyebrow="About me"
                    title="A Glimpse Into My World"
                    description="Learn More About Who I am, What I do, And What inspires me."
                />
                <div className="mt-20 flex flex-col gap-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
                        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                            <CardHeader
                                title=" My Reads"
                                description="Explore the books shaping my perspective"
                            />
                            <div className="mx-auto mt-2 w-40 md:mt-0">
                                <img src={bookImage} alt="Book Cover" />
                            </div>
                        </Card>
                        <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                            <CardHeader
                                title="My Toolbox"
                                description="Explore the technologies and tools I use to
                            craft exceptional digital experiences."
                                className=""
                            />
                            <ToolboxItems
                                items={toolboxItems}
                                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
                            />
                            <ToolboxItems
                                items={toolboxItems}
                                className="mt-6"
                                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s] px-8 "
                            />
                        </Card>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
                        <Card className="flex h-[320px] flex-col p-0 md:col-span-3 lg:col-span-2">
                            <CardHeader
                                title="Beyond the code"
                                description="Explore my interests and hobbies beyond the
                                digital realm."
                                className="px-6 py-6"
                            />

                            <div
                                className="relative flex-1"
                                ref={contrainetRef}
                            >
                                {hobbies.map((hobby) => (
                                    <motion.div
                                        key={hobby.title}
                                        className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
                                        style={{
                                            left: hobby.left,
                                            top: hobby.top,
                                        }}
                                        drag
                                        dragConstraints={contrainetRef}
                                    >
                                        <span className="font-medium text-gray-950">
                                            {hobby.title}
                                        </span>
                                        <span>{hobby.emoji}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                        <Card className="relative h-[320px] p-0 md:col-span-2 lg:col-span-1">
                            <img
                                src={mapImage}
                                alt="map image"
                                className="h-full w-full object-cover object-left-top"
                            />
                            <div className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400 after:absolute after:inset-0 after:rounded-full after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:content-['']">
                                <div className="absolute inset-0 -z-20 animate-ping rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 [animation-duration:2s]"></div>
                                <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400"></div>

                                <img
                                    src={smileEmoji}
                                    alt="smiling emoji"
                                    className="size-20"
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
