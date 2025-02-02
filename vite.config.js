import { defineConfig } from "vite";

export default defineConfig({
  base: "./Projectmain",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        project1: "public/project1/index.html",
        project2: "public/project2/index.html",
      },
    },
  },
});