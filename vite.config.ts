import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/ui/main.tsx'),
      name: 'Main',
      fileName: 'main',
    }
  },
  define: {
    'process.env': {},
  },
})
