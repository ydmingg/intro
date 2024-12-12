import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
    items: {
        id: string;
		name: string;
		link: {
			icon: React.ComponentType<any>;
			text: string;
		};
		tip: { value: number; text: string }[];
		quote: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);
	// 设置一个颜色数组
	const colors = [
		"bg-teal-800",
		"bg-blue-800",
        "bg-purple-800",
        "bg-indigo-800",
        "bg-pink-800",
        "bg-green-800",
	];
    
	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"20s"
				);
			} else if (speed === "normal") {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"40s"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-duration",
					"80s"
				);
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className
			)}>
			<ul
				ref={scrollerRef}
				className={cn(
					"flex min-w-full shrink-0 gap-4 w-max flex-nowrap animate-scroll hover:[animation-play-state:paused]",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}>
				{items.map((item) => (
					<li
						className={cn(
							"h-auto w-[350px] max-w-full relative rounded-2xl border border-b-0 border-slate-700 px-8 py-6 md:w-[450px] overflow-hidden flex flex-col gap-1",
                            colors[Math.round(Math.random() * colors.length) % colors.length]
                            
						)}
						key={item.id}>
						<div className="flex text-white gap-2 items-center justify-between">
							<p className="text-lg font-bold">{item.name}</p>
							<div className="text-md flex gap-1 items-center text-gray-200">
								{/* <item.tip /> */}
								<item.link.icon stroke="3" size="16" />
								<p>{item.link.text}</p>
							</div>
						</div>
						<div className="flex text-white gap-4 items-center">
							{item.tip.map((ele, idxx) => (
								<p className="text-sm text-gray-200" key={item.id + ele.text + idxx}>
									<strong className="text-white mr-1">
										{ele.value}
									</strong>
									{ele.text}
								</p>
							))}
						</div>
						<p className="text-sm text-gray-200">{item.quote}</p>
					</li>
				))}
			</ul>
		</div>
	);
};
