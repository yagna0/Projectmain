import { defineConfig } from "vite";

export default defineConfig({
  base: "/projectmain/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        project1: "project1/index.html",
        project2: "project2/index.html",
      },
    },
  },
});