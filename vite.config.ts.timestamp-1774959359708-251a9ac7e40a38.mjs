// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import fs from "fs";
import path from "path";
var __vite_injected_original_dirname = "/home/project";
function removeInvalidPublicFiles() {
  return {
    name: "remove-invalid-public-files",
    apply: "build",
    enforce: "pre",
    async buildStart() {
      const publicDir = path.resolve(__vite_injected_original_dirname, "public");
      const files = fs.readdirSync(publicDir);
      const invalidFiles = files.filter((f) => f.includes("copy") || /[\s]/.test(f));
      for (const file of invalidFiles) {
        try {
          fs.unlinkSync(path.join(publicDir, file));
        } catch (e) {
        }
      }
    }
  };
}
var vite_config_default = defineConfig({
  plugins: [react(), removeInvalidPublicFiles()],
  optimizeDeps: {
    exclude: ["lucide-react"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmZ1bmN0aW9uIHJlbW92ZUludmFsaWRQdWJsaWNGaWxlcygpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAncmVtb3ZlLWludmFsaWQtcHVibGljLWZpbGVzJyxcbiAgICBhcHBseTogJ2J1aWxkJyxcbiAgICBlbmZvcmNlOiAncHJlJyxcbiAgICBhc3luYyBidWlsZFN0YXJ0KCkge1xuICAgICAgY29uc3QgcHVibGljRGlyID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3B1YmxpYycpO1xuICAgICAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhwdWJsaWNEaXIpO1xuICAgICAgY29uc3QgaW52YWxpZEZpbGVzID0gZmlsZXMuZmlsdGVyKGYgPT4gZi5pbmNsdWRlcygnY29weScpIHx8IC9bXFxzXS8udGVzdChmKSk7XG5cbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBpbnZhbGlkRmlsZXMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmcy51bmxpbmtTeW5jKHBhdGguam9pbihwdWJsaWNEaXIsIGZpbGUpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIFNpbGVudGx5IGlnbm9yZSBlcnJvcnNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCByZW1vdmVJbnZhbGlkUHVibGljRmlsZXMoKV0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sUUFBUTtBQUNmLE9BQU8sVUFBVTtBQUhqQixJQUFNLG1DQUFtQztBQUt6QyxTQUFTLDJCQUEyQjtBQUNsQyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsSUFDVCxNQUFNLGFBQWE7QUFDakIsWUFBTSxZQUFZLEtBQUssUUFBUSxrQ0FBVyxRQUFRO0FBQ2xELFlBQU0sUUFBUSxHQUFHLFlBQVksU0FBUztBQUN0QyxZQUFNLGVBQWUsTUFBTSxPQUFPLE9BQUssRUFBRSxTQUFTLE1BQU0sS0FBSyxPQUFPLEtBQUssQ0FBQyxDQUFDO0FBRTNFLGlCQUFXLFFBQVEsY0FBYztBQUMvQixZQUFJO0FBQ0YsYUFBRyxXQUFXLEtBQUssS0FBSyxXQUFXLElBQUksQ0FBQztBQUFBLFFBQzFDLFNBQVMsR0FBRztBQUFBLFFBRVo7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLEdBQUcseUJBQXlCLENBQUM7QUFBQSxFQUM3QyxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsY0FBYztBQUFBLEVBQzFCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
