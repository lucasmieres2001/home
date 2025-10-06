import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonAvatar,
  IonButtons,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonText
} from '@ionic/react';
import { mail, call, location, logoGithub, logoLinkedin } from 'ionicons/icons';
import './Home.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" }
  }
};

const Home: React.FC = () => {

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar className="toolbar-modern">
          <IonTitle className="brand-modern">Lucas Mieres</IonTitle>
          <IonButtons slot="end">
            <IonButton href="#services">Servicios</IonButton>
            <IonButton href="#projects">Proyectos</IonButton>
            <IonButton href="#contact">Contacto</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="content-modern">
        {/* HERO */}
        <section className="hero-modern">
          <motion.div
          initial="hidden"
          animate="visible"
          variants={{fadeInUp}}
          transition={{ delay: 0 }}
        >
          <div className="hero-avatar-modern">
            <img src="/home/avatar.png" alt="Foto de perfil" />
          </div>
        </motion.div>

          <motion.h1
            className="hero-title-modern"
            initial="hidden"
            animate="visible"
            variants={{fadeInUp}}
            transition={{ delay: 0.2 }}
          >
            Lucas Nahuel Mieres
          </motion.h1>
          <motion.p
            className="tagline-modern"
            initial="hidden"
            animate="visible"
            variants={{fadeInUp}}
            transition={{ delay: 0.4 }}
          >
            💻 Desarrollo Fullstack • Automatización • Soluciones Web
          </motion.p>
          <motion.div
            className="cta-buttons-modern"
            initial="hidden"
            animate="visible"
            variants={{fadeInUp}}
            transition={{ delay: 0.6 }}
          >
            <a
              className="primary-btn-modern"
              href="https://wa.me/543454126943?text=Hola%20Lucas!%20Quiero%20saber%20más%20sobre%20tus%20servicios"
              target="_blank"
              rel="noreferrer"
            >Hablemos por WhatsApp</a>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section-modern services-modern">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{fadeInUp}}
            transition={{ delay: 0.2 }}
          >
            <h2>Experiencia & Servicios</h2>
          </motion.div>
          <motion.div
            className="services-grid-modern"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{fadeInUp}}
            transition={{ delay: 0.4 }}
          >
            {/* Agrega aquí tus servicios */}
            <div className="service-card-modern">
              <h3>Desarrollo Web</h3>
              <p>Aplicaciones modernas, rápidas y seguras.</p>
            </div>
            <div className="service-card-modern">
              <h3>Automatización</h3>
              <p>Optimización de procesos y tareas repetitivas.</p>
            </div>
            <div className="service-card-modern">
              <h3>Consultoría</h3>
              <p>Asesoramiento en tecnología y desarrollo.</p>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section-modern projects-modern">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{fadeInUp}}
            transition={{ delay: 0.2 }}
          >
            <h2>Proyectos Destacados</h2>
          </motion.div>
          <motion.div
            className="projects-grid-modern"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{fadeInUp}}
            transition={{ delay: 0.4 }}
          >
            <div className="project-card-modern">
              <h3>Comparador de precios</h3>
              <p>Servicio con +15 mercados argentinos, ayudando al ahorro del usuario.</p>
              <a href="https://github.com/lucasmieres2001/mejoresprecios" target="_blank" rel="noreferrer">Ver proyecto</a>
            </div>
            <div className="project-card-modern">
              <h3>Gestor de tareas</h3>
              <p>Organiza tus tareas y proyectos de manera eficiente.</p>
              <a href="https://github.com/lucasmieres2001/Ukeek---Junia" target="_blank" rel="noreferrer">Ver proyecto</a>
            </div>
            {/* Agrega más proyectos aquí */}
          </motion.div>
        </section>

        {/* SKILLS */}
        <section className="section-modern skills-modern">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{fadeInUp}} custom={0.2}>
            <h2>Habilidades Técnicas</h2>
          </motion.div>
          <motion.div className="skills-grid-modern" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{fadeInUp}} custom={0.4}>
            {["React", "TypeScript", "Ionic", "Java / Spring", "Node.js", "MySQL", "MongoDB", "Git", "Postman"].map((skill, idx) => (
              <span key={skill} className="skill-badge-modern" style={{ transitionDelay: `${idx * 100}ms` }}>
                {skill}
              </span>
            ))}
          </motion.div>
        </section>

        {/* CONTACTO */}
        <section id="contact" className="section-modern contact-modern">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{fadeInUp}} custom={0.2}>
            <h2>Contacto</h2>
          </motion.div>
          <motion.div className="contact-list-modern" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{fadeInUp}} custom={0.4}>
            <IonList lines="none">
              <IonItem>
                <IonIcon icon={mail} slot="start" />
                <IonLabel>lucassmieres2001@gmail.com</IonLabel>
              </IonItem>
              <IonItem button href="https://wa.me/543454126943?text=Hola%20Lucas!%20Quiero%20contratar%20tus%20servicios" target="_blank" rel="noreferrer">
                <IonIcon icon={call} slot="start" />
                <IonLabel>+54 3454 126943 (WhatsApp)</IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon icon={location} slot="start" />
                <IonLabel>Entre Ríos, Argentina</IonLabel>
              </IonItem>
              <IonItem href="https://github.com/lucasmieres2001" target="_blank" rel="noreferrer">
                <IonIcon icon={logoGithub} slot="start" />
                <IonLabel>GitHub</IonLabel>
              </IonItem>
              <IonItem href="https://www.linkedin.com/in/lucas-mieres-86198528b" target="_blank" rel="noreferrer">
                <IonIcon icon={logoLinkedin} slot="start" />
                <IonLabel>LinkedIn</IonLabel>
              </IonItem>
            </IonList>
          </motion.div>
        </section>

      </IonContent>
    </IonPage>
  );
};

export default Home;
