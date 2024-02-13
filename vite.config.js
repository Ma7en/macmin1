/* eslint-disable no-unused-vars */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import eslint from "vite-plugin-eslint";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
    // plugins: [react()],
    plugins: [react(), eslint()],
});
