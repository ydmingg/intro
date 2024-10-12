import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { version } from './package.json';

export default defineConfig({
    root: '', // 设置项目根目录
    base: './', // 设置公共基础路径
    plugins: [react()],
    build: {
        outDir: "dist", // 输出目录
        minify: "esbuild", // 压缩代码
        rollupOptions: {
            input: {
                "index": path.resolve(__dirname, 'index.html'),
                // "intro": "src/main.tsx"
            },
            output: {
                entryFileNames: `[name]${version.replaceAll('.', '')}.js`, // 输出文件名称
                assetFileNames: `assets/[name]${version.replaceAll('.', '')}.[ext]`,
            },

        }
    },
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
