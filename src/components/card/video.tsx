import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
	({
		card,
		index,
		hovered,
		setHovered,
	}: {
		card: any;
		index: number;
		hovered: number | null;
		setHovered: React.Dispatch<React.SetStateAction<number | null>>;
	}) => {
		const videoRef = useRef<HTMLVideoElement>(null);

		return (
			<div
				onMouseEnter={() => {
					setHovered(index);
					videoRef.current?.play();
				}}
				onMouseLeave={() => {
					setHovered(null);
					videoRef.current?.pause();
				}}
				className={cn(
					"relative bg-gray-100 dark:bg-neutral-900 transition-all duration-300 ease-out",
					hovered !== null &&
						hovered !== index &&
						"blur-sm scale-[0.98]"
				)}>
				<video
					ref={videoRef}
					loop
					muted={hovered === index ? false : true}
					className="rounded-xl bg-slate-50 group transition-background duration-[0.5s] shadow-md">
					<source src={card.src} type="video/mp4" />
				</video>
			</div>
		);
	}
);

Card.displayName = "Card";

type Card = {
	id: string;
	src: string;
};

export function VideoCard({
	cards,
	className,
}: {
	cards: Card[];
	className: string;
}) {
	const [hovered, setHovered] = useState<number | null>(null);

	return (
		<div className={cn(className)}>
			{cards.map((card, index) => (
				<Card
					key={card.id}
					card={card}
					index={index}
					hovered={hovered}
					setHovered={setHovered}
				/>
			))}
		</div>
	);
}
