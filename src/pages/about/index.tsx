import { useRef } from "react";
import Game from "./game01";

export default function About() {
    const chart2 = useRef<HTMLDivElement>(null)

    // 创建
	return (
		<main className="relative">
			<div className="">about 测试</div>
			{/* <MyMap className="relative w-[400px] h-[400px]"/> */}
            <div className="mt-2">
                <Game />
            </div>

            <div className="" ref={chart2}></div>
        </main>
	);
}
