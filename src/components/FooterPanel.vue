<template>
  <div class="wrapper">
    <!-- logo -->
    <section>
      <img :src="assetImg('nav/Logo@2x.png')" alt="" class="footer__brand" />
    </section>
    <!-- list -->
    <section v-for="(service, index) in serviceList" :key="index">
      <!-- title -->
      <a href="#" class="footer__title">{{ service.title }}</a>
      <!-- item -->
      <a
        v-for="(item, index) in service.items"
        :key="index"
        href="#"
        class="footer__item"
        >{{ item.title }}</a
      >
      <!-- social-media -->
      <div v-if="service.socialLinks" class="footer__social-media">
        <a v-for="(link, index) in service.socialLinks" :key="index" href="#">
          <img
            :src="assetImg(link.image)"
            alt=""
            class="footer__social-media__icon"
          />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import { assetImgMethod } from './../utils/mixins'

export default {
  mixins: [assetImgMethod],
  data() {
    return {
      serviceList: [
        {
          title: '客戶服務',
          items: [
            { title: '運送說明' },
            { title: '退換貨相關' },
            { title: '付款資訊' },
            { title: 'FAQ' },
          ],
        },
        {
          title: '關於我們',
          items: [
            { title: '品牌故事' },
            { title: '媒體聯繫' },
            { title: 'Press kit' },
          ],
        },
        {
          title: '資訊',
          items: [
            { title: '隱私權政策' },
            { title: 'Cookie' },
            { title: 'GDPR' },
          ],
        },
        {
          title: '追蹤 ALPHA Shop',
          items: [{ title: '+886 02123-45678' }],
          socialLinks: [
            { image: 'footer/facebook@2x.png' },
            { image: 'footer/ig@2x.png' },
            { image: 'footer/phone@2x.png' },
          ],
        },
      ],
    }
  },
}
</script>
