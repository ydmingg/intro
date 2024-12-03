import { Navigate } from "react-router-dom";
// Routes,
//     Route,
//     NavLink,
//     Navigate,
//     useNavigate,
//     useRoutes,
// 导入路由插件
// import About from "../pages/About";
// import Category from "../pages/Category";
// import Detail from "../pages/Detail";

import { Layout } from "@/components/layout";
import { Login } from "@/pages/login";
import { Home } from "@/pages/home";
import { Other } from "@/pages/other";
import * as Error from "@/pages/error";
// import HomeRanking from "../pages/HomeRanking";
// import HomeRecommend from "../pages/HomeRecommend";
// import HomeSongMenu from "../pages/HomeSongMenu";
// // import Login from "../pages/Login";
// import NotFound from "../pages/NotFound";
// import Order from "../pages/Order";
// import User from "../pages/User";
// import React from "react";
// 组件懒加载 在webpack中import会自动分包
// const About = React.lazy(() => import("../pages/About"));
// const Login = React.lazy(() => import("../pages/Login"));

const configRoutes = [
	{
		path: "/",
		element: <Layout />,
		children: [
            { index: true, element: <Home />},
			{ path: "other", element: <Other /> },
		],
	},
	// 登录
    { path: "/login", element: <Login /> },
    { path: "*", element: <Error.NotFound /> },
    
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
