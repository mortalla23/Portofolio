<template>
  <div id="app">
    <NavbarView />
    <router-view></router-view>
    <FooterView />
    
  </div>
</template>

<script>
import NavbarView from './components/NavbarView.vue';
// import HomeView from './components/HomeView.vue';
import FooterView from './components/FooterView.vue';

export default {
  name: 'App',
  components: {
    NavbarView,
    // HomeView,
    FooterView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0;
}
</style>
