import BlurFade from "@/components/ui/blur-fade";
import { BgBall } from "@/components/decorate/bg-ball";
import { Footer } from "@/components/footer";
import { OrbitingCirclesDemo } from "./module1";
import { InfiniteMovingCardsDemo } from "./module2";
import { Module3 } from "./module3";
import { Module4 } from "./module4";
import { Module5 } from "./module5";
import { Module6 } from "./module6";
import { Module7 } from "./module7";

export default function Home() {
    return (
        <>
            <BgBall></BgBall>
            <main>
                <OrbitingCirclesDemo></OrbitingCirclesDemo>
                <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
                <BlurFade inView={true} delay={0.4} yOffset={20}>
                    <Module3></Module3>
                </BlurFade>
                <BlurFade inView={true} delay={0.4} yOffset={20}>
                    <Module4></Module4>
                </BlurFade>
                <BlurFade inView={true} delay={0.4} yOffset={20}>
                    <Module5></Module5>
                </BlurFade>
                <BlurFade inView={true} delay={0.4} yOffset={20}>
                    <Module6></Module6>
                </BlurFade>
                <BlurFade inView={true} delay={0.4} yOffset={20}>
                    <Module7></Module7>
                </BlurFade>
            </main>
            <Footer></Footer>
        </>
	);
}
