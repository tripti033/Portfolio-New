import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section id="home" className="scroll-mt-32 h-screen relative">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="blue"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="purple" />
      </div>

      {/**
       *  UI: grid
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center z-10">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Crafting Scalable and Intuitive Web Solutions
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl mt-4"
          />

          <p className="text-center md:tracking-wider my-6 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Tripti, a Freelance Full Stack Developer.
          </p>

          <a
  href="/FINALE_RESUME.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
            <MagicButton
              title="Resume"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
