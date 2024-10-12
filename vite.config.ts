import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import pkg from "./package.json";

export default defineConfig({
    root: '', // 设置项目根目录
    base: './', // 设置公共基础路径
    plugins: [react()],
    // build: {
    //     minify: "esbuild", // 压缩代码
    //     rollupOptions: {
    //         input: {   // 入口文件
    //             "intro": "src/main.tsx",
    //             "intro-css": "src/index.css",
    //         },
    //         output: {
    //             dir: "dist", // 输出目录
    //             format: "es",  // 打包文件格式
    //             entryFileNames: `[name]-${(pkg.version as any).replaceAll('.', '')}.js`, // 输出文件名称
    //         }
    //     }
    // },
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
