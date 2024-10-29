<template>
    <div class="homeView">
      <NavbarView />
      <section class="intro">
        <h1>Hello World, Je suis <br>Tatkov Artem</h1>
        <h2>Développeur Full Stack</h2>
        <p>Bienvenue sur mon portfolio. 👋</p>
        <button @click="downloadCV">Télécharger mon CV</button>
      </section>
    </div>
  </template>
  
  <script>
  import NavbarView from './NavbarView.vue';

  
  export default {
    name: 'HomeView',
    components: {
      NavbarView
    },
    methods: {
      downloadCV() {
        window.location.href = 'URL_DU_CV';
      }
    }
  }
  </script>
  
  <style scoped>
  .homeView {
    color: #fff;
    background-color: #000;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .intro {
    text-align: center;
    margin-top: 100px;
  }
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: gold;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }
  </style>
  