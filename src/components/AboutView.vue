<template>
    <div class="about-container">
      <h1 class="title">Qui suis-je?</h1>
      <div class="profile-section">
        <img src="@/assets/photo.jpg" alt="Artem Tatkov" class="profile-picture">
        <div class="text-section">
          <p>Je m'appelle  Mor TALLA. Je suis développeur full-stack et je viens de Mulhouse. Actuellement, je suis en deuxième année de Licence Professionnelle Développeur Informatique et je recherche un stage de 4 à 6 mois à partir du 12 février 2025. Passionné par l'informatique avec une solide expérience en développement web, tant en backend qu'en frontend.</p>
          <p>Doté de compétences techniques et interpersonnelles, je suis capable de travailler aussi bien en équipe que de manière autonome. Sociable, organisé, je souhaite apprendre, innover et contribuer à des projets passionnants dans le domaine du développement informatique.</p>
          <p>J'apprécie vraiment ce que je fais en ce moment. À mon avis, créer des programmes n'est pas seulement un travail, mais aussi un art qui a une valeur esthétique. Si vous êtes intéressé par ma candidature, n'hésitez pas à consulter la page de contact.</p>
        </div>
      </div>
    </div>
    <div class="info-section">
      <div class="education">
        <h2>Éducation</h2>
        <ul>
          <li>2023 – Aujourd'hui: UHA 4.0, Mulhouse - Licence Professionnelle Développement Logiciels</li>
          <li>2021 – 2023: Lycée Louis Armand, Mulhouse - Baccalauréat Technologique STI2D</li>
        </ul>
      </div>
      <div class="experience">
        <h2>Expérience</h2>
        <ul>
          <li>Février 2024 – Août 2024: Développeur Full-Stack chez Perlifnker - Intégration et envoi d'emailing en masse.</li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  name: 'AboutView'
}
</script>
<style scoped>

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #000; /* Noir de fond */
  color: #fff; /* Texte en blanc pour contraste */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Police générique */
}

.about-container {
  max-width: 800px; /* Ajuste cette largeur selon tes préférences */
  margin: 0 auto; /* Centre le conteneur sur la page */
  padding: 40px; /* Donne un peu d'espace autour du contenu */
  background-color: #000;
  display: flex;
  padding-top: 2%;
  flex-direction: column; /* Empile les éléments verticalement */
  align-items: center; /* Centre horizontalement les éléments à l'intérieur */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5); /* Ombre subtile pour un effet de profondeur */
}

.title {
  font-size: 24px; /* Augmente la taille pour plus de visibilité */
  text-align: center;
  border-bottom: 3px solid #d1a849; /* Rend la ligne sous le titre plus épaisse */
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: #d1a849;
  width: 100%; /* Assure que le titre est plein largeur */
}

.profile-section {
  display: flex;
  align-items: center;
  width: 100%; /* Assure que la section utilise toute la largeur */
}

.profile-picture {
  width: 200px;  /* Ajuste selon le besoin */
  height: 200px; /* Garde le même pour maintenir l'aspect ratio */
  border-radius: 50%;
  margin-right: 40px;
  border: 5px solid #d1a849;
}

.text-section {
color:#fff;
  flex: 1;
  font-size: 18px; /* Augmente la taille de la police pour améliorer la lisibilité */
}

.text-section p {
  margin-bottom: 20px;
}

.info-section {
  display: flex;
  flex-direction: column; /* Les sections d'éducation et d'expérience sont maintenant des colonnes */
  width: 100%;
}

.education, .experience {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  margin-bottom: 20px; /* Ajoute un espace entre les sections */
  border-radius: 5px;
  width: 100%; /* Utilise toute la largeur disponible */
}

h2 {
  color: #d1a849;
  margin-bottom: 10px; /* Plus d'espace après les titres de section */
}
</style>
