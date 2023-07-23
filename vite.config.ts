import path from "path";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    outDir: "../dist",
    rollupOptions: {
      output: {
        assetFileNames: (asset) => {
          if (
            asset.name &&
            /\.(gif|jpe?g|tiff?|png|svg|bmp)$/i.test(asset.name)
          ) {
            return "assets/img/[name]-[hash].[extname]";
          } else if (
            asset.name &&
            /\.(woff|eot|woff2|ttf)$/i.test(asset.name)
          ) {
            return "assets/fonts/[name].[extname]";
          } else {
            return "assets/[name]-[hash].[extname]";
          }
        },
      },
    },
    emptyOutDir: true,
    target: "modules",
    minify: "terser",
    terserOptions: {
      ecma: 5,
      module: true,
      toplevel: true,
    },
  },
  server: {
    port: 3001,
    open: "http://localhost:3001",
  },
  plugins: [
    react({
      include: "**/*.{jsx,tsx}",
    }),
    splitVendorChunkPlugin(),
  ],
  css: {
    modules: {
      generateScopedName: "[folder]__[local]_[hash:base64:5]",
    },
  },
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/app"),
      "@store": path.resolve(__dirname, "./src/app/store"),
      "@styles": path.resolve(__dirname, "./src/app/styles"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@entities": path.resolve(__dirname, "./src/entity"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@ui": path.resolve(__dirname, "./src/shared/ui"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
    },
  },
});
