<template>
  <div class="wrapper">
    <!-- logo -->
    <section>
      <img :src="assetImg('nav/Logo@2x.png')" alt="" class="footer__brand" />
    </section>
    <!-- list -->
    <section v-for="service in serviceList" :key="service.id">
      <!-- title -->
      <a href="#" class="footer__title">{{ service.title }}</a>
      <!-- item -->
      <a
        v-for="item in service.items"
        :key="item.id"
        href="#"
        class="footer__item"
        >{{ item.title }}</a
      >
      <!-- social-media -->
      <div v-if="service.socialLinks" class="footer__social-media">
        <a v-for="link in service.socialLinks" :key="link.id" href="#">
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
import { v4 as uuidv4 } from 'uuid'
import { assetImgMethod } from './../utils/mixins'

export default {
  mixins: [assetImgMethod],
  data() {
    return {
      serviceList: [
        {
          id: uuidv4(),
          title: '客戶服務',
          items: [
            { id: uuidv4(), title: '運送說明' },
            { id: uuidv4(), title: '退換貨相關' },
            { id: uuidv4(), title: '付款資訊' },
            { id: uuidv4(), title: 'FAQ' },
          ],
        },
        {
          id: uuidv4(),
          title: '關於我們',
          items: [
            { id: uuidv4(), title: '品牌故事' },
            { id: uuidv4(), title: '媒體聯繫' },
            { id: uuidv4(), title: 'Press kit' },
          ],
        },
        {
          id: uuidv4(),
          title: '資訊',
          items: [
            { id: uuidv4(), title: '隱私權政策' },
            { id: uuidv4(), title: 'Cookie' },
            { id: uuidv4(), title: 'GDPR' },
          ],
        },
        {
          id: uuidv4(),
          title: '追蹤 ALPHA Shop',
          items: [{ id: uuidv4(), title: '+886 02123-45678' }],
          socialLinks: [
            { id: uuidv4(), image: 'footer/facebook@2x.png' },
            { id: uuidv4(), image: 'footer/ig@2x.png' },
            { id: uuidv4(), image: 'footer/phone@2x.png' },
          ],
        },
      ],
    }
  },
}
</script>
