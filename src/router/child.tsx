import { Suspense } from "react";
import Home from "@/pages/home";

// 加载中组件
import Loading from '@/components/loading'; 

// 组件懒加载
// const About = lazy(() => import("@/pages/about"));
// const Other = lazy(() => import("@/pages/other"));
// const Notes = lazy(() => import("@/pages/notes"));
import About from "@/pages/about";
import Other from "@/pages/other";
import Notes from "@/pages/notes";

const configRoutesLayoutChild = [
    { index: true, element: <Home /> },
    {
        path: "notes",
        element: (
            <Suspense fallback={<Loading />}>
                <Notes />
            </Suspense>
        ),
    },
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
