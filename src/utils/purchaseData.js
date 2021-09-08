// 購物車商品資料
export const dummyCartData = {
  // 商品
  products: [
    {
      productId: 1,
      photo: 'cart/Photo1@2x.png',
      title: '破壞補丁修身牛仔褲',
      price: 3999,
      num: 1,
    },
    {
      productId: 2,
      photo: 'cart/Photo2@2x.png',
      title: '刷色直筒牛仔褲',
      price: 1299,
      num: 1,
    },
  ],
}

// 步驟資料
export const stepData = {
  // 步驟名稱
  steps: [
    { title: '寄送地址', path: { name: 'purchase-address' } },
    { title: '運送方式', path: { name: 'purchase-delivery' } },
    { title: '付款資訊', path: { name: 'purchase-payment' } },
  ],
}

// 地址表單資料
export const addressFormData = {
  // 稱謂
  salutations: [
    { id: 1, value: 'Mr.', title: '先生' },
    { id: 2, value: 'Ms.', title: '女士' },
    { id: 3, value: 'other', title: '不透漏' },
  ],
  // 縣市
  cities: [
    {
      countycode: 'A',
      countyname: '臺北市',
      countycode01: '63000',
    },
    {
      countycode: 'B',
      countyname: '臺中市',
      countycode01: '66000',
    },
    {
      countycode: 'C',
      countyname: '基隆市',
      countycode01: '10017',
    },
    {
      countycode: 'D',
      countyname: '臺南市',
      countycode01: '67000',
    },
    {
      countycode: 'E',
      countyname: '高雄市',
      countycode01: '64000',
    },
    {
      countycode: 'F',
      countyname: '新北市',
      countycode01: '65000',
    },
    {
      countycode: 'G',
      countyname: '宜蘭縣',
      countycode01: '10002',
    },
    {
      countycode: 'H',
      countyname: '桃園市',
      countycode01: '68000',
    },
    {
      countycode: 'I',
      countyname: '嘉義市',
      countycode01: '10020',
    },
    {
      countycode: 'J',
      countyname: '新竹縣',
      countycode01: '10004',
    },
    {
      countycode: 'K',
      countyname: '苗栗縣',
      countycode01: '10005',
    },
    {
      countycode: 'M',
      countyname: '南投縣',
      countycode01: '10008',
    },
    {
      countycode: 'N',
      countyname: '彰化縣',
      countycode01: '10007',
    },
    {
      countycode: 'O',
      countyname: '新竹市',
      countycode01: '10018',
    },
    {
      countycode: 'P',
      countyname: '雲林縣',
      countycode01: '10009',
    },
    {
      countycode: 'Q',
      countyname: '嘉義縣',
      countycode01: '10010',
    },
    {
      countycode: 'T',
      countyname: '屏東縣',
      countycode01: '10013',
    },
    {
      countycode: 'U',
      countyname: '花蓮縣',
      countycode01: '10015',
    },
    {
      countycode: 'V',
      countyname: '臺東縣',
      countycode01: '10014',
    },
    {
      countycode: 'W',
      countyname: '金門縣',
      countycode01: '09020',
    },
    {
      countycode: 'X',
      countyname: '澎湖縣',
      countycode01: '10016',
    },
    {
      countycode: 'Z',
      countyname: '連江縣',
      countycode01: '09007',
    },
  ],
}

// 運送方式
export const deliveries = [
  {
    id: 1,
    type: 'delivery-standard',
    title: '標準運送',
    info: '約 3~7 個工作天',
    price: '免費',
    value: 0,
  },
  {
    id: 2,
    type: 'delivery-dhl',
    title: 'DHL 貨運',
    info: '48 小時內送達',
    price: '$500',
    value: 500,
  },
]