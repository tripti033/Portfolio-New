"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import MagicButton from "@/components/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";
import { Spotlight } from "./spotlight-new";
import dynamic from "next/dynamic";
import GridGlobe from "./GridGlobe";

const World = dynamic(() => import("./Globe").then((mod) => mod.World), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center">
            <div className="animate-pulse w-32 h-32 rounded-full bg-[#161A31]/50" />
        </div>
    ),
});

export default function HeroScrollDemo() {
    const [copied, setCopied] = React.useState(false);
    const [showAnimation, setShowAnimation] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("tripti033bteceai21@igdtuw.ac.in");
        setCopied(true);
        setShowAnimation(true);
        setTimeout(() => {
            setCopied(false);
            setShowAnimation(false);
        }, 2000);
    };

    const globeConfig = {
        pointSize: 4,
        globeColor: "#161A31",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#161A31",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };

    const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
    const sampleArcs = [
        {
            order: 1,
            startLat: 28.6139,
            startLng: 77.209,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.2,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 2,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        },
        {
            order: 3,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: colors[Math.floor(Math.random() * (colors.length - 1))],
        }
    ];

    return (
        <div className="flex flex-col overflow-hidden relative">
            {/* Spotlight overlay */}
            <Spotlight
                translateY={-200}
                gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(280, 100%, 85%, .08) 0, hsla(280, 100%, 55%, .02) 50%, hsla(280, 100%, 45%, 0) 80%)"
                gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(280, 100%, 85%, .06) 0, hsla(280, 100%, 55%, .02) 80%, transparent 100%)"
                gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(280, 100%, 85%, .04) 0, hsla(280, 100%, 45%, .02) 80%, transparent 100%)"
            />

            {/* Main content */}
            <ContainerScroll
                titleComponent={
                    <>
                        <p className="text-sm sm:text-base font-semibold text-gray-500 mb-4 sm:mb-6">
                            ✨ From Ideas to Interfaces
                        </p>
                        <h1 className="text-2xl sm:text-4xl font-semibold text-black dark:text-white">
                            Hey there, <br />
                            <span className="text-4xl sm:text-5xl md:text-[8rem] font-bold mt-1 leading-none">
                                I'm <span className="text-purple">Tripti</span>
                            </span>
                        </h1>
                    </>
                }
            >
                <div className="relative w-full h-full bg-[#0A0A0A] rounded-2xl p-2 sm:p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 h-full">
                        {/* Left column */}
                        <div className="h-full">
                            {/* Large card - Client collaboration */}
                            <div className="h-full bg-[#161A31] rounded-2xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-[#161A31] to-transparent z-10 h-1/2 pointer-events-none" />
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90 p-3 sm:p-6 relative z-20">
                                    From kickoff to deployment, I believe in collaboration and clarity
                                </h3>
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src="/b1.svg"
                                        alt="collaboration"
                                        fill
                                        className="object-cover object-center"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right column */}
                        <div className="space-y-2 sm:space-y-4 h-full">
                            {/* Timezone card */}
                            <div className="h-[48%] bg-[#161A31] rounded-2xl p-3 sm:p-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#161A31] via-transparent to-transparent z-10 pointer-events-none" />
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90 relative z-20 max-w-[70%] sm:max-w-[60%]">
                                    Globally synced, locally focused
                                </h3>
                                <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 w-40 h-40 sm:w-60 sm:h-60">
                                    <World data={sampleArcs} globeConfig={globeConfig} />
                                </div>
                            </div>

                            {/* Tech stack card */}
                            <div className="h-[24%] bg-[#161A31] rounded-2xl p-3 sm:p-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#161A31] via-transparent to-transparent z-10 pointer-events-none" />
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90 relative z-20">
                                    UI/UX + AI + Software Dev = My Zone
                                </h3>
                                <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 w-12 sm:w-20 h-12 sm:h-20">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="/b4.svg"
                                            alt="tech"
                                            fill
                                            className="object-contain opacity-80"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Contact card */}
                            <div className="h-[24%] bg-[#161A31] rounded-2xl p-4 sm:p-6 relative overflow-hidden">
                                <div className="flex flex-row items-center justify-between relative z-20 h-full">
                                    <h3 className="text-lg sm:text-xl md:text-2xl    font-semibold text-white/90 relative z-20">
                                        Have an idea? Let&apos;s bring it to life
                                    </h3>
                                    <div className="relative">
                                        <MagicButton
                                            title={copied ? "Email Copied!" : "Email address"}
                                            icon={<IoCopyOutline className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                            }
                                            position="left"
                                            handleClick={handleCopy}
                                            otherClasses="bg-[#14141b]/90 backdrop-blur-sm border border-white/[0.1] px-2 py-1 text-[10px] sm:text-xs leading-tight hover:bg-[#14141b] transition-colors duration-200"


                                        />
                                        {showAnimation && (
                                            <div className="absolute -top-16 sm:-top-20 -left-8 pointer-events-none">
                                                <Image
                                                    src="/confetti.gif"
                                                    alt="confetti"
                                                    width={200}
                                                    height={200}
                                                    className="object-contain"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#161A31] via-[#161A31]/80 to-transparent z-10 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerScroll>
            <div className="flex justify-center -mt-20 sm:-mt-32 md:-mt-40 relative z-10">
                <a
                    href="https://drive.google.com/file/d/1i0tjON6jyFM88cMlNs55DrwMAC3q9N4-/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MagicButton
                        title="Resume"
                        icon={<FaLocationArrow className="w-4 h-4 sm:w-5 sm:h-5" />}
                        position="right"
                        otherClasses="text-sm sm:text-base"
                    />
                </a>
            </div>
        </div>
    );
} 
