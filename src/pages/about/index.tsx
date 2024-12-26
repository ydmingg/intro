import { useState } from "react";
import { MyMap } from "@/components/map";
import Game from "../demo/game01";

export default function About() {
    // 创建
	return (
		<main className="relative">
			<div className="">about 测试</div>
			{/* <MyMap className="relative w-[400px] h-[400px]"/> */}
            <div className="mt-2">
                <Game />
            </div>
        </main>
	);
}
