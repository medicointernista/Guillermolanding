import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function removeInvalidPublicFiles() {
  return {
    name: 'remove-invalid-public-files',
    apply: 'build',
    enforce: 'pre',
    async buildStart() {
      const publicDir = path.resolve(__dirname, 'public');
      const files = fs.readdirSync(publicDir);
      const invalidFiles = files.filter(f => f.includes('copy') || /[\s]/.test(f));

      for (const file of invalidFiles) {
        try {
          fs.unlinkSync(path.join(publicDir, file));
        } catch (e) {
          // Silently ignore errors
        }
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), removeInvalidPublicFiles()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
