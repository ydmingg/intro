import { lazy, Suspense } from "react";
import Home from "@/pages/home";
import Other from "@/pages/other";

import Loading from '@/components/loading'; 

// 组件懒加载 
const About = lazy(() => import("@/pages/about"));

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
    { path: "/other", element: <Other /> },

];

export default configRoutesLayoutChild;
