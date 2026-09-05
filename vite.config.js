import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// GitHub Pages serves this project from https://AliNassef12.github.io/portfolio/
// If you rename the repository, update `base` below to match: '/<your-repo-name>/'
export default defineConfig({
    plugins: [react()],
    base: '/portfolio/',
});
