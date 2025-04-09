import { cn } from "@/lib/utils";
import React from "react";

export const GlowingCard = ({
    children,
    className,
    containerClassName,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    return (
        <div className={cn("relative group", containerClassName)}>
            <div className="glow-effect"></div>
            <div className="bento-glow"></div>
            <div
                className={cn(
                    "relative rounded-3xl bg-black/90 p-4 backdrop-blur-sm",
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
}; 