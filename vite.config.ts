import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    warmup: {
      clientFiles: [
        './src/index.tsx',
        './src/App.tsx',
        './src/components/Sidebar.tsx',
        './src/components/TabBar.tsx',
      ],
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'mapbox-gl',
      'supercluster',
      'lucide-react',
    ],
  },
})
