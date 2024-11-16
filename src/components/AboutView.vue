<template>
  <div class="about-view">
    <!-- Section À propos -->
    <section class="about-section">
      <div class="content-container">
        <h2 class="section-title">Qui suis-je?</h2>
        <div class="about-content">
          <div class="profile-image">
            <img :src="profilePicture" alt="Profile Picture" />
          </div>
          <div class="about-text">
            <p>Je m'appelle <strong>Mor TALLA</strong>. Je suis software engineer et actuellement en fin de cycle ingénieur. Passionné par le développement web, je possède des compétences solides en backend et frontend.</p>
            <p>Organisé, sociable et autonome, je travaille aussi bien en équipe qu'en individuel. Mon objectif est d'apprendre, innover et contribuer à des projets numériques enrichissants.</p>
            <p>Si vous êtes intéressé par mon profil, n'hésitez pas à <a href="#contact">me contacter</a>.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Parcours -->
    <section class="experience-section">
      <div class="content-container">
        <h2 class="section-title">Parcours</h2>

        <!-- Éducation -->
        <div class="timeline-category">
          <div class="category-header">
            <div class="icon">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <h3 class="category-title">Éducation</h3>
          </div>
          <div class="timeline">
            <div class="timeline-item">
              <div class="circle"></div>
              <div class="content">
                <h3>ESIGELEC, Rouen</h3>
                <p class="date">2022 — Aujourd'hui</p>
                <p class="description">Diplôme d'ingénieur généraliste Dominante Ingénieurie des Services Numériques</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="circle"></div>
              <div class="content">
                <h3>ESMT </h3>
                <p class="date">2020 — 2022</p>
                <p class="description">Classes préparatoires scientifiques (MPSI)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Expérience -->
        <div class="timeline-category">
          <div class="category-header">
            <div class="icon">
              <i class="fas fa-briefcase"></i>
            </div>
            <h3 class="category-title">Expérience</h3>
          </div>
          <div class="timeline">
            <div class="timeline-item">
              <div class="circle"></div>
              <div class="content">
                <h3>Stagiaire Développeur Full-Stack, Actility</h3>
                <p class="date">Avril 2024 — Septembre 2024</p>
                <div class="description">
                  <ul class="description-list">
                    <li>Réalisation de drivers et devices profiles pour des objets connectés (IoT) en convertissant des chaînes binaires/hexadécimales en format JSON.</li>
                    <li>Réalisation d'un mapping technique en Javascript pour convertir les mesures sous forme standardisée Actility (Ontologie).</li>
                    <li>Amélioration d'un site web en VueJS + HTML + CSS + Java + Docker + Postman visant à l'affichage des différents éléments des drivers.</li>
                  </ul>
                </div>

              </div>
            </div>
            <!-- <div class="timeline-item">
              <div class="circle"></div>
              <div class="content">
                <h3>Stagiaire Développeur</h3>
                <p class="date">Juin 2023 — Septembre 2023</p>
                <p class="description">Conception et intégration d'une application web chez une startup innovante.</p>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Section Compétences -->
    <!-- Section Compétences -->
    <section class="skills-section">
      <div class="content-container">
        <h2 class="section-title">
          <span class="section-underline"></span> Compétences
        </h2>
        <div class="tabs">
          <span
            class="tab"
            :class="{ active: activeTab === 'tech' }"
            @click="switchTab('tech')"
          >
            Tech Stack
          </span>
          <span
            class="tab"
            :class="{ active: activeTab === 'tools' }"
            @click="switchTab('tools')"
          >
            Tools
          </span>
        
        </div>
        <div class="skills-grid">
          <div
            v-for="(skill, index) in filteredSkills"
            :key="index"
            class="skill-item"
          >
            <div class="skill-icon">
              <img :src="skill.icon" alt="" />
            </div>
            <p>{{ skill.name }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      activeTab: 'tech',
      profilePicture: require('@/assets/photo.jpg'), // Image de profil
      skills: {
        tech: [
          { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
          { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
          { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
          { name: 'React', icon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png' },
          { name: 'Vue.js', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png' },
          { name: 'Python', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
          { name: 'Node.js', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
          { name: 'PHP', icon: 'https://cdn-icons-png.flaticon.com/512/919/919830.png' },
          { name: 'Java', icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
          { name: 'C#', icon: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png' },
        ],
        tools: [
          { name: 'MySQL', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png' },
          { name: 'MongoDB', icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png' },
          { name: 'PL/SQL', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png' },
          { name: 'Git', icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111288.png' },
          { name: 'GitHub', icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png' },
          { name: 'Jira', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968906.png' },
          { name: 'Spring Boot', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png' },
          { name: 'Postman', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968853.png' },
          { name: 'VS Code', icon: 'https://cdn-icons-png.flaticon.com/512/906/906324.png' },
        ],
    }
    };
  },
  computed: {
    filteredSkills() {
      return this.skills[this.activeTab];
    },
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
.description-list {
  padding: 0;
  margin: 0;
  list-style-type: none; /* Supprime le style par défaut des listes */
}

.description-list li {
  margin-bottom: 10px; /* Ajoute un espace entre les items */
  padding-left: 20px; /* Décale légèrement les items vers la droite */
  position: relative;
}

.description-list li::before {
  content: '–'; /* Ajoute un tiret devant chaque élément */
  position: absolute;
  left: 0;
  color: #d1a849; /* Couleur dorée pour le tiret */
  font-size: 16px;
  font-weight: bold;
}

/* Reset */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

/* Global styles */
.about-view {
  background-color: #000;
  color: #fff;
  padding: 50px 0;
  font-family: 'Poppins', sans-serif;
}

/* Content container */
.content-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Section titles */
.section-title {
  font-size: 36px;
  color: #d1a849;
  text-align: center;
  margin-bottom: 30px;
}

/* About section */
.about-content {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;
}

.profile-image img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #d1a849;
  box-shadow: 0 0 15px rgba(209, 168, 73, 0.5);
}

.about-text {
  max-width: 600px;
  line-height: 1.6;
}

.about-text strong {
  color: #d1a849;
}

.about-text a {
  color: #d1a849;
  text-decoration: none;
  font-weight: bold;
}

.about-text a:hover {
  text-decoration: underline;
}

/* Timeline categories */
.timeline-category {
  margin-bottom: 20px;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.icon {
  font-size: 24px;
  color: #d1a849;
}

.category-title {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}

/* Timeline */
.timeline {
  position: relative;
  margin: 20px 0;
  padding-left: 30px;
  border-left: 2px solid #d1a849;
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
  padding-left: 20px;
}

.timeline-item .circle {
  position: absolute;
  left: -10px;
  top: 5px;
  width: 12px;
  height: 12px;
  background-color: #d1a849;
  border-radius: 50%;
}

.timeline-item .content h3 {
  font-size: 18px;
  color: #fff;
  margin: 0;
}

.timeline-item .date {
  font-size: 14px;
  color: #d1a849;
  margin: 5px 0;
}

.timeline-item .description {
  font-size: 16px;
  color: #b3b3b3;
  line-height: 1.2;
}
/* Tabs for categories */
.tabs {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  justify-content: center;
}

.tab {
  color: #888;
  font-size: 16px;
  cursor: pointer;
  padding: 5px 10px;
}

.tab.active {
  color: #d1a849;
  background-color: #1c1c1c;
  border-radius: 5px;
}


/* Skills section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.skill-item {
  text-align: center;
  padding: 20px;
  background-color: #1c1c1c;
  border: 1px solid #d1a849;
  border-radius: 10px;
  transition: transform 0.3s ease;
}
.skill-icon img {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
}
.skill-item:hover {
  transform: translateY(-5px);
}

.skill-icon {
  font-size: 36px;
  color: #d1a849;
  margin-bottom: 10px;
}

.skill-item p {
  margin: 0;
}
</style>
