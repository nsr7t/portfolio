function SectionHeader({ title, eyebrow, description }) {
    return (
        <>
            <div className="flex justify-center">
                <p className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text font-semibold tracking-widest text-transparent uppercase lg:text-xl">
                    {eyebrow}
                </p>
            </div>
            <h2 className="font-calistoga mt-6 text-center text-3xl md:text-5xl">
                {title}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg">
                {description}
            </p>
        </>
    )
}

export default SectionHeader
