import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const isGitHubActions = !!process.env.GITHUB_ACTIONS;
  const isVercel = !!process.env.VERCEL;

  let base = '/';
  if (process.env.BASE_PATH) {
    base = process.env.BASE_PATH;
  } else if (isGitHubActions && !isVercel) {
    base = '/solis/';
  }

  return {
    base,
    plugins: [react()],
    server: {
      port: 3000,
      open: false,
    },
  };
});

