import { OrbitingCirclesDemo } from "@/pages/home/module1";
import { InfiniteMovingCardsDemo } from "@/pages/home/module2";
import { Module3 } from "@/pages/home/module3";
import { Module4 } from "@/pages/home/module4";
import BlurFade from "@/components/ui/blur-fade";

export function Home() {
	return (
		<>
			<OrbitingCirclesDemo></OrbitingCirclesDemo>
			<InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
            <BlurFade inView={true} delay={0.4} yOffset={20}>
				<Module3></Module3>
            </BlurFade>
            <Module4></Module4>
		</>
	);
}
