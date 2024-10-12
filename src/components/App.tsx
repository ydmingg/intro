import { useState } from 'react'
import { Button } from "@/components/ui/button";
import { OrbitingCirclesDemo } from "@/components/home"

function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="box-img">
                <div className="">{count}</div>
            </div>
            <Button
                className='mb-12'
                onClick={() => setCount(count => count + 1)}
            >增加数量</Button>
            <OrbitingCirclesDemo></OrbitingCirclesDemo>
        </>
    )
}

export default App
