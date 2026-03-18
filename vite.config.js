import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/balisong-store-state/', //! <-- ім'я репозиторію
// });


//todo: https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/balisong-store-state/', //! <-- ім'я репозиторію
  //! Налаштування Аліасів для абсолютних шляхів імпортів
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
