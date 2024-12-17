import { lazy, Suspense } from "react";
import Home from "@/pages/home";

import Loading from '@/components/loading'; 

// 组件懒加载 
const About = lazy(() => import("@/pages/about"));
const Other = lazy(() => import("@/pages/other"));

const configRoutesLayoutChild = [
	{ index: true, element: <Home /> },
    {
        path: "about",
        element: (
            <Suspense fallback={<Loading />}>
                <About />
            </Suspense>
        ),
    },
    {
        path: "/other",
        element: (
            <Suspense fallback={<Loading />}>
                <Other />
            </Suspense>
        )
    },

];

export default configRoutesLayoutChild;
