import { Navigate } from "react-router-dom";
// import About from "../pages/About";
// import Category from "../pages/Category";
// import Detail from "../pages/Detail";
import { Home } from "@/pages/home";
import { Other } from "@/pages/other";
// import HomeRanking from "../pages/HomeRanking";
// import HomeRecommend from "../pages/HomeRecommend";
// import HomeSongMenu from "../pages/HomeSongMenu";
// // import Login from "../pages/Login";
// import NotFound from "../pages/NotFound";
// import Order from "../pages/Order";
// import User from "../pages/User";
import React from "react";
// 组件懒加载 在webpack中import会自动分包
// const About = React.lazy(() => import("../pages/About"));
// const Login = React.lazy(() => import("../pages/Login"));
export default function myRoutes() { 
    const routers = [
        {
            path: "/",
            element: <Navigate to="/home" />,
        },
        {
            path: "/home",
            element: <Home />,
            // children: [
            // 	{
            // 		path: "/home",
            // 		element: <Navigate to="/home/recommend" />,
            // 	},
            // 	{
            // 		path: "/home/recommend",
            // 		element: <HomeRecommend />,
            // 	},
            // 	{
            // 		path: "/home/ranking",
            // 		element: <HomeRanking />,
            // 	},
            // 	{
            // 		path: "/home/songmenu",
            // 		element: <HomeSongMenu />,
            // 	},
            // ],
        },
        {
            path: "/other",
            element: <Other />,
        },
        
    ];
    
    return routers;
} 
