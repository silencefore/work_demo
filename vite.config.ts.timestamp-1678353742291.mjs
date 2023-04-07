// vite.config.ts
import vue from "file:///D:/program/demo/v3_demo/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import legacy from "file:///D:/program/demo/v3_demo/node_modules/@vitejs/plugin-legacy/dist/index.mjs";

// src/assets/globalParams/index.ts
var globalParams_default = {
  blue: "#1CC0FF",
  url: "/src/assets/less/index.less"
};

// vite.config.ts
import { visualizer } from "file:///D:/program/demo/v3_demo/node_modules/rollup-plugin-visualizer/dist/plugin/index.ts";
import plugin from "file:///D:/program/demo/v3_demo/node_modules/postcss-preset-env/dist/index.mjs";
import { Plugin as PluginImportToCDN } from "file:///D:/program/demo/v3_demo/node_modules/vite-plugin-cdn-import/dist/index.ts";
import { join } from "path";
var vite_config_default = {
  plugins: [vue(), legacy(), PluginImportToCDN({
    modules: [
      {
        name: "lodash-es",
        var: "_",
        path: `https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.min.js`
      }
    ]
  }), visualizer({
    emitFile: false,
    open: true
  })],
  optimizeDeps: {
    exclude: ["lodash-es"]
  },
  server: {
    port: 7779,
    open: true
  },
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: join(process.cwd(), "src", "/")
      },
      {
        find: /\/#\//,
        replacement: join(process.cwd(), "type", "/")
      }
    ]
  },
  css: {
    modules: {
      scopeBehaviour: "global"
    },
    preprocessorOptions: {
      less: {
        math: "always",
        globalVars: globalParams_default
      }
    },
    postcss: {
      plugins: [plugin, () => ({
        "autoprefixer": { browsers: "last 5 version" }
      })]
    }
  },
  build: {
    outDir: "web",
    assetsDir: "asset",
    rollupOptions: {
      manualChunks(id) {
        if (id.includes("lodash")) {
          return "lodash";
        }
        if (id.includes("node_modules")) {
          return "vendor";
        }
        if (id.includes("src")) {
          return "app";
        }
      }
    }
  }
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL2Fzc2V0cy9nbG9iYWxQYXJhbXMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9ncmFtXFxcXGRlbW9cXFxcdjNfZGVtb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvZ3JhbVxcXFxkZW1vXFxcXHYzX2RlbW9cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2dyYW0vZGVtby92M19kZW1vL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBsZWdhY3kgZnJvbSAnQHZpdGVqcy9wbHVnaW4tbGVnYWN5J1xuaW1wb3J0IGdsb2JhbFZhbCBmcm9tICcuL3NyYy9hc3NldHMvZ2xvYmFsUGFyYW1zJ1xuaW1wb3J0IHt2aXN1YWxpemVyfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInO1xuaW1wb3J0IHBsdWdpbiBmcm9tICdwb3N0Y3NzLXByZXNldC1lbnYnXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQge1BsdWdpbiBhcyBQbHVnaW5JbXBvcnRUb0NETn0gZnJvbSAndml0ZS1wbHVnaW4tY2RuLWltcG9ydCdcbmltcG9ydCB7am9pbn0gZnJvbSAncGF0aCdcbi8vIGltcG9ydCB7cmVzb2x2ZX0gZnJvbSAncGF0aCc7XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBsdWdpbnM6IFt2dWUoKSwgbGVnYWN5KCksIFBsdWdpbkltcG9ydFRvQ0ROKHtcbiAgICAgICAgLy8gXHU5NzAwXHU4OTgxIENETiBcdTUyQTBcdTkwMUZcdTc2ODRcdTZBMjFcdTU3NTdcbiAgICAgICAgbW9kdWxlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdsb2Rhc2gtZXMnLFxuICAgICAgICAgICAgICAgIHZhcjogJ18nLFxuICAgICAgICAgICAgICAgIHBhdGg6IGBodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2xvZGFzaC1lc0A0LjE3LjIxL2xvZGFzaC5taW4uanNgXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9KSwgdmlzdWFsaXplcih7XG4gICAgICAgIGVtaXRGaWxlOiBmYWxzZSxcbiAgICAgICAgb3BlbjogdHJ1ZSAvL1x1NTk4Mlx1Njc5Q1x1NUI1OFx1NTcyOFx1NjcyQ1x1NTczMFx1NjcwRFx1NTJBMVx1N0FFRlx1NTNFM1x1RkYwQ1x1NUMwNlx1NTcyOFx1NjI1M1x1NTMwNVx1NTQwRVx1ODFFQVx1NTJBOFx1NUM1NVx1NzkzQVxuICAgIH0pXSxcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgICAgLy9cbiAgICAgICAgZXhjbHVkZTogWydsb2Rhc2gtZXMnXVxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICAgIHBvcnQ6IDc3NzksXG4gICAgICAgIG9wZW46IHRydWUsXG4gICAgfSxcbiAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmluZDogL1xcL0BcXC8vLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50OiBqb2luKHByb2Nlc3MuY3dkKCksICdzcmMnLCAnLycpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaW5kOiAvXFwvI1xcLy8sXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnQ6IGpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3R5cGUnLCAnLycpLFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgICAgbW9kdWxlczogeyAvL1x1OTE0RFx1N0Y2RSBDU1MgbW9kdWxlcyBcdTc2ODRcdTg4NENcdTRFM0FcdTMwMDJcdTkwMDlcdTk4NzlcdTVDMDZcdTg4QUJcdTRGMjBcdTkwMTJcdTdFRDkgcG9zdGNzcy1tb2R1bGVzXHUzMDAyXG4gICAgICAgICAgICBzY29wZUJlaGF2aW91cjogJ2dsb2JhbCcsXG4gICAgICAgICAgICAvLyAuLi5cbiAgICAgICAgfSxcbiAgICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICAgICAgbGVzczoge1xuICAgICAgICAgICAgICAgIC8vbGVzcyBcdTc2ODRcdTU0MkZcdTUyQThcdTkxNERcdTdGNkVcdTk4NzlcbiAgICAgICAgICAgICAgICBtYXRoOiBcImFsd2F5c1wiLFxuICAgICAgICAgICAgICAgIGdsb2JhbFZhcnM6IGdsb2JhbFZhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9zdGNzczp7XG4gICAgICAgICAgICBwbHVnaW5zOltwbHVnaW4sKCk9Pih7XG4gICAgICAgICAgICAgICAgJ2F1dG9wcmVmaXhlcic6IHticm93c2VyczogJ2xhc3QgNSB2ZXJzaW9uJ31cbiAgICAgICAgICAgIH0pXVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGJ1aWxkOiB7XG4gICAgICAgIG91dERpcjogJ3dlYicsXG4gICAgICAgIGFzc2V0c0RpcjogJ2Fzc2V0JyxcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdsb2Rhc2gnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2xvZGFzaCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3InO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ3NyYycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYXBwJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXHByb2dyYW1cXFxcZGVtb1xcXFx2M19kZW1vXFxcXHNyY1xcXFxhc3NldHNcXFxcZ2xvYmFsUGFyYW1zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxwcm9ncmFtXFxcXGRlbW9cXFxcdjNfZGVtb1xcXFxzcmNcXFxcYXNzZXRzXFxcXGdsb2JhbFBhcmFtc1xcXFxpbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvZ3JhbS9kZW1vL3YzX2RlbW8vc3JjL2Fzc2V0cy9nbG9iYWxQYXJhbXMvaW5kZXgudHNcIjsvLyBAdHMtaWdub3JlXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGJsdWU6XCIjMUNDMEZGXCIsXHJcbiAgICB1cmw6IFwiL3NyYy9hc3NldHMvbGVzcy9pbmRleC5sZXNzXCIsXHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7OztBQ0RuQixJQUFPLHVCQUFRO0FBQUEsRUFDWCxNQUFLO0FBQUEsRUFDTCxLQUFLO0FBQ1Q7OztBREFBLFNBQVEsa0JBQWlCO0FBQ3pCLE9BQU8sWUFBWTtBQUVuQixTQUFRLFVBQVUseUJBQXdCO0FBQzFDLFNBQVEsWUFBVztBQUduQixJQUFPLHNCQUFRO0FBQUEsRUFDWCxTQUFTLENBQUMsSUFBSSxHQUFHLE9BQU8sR0FBRyxrQkFBa0I7QUFBQSxJQUV6QyxTQUFTO0FBQUEsTUFDTDtBQUFBLFFBQ0ksTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLE1BQ1Y7QUFBQSxJQUNKO0FBQUEsRUFDSixDQUFDLEdBQUcsV0FBVztBQUFBLElBQ1gsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLEVBQ1YsQ0FBQyxDQUFDO0FBQUEsRUFDRixjQUFjO0FBQUEsSUFFVixTQUFTLENBQUMsV0FBVztBQUFBLEVBQ3pCO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0g7QUFBQSxRQUNJLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLElBQUksR0FBRyxPQUFPLEdBQUc7QUFBQSxNQUMvQztBQUFBLE1BQ0E7QUFBQSxRQUNJLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLElBQUksR0FBRyxRQUFRLEdBQUc7QUFBQSxNQUNoRDtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDRCxTQUFTO0FBQUEsTUFDTCxnQkFBZ0I7QUFBQSxJQUVwQjtBQUFBLElBQ0EscUJBQXFCO0FBQUEsTUFDakIsTUFBTTtBQUFBLFFBRUYsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLE1BQ2hCO0FBQUEsSUFDSjtBQUFBLElBQ0EsU0FBUTtBQUFBLE1BQ0osU0FBUSxDQUFDLFFBQU8sT0FBSztBQUFBLFFBQ2pCLGdCQUFnQixFQUFDLFVBQVUsaUJBQWdCO0FBQUEsTUFDL0MsRUFBRTtBQUFBLElBQ047QUFBQSxFQUNKO0FBQUEsRUFFQSxPQUFPO0FBQUEsSUFDSCxRQUFRO0FBQUEsSUFDUixXQUFXO0FBQUEsSUFDWCxlQUFlO0FBQUEsTUFDWCxhQUFhLElBQUk7QUFDYixZQUFJLEdBQUcsU0FBUyxRQUFRLEdBQUc7QUFDdkIsaUJBQU87QUFBQSxRQUNYO0FBQ0EsWUFBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQzdCLGlCQUFPO0FBQUEsUUFDWDtBQUNBLFlBQUksR0FBRyxTQUFTLEtBQUssR0FBRztBQUNwQixpQkFBTztBQUFBLFFBQ1g7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSjsiLAogICJuYW1lcyI6IFtdCn0K
