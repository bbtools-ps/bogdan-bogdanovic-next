/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts"
  },
  resolve: {
    alias: {
      "@/components": resolve(__dirname, "./components"),
      "@/redux": resolve(__dirname, "./redux"),
      "@/common": resolve(__dirname, "./common"),
      "@/layout": resolve(__dirname, "./layout")
    }
  }
});
