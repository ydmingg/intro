import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DirectionAwareHover = ({
	imageUrl,
	children,
	childrenClassName,
	imageClassName,
	imageAspectRatio = { width: 1000, height: 1000 },
	className,
}: {
	imageUrl: string;
	children: React.ReactNode | string;
	childrenClassName?: string;
	imageClassName?: string;
	imageAspectRatio?: { width: number; height: number };
	className?: string;
}) => {
	const ref = useRef<HTMLDivElement>(null);
	const [direction, setDirection] = useState<string>("view");

	// 设置显示隐藏开关
	const hoverToggle = {
		variants: {
			view: {
				scale: 1.14,
			},
		},
		textVariants: {
			initial: {
				opacity: 0,
			},
			view: {
				opacity: 1,
			},
		},
	};

	const handleMouseEnter = () => setDirection("view");

    return (
        <motion.div
            ref={ref}
            onMouseEnter={handleMouseEnter}
            className={cn(
                "font-sans rounded-xl accentWhiteBg relative overflow-hidden min-w-[200px]",
                className
            )}>
            <AnimatePresence mode="wait">
                <motion.div
                    className="relative h-full w-full"
                    initial="initial"
                    whileHover={direction}
                    exit="exit">
                    <motion.div
                        variants={hoverToggle.variants}
                        className="h-full w-full relative bg-gray-50 dark:bg-black"
                        transition={{
                            duration: 0.2,
                            ease: "easeOut",
                        }}>
                        <img
                            alt="image"
                            className={cn(
                                "w-auto m-auto object-cover",
                                imageClassName
                            )}
                            width={imageAspectRatio.width.toString()}
                            height={imageAspectRatio.height.toString()}
                            src={imageUrl}
                        />
                    </motion.div>
                    <motion.div
                        variants={hoverToggle.textVariants}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                        }}
                        className={cn(
                            "overflow-y-auto absolute left-0 top-0 text-sm text-gray-50 link_decoration bg-slate-700/40 backdrop-blur-sm w-full h-full rounded-xl px-4 py-8 flex flex-col z-10",
                            childrenClassName
                        )}>
                        {children}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}
