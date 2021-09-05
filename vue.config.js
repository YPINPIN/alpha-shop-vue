module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/global/_reset.scss";
          @import "@/assets/scss/global/_color.scss";
          @import "@/assets/scss/global/_base.scss";
        `
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/alpha-shop-vue/" : "/",
};