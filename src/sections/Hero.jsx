import memojiImage from "../assets/images/memoji-computer.png";
import ArrowDown from "../assets/icons/arrow-down.svg";
4;
import grainImage from "../assets/images/grain.jpg";
import HeroOrbitAnimation from "../components/HeroOrbitAnimation";
import StarIcon from "../components/StarIcon";
import SparkleIcon from "../components/SparkleIcon";

function Hero() {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-1 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] ">
        <div
          className="absolute inset-0 -z-1 opacity-5"
          style={{ backgroundImage: `url(${grainImage})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        {/* THE STARS */}
        <HeroOrbitAnimation size={800} rotation={-72}>
          <StarIcon className="text-emerald-300 size-24" />
        </HeroOrbitAnimation>{" "}
        <HeroOrbitAnimation size={550} rotation={20}>
          <StarIcon className="text-emerald-300 size-12" />
        </HeroOrbitAnimation>
        <HeroOrbitAnimation size={590} rotation={98}>
          <StarIcon className="text-emerald-300 size-8" />
        </HeroOrbitAnimation>
        <HeroOrbitAnimation size={430} rotation={-14}>
          <SparkleIcon className="text-emerald-300/20 size-8" />
        </HeroOrbitAnimation>{" "}
        <HeroOrbitAnimation size={440} rotation={79}>
          <SparkleIcon className="text-emerald-300/20 size-5" />
        </HeroOrbitAnimation>
        <HeroOrbitAnimation size={530} rotation={178}>
          <SparkleIcon className="text-emerald-300/20 size-10" />
        </HeroOrbitAnimation>
        <HeroOrbitAnimation size={710} rotation={144}>
          <SparkleIcon className="text-emerald-300/20 size-10" />
        </HeroOrbitAnimation>
        <HeroOrbitAnimation size={720} rotation={85}>
          <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbitAnimation>
        <HeroOrbitAnimation size={520} rotation={-41}>
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbitAnimation>{" "}
        <HeroOrbitAnimation size={650} rotation={-5}>
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbitAnimation>
      </div>

      <div className="container ">
        <div className="flex flex-col items-center">
          <img
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-calistoga text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let's discuss your next project.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <img src={ArrowDown} alt="Arrow Down Icon" className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
