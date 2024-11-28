import RoutersConfig from "@/router";
import { Header } from "@/components/header"
import { BgBall } from "@/components/decorate/bg-ball"
import { Footer } from "@/components/footer"


function App() {
    return (
        <section className="intro overflow-hidden">
            <Header></Header>
            <BgBall></BgBall>
            <main className="intro-main w-full">
                <RoutersConfig />
            </main>
            <Footer></Footer>
        </section>
    )
}

export default App
