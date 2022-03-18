import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import htmlPlugin from 'vite-plugin-html-config';

const { NODE_ENV } = process.env;

const globals = {
  vue: 'Vue',
  vueRouter: 'vueRouter',
};

const cdn = htmlPlugin({
  scripts:
    NODE_ENV === 'production'
      ? [
          {
            src: 'https://cdn.bootcdn.net/ajax/libs/vue/3.2.30/vue.runtime.global.prod.min.js',
          },
          {
            src: 'https://cdn.bootcdn.net/ajax/libs/vue-router/4.0.12/vue-router.global.prod.min.js',
          },
        ]
      : [
          {
            src: 'https://cdn.bootcdn.net/ajax/libs/vue/3.2.30/vue.runtime.global.min.js',
          },
          {
            src: 'https://cdn.bootcdn.net/ajax/libs/vue-router/4.0.12/vue-router.global.min.js',
          },
        ],
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cdn],
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        globals,
      },
    },
  },
});
