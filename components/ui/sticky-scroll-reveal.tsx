"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end end"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const scrollPerCard = 1 / (cardLength);
        const currentCard = Math.min(
            Math.floor(latest / scrollPerCard),
            cardLength - 1
        );
        setActiveCard(currentCard);
    });

    const linearGradients = [
        "linear-gradient(to bottom right, #E2CBFF, #393BB2)", // Purple gradient (matching your theme)
        "linear-gradient(to bottom right, #393BB2, #161A31)", // Dark purple to dark
        "linear-gradient(to bottom right, #6366f1, #E2CBFF)", // Indigo to light purple
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(
        linearGradients[0],
    );

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    return (
        <div
            className="relative flex h-[40rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
            style={{
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
            }}
            ref={ref}
        >
            <div className="div relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20">
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-3xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-lg mt-10 max-w-sm text-slate-300"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    scale: [1, 1.02, 1],
                    transition: { duration: 0.3 }
                }}
                key={activeCard}
                className={cn(
                    "sticky top-10 hidden h-[30rem] w-[24rem] overflow-hidden rounded-xl lg:block shadow-2xl",
                    contentClassName,
                )}
            >
                {content[activeCard].content}
            </motion.div>
        </div>
    );
}; 