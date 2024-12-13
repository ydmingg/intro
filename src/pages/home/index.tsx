import { OrbitingCirclesDemo } from "@/pages/home/module1";
import { InfiniteMovingCardsDemo } from "@/pages/home/module2";
import { Module3 } from "@/pages/home/module3";
import { Module4 } from "@/pages/home/module4";
import BlurFade from "@/components/ui/blur-fade";
import { BgBall } from "@/components/decorate/bg-ball";

export default function Home() {
    return (
        <>
            <BgBall></BgBall>
            <div>
                <OrbitingCirclesDemo></OrbitingCirclesDemo>
                <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
                <BlurFade inView={true} delay={0.4} yOffset={20}>
                    <Module3></Module3>
                </BlurFade>
                <BlurFade inView={true} delay={0.4} yOffset={20}>
                    <Module4></Module4>
                </BlurFade>
            </div>
        </>
	);
}
