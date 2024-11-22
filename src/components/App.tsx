import { Header } from "@/components/header"
import { BgBall } from "@/components/decorate/bg-ball"
import { Home } from "@/pages/home"

function App() {
    return (
        <section className="intro overflow-hidden">
            <Header></Header>
            <BgBall></BgBall>
            <main className="intro-main w-full">
                <Home></Home>
            </main>
        </section>
    )
}

export default App
