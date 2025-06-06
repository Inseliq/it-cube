import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Замените 'ivanov' и 'my-app' на своё имя пользователя и репо
export default defineConfig({
  base: '/home/',
  plugins: [react()],
})