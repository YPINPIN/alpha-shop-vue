<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <FooterPanel />
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import FooterPanel from './components/FooterPanel.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    FooterPanel,
  },
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
