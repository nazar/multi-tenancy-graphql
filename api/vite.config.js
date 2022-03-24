import path from 'path';

import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  build: {
    sourcemap: true
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      appPath: './src',
      exportName: 'viteNodeApp',
      tsCompiler: 'esbuild'
    })
  ],
  resolve: {
    alias: {
      // application aliases
      middleware: path.resolve(__dirname, './src/middleware'),
      services: path.resolve(__dirname, './src/services'),
      // the main schema folder
      schema: path.resolve(__dirname, './src/schema'),
      // currencies
      currencies: path.resolve(__dirname, './src/currencies')
    }
  },
  clearScreen: false
});
