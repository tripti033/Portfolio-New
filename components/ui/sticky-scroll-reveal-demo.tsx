"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";
import { FaSearch, FaCode, FaRocket } from "react-icons/fa";

const content = [
    {
        title: "Phase 1: Research & Planning",
        description:
            "I begin by thoroughly understanding your needs, target audience, and project goals. This phase involves market research, competitor analysis, and creating a detailed project roadmap.",
        content: (
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-700 via-violet-800 to-purple-900">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-8" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8 ring-2 ring-white/20">
                        <FaSearch className="w-8 h-8 animate-float text-white/80" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-200">
                        Research & Planning
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3 mt-4">
                        {["Market Analysis", "User Research", "Project Strategy"].map((item, i) => (
                            <span key={i} className="px-3 py-1 text-sm bg-white/10 rounded-full text-white/80">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
            </div>
        ),
    },
    {
        title: "Phase 2: Design & Development",
        description:
            "With a solid plan in place, I move on to designing intuitive user interfaces and developing robust backend systems. I ensure your project is built with scalability and performance in mind.",
        content: (
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-700 via-purple-800 to-violet-900">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-8" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8 ring-2 ring-white/20">
                        <FaCode className="w-8 h-8 animate-float text-white/80" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-200">
                        Design & Development
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3 mt-4">
                        {["UI/UX Design", "Frontend", "Backend"].map((item, i) => (
                            <span key={i} className="px-3 py-1 text-sm bg-white/10 rounded-full text-white/80">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 to-transparent" />
            </div>
        ),
    },
    {
        title: "Phase 3: Testing & Launch",
        description:
            "Before launch, I conduct thorough testing to ensure everything works flawlessly. After deployment, I provide ongoing support and maintenance to keep your project running smoothly.",
        content: (
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-800 via-violet-900 to-indigo-900">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-8" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8 ring-2 ring-white/20">
                        <FaRocket className="w-8 h-8 animate-float text-white/80" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-200">
                        Testing & Launch
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3 mt-4">
                        {["Quality Assurance", "Deployment", "Maintenance"].map((item, i) => (
                            <span key={i} className="px-3 py-1 text-sm bg-white/10 rounded-full text-white/80">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent" />
            </div>
        ),
    }
];

export default function StickyScrollRevealDemo() {
    return (
        <div className="w-full py-4">
            <style jsx global>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .bg-grid-8 {
                    background-size: 40px 40px;
                    background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
                }
            `}</style>
            <StickyScroll content={content} />
        </div>
    );
} 