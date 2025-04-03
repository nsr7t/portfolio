import darkSassImage from "../assets/images/dark-saas-landing-page.png";
import lightSassImage from "../assets/images/light-saas-landing-page.png";
import aiStartupImage from "../assets/images/ai-startup-landing-page.png";
import CheckIcon from "../components/CheckIcon";
import ArrowUpRight from "../components/ArrowUpRight";
import grainImage from "../assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Sass Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improve site speed by 50%" },
      { title: "Increase mobile traffic by 35%" },
    ],
    link: "github.com/nsr7t",
    image: darkSassImage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Sass Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expand customer reach by 35%" },
      { title: "Increase brand awareness by 15%" },
    ],
    link: "github.com/nsr7t",
    image: lightSassImage,
  },
  {
    company: "Quantum Dynamics",
    year: "2021",
    title: "mixed Sass Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improve site speed by 50%" },
      { title: "Increase mobile traffic by 35%" },
    ],
    link: "github.com/nsr7t",
    image: aiStartupImage,
  },
];

function Projects() {
  return (
    <section className="pb-16">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-world Results
          </p>
        </div>
        <h2 className="font-calistoga text-3xl text-center mt-6">
          Feature Projects
        </h2>
        <p className="text-center text-white/60 mt-4 ">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 relative rounded-3xl  overflow-hidden  outline-2  -outline-offset-2 outline-white/20 px-8 pt-8 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-50"
                style={{ backgroundImage: `url(${grainImage})` }}
              ></div>
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-black uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-calistoga text-2xl mt-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4" />
              <ul className="flex flex-col gap-4 mt-4">
                {project.results.map((result) => (
                  <li key={result.title} className="flex gap-2 text-white/50">
                    <CheckIcon className="size-5" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full rounded-xl inline-flex justify-center gap-2 items-center font-semibold mt-8">
                  <span>Visit Life Site</span>
                  <ArrowUpRight size="size-4" />
                </button>
              </a>
              <img
                src={project.image}
                alt={project.title}
                className="mt-8 -mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
