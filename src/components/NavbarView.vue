<template>
  <div class="navbar-container">
    <nav class="navbar">
      <a href="#home" class="logo">MT-INNOV</a>
      <div class="menu-items">
        <nav>
        <router-link to="/">Accueil</router-link> 
        <router-link to="/about">À propos</router-link>
        <a href="#portfolio" class="nav-item">Portfolio</a>
        <a href="#contact" class="nav-item">Contact</a>
        </nav>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar-container {
  width: 100%;
  background-color: #000; /* Noir de fond */
  padding-top: 1%;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Police générique */
}

.logo {
  color: #d1a849; /* Doré pour le logo */
  font-weight: bold;
  font-size: 24px;
  text-decoration: none;
}

.menu-items {
  display: flex;
  align-items: center;
  justify-content: center; /* Centrage des éléments de menu */
  flex-grow: 1; /* Permet aux éléments du menu de prendre tout l'espace disponible */
}

.nav-item {
  color: #fff; /* Texte blanc pour les éléments de navigation */
  margin-left: 20px;
  font-size: 16px;
  text-decoration: none;
  position: relative;
}

.nav-item:hover {
  color: #d1a849; /* Effet hover doré */
}

.nav-item:hover::after {
  content: '';
  display: block;
  height: 2px;
  background-color: #d1a849;
  width: 100%;
  position: absolute;
  bottom: -5px;
  left: 0;
}

.linkedin-icon {
  color: #d1a849; /* Icône LinkedIn dorée */
  font-size: 24px;
  margin-left: 20px;
}
</style>
