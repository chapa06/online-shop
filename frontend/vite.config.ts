import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Настройки для разработки (npm run dev)
  server: {
    // Делает сервер доступным извне контейнера Docker
    host: '0.0.0.0', 
    // Разрешает подключения с любых внешних хостов (например, localtunnel)
    allowedHosts: true,
  },
  // Настройки для preview-сервера (npm run preview)
  preview: {
    // Делает preview-сервер доступным извне контейнера Docker
    host: '0.0.0.0',
    // Разрешает подключения с любых внешних хостов (например, localtunnel)
    allowedHosts: true,
  }
})