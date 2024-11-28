"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface GradualSpacingProps {
    text: string;
	duration?: number;
	delayMultiple?: number;
	framerProps?: Variants;
	className?: string;
}

export default function GradualSpacing({
	text,
	duration = 0.5,
	delayMultiple = 0.04,
	// framerProps = {
	// 	hidden: { opacity: 0, x: -20 },
	// 	visible: { opacity: 1, x: 0 },
	// },
	className,
}: GradualSpacingProps) {
    const totalDelay = (text.length - 1) * delayMultiple + duration;
    const loopAnimation = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

	return (
		<div
			className="z-10 inline-block relative dark:text-neutral-100 px-2 text-orange-400 font-bold text-5xl md:text-6xl w-[5.8em] font-fantasy whitespace-nowrap text-center">
			<AnimatePresence>
				{text.split("").map((char, i) => (
					<motion.span
						key={i}
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={loopAnimation}
                        transition={{
                            duration,
                            delay: i * delayMultiple,
                            repeat: Infinity,
                            repeatType: "reverse", // 逆向重复，即从可见变回隐藏
                            repeatDelay: totalDelay, // 每个循环之间的延迟
                        }}
						className={cn(className)}>
						{char === " " ? <span>&nbsp;</span> : char}
					</motion.span>
				))}
			</AnimatePresence>
		</div>
	);
}
