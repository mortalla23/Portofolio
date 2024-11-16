<template>
  <div class="home">
    <div class="top-section">
      <a href="https://github.com/mortalla23" target="_blank" class="social-icon github-icon">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/mor-talla-047893266/" target="_blank" class="social-icon linkedin-icon">
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
    <div class="left-side">
      <p class="intro-text">Hello World, Je suis</p>
      <h1 class="name">Mor TALLA</h1>
      <h2 class="job-title">Développeur Full Stack</h2>
      <p class="welcome-text">Bienvenue sur mon portfolio. 👋</p>
      <a
        href="/Mor_TALLA_CV.pdf"
        download="Mor_TALLA_CV.pdf"
        class="download-cv"
      >
        📄 Télécharger mon CV
      </a>

    </div>
    <div class="right-side">
      <!-- Place ici l'image de profil -->
      <img :src="profilePicture" alt="Profile Picture" class="profile-picture">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      profilePicture: require('@/assets/photo.jpg') // Utilise le chemin relatif avec '@' pour 'src'
    };
  },

}


</script>

<style scoped>
/* Animation job title */
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes untyping {
  from { width: 100%; }
  to { width: 0; }
}


.job-title {
  font-size: 24px;
  color: #d1a849;
  font-weight: 500;
  margin: 10px 0;
  overflow: hidden; /* Assure que le contenu qui dépasse sera masqué */
  border-right: .15em solid #d1a849; /* Simule un curseur */
  white-space: nowrap; /* Garde le texte sur une seule ligne */
  width: 20ch; /* Largeur du conteneur du texte (ajuste en fonction de la longueur du texte) */
  animation: typing-reverse 8s steps(19, end) infinite;  /* Animation d'affichage */
}
@keyframes typing-reverse {
  0%, 50% {
    width: 0;
  }
  25%, 75% {
    width: 19ch;
  }
  100% {
    width: 0;
  }
}
/* Animation image */
.profile-picture {
  max-width: 50%;
  border-radius: 50%;
  border: 5px solid #d1a849;
  box-shadow: 0 0 15px rgba(209, 168, 73, 0.5);
  animation: slideIn 1.5s ease-out forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Inclut padding et bordures dans les dimensions */
}
/* Réinitialisation des marges */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}


.home {
  display: flex;
  height: 100vh; /* Prend toute la hauteur de la fenêtre */
  width: 100vw; /* Prend toute la largeur de la fenêtre */
  color: #fff;
  background-color: #000;
  padding: 0; /* Supprime le padding */
  box-sizing: border-box; /* Inclut la bordure et le padding dans les dimensions */
}

.left-side, .right-side {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.intro-text {
  color: #d1a849;
  font-size: 16px;
  margin-bottom: 5px;
}

.name {
  font-size: 48px;
  font-weight: bold;
  margin: 5px 0;
}

.job-title {
  font-size: 24px;
  color: #d1a849;
  font-weight: 500;
  margin: 10px 0;
}

.welcome-text {
  font-size: 14px;
  margin: 15px 0;
}

.download-cv {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: transparent;
  border: 2px solid #d1a849;
  border-radius: 5px;
  font-weight: bold;
  color: #d1a849;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}

.download-cv:hover {
  background-color: #d1a849;
  color: #000;
}

.profile-picture {
  max-width: 50%; /* Ajuste cette valeur selon la taille désirée pour l'image */
  border-radius: 50%; /* Pour un effet arrondi */
  border: 5px solid #d1a849; /* Bordure dorée autour de l'image */
  box-shadow: 0 0 15px rgba(209, 168, 73, 0.5); /* Ombre autour de l'image */
}
.top-section {
  position: absolute; /* Positionnement absolu */
  top: 10%; /* Ajuste cette valeur selon tes besoins */
  left: 5%; /* Ajuste pour aligner verticalement en dessous du logo MT-INNOV */
  display: flex;
  flex-direction: column; /* Affichage vertical des icônes */
  align-items: center;
}

.social-icon {
  color: #d1a849;
  font-size: 24px;
  margin-bottom: 10px; /* Espace entre les icônes */
  text-decoration: none;
}
</style>
