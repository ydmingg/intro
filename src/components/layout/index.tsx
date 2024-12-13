import { Outlet } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Layout() {
	return (
		<div className="intro">
			<Header></Header>
            <main className="intro-main w-full overflow-hidden">
				<Outlet />
			</main>
			<Footer></Footer>
		</div>
	);
}
