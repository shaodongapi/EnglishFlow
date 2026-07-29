import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { readFileSync } from 'fs'

// HTTPS 证书:mkcert 签发(覆盖 localhost / 127.0.0.1 / 局域网 IP)。
// iPhone 只需安装 mkcert 根证书即可信任,从而能注册 Service Worker → 离线可用。
const https = {
  key: readFileSync('./.cert/localhost+2-key.pem'),
  cert: readFileSync('./.cert/localhost+2.pem'),
}

// https://vite.dev/config/
export default defineConfig({
  // 部署到子路径(如 GitHub Pages 的 /<repo>/)时,设环境变量 BASE_PATH=/repo/
  // 部署到根域(自定义域名 / owner.github.io)时留空,默认 '/'。
  base: process.env.BASE_PATH || '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['icon.svg', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'],
      manifest: {
        name: 'EnglishFlow 学位英语学习',
        short_name: 'EnglishFlow',
        description: '离线学位英语 / CET-4 学习应用',
        // 相对路径:配合 base 自动适配子路径部署
        start_url: './',
        scope: './',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#0f172a',
        theme_color: '#4f46e5',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // 预缓存全部构建产物(含懒加载的词库/例句 chunk),首次访问后即可离线
        globPatterns: ['**/*.{js,css,html,svg,png,ico,webmanifest,woff,woff2}'],
        // 词库 chunk ~532KB、例句 ~386KB,放宽单文件缓存上限
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        cleanupOutdatedCaches: true,
      },
      devOptions: {
        enabled: false, // 开发期不启用 SW(以生产构建/preview 为准测离线)
      },
    }),
  ],
  server: {
    port: 5173,
    host: true,
    https,
  },
  preview: {
    port: 4173,
    host: true,
    https,
  },
})
