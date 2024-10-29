<template>
    <nav class="navbar">
      <a href="#home" class="logo">artemTatkov();</a>
      <div class="nav-links">
        <a href="#about">A Propos</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#" class="linkedin-icon">
        <!-- Icone LinkedIn -->
        <i class="fab fa-linkedin"></i>
      </a>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarView'
  }
  </script>
  
  <style scoped>
  .navbar {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background-color: #000;
  }
  
  .navbar .logo {
    font-weight: bold;
    font-size: 24px;
  }
  
  .nav-links a {
    margin: 0 10px;
    text-decoration: none;
    color: #fff;
  }
  
  .linkedin-icon {
    font-size: 24px;
  }
  </style>
  