import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: "/projectmain/", 
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), 
        project1: path.resolve(__dirname, 'project1/index.html'), 
        project2: path.resolve(__dirname, 'project2/index.html'), 
      },
    },
  },
});
