import {fileURLToPath, URL} from "node:url"
import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"

import {getThemeVariables} from "ant-design-vue/dist/theme"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: getThemeVariables({
          dark: false
        }),
        javascriptEnabled: true
      }
    }
  }
})
