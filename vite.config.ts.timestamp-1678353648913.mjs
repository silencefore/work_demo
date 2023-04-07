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
      plugins: [plugin]
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL2Fzc2V0cy9nbG9iYWxQYXJhbXMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9ncmFtXFxcXGRlbW9cXFxcdjNfZGVtb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvZ3JhbVxcXFxkZW1vXFxcXHYzX2RlbW9cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2dyYW0vZGVtby92M19kZW1vL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBsZWdhY3kgZnJvbSAnQHZpdGVqcy9wbHVnaW4tbGVnYWN5J1xuaW1wb3J0IGdsb2JhbFZhbCBmcm9tICcuL3NyYy9hc3NldHMvZ2xvYmFsUGFyYW1zJ1xuaW1wb3J0IHt2aXN1YWxpemVyfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInO1xuaW1wb3J0IHBsdWdpbiBmcm9tICdwb3N0Y3NzLXByZXNldC1lbnYnXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQge1BsdWdpbiBhcyBQbHVnaW5JbXBvcnRUb0NETn0gZnJvbSAndml0ZS1wbHVnaW4tY2RuLWltcG9ydCdcbmltcG9ydCB7am9pbn0gZnJvbSAncGF0aCdcbi8vIGltcG9ydCB7cmVzb2x2ZX0gZnJvbSAncGF0aCc7XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBsdWdpbnM6IFt2dWUoKSwgbGVnYWN5KCksIFBsdWdpbkltcG9ydFRvQ0ROKHtcbiAgICAgICAgLy8gXHU5NzAwXHU4OTgxIENETiBcdTUyQTBcdTkwMUZcdTc2ODRcdTZBMjFcdTU3NTdcbiAgICAgICAgbW9kdWxlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdsb2Rhc2gtZXMnLFxuICAgICAgICAgICAgICAgIHZhcjogJ18nLFxuICAgICAgICAgICAgICAgIHBhdGg6IGBodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2xvZGFzaC1lc0A0LjE3LjIxL2xvZGFzaC5taW4uanNgXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9KSwgdmlzdWFsaXplcih7XG4gICAgICAgIGVtaXRGaWxlOiBmYWxzZSxcbiAgICAgICAgb3BlbjogdHJ1ZSAvL1x1NTk4Mlx1Njc5Q1x1NUI1OFx1NTcyOFx1NjcyQ1x1NTczMFx1NjcwRFx1NTJBMVx1N0FFRlx1NTNFM1x1RkYwQ1x1NUMwNlx1NTcyOFx1NjI1M1x1NTMwNVx1NTQwRVx1ODFFQVx1NTJBOFx1NUM1NVx1NzkzQVxuICAgIH0pXSxcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgICAgLy9cbiAgICAgICAgZXhjbHVkZTogWydsb2Rhc2gtZXMnXVxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICAgIHBvcnQ6IDc3NzksXG4gICAgICAgIG9wZW46IHRydWUsXG4gICAgfSxcbiAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmluZDogL1xcL0BcXC8vLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50OiBqb2luKHByb2Nlc3MuY3dkKCksICdzcmMnLCAnLycpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaW5kOiAvXFwvI1xcLy8sXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnQ6IGpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3R5cGUnLCAnLycpLFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICBjc3M6IHtcbiAgICAgICAgbW9kdWxlczogeyAvL1x1OTE0RFx1N0Y2RSBDU1MgbW9kdWxlcyBcdTc2ODRcdTg4NENcdTRFM0FcdTMwMDJcdTkwMDlcdTk4NzlcdTVDMDZcdTg4QUJcdTRGMjBcdTkwMTJcdTdFRDkgcG9zdGNzcy1tb2R1bGVzXHUzMDAyXG4gICAgICAgICAgICBzY29wZUJlaGF2aW91cjogJ2dsb2JhbCcsXG4gICAgICAgICAgICAvLyAuLi5cbiAgICAgICAgfSxcbiAgICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgICAgICAgbGVzczoge1xuICAgICAgICAgICAgICAgIC8vbGVzcyBcdTc2ODRcdTU0MkZcdTUyQThcdTkxNERcdTdGNkVcdTk4NzlcbiAgICAgICAgICAgICAgICBtYXRoOiBcImFsd2F5c1wiLFxuICAgICAgICAgICAgICAgIGdsb2JhbFZhcnM6IGdsb2JhbFZhbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9zdGNzczp7XG4gICAgICAgICAgICBwbHVnaW5zOltwbHVnaW5dXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgYnVpbGQ6IHtcbiAgICAgICAgb3V0RGlyOiAnd2ViJyxcbiAgICAgICAgYXNzZXRzRGlyOiAnYXNzZXQnLFxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ2xvZGFzaCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnbG9kYXNoJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCdub2RlX21vZHVsZXMnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3ZlbmRvcic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnc3JjJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhcHAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxccHJvZ3JhbVxcXFxkZW1vXFxcXHYzX2RlbW9cXFxcc3JjXFxcXGFzc2V0c1xcXFxnbG9iYWxQYXJhbXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2dyYW1cXFxcZGVtb1xcXFx2M19kZW1vXFxcXHNyY1xcXFxhc3NldHNcXFxcZ2xvYmFsUGFyYW1zXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9wcm9ncmFtL2RlbW8vdjNfZGVtby9zcmMvYXNzZXRzL2dsb2JhbFBhcmFtcy9pbmRleC50c1wiOy8vIEB0cy1pZ25vcmVcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgYmx1ZTpcIiMxQ0MwRkZcIixcclxuICAgIHVybDogXCIvc3JjL2Fzc2V0cy9sZXNzL2luZGV4Lmxlc3NcIixcclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTs7O0FDRG5CLElBQU8sdUJBQVE7QUFBQSxFQUNYLE1BQUs7QUFBQSxFQUNMLEtBQUs7QUFDVDs7O0FEQUEsU0FBUSxrQkFBaUI7QUFDekIsT0FBTyxZQUFZO0FBRW5CLFNBQVEsVUFBVSx5QkFBd0I7QUFDMUMsU0FBUSxZQUFXO0FBR25CLElBQU8sc0JBQVE7QUFBQSxFQUNYLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxHQUFHLGtCQUFrQjtBQUFBLElBRXpDLFNBQVM7QUFBQSxNQUNMO0FBQUEsUUFDSSxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsTUFDVjtBQUFBLElBQ0o7QUFBQSxFQUNKLENBQUMsR0FBRyxXQUFXO0FBQUEsSUFDWCxVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsRUFDVixDQUFDLENBQUM7QUFBQSxFQUNGLGNBQWM7QUFBQSxJQUVWLFNBQVMsQ0FBQyxXQUFXO0FBQUEsRUFDekI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNWO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSDtBQUFBLFFBQ0ksTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsSUFBSSxHQUFHLE9BQU8sR0FBRztBQUFBLE1BQy9DO0FBQUEsTUFDQTtBQUFBLFFBQ0ksTUFBTTtBQUFBLFFBQ04sYUFBYSxLQUFLLFFBQVEsSUFBSSxHQUFHLFFBQVEsR0FBRztBQUFBLE1BQ2hEO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNELFNBQVM7QUFBQSxNQUNMLGdCQUFnQjtBQUFBLElBRXBCO0FBQUEsSUFDQSxxQkFBcUI7QUFBQSxNQUNqQixNQUFNO0FBQUEsUUFFRixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsTUFDaEI7QUFBQSxJQUNKO0FBQUEsSUFDQSxTQUFRO0FBQUEsTUFDSixTQUFRLENBQUMsTUFBTTtBQUFBLElBQ25CO0FBQUEsRUFDSjtBQUFBLEVBRUEsT0FBTztBQUFBLElBQ0gsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsZUFBZTtBQUFBLE1BQ1gsYUFBYSxJQUFJO0FBQ2IsWUFBSSxHQUFHLFNBQVMsUUFBUSxHQUFHO0FBQ3ZCLGlCQUFPO0FBQUEsUUFDWDtBQUNBLFlBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUM3QixpQkFBTztBQUFBLFFBQ1g7QUFDQSxZQUFJLEdBQUcsU0FBUyxLQUFLLEdBQUc7QUFDcEIsaUJBQU87QUFBQSxRQUNYO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0o7IiwKICAibmFtZXMiOiBbXQp9Cg==
