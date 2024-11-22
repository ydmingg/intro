import { createRoot } from 'react-dom/client'
import App from './components/App'

// 渲染组件
const root = createRoot(document.getElementById('app')!)
root.render(<App />)
