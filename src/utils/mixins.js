export const assetImgMethod = {
  methods: {
    // 圖片載入
    assetImg(path) {
      return require(`@/assets/images/${path}`)
    },
  },
}

// 表單資料設定
export const initFormData = {
  props: {
    initialFormData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      formData: {
        ...this.initialFormData,
      },
    }
  },
}