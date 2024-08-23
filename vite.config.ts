import { defineConfig } from 'vite'
import svg from '@neodx/svg/vite';
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), svgr(), svg({
    group: true,
    root: 'src/shared/ui/icon/assets',
    output: 'public/sprite',
    resetColors: false,
    metadata: 'src/shared/ui/icon/sprite.h.ts',
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src")
    }
  }
})
