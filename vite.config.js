import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      '8c354291-4984-4333-8511-1a5ca810d728-00-1nn34oyxxypsr.spock.replit.dev'
    ]
  }
});