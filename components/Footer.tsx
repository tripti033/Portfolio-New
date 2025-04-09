import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="scroll-mt-32 w-full pt-20 pb-10 px-4 sm:px-6 lg:px-8" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Let’s turn your tech vision into <span className="text-purple">a reality 🚀</span>
        </h1>
        <p className="text-white-200 mt-6 md:mt-8 mb-8 md:mb-10 text-center text-sm sm:text-base max-w-2xl">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:tripti033bteceai21@igdtuw.ac.in">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow className="w-4 h-4 sm:w-5 sm:h-5" />}
            position="right"
            otherClasses="text-sm sm:text-base"
          />
        </a>
      </div>

      <div className="flex mt-20 md:flex-row flex-col justify-between items-center gap-6 md:gap-0 max-w-6xl mx-auto">
        <p className="text-sm md:text-base text-white/70">
          Copyright © 2025 Tripti Verma
        </p>

        <div className="flex items-center gap-4 md:gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-opacity-100 transition-all duration-200"
            >
              <img
                src={info.img}
                alt="social icon"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
