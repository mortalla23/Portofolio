<template>
    <section class="contact-section">
      <div class="content-container">
        <h2 class="section-title">
          <span class="section-underline"></span> Contactez-moi
        </h2>
        <div class="contact-content">
          <!-- Formulaire de contact -->
          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Nom</label>
              <input type="text" id="name" v-model="formData.name" placeholder="Votre nom" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="formData.email" placeholder="Votre email" required />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="formData.message" placeholder="Votre message" rows="5" required></textarea>
            </div>
            <button type="submit" class="submit-button">Envoyer</button>
          </form>
  
          <!-- Réseaux sociaux -->
          <div class="social-links">
            <h3>Mes réseaux sociaux</h3>
            <div class="icons">
              <a href="https://github.com/" target="_blank" class="icon">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" class="icon">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="mailto:votremail@exemple.com" target="_blank" class="icon">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ContactSection",
    data() {
      return {
        formData: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      handleSubmit() {
        // Simulation de l'envoi du formulaire
        alert(
          `Merci, ${this.formData.name}! Votre message a été envoyé avec succès.`
        );
        // Réinitialiser le formulaire
        this.formData.name = "";
        this.formData.email = "";
        this.formData.message = "";
      },
    },
  };
  </script>
  
  <style scoped>
  /* Section Contact */
  .contact-section {
    background-color: #000;
    color: #fff;
    padding: 50px 20px;
    font-family: "Poppins", sans-serif;
  }
  
  .content-container {
    max-width: 1100px;
    margin: 0 auto;
  }
  
  /* Section title */
  .section-title {
    font-size: 32px;
    color: #fff;
    text-align: left;
    position: relative;
    margin-bottom: 30px;
  }
  
  .section-underline {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #d1a849;
  }
  
  /* Contact content */
  .contact-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  
  /* Formulaire de contact */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #1c1c1c;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  label {
    font-size: 14px;
    color: #d1a849;
    margin-bottom: 5px;
  }
  
  input,
  textarea {
    background-color: #000;
    color: #fff;
    border: 1px solid #d1a849;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    font-family: "Poppins", sans-serif;
  }
  
  input::placeholder,
  textarea::placeholder {
    color: #888;
  }
  
  input:focus,
  textarea:focus {
    outline: none;
    border-color: #ffc107;
  }
  
  .submit-button {
    background-color: #d1a849;
    color: #121212;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #ffc107;
  }
  
  /* Réseaux sociaux */
  .social-links {
    text-align: center;
  }
  
  .social-links h3 {
    margin-bottom: 10px;
    font-size: 18px;
    color: #d1a849;
  }
  
  .icons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .icon {
    color: #d1a849;
    font-size: 24px;
    transition: color 0.3s;
  }
  
  .icon:hover {
    color: #ffc107;
  }
  </style>
  