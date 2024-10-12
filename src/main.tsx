import { createRoot } from 'react-dom/client'
import App from './components/App'

// 导入css
import './styles/base.css'
import './styles/index.css'

// 渲染组件
const root = createRoot(document.getElementById('root')!)
root.render(<App />)