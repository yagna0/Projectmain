import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/projectmain/', // Change this to match your GitHub Pages repo name
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // Main entry point
        project1: path.resolve(__dirname, 'project1/index.html'), // Additional pages
        project2: path.resolve(__dirname, 'project2/index.html'), 
      },
    },
  },
});
