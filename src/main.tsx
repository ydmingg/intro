import { createRoot } from 'react-dom/client'
import App from './components/App'

// 导入css
import '../css/index.css'
import './index.css'

// 渲染组件
const root = createRoot(document.getElementById('root')!)
root.render(<App />)