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
      <li v-for="link in navList" :key="link.id" class="navbar__nav-list__item">
        <a href="#" class="navbar__nav-list__link">{{ link.title }}</a>
      </li>
      <!-- tool-list -->
      <li class="navbar__nav-list__item">
        <section class="navbar__tool-list">
          <a v-for="tool in toolList" :key="tool.id" href="#">
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
import { v4 as uuidv4 } from 'uuid'
import { assetImgMethod } from './../utils/mixins'

export default {
  mixins: [assetImgMethod],
  data() {
    return {
      navList: [
        { id: uuidv4(), title: '男款' },
        { id: uuidv4(), title: '女款' },
        { id: uuidv4(), title: '最新消息' },
        { id: uuidv4(), title: '客製商品' },
        { id: uuidv4(), title: '聯絡我們' },
      ],
      toolList: [
        { id: uuidv4(), image: 'nav/search@2x.png' },
        { id: uuidv4(), image: 'nav/cart@2x.png' },
        { id: uuidv4(), image: 'nav/mode@2x.png' },
      ],
    }
  },
}
</script>
