import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  define: {
    'process.env.VITE_SOME_KEY': JSON.stringify(process.env.VITE_SOME_KEY),
  },
});
