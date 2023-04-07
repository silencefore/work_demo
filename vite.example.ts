import vue from '@vitejs/plugin-vue'
import {defineConfig, UserConfig} from "vite";
import path from 'path'

export default defineConfig({
    [Symbol.toStringTag]: "",
    appType: undefined,
    catch<TResult>(onrejected: ((reason: any) => (PromiseLike<TResult> | TResult)) | undefined | null): Promise<UserConfig | TResult> {
        return Promise.resolve(undefined);
    },
    customLogger: undefined,
    experimental: undefined,
    finally(onfinally: (() => void) | undefined | null): Promise<UserConfig> {
        return Promise.resolve(undefined);
    },
    legacy: undefined,
    then<TResult1, TResult2>(onfulfilled: ((value: UserConfig) => (PromiseLike<TResult1> | TResult1)) | undefined | null, onrejected: ((reason: any) => (PromiseLike<TResult2> | TResult2)) | undefined | null): Promise<TResult1 | TResult2> {
        return Promise.resolve(undefined);
    },


    base: "./", //开发或生产环境服务的公共基础路径, 绝对 URL 路径名，例如 /foo/
    // 完整的 URL，例如 https://foo.com/
    // 空字符串或 ./（用于开发环境）
    // 通过命令指定：vite build --base=/my/public/path/
    // 代码中获取base：import.meta.env.BASE_URL全局变量在代码中使用，
    //原样出现(例如import.meta.env['BASE_URL']是无效的)
    root: process.cwd(), // 项目根目录（index.html 文件所在的位置绝对位置或相对位置）,默认process.cwd()
    define: {
        __DEV__: 'dev',
    }, //定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换

    mode: 'development', // 模式将会把serve和build时的模式都覆盖掉。
    //也可以通过命令行 --mode 选项来重写'development'（serve）、'production'（build）
    plugins: [vue()], // 需要用到的插件数组
    publicDir: 'public', // 静态资源服务的文件夹。该目录中的文件在开发期间在 / 处提供
    //并在构建期间复制到 outDir 的根目录，并且始终按原样提供或复制而无需进行转换。
    //该值可以是文件系统的绝对路径，也可以是相对于项目的根目录的相对路径。默认'public'
    cacheDir: 'node_modules/.vite', // 存储缓存文件的目录。此目录下会存储预打包的依赖项或 vite
    // 生成的某些缓存文件，使用缓存可以提高性能。如需重新生成缓存文件，你可以使用 --force 命令行选项
    // 或手动删除目录。此选项的值可以是文件的绝对路径，也可以是以项目根目录为基准的相对路径。
    // 当没有检测到 package.json 时，则默认为 .vite。  默认"node_modules/.vite"

    // 解析相关
    resolve: {
        alias: [ // 文件系统路径别名
            {
                "@": path.resolve(__dirname, "src")
            }
            // //或
            // {
            //     find: /\/@\//, //字符串｜正则
            //     replacement: pathResolve('src') + '/'
            // }
        ],
        dedupe: [], // 强制 Vite 始终将列出的依赖项解析为同一副本，比如当安装了两个不同版本的依赖，
        // 如vue2和vue3，通过这个声明最终引入的版本  []
        conditions: [], // 解决程序包中 情景导出 时的其他允许条件 [{
        //     "exports": {
        //       ".": {
        //         "import": "./index.esm.js",
        //         "require": "./index.cjs.js"
        //       }
        //     }
        //   }]
        mainFields: [], // 解析包入口点尝试的字段列表 ，根据package.json中的字段，
        // 在不同环境中导入库的入口文件位置
        // import引入的文件对应module中的路径
        // require引入的文件对应main中的路径
        // 默认：['module', 'jsnext:main', 'jsnext','main']
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'], //  默认：['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']导入时想要忽略的扩展名列表 导入时想要省略的扩展名列表。不建议忽略自定义导入类型的扩展名（例如：.vue），因为它会影响 IDE 和类型支持
        preserveSymlinks: false, // 启用此选项会使 Vite 通过原始文件路径（即不跟随符号链接的路径）而不是真正的文件路径（即跟随符号链接后的路径）确定文件身份
        // 默认：false
    },

    // css相关
    css: {
        modules: { //配置 CSS modules 的行为。选项将被传递给 postcss-modules。
            scopeBehaviour: 'global' | 'local',
            // ...
        },
        postcss: '', // 内联的 PostCSS 配置 如果提供了该内联配置，Vite 将不会搜索其他 PostCSS 配置源
        preprocessorOptions: { // css的预处理器选项
            scss: {
                additionalData: `$injectedColor: orange;`
            }
        }
    },

    // JSON相关
    json: {
        namedExports: true, // 是否支持从.json文件中进行按名导入
        stringify: false, //  开启此项，导入的 JSON 会被转换为 export default JSON.parse("...") 会禁用按名导入
    },

    //esbuild相关
    esbuild: { // 最常见的用例是自定义 JSX
        jsxFactory: 'h',
        jsxFragment: 'Fragment'
        // ESbuild会被应用在 ts、jsx、tsx 文件，以下选项对要处理的文件类型进行配置
        // include：string | RegExp | (string | RegExp)[]
        // exclude：string | RegExp | (string | RegExp)[]
        // jsxInject:自动为每一个被 ESbuild 转换的文件注入内容
        //     `import React from 'react'`
    },

    assetsInclude: ['**/*.gltf'], // 指定额外的 picomatch 模式 作为静态资源处理
    logLevel: 'info', // 调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
    clearScreen: true, // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
    envDir: '/', // 用于加载 .env 文件的目录
    envPrefix: [], // 以 envPrefix 开头的环境变量会通过 import.meta.env 暴露在你的客户端源码中

    //server相关
    server: {
        host: '127.0.0.1', // 指定服务器应该监听哪个 IP 地址
        port: 5000, // 指定开发服务器端口
        strictPort: true, // 若端口已被占用则会直接退出
        https: false, // 启用 TLS + HTTP/2
        // 当为true：启用 TLS + HTTP/2。注意：当 server.proxy 选项 也被使用时，将会仅使用 TLS。
        // 这个值也可以是一个传递给 https.createServer() 的 选项对象
        open: true, // 启动时自动在浏览器中打开应用程序
        proxy: { // 配置自定义代理规则
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
                ws: true, //WebSocket
            }
        },
        cors: true, // 配置 CORS
        force: true, // 强制使依赖预构建
        hmr: { // 禁用或配置 HMR 连接 热更新相关
            // false禁用
            protocol: string, //协议
            host: string,
            port: number,
            path: string,
            timeout: number,
            overlay: boolean, //为 false 可以禁用开发服务器错误的屏蔽
            clientPort: number, //只在客户端的情况下覆盖端口，这允许你为 websocket 提供不同的端口，而并非在客户端代码中查找。如果需要在 dev-server 情况下使用 SSL 代理，这非常有用。
            server: Server, //当使用 server.middlewareMode 或 server.https 时，你需将 server.hmr.server 指定为你 HTTP(S) 的服务器，这将通过你的服务器来处理 HMR 的安全连接请求。这在使用自签证书或想通过网络在某端口暴露 Vite 的情况下，非常有用。
        },
        watch: { // 传递给 chokidar 的文件系统监听器选项 监听文件改变
            // 通过命令:vite build --watch
            ignored: ['!**/node_modules/your-package-name/**'] //      默认会忽略对 .git/ 和 node_modules/ 目录的监听,如果需要对 node_modules/ 内的包进行监听，可以为 server.watch.ignored 赋值一个取反的 glob 模式
            // 其他选项：使用的是rollup的选项配置:https://rollupjs.org/guide/en/#watch-options
        },
        middlewareMode: '', // 以中间件模式创建 Vite 服务器 'ssr' | 'html'    在SSR中使用
        fs: {
            strict: true, // 限制为工作区 root 路径以外的文件的访问
            allow: [], // 限制哪些文件可以通过 /@fs/ 路径提供服务
            deny: ['.env', '.env.*', '*.{pem,crt}'], // 用于限制 Vite 开发服务器提供敏感文件的黑名单
        },
        origin: 'http://127.0.0.1:8080/', // 用于定义开发调试阶段生成资产的 origin
    },

    //build构建相关
    build: {
        target: ['modules'], // 设置最终构建的浏览器兼容目标   默认：'modules'指支持原生 ES 模块的浏览器。
        //  "esnext" ：即假设有原生动态导入支持，并且将会转译得尽可能小：
        //  如果 build.minify 选项为 'terser'， 'esnext' 将会强制降级为 'es2019'。
        //  其他情况下将完全不会执行转译。
        // 'es2015'：自定义目标也可以是一个 ES 版本
        polyfillModulePreload: true, // 是否自动注入 module preload 的 polyfill true：此 polyfill 会被自动注入到每个 index.html 入口的 proxy 模块中
        outDir: 'dist', // 指定输出路径
        assetsDir: 'assets', // 指定生成静态文件目录
        assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码
        cssCodeSplit: true, // 启用 CSS 代码拆分
        cssTarget: '', // 允许用户为 CSS 的压缩设置一个不同的浏览器 target 与 build.target 一致
        sourcemap: false, // 构建后是否生成 source map 文件
        rollupOptions: {}, // 自定义底层的 Rollup 打包配置
        lib: {}, // 构建为库
        manifest: false, // 当设置为 true，构建后将会生成 manifest.json 文件
        ssrManifest: false, // 构建不生成 SSR 的 manifest 文件
        ssr: undefined, // 生成面向 SSR 的构建
        minify: 'esbuild', // 指定使用哪种混淆器
        terserOptions: {}, // 传递给 Terser 的更多 minify 选项
        write: true, // 启用将构建后的文件写入磁盘
        emptyOutDir: true, // 构建时清空该目录
        brotliSize: true, // 启用 brotli 压缩大小报告
        chunkSizeWarningLimit: 500, // chunk 大小警告的限制
        watch: null, // 设置为 {} 则会启用 rollup 的监听器
    },

    // 构建预览preview相关
    preview: {
        port: 5000, // 指定开发服务器端口
        strictPort: true, // 若端口已被占用则会直接退出
        https: false, // 启用 TLS + HTTP/2
        open: true, // 启动时自动在浏览器中打开应用程序
        proxy: { // 配置自定义代理规则
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        },
        cors: true, // 配置 CORS
    },
    optimizeDeps: {
        entries: [], // 指定自定义条目——该值需要遵循 fast-glob 模式
        exclude: [], // 在预构建中强制排除的依赖项
        include: [], // 可强制预构建链接的包
        keepNames: false, // true 可以在函数和类上保留 name 属性
    },

    // SSR相关
    ssr: {
        external: [], // 列出的是要为 SSR 强制外部化的依赖,
        noExternal: '', // 列出的是防止被 SSR 外部化依赖项
        target: 'node', // SSR 服务器的构建目标
    },

    // Worker相关
    worker: {
        format: iife, //worker bundle 的输出类型。 默认： 'iife'   'es',
        plugins: [], //适用于 worker bundle 的 Vite 插件。 []
        rollupOptions: [], //用于构建 worker bundle 的 Rollup 配置项
    }
})
