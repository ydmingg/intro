import { useState } from 'react'
// import { OrbitingCirclesDemo } from "@/components/home"
import { Rect } from "@/components/rect"
import { OtherBg } from "@/components/other-bg"
import { Example } from "@/components/Example";

function App() {
    const [count, setCount] = useState(0)
    return (
        <div className="overflow-hidden w-full">
            {/* <div className="box-img">
                <div className="">{count}</div>
            </div>*/}
            {/* <OrbitingCirclesDemo></OrbitingCirclesDemo> */}
            {/* <Rect></Rect> */}
            {/* <Example key={count} /> */}
            <div className="relative z-[1]">
                <p className="p-[40px] m-[40px]">sadfasdfsdf</p>
                <p className="p-[40px] m-[40px]">sadfasdfsdf</p>
                <p className="p-[40px] m-[40px]">sadfasdfsdf</p>
                <p className="p-[40px] m-[40px]">sadfasdfsdf</p>
                <p className="p-[40px] m-[40px]">sadfasdfsdf</p>
                <p className="p-[40px] m-[40px]">sadfasdfsdf</p>
                <p className="p-[40px] m-[40px]">sadfasdfsdf</p>
                <p className="p-[40px] m-[40px]">sadfasdfsdf</p>
                <p className="p-[40px] m-[40px]">sadfasdfsdf</p>
                <p className="p-[40px] m-[40px]">sadfasdfsdf</p>
                <p className="p-[40px] m-[40px]">sadfasdfsdf</p>
                <p className="p-[40px] m-[40px]">sadfasdfsdf</p>
                <p className="p-[40px] m-[40px]">sadfasdfsdf</p>
                <p className="p-[40px] m-[40px]">sadfasdfsdf</p>
                <p className="p-[40px] m-[40px]">sadfasdfsdf</p>
                <p className="p-[40px] m-[40px]">sadfasdfsdf</p>
                <p className="p-[40px] m-[40px]">sadfasdfsdf</p>
            </div>
            <OtherBg></OtherBg>
        </div>
    )
}

export default App
