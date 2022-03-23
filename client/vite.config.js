import path from 'path';

import { defineConfig } from 'vite';
import graphql from '@rollup/plugin-graphql';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    graphql(),
    react()
  ],
  resolve: {
    alias: {
      // top level components
      components: path.resolve(__dirname, './src/components'),
      // per currency subtree root folders
      Nielsen: path.resolve(__dirname, './src/components/Nielsen'),
      VideoAmp: path.resolve(__dirname, './src/components/VideoAmp')
    }
  },
  clearScreen: false
});
