import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    root: '', // 设置项目根目录
    base: './', // 设置公共基础路径
    plugins: [react()],
    server: {
        host: '0.0.0.0',
        port: 8065,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
})
