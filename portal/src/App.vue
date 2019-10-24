<template>
  <div id="app">
    <Header />
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>
<style scoped>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#app .content {
  flex: 1;
}
</style>
