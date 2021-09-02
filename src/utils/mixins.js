export const assetImgMethod = {
  methods: {
    // 圖片載入
    assetImg(path) {
      return require(`@/assets/images/${path}`)
    },
  },
}