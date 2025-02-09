import { defineConfig } from 'vite';
import path from 'path';
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "projectmain", 
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), 
        project1: path.resolve(__dirname, 'project1/index.html'), 
        project2: path.resolve(__dirname, 'project2/index.html'), 
      },
    },
  },
});
