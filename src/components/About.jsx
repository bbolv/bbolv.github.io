import React from 'react';
import meImg from '../assets/me.jpg';

const About = () => {
  return (
    <section id="sobre-mi" className="section container">
      <h2 className="section-title">Sobre Mí</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        <div className="glass-panel">
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', marginBottom: '1.2rem', lineHeight: 1.8 }}>
            Soy <strong>Ingeniero de Software</strong> con 3+ años de experiencia construyendo aplicaciones móviles, backend y servicios fullstack altamente escalables. Mi enfoque abarca desde el diseño arquitectónico de sistemas distribuidos hasta su despliegue final en producción.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', marginBottom: '1.2rem', lineHeight: 1.8 }}>
            Actualmente dirijo y coordino esfuerzos interfuncionales como <strong>Tech Lead</strong>, asegurando la calidad del código, automatizando despliegues (CI/CD) y liderando iniciativas técnicas para aplicaciones en iOS, Android y el ecosistema Web.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
            Tengo formación académica formal como <strong>Físico Teórico</strong> <em>(M.Sc. con Honores por la UNAM y B.Sc. por la UAEMor)</em>. Durante mi estancia en la academia me enfoqué en la Relatividad General, particularmente en física y astrofísica de agujeros negros.</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
            Disfruto mucho la literatura y el cine de ciencia ficción, particularmente la ópera espacial 🚀. Me hace feliz la música de los 80s, rock clásico y el jazz. Uno de mis pasatiempos favoritos es tocar la guitarra 🎸 y pasar tiempo con mis gatos 🐈.</p>
          <p style={{ color: 'var(--text-primary)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', fontWeight: 500, marginBottom: '1.5rem', marginTop: '2.5rem' }}>
            Tecnologías con las que he trabajado recientemente:
          </p>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            {['TypeScript', 'Python', 'NestJS', 'Flutter', 'Redis', 'MongoDB', 'AWS'].map((tech, i) => (
              <span key={i} style={{ color: 'var(--text-primary)', background: 'rgba(255, 255, 255, 0.8)', border: '1px solid var(--border-color)', padding: '0.4rem 1.2rem', borderRadius: '99px', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', fontWeight: 500 }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Contenedor de Imagen de Perfil */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '350px', margin: '0 auto', marginTop: '2rem' }}>
          <div className="glass-card" style={{ width: '100%', padding: 0, aspectRatio: '1/1', borderRadius: '9999px', overflow: 'hidden', position: 'relative', zIndex: 10 }}>
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(244,244,245,1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={meImg} alt="Brandon Bautista" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          {/* <div style={{ position: 'absolute', top: '20px', left: '20px', right: '-20px', bottom: '-20px', border: '2px solid var(--accent-glow)', borderRadius: '16px', zIndex: 1, opacity: 0.5 }}></div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
