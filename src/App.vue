<template>
  <div id="app">
    <NavbarView />
    <router-view></router-view>
    <FooterView />
    
  </div>
</template>

<script>
import NavbarView from './components/NavbarView.vue';
//import HomeView from './components/HomeView.vue';
import FooterView from './components/FooterView.vue';

export default {
  name: 'App',
  components: {
    NavbarView,
     //HomeView,
    FooterView
  }
}
</script>

<style>
#app {
  width: 100%; /* Prend toute la largeur de l'écran */
  min-height: 100vh; /* Assure une hauteur minimum */
  background-color: #121212; /* Fond noir */
  display: flex;
  flex-direction: column;
}

</style>
