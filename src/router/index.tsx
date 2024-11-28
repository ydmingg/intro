import { Navigate, useRoutes } from "react-router-dom";
// Routes,
//     Route,
//     NavLink,
//     Navigate,
//     useNavigate,
//     useRoutes,

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
// import React from "react";
// 组件懒加载 在webpack中import会自动分包
// const About = React.lazy(() => import("../pages/About"));
// const Login = React.lazy(() => import("../pages/Login"));

export default function RoutersConfig() { 
    const routers = [
        { path: "/", element: <Home />},
        {
            path: "/other",
            element: <Other />,
            // children: [
            // 	{
            // 		path: "/list/recommend",
            // 		element: <HomeRecommend />,
            // 	},
            // ],
        },
        { path: "/other", element: <Navigate to="/"/> },
        
    ];

    return useRoutes(routers);
}