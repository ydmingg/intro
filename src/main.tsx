import React from "react"
import { createRoot } from 'react-dom/client'
import App from '@/components/App'

// 导入路由插件
import { BrowserRouter } from 'react-router-dom'

// 导入sass
import '@/assets/styles/index.scss'

// 渲染组件
const root = createRoot(document.getElementById('app')!)
root.render(
    <React.StrictMode>
        <BrowserRouter 
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
