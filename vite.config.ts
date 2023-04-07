import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import globalVal from './src/assets/globalParams'
import {visualizer} from 'rollup-plugin-visualizer';
import plugin from 'postcss-preset-env'
// @ts-ignore
import {Plugin as PluginImportToCDN} from 'vite-plugin-cdn-import'
import {join} from 'path'
// import {resolve} from 'path';
// https://vitejs.dev/config/
export default {
    plugins: [vue(), legacy(), PluginImportToCDN({
        // 需要 CDN 加速的模块
        modules: [
            {
                name: 'lodash-es',
                var: '_',
                path: `https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.min.js`
            }
        ]
    }), visualizer({
        emitFile: false,
        open: true //如果存在本地服务端口，将在打包后自动展示
    })],
    // optimizeDeps: {
    //     //
    //     exclude: ['lodash-es']
    // },
    server: {
        port: 7779,
        open: true,
    },
    resolve: {
        alias: [
            {
                find: /\/@\//,
                replacement: join(process.cwd(), 'src', '/'),
            },
            {
                find: /\/#\//,
                replacement: join(process.cwd(), 'type', '/'),
            }
        ]
    },
    css: {
        modules: { //配置 CSS modules 的行为。选项将被传递给 postcss-modules。
            scopeBehaviour: 'global',
            // ...
        },
        preprocessorOptions: {
            less: {
                //less 的启动配置项
                math: "always",
                globalVars: globalVal
            },
        },
        postcss:{
            plugins:[plugin,()=>({
                'autoprefixer': {browsers: 'last 5 version'}
            })]
        }
    },

    build: {
        outDir: 'web',
        assetsDir: 'asset',
        rollupOptions: {
            manualChunks(id) {
                if (id.includes('lodash')) {
                    return 'lodash';
                }
                if (id.includes('node_modules')) {
                    return 'vendor';
                }
                if (id.includes('src')) {
                    return 'app';
                }
            }
        }
    }
}
