import avatar1 from "../assets/images/memoji-avatar-1.png"
import avatar2 from "../assets/images/memoji-avatar-2.png"
import avatar3 from "../assets/images/memoji-avatar-3.png"
import avatar4 from "../assets/images/memoji-avatar-4.png"
import avatar5 from "../assets/images/memoji-avatar-5.png"
import SectionHeader from "../components/SectionHeader"
import Card from "../components/Card"

// Dummy text
const testimonials = [
    {
        name: "Alex Turner",
        position: "Marketing Manager @ TechStartups",
        text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
        avatar: avatar1,
    },
    {
        name: "Olivia Green",
        position: "Head of Design @ GreenLeaf",
        text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
        avatar: avatar2,
    },
    {
        name: "Daniel White",
        position: "CEO @ InnovateCo",
        text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
        avatar: avatar3,
    },
    {
        name: "Emily Carter",
        position: "Product Manager @ GlobalTech",
        text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
        avatar: avatar4,
    },
    {
        name: "Michael Brown",
        position: "Director of IT @ MegaCorp",
        text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
        avatar: avatar5,
    },
]

function Testimonials() {
    return (
        <div className="lg:py:24 py-16">
            <div className="container">
                <SectionHeader
                    eyebrow={"Happy Client"}
                    title={"What Clients Say About Me"}
                    description={
                        "Don't just take my words for it. See what my clients have to say about my work. "
                    }
                />
                <div className="mask mt-16 flex overflow-x-clip lg:mt-24">
                    <div className="flex flex-none gap-8">
                        {testimonials.map((testimonial) => (
                            <Card
                                key={testimonial.name}
                                className={"max-w-xs p-6 md:max-w-md md:p-8"}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex size-14 flex-shrink-0 items-center justify-center rounded-full bg-gray-700">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="max-h-full"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-semibold">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-sm text-white/40">
                                            {testimonial.position}
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm md:mt-6 md:text-base">
                                    {testimonial.text}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
