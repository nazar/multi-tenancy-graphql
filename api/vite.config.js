import path from 'path';

import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  server: {
    port: 3000
  },
  build: {
    sourcemap: true
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      appPath: './app',
      exportName: 'viteNodeApp',
      tsCompiler: 'esbuild'
    })
  ],
  resolve: {
    alias: {
      // application aliases
      middleware: path.resolve(__dirname, './app/middleware'),
      services: path.resolve(__dirname, './app/services'),
      // the main schema folder
      schema: path.resolve(__dirname, './app/schema'),
      // currencies
      currencies: path.resolve(__dirname, './app/currencies')
    }
  },
  clearScreen: false
});
