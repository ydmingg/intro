import { useRoutes } from "react-router-dom";
import configRoutes from "@/router";

function App() {
	// 根据路由表生成对应的路由规则
	const ElementRouter = useRoutes(configRoutes);
	return <>{ElementRouter}</>;
}

export default App;
