import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    checker({ typescript: true }),
    react()
  ]
});
