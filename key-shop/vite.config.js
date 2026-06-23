import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // From this we can run the webpage on different server according to you

  // server:{
  //   port: 5000
  // }
})
