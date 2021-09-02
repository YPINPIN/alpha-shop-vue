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
};