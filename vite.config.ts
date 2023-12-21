import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {fileURLToPath} from "url";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
            "@assets-images": fileURLToPath(new URL("./src/assets/images", import.meta.url)),
            "@assets-videos": fileURLToPath(new URL("./src/assets/videos", import.meta.url)),
            "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
            "@components-common": fileURLToPath(new URL("./src/components/common", import.meta.url)),
            "@public": fileURLToPath(new URL("./public", import.meta.url)),
            "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
            "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
        }
    },
})
