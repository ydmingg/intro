import { Outlet } from "react-router-dom";

import { Header } from "@/components/header";
import { BgBall } from "@/components/decorate/bg-ball";
import { Footer } from "@/components/footer";

export function Layout() {
	return (
		<div className="intro overflow-hidden">
			<Header></Header>
			<BgBall></BgBall>
			<main className="intro-main w-full">
				<Outlet />
			</main>
			<Footer></Footer>
		</div>
	);
}
