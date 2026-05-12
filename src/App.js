import React, { useState, useEffect } from 'react';
import './App.css';

const NAV_LINKS = ['Inicio', 'Servicios', 'Nosotros', 'Contacto'];

const FEATURES = [
  {
    icon: '⚡',
    title: 'Alta Velocidad',
    desc: 'Infraestructura global de AWS con tiempos de carga ultrarrápidos en cualquier región del mundo.',
  },
  {
    icon: '🔒',
    title: 'Seguridad Total',
    desc: 'Autenticación con Cognito, HTTPS automático y protección contra vulnerabilidades en cada capa.',
  },
  {
    icon: '📈',
    title: 'Escalabilidad',
    desc: 'Crece sin límites. Desde cero hasta millones de usuarios sin cambiar una línea de configuración.',
  },
  {
    icon: '🚀',
    title: 'CI/CD Integrado',
    desc: 'Deploy automático en cada push a tu repositorio. Producción lista en segundos.',
  },
];

const STATS = [
  { value: '99.9%', label: 'Uptime garantizado' },
  { value: '<50ms', label: 'Latencia global' },
  { value: '200+', label: 'Regiones AWS' },
  { value: '24/7', label: 'Soporte activo' },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection(s => (s + 1) % FEATURES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      {/* ── NAV ── */}
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <span className="nav__logo">
            <span className="nav__logo-mark">▲</span> Amplify<span className="nav__logo-accent">App</span>
          </span>
          <ul className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
            {NAV_LINKS.map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{l}</a></li>
            ))}
            <li><button className="btn btn--sm">Comenzar</button></li>
          </ul>
          <button className="nav__burger" onClick={() => setMenuOpen(o => !o)} aria-label="Menú">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="inicio">
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__grid" />
        </div>
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" /> Desplegado en AWS Amplify
          </div>
          <h1 className="hero__title">
            Tu plataforma<br />
            <em>sin límites</em>
          </h1>
          <p className="hero__sub">
            Construye, despliega y escala aplicaciones modernas con la potencia de la nube de Amazon. Rápido, seguro y sin fricción.
          </p>
          <div className="hero__ctas">
            <button className="btn btn--primary">Empieza gratis →</button>
            <button className="btn btn--ghost">Ver demo</button>
          </div>
          <div className="hero__stats">
            {STATS.map(s => (
              <div className="hero__stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__visual">
          <div className="terminal">
            <div className="terminal__bar">
              <span /><span /><span />
              <p>amplify.console.aws</p>
            </div>
            <div className="terminal__body">
              <p><span className="c-green">✔</span> Build completado <span className="c-muted">en 18s</span></p>
              <p><span className="c-green">✔</span> Assets desplegados <span className="c-muted">en S3</span></p>
              <p><span className="c-green">✔</span> CDN invalidado <span className="c-muted">CloudFront</span></p>
              <p><span className="c-yellow">▶</span> Verificando dominio<span className="blink">_</span></p>
              <p className="terminal__url">https://main.d1abc.amplifyapp.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features" id="servicios">
        <div className="section-header">
          <span className="section-tag">Capacidades</span>
          <h2>Todo lo que necesitas,<br />ya incluido</h2>
        </div>
        <div className="features__grid">
          {FEATURES.map((f, i) => (
            <div
              className={`feature-card${activeSection === i ? ' feature-card--active' : ''}`}
              key={f.title}
            >
              <div className="feature-card__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about" id="nosotros">
        <div className="about__inner">
          <div className="about__text">
            <span className="section-tag">Nosotros</span>
            <h2>Construido para<br />equipos modernos</h2>
            <p>
              Nuestra plataforma se integra directamente con GitHub, GitLab y Bitbucket. Cada commit dispara un pipeline automático que prueba, construye y despliega tu app.
            </p>
            <ul className="about__list">
              <li>✓ Ramas de preview para cada PR</li>
              <li>✓ Variables de entorno por stage</li>
              <li>✓ Rollback con un clic</li>
              <li>✓ Monitoreo en tiempo real</li>
            </ul>
          </div>
          <div className="about__card-stack">
            <div className="stack-card stack-card--back" />
            <div className="stack-card stack-card--mid" />
            <div className="stack-card stack-card--front">
              <div className="stack-card__badge">LIVE</div>
              <div className="stack-card__row"><span>Branch</span><strong>main</strong></div>
              <div className="stack-card__row"><span>Estado</span><strong className="c-green">● Activo</strong></div>
              <div className="stack-card__row"><span>Último deploy</span><strong>hace 2 min</strong></div>
              <div className="stack-card__row"><span>Dominio</span><strong>app.tudominio.com</strong></div>
              <div className="stack-card__bar"><div className="stack-card__bar-fill" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="contacto">
        <div className="cta-section__inner">
          <h2>¿Listo para escalar?</h2>
          <p>Conecta tu repositorio y despliega en menos de 5 minutos.</p>
          <div className="cta-section__form">
            <input type="email" placeholder="tu@email.com" />
            <button className="btn btn--primary">Comenzar ahora</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer__inner">
          <span className="nav__logo"><span className="nav__logo-mark">▲</span> Amplify<span className="nav__logo-accent">App</span></span>
          <p className="footer__copy">© 2026 — Desplegado con AWS Amplify · Todos los derechos reservados</p>
          <div className="footer__links">
            <a href="#inicio">Privacidad</a>
            <a href="#inicio">Términos</a>
            <a href="#inicio">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
