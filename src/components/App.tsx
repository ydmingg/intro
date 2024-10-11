import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="box-img">
                <div className="">{count}</div>
                <button onClick={()=>setCount(count => count+1) }>增加数量</button>
            </div>
        </>
    )
}

export default App
