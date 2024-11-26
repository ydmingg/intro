import { createRoot } from 'react-dom/client'
import App from '@/components/App'

// 导入sass
import '@/assets/styles/index.scss'

// 渲染组件
const root = createRoot(document.getElementById('app')!)
root.render(<App />)
