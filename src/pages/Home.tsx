import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonAvatar,
  IonList,
  IonText,
  IonButtons,
  IonButton
} from '@ionic/react';
import { mail, call, location, logoGithub, logoLinkedin } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      startEvent: 'DOMContentLoaded' // 🔥 Se activa al cargar la página
    });
  }, []);

  return (
    <IonPage>
      {/* NAVBAR */}
      <IonHeader translucent>
        <IonToolbar color="light" data-aos="fade-down">
          <IonTitle className="brand">Lucas Mieres</IonTitle>
          <IonButtons slot="end">
            <IonButton href="#services" data-aos="fade-down" data-aos-delay="200">Servicios</IonButton>
            <IonButton href="#projects" data-aos="fade-down" data-aos-delay="400">Proyectos</IonButton>
            <IonButton href="#contact" data-aos="fade-down" data-aos-delay="600">Contacto</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        
        {/* HERO / PRESENTACIÓN */}
        <section className="hero" data-aos="fade-up">
          <IonAvatar className="hero-avatar" data-aos="zoom-in">
            <img src="avatar.png" alt="Foto de perfil" />
          </IonAvatar>
          <h1 data-aos="fade-up" data-aos-delay="200">Lucas Nahuel Mieres</h1>
          <p className="tagline" data-aos="fade-up" data-aos-delay="400">
            💻 Desarrollador Fullstack • Automatizaciones de tareas y Soluciones Web 
          </p>
          <div className="cta-buttons" data-aos="fade-up" data-aos-delay="600">
            <a 
              className="primary-btn"
              href="https://wa.me/543454126943?text=Hola%20Lucas!%20Quiero%20saber%20más%20sobre%20tus%20servicios"
              target="_blank"
            >
              Hablemos por WhatsApp
            </a>
            <a className="secondary-btn" href="#projects">Ver Proyectos</a>
          </div>
        </section>

        {/* EXPERIENCIA Y CV */}
        <IonCard id="services" data-aos="fade-right" data-aos-delay="200">
          <IonCardHeader>
            <IonCardTitle>💼 Experiencia & Servicios</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Ofrezco desarrollo de aplicaciones web, integraciones con APIs, automatización de procesos y consultoría tecnológica para pymes, emprendedores y particulares.</p>
            <div className="experience-item" data-aos="fade-up" data-aos-delay="400">
              <h3>Agencia "TDH" • 05/25 - 09/25 (Frontend) [Freelance]</h3>
              <IonText color="medium">
                <p>E-Commerce "SOJA" • 12/23 - 02/24 (Fullstack con pasarela de pagos) [Freelance]</p>
              </IonText>
            </div>
          </IonCardContent>
        </IonCard>

        {/* PORTFOLIO */}
        <IonCard id="projects" data-aos="fade-left" data-aos-delay="200">
          <IonCardHeader>
            <IonCardTitle>🚀 Proyectos Destacados</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="experience-item" data-aos="zoom-in" data-aos-delay="200">
              <h3>Comparador de precios</h3>
              <IonText color="medium">
                <p>Servicio con +15 mercados argentinos, ayudando al ahorro del usuario.</p>
                <a href="https://github.com/lucasmieres2001/mejoresprecios" target="_blank">Ver proyecto</a>
              </IonText>
            </div>
            <div className="experience-item" data-aos="zoom-in" data-aos-delay="400">
              <h3>Asistente para estudiantes</h3>
              <IonText color="medium">
                <p>Gestión de tareas, apuntes y prioridades académicas.</p>
                <a href="https://github.com/lucasmieres2001/Ukeek---Junia" target="_blank">Ver proyecto</a>
              </IonText>
            </div>
            <div className="experience-item" data-aos="zoom-in" data-aos-delay="600">
              <h3>Portafolio personal</h3>
              <IonText color="medium">
                <p>Hecho en React + TypeScript.</p>
                <a href="https://github.com/lucasmieres2001/my-cv" target="_blank">Ver proyecto</a>
              </IonText>
            </div>
          </IonCardContent>
        </IonCard>

        {/* SKILLS */}
        <IonCard data-aos="fade-up" data-aos-delay="200">
          <IonCardHeader>
            <IonCardTitle>🛠️ Habilidades Técnicas</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div className="skills-grid">
              <span className="skill-badge" data-aos="zoom-in" data-aos-delay="100">React</span>
              <span className="skill-badge" data-aos="zoom-in" data-aos-delay="200">TypeScript</span>
              <span className="skill-badge" data-aos="zoom-in" data-aos-delay="300">Ionic</span>
              <span className="skill-badge" data-aos="zoom-in" data-aos-delay="400">Java/Spring</span>
              <span className="skill-badge" data-aos="zoom-in" data-aos-delay="500">Node.js/Express</span>
              <span className="skill-badge" data-aos="zoom-in" data-aos-delay="600">MySQL</span>
              <span className="skill-badge" data-aos="zoom-in" data-aos-delay="700">MongoDB</span>
              <span className="skill-badge" data-aos="zoom-in" data-aos-delay="800">Git</span>
              <span className="skill-badge" data-aos="zoom-in" data-aos-delay="900">Postman</span>
            </div>
          </IonCardContent>
        </IonCard>

        {/* CONTACTO */}
        <IonCard id="contact" data-aos="fade-up" data-aos-delay="200">
          <IonCardHeader>
            <IonCardTitle>📩 Contacto</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList lines="none">
              <IonItem data-aos="fade-right" data-aos-delay="100">
                <IonIcon icon={mail} slot="start" />
                <IonLabel>lucassmieres2001@gmail.com</IonLabel>
              </IonItem>
              <IonItem
                href="https://wa.me/543454126943?text=Hola%20Lucas!%20Quiero%20contratar%20tus%20servicios"
                target="_blank"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <IonIcon icon={call} slot="start" />
                <IonLabel>+54 3454 126943 (WhatsApp)</IonLabel>
              </IonItem>
              <IonItem data-aos="fade-right" data-aos-delay="300">
                <IonIcon icon={location} slot="start" />
                <IonLabel>Entre Ríos, Argentina</IonLabel>
              </IonItem>
              <IonItem href="https://github.com/lucasmieres2001" target="_blank" data-aos="fade-right" data-aos-delay="400">
                <IonIcon icon={logoGithub} slot="start" />
                <IonLabel>GitHub</IonLabel>
              </IonItem>
              <IonItem href="https://www.linkedin.com/in/lucas-mieres-86198528b" target="_blank" data-aos="fade-right" data-aos-delay="500">
                <IonIcon icon={logoLinkedin} slot="start" />
                <IonLabel>LinkedIn</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Home;
