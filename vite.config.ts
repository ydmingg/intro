import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { version } from './package.json';

// 获取版本号
const getVersion = version.replace(/\./g, "");

// 自定义静态资源配置
const getAssetFile = (assetInfo: any) => {
    const name = Array.isArray(assetInfo.names) && assetInfo.names.length > 0 ? assetInfo.names[0] : "unknown";
    const fileType = name.split(".").pop();
    // 分类CSS文件
    if (/css/.test(fileType)) {
        return `assets/styles/[name]-${getVersion}.[ext]`;
    }

    // 分类图片文件
    if (/png|jpe?g|gif|svg|webp/.test(fileType)) {
        return `assets/images/[name].[ext]`;
    }

    // 分类字体文件
    if (/woff2?|eot|ttf|otf/.test(fileType)) {
        return `assets/fonts/[name].[ext]`;
    }
    
    // 分类视频文件
    if (/mp4|webm|ogg/.test(fileType)) {
        return `assets/videos/[name].[ext]`;
    }
    
    return `assets/[name].[ext]`;
};

// 导出配置
export default defineConfig({
    root: '', // 设置项目根目录
    base: './', // 设置公共基础路径
    plugins: [react()],
    build: {
        outDir: "dist", // 输出目录
        minify: "esbuild", // 压缩代码
        rollupOptions: {
            input: {
                "intro": path.resolve(__dirname, 'index.html'),
            },
            output: {
                entryFileNames: `[name]-${getVersion}.js`,
                assetFileNames: getAssetFile,
            },

        }
    },
    css: {
        preprocessorOptions: {
          scss: {
            api: "modern-compiler" // or 'modern'
          }
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
