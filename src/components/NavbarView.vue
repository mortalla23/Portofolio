<template>
  <div class="navbar-container">
    <nav class="navbar">
      <!-- Logo -->
      <a href="#home" class="logo">MT-INNOV</a>
      <!-- Menu Items -->
      <div class="menu-items">
        <router-link to="/" class="nav-item" exact-active-class="active">Accueil</router-link>
        <router-link to="/about" class="nav-item" exact-active-class="active">À propos</router-link>
        <a href="#portfolio" class="nav-item">Portfolio</a>
        <router-link to="/contact" class="nav-item" exact-active-class="active">Contact</router-link>
        
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavbarSection',
};
</script>

<style scoped>
/* Import modern font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

/* Reset margins and paddings */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
}

/* Navbar container */
.navbar-container {
  width: 100%; /* Take the full width */
  background-color: #000; /* Dark background */
  padding: 10px 20px;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
}

/* Navbar structure */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo styling */
.logo {
  color: #d1a849; /* Gold color */
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
}

/* Menu items container */
.menu-items {
  display: flex;
  justify-content: center;
  gap: 40px; /* Space between menu items */
  flex: 1; /* Ensures the menu occupies central space */
}

/* Individual menu items */
.nav-item {
  color: #b3b3b3; /* Light gray color for inactive items */
  text-decoration: none;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600; /* Slightly bold for emphasis */
  position: relative;
  text-transform: uppercase; /* Transform text to uppercase */
  letter-spacing: 1px; /* Add spacing between letters */
  transition: color 0.3s ease, transform 0.3s ease; /* Smooth hover effect */
}

/* Hover effect for menu items */
.nav-item:hover {
  color: #d1a849; /* Change to gold on hover */
  transform: translateY(-3px); /* Slight upward movement */
}

/* Underline effect */
.nav-item::after {
  content: '';
  position: absolute;
  bottom: -5px; /* Slightly below the text */
  left: 0;
  height: 2px;
  width: 0%;
  background: #d1a849; /* Gold underline */
  transition: width 0.3s ease; /* Smooth underline transition */
}

/* Show underline on hover or active */
.nav-item:hover::after,
.nav-item.active::after {
  width: 100%; /* Full underline */
}

/* Active link styling */
.active {
  color: #d1a849; /* Gold color for active link */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column; /* Stack items vertically */
    padding: 10px;
  }

  .menu-items {
    flex-direction: column; /* Stack menu items */
    gap: 10px; /* Reduce gap between items */
    margin-top: 10px;
  }

  .nav-item {
    margin: 5px 0; /* Add vertical spacing */
  }
}
</style>
