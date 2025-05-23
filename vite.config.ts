import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()], // Uses SWC to transpile React + TS/TSX
  base: '/PHYSAPP/',
  css: {
    preprocessorOptions: {
      scss: {
      },
    },
  },
})
