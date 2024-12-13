import { Navigate } from "react-router-dom";
// import About from "../pages/About";
// import Category from "../pages/Category";
// import Detail from "../pages/Detail";
import Layout from "@/components/layout";

import configRoutesLogin from "./login";
import configRoutesLayoutChild from "./child";

// import * as Error from "@/pages/error";
// import HomeRanking from "../pages/HomeRanking";
// import HomeRecommend from "../pages/HomeRecommend";
// import HomeSongMenu from "../pages/HomeSongMenu";
// import NotFound from "../pages/NotFound";
// import Order from "../pages/Order";
// import User from "../pages/User";

const configRoutes = [
	{
		path: "/",
		element: <Layout />,
		children: [...configRoutesLayoutChild],
	},
	...configRoutesLogin,
	{ path: "*", element: <Navigate to="/" /> },

	// { path: "*", element: <NotFound /> },

	// { path: "*", element: <Navigate to="/404" /> },

	// { path: "/", element: <Home /> },
	// { path: "/login", element: <Login /> },
	// {
	//     path: "/other",
	//     element: <Other />,
	//     // children: [
	//     // 	{
	//     // 		path: "/list/recommend",
	//     // 		element: <HomeRecommend />,
	//     // 	},
	//     // ],
	// },
	// { path: "/oaaaaaa", element: <Navigate to="/"/> },
];

export default configRoutes;
