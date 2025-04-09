"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div id="projects" className="scroll-mt-32 py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[28rem] h-[22rem] flex items-center justify-center sm:w-80 w-[70vw]"
            key={item.id}
          >
            <PinContainer
              title="Visit"
              href={item.link || item.github}
            >
              <div className="relative flex items-center justify-center sm:w-80 w-[70vw] overflow-hidden h-[18vh] lg:h-[25vh] mb-6">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className={`z-10 absolute bottom-0 w-full h-full ${item.id === 4 ? 'object-contain' : 'object-cover'} lg:rounded-3xl`}
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-sm text-xs font-light line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "0.5vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-4 mb-2">
                <div className="flex items-center">
                  {item.iconLists && item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-1" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a href={item.link || item.github} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
                    <p className="flex lg:text-sm md:text-xs text-xs text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-2" color="#CBACF9" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
