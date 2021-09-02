module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/styles/global/_reset.scss";
          @import "@/styles/global/_color.scss";
          @import "@/styles/global/_base.scss";
        `
      }
    }
  },
};