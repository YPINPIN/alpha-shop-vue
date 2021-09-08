<template>
  <nav class="navbar">
    <!-- hamburger -->
    <label class="navbar__toggle-label" for="navbar__toggle">
      <img
        :src="assetImg('nav/bx_bx-menu-alt-left@2x.png')"
        alt=""
        class="navbar__hamburger"
      />
    </label>
    <input type="checkbox" id="navbar__toggle" class="navbar__toggle d-none" />
    <ul class="navbar__nav-list">
      <!-- nav-list -->
      <li
        v-for="(link, index) in navList"
        :key="index"
        class="navbar__nav-list__item"
      >
        <a href="#" class="navbar__nav-list__link">{{ link.title }}</a>
      </li>
      <!-- tool-list -->
      <li class="navbar__nav-list__item">
        <section class="navbar__tool-list">
          <a v-for="(tool, index) in toolList" :key="index" href="#">
            <img
              :src="assetImg(tool.image)"
              alt=""
              class="navbar__tool-list__item"
            />
          </a>
        </section>
      </li>
    </ul>
    <section>
      <img :src="assetImg('nav/Logo@2x.png')" alt="" class="navbar__brand" />
    </section>
  </nav>
</template>

<script>
import { assetImgMethod } from './../utils/mixins'

export default {
  mixins: [assetImgMethod],
  data() {
    return {
      navList: [
        { title: '男款' },
        { title: '女款' },
        { title: '最新消息' },
        { title: '客製商品' },
        { title: '聯絡我們' },
      ],
      toolList: [
        { image: 'nav/search@2x.png' },
        { image: 'nav/cart@2x.png' },
        { image: 'nav/mode@2x.png' },
      ],
    }
  },
}
</script>
