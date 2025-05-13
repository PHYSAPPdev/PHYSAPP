import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // Uses SWC to transpile React + TS/TSX
  css: {
    preprocessorOptions: {
      scss: {
      },
    },
  },
})