import { Header } from "@/components/header"
import { BgBall } from "@/components/decorate/bg-ball"
import { Home } from "@/pages/home"
import {
    Routes,
    Route,
    NavLink,
    Navigate,
    useNavigate,
    useRoutes,
} from "react-router-dom";
import myRouter from "@/router"

function App() {
    return (
        <section className="intro overflow-hidden">
            <Header></Header>
            <BgBall></BgBall>
            <main className="intro-main w-full">
                { useRoutes(myRouter)}
            </main>
        </section>
    )
}

export default App
