const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/sass/main.sass"',
      },
    },
  },
  pages: {
    index: {
      entry: "src/main.js",
      title: "Магазин кошек",
    },
  },
});
