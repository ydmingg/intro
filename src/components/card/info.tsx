import * as Icon from "@tabler/icons-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const InfoCard = ({
    infoCardContent,
    icon = true,
    overlayTitle,
    overlayDescription,
	className,
}: {
    infoCardContent: React.ReactNode;
    icon?: boolean;
    overlayTitle: string;
    overlayDescription: React.ReactNode;
	className?: string;
}) => {
	const [isHovered, setIsHovered] = useState(false);

	// 变化的样式
	const hoverStyle = {
		default: {
			opacity: 0,
			transform: "translateX(-20%) translateY(20%) rotateZ(-10deg)",
		},
		hover: {
			opacity: 1,
			transform: "translateX(0%) translateY(0%) rotateZ(0deg)",
		},
	};

	return (
		<div className="font-sans accentWhiteBg rounded-xl relative overflow-hidden min-w-[200px] connectivityLink">
			<motion.div
				onHoverStart={() => setIsHovered(true)}
				onHoverEnd={() => setIsHovered(false)}
				className="relative z-10 h-full min-h-[130px] cursor-pointer">
				<motion.div
					initial={{ ...hoverStyle.default }}
					animate={
						isHovered
							? { ...hoverStyle.hover }
							: { ...hoverStyle.default }
					}
					className={cn(
						"text-sm text-gray-50 link_decoration accentDarkBg w-full h-full rounded-xl px-4 py-8 flex items-center",
						className
					)}>
					{infoCardContent}
				</motion.div>
			</motion.div>
			<div className="px-4 py-8 w-full h-full absolute left-0 top-0">
				<div className="flex items-start mb-3 justify-between">
					<div className="font-fantasy text-lg">
                        {overlayTitle}
					</div>
                    { icon ? (
                        <div className="ml-4 w-3 h-3 relative top-2">
                            <Icon.IconArrowUpRight className="absolute bottom-0 top-0 right-0 m-auto text-slate-300" />
                        </div>
                    ) : null}
				</div>
				<div className="text-sm text-gray-400">
                    { overlayDescription }
				</div>
			</div>
		</div>
	);
};
