import { Outlet } from "react-router-dom";
import { Header } from "@/components/header";

export default function Layout() {
	return (
		<div className="intro">
			<Header></Header>
            <div className="intro-main w-full overflow-hidden">
				<Outlet />
			</div>
		</div>
	);
}
