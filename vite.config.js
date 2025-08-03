import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import obfuscator from 'vite-plugin-javascript-obfuscator';

export default defineConfig({
  plugins: [
    react(),
    obfuscator(
      {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.4,
        debugProtection: true,
        debugProtectionInterval: true,
        disableConsoleOutput: true,
        rotateStringArray: true,
        stringArray: true,
        stringArrayEncoding: ['base64'],
        stringArrayThreshold: 0.75,
        selfDefending: true,
      },
      ['**/*.js'] 
    ),
  ],
  build: {
    minify: false, 
    outDir: 'build', 
  },
});
