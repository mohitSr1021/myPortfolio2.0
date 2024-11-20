import path from "path";
import { defineConfig,  } from "vite";
import react from "@vitejs/plugin-react";
// Note the change here:
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig(() => {
  return {
   
    plugins: [
      react(),
      viteStaticCopy({
        targets: [
          {
            src: 'src/assets', 
            dest: 'assets',    
          }
        ]
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src/"),
      },
      assetsInclude: ['**/*.JPG'],
    },
  };
});
