import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Mail, Phone, Download, ArrowRight, ExternalLink, MapPin, Calendar,
  Palette, Video, Layers, Monitor, Sparkles, ChevronDown
} from 'lucide-react';

const Linkedin = ({ size = 18, className = '', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ size = 18, className = '', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Github = ({ size = 18, className = '', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Youtube = ({ size = 18, className = '', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   DATA — Alimou Diallo — Broktor.Design
   ============================================================ */
const DATA = {
  name: 'Alimou Diallo',
  title: 'Designer Graphique & Créateur Digital',
  brand: 'Broktor.Design',
  tagline: 'Stratège et Bâtisseur',
  location: 'Dakar, Sénégal',
  yearsExp: '3',
  projectsCount: '15+',
  about: `Stratège et bâtisseur, j'accompagne les entreprises dans leur transformation digitale. Expert en développement produit et création d'identités visuelles, je transforme les challenges en opportunités. Sous ma marque Broktor.Design, je fusionne design graphique, motion design et direction artistique pour produire des expériences visuelles qui marquent les esprits — des logos qui respirent l'âme d'une marque aux contenus vidéo qui captivent les audiences.`,
  experiences: [
    {
      period: '2024 — Présent',
      title: 'Stagiaire — Montage Vidéo & Infographie',
      company: 'RTS · Radiodiffusion Télévision Sénégalaise',
      description: 'Contribution à la production de contenus audiovisuels pour l\'une des plus grandes chaînes nationales. Montage de reportages, habillage graphique, et création de contenus visuels pour diffusion télé.',
      side: 'left',
    },
    {
      period: '2023 — 2024',
      title: 'Créatif & Designer',
      company: 'ADCOM Digital',
      description: 'Développement de propositions créatives pour des campagnes à fort impact : Saint-Valentin, Ramadan. Direction artistique sur plusieurs comptes clients, conception de supports print & digital.',
      side: 'right',
    },
    {
      period: '2022 — Présent',
      title: 'Fondateur & Designer Indépendant',
      company: 'Broktor.Design',
      description: 'Création de 7 identités visuelles complètes (logos, chartes graphiques), conception de personas de marque B2B2C SaaS, et production de contenus visuels percutants pour des clients variés.',
      side: 'left',
    },
  ],
  skills: [
    { name: 'Design Graphique', level: 95, icon: Palette, category: 'Branding & Identité' },
    { name: 'Montage Vidéo', level: 90, icon: Video, category: 'Audiovisuel Broadcast' },
    { name: 'Motion Design', level: 88, icon: Sparkles, category: 'Animation 2D/3D' },
    { name: 'UI/UX & Figma', level: 85, icon: Layers, category: 'Produit & SaaS' },
    { name: '3D Blender', level: 78, icon: Monitor, category: 'Visualisation 3D' },
  ],
  toolsDetailed: [
    {
      name: 'Adobe Illustrator & Photoshop',
      category: 'Identité Visuelle & Graphisme',
      level: 95,
      icon: Palette,
      badge: 'Expert',
      role: 'Logotypes, Chartes Graphiques, Retouche & Direction Artistique',
      usage: 'Conception de 7 logos clients sur-mesure sous la marque Broktor.Design dans des délais serrés. Élaboration de chartes graphiques complètes et création de concepts créatifs pour les campagnes Saint-Valentin et Ramadan chez ADCOM DIGITAL.',
      deliverables: ['7 Logos Clients', 'Chartes Graphiques', 'Campagnes ADCOM (Ramadan / St-Valentin)'],
    },
    {
      name: 'Adobe After Effects',
      category: 'Motion Design & Habillage',
      level: 88,
      icon: Sparkles,
      badge: 'Avancé',
      role: 'Animation 2D, Habillage Télévisuel, Synthés & Transitions',
      usage: 'Production d\'habillages graphiques télévisuels pour la RTS (Radiodiffusion Télévision Sénégalaise). Animation de logos, titrages dynamiques et conception de transitions visuelles captivantes.',
      deliverables: ['Habillages Graphiques Télé (RTS)', 'Animations de Logos', 'Vidéos Promotionnelles'],
    },
    {
      name: 'Premiere Pro & DaVinci Resolve',
      category: 'Montage Vidéo & Étalonnage',
      level: 90,
      icon: Video,
      badge: 'Expert',
      role: 'Montage Broadcast, Colorimétrie, Mastering & Mixage Audio',
      usage: 'Montage de reportages et d\'émissions pour diffusion nationale à la RTS. Découpage narratif fluide, correction colorimétrique avancée sur DaVinci Resolve et optimisation aux normes broadcast.',
      deliverables: ['Reportages RTS', 'Étalonnage DaVinci', 'Mastering Audiovisuel'],
    },
    {
      name: 'Figma & FigJam',
      category: 'UI/UX & Design Système',
      level: 85,
      icon: Layers,
      badge: 'Avancé',
      role: 'Design d\'Interfaces, Prototypage & Personas SaaS',
      usage: 'Conception intégrale de l\'identité de marque et des interfaces de SmartTali (gestion intelligente du trafic). Création de personas utilisateurs pour contexte SaaS B2B2C, wireframes et prototypes interactifs.',
      deliverables: ['Identité & UI SmartTali', 'Personas B2B2C SaaS', 'Prototypes Interactifs'],
    },
    {
      name: 'Blender 3D',
      category: 'Création 3D & Mockups',
      level: 78,
      icon: Monitor,
      badge: 'Intermédiaire+',
      role: 'Modélisation 3D, Éclairage, Texturing & Rendus Produits',
      usage: 'Création de mockups 3D pour la mise en valeur des identités graphiques et packagings de marques. Rendu volumétrique pour des visuels immersifs et présentations d\'impact.',
      deliverables: ['Mockups 3D Haute Définition', 'Visualisations Packagings', 'Assets Graphiques 3D'],
    },
  ],
  tools: ['Adobe Illustrator', 'Photoshop', 'After Effects', 'Premiere Pro', 'DaVinci Resolve', 'Figma', 'Blender', 'Lightroom'],
  education: [
    {
      year: '2024',
      degree: 'Licence Professionnelle — Multimédia & Communication',
      school: 'ESTM · Dakar',
      note: 'Président du Club Multimédia',
    },
  ],
  projects: [
    { name: 'SmartTali', desc: 'Identité de marque complète et interface pour un système de gestion intelligente du trafic — projet de fin d\'études.' },
    { name: 'Broktor.Design', desc: 'Marque personnelle — 7 logos clients, chartes graphiques, motion design et production vidéo.' },
  ],
  contact: {
    email: 'alimou.diallo@broktor.design',
    phone: '+221 7X XXX XX XX',
    linkedin: 'https://linkedin.com/in/alimoudiallo',
    instagram: 'https://instagram.com/broktor.design',
  },
};

/* ============================================================
   A. NAVBAR — Floating Pill
   ============================================================ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'À propos', href: '#about' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out rounded-full px-6 py-3 flex items-center gap-8 ${scrolled
          ? 'glass glow-border shadow-2xl'
          : 'bg-transparent'
        }`}
      style={{ maxWidth: '680px', width: 'calc(100% - 48px)' }}
    >
      {/* Initials */}
      <a href="#hero" className="font-mono-code text-accent text-sm font-medium flex-shrink-0 hover:text-accent-light transition-colors">
        AD.
      </a>

      {/* Links */}
      <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-muted hover:text-ghost transition-all duration-200 hover:-translate-y-0.5 font-sans"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="/cv-alimou-diallo.pdf"
        download
        className="btn-primary text-xs py-2 px-4 flex-shrink-0"
        id="nav-download-cv"
      >
        <Download size={13} />
        CV
      </a>
    </nav>
  );
}

/* ============================================================
   B. HERO — La Première Impression
   ============================================================ */
function Hero() {
  const heroRef = useRef(null);
  const photoRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const ctasRef = useRef(null);
  const scrollHintRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl
        .from(photoRef.current, { opacity: 0, scale: 0.7, duration: 0.9, delay: 0.3 })
        .from(nameRef.current, { opacity: 0, y: 60, duration: 0.8 }, '-=0.4')
        .from(titleRef.current, { opacity: 0, y: 40, duration: 0.7 }, '-=0.5')
        .from(statsRef.current.children, { opacity: 0, y: 20, stagger: 0.1, duration: 0.6 }, '-=0.4')
        .from(ctasRef.current.children, { opacity: 0, y: 20, stagger: 0.12, duration: 0.5 }, '-=0.3')
        .from(scrollHintRef.current, { opacity: 0, y: 10, duration: 0.4 }, '-=0.2');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(123,97,255,0.18) 0%, #0A0A14 60%)',
      }}
    >
      {/* Background decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(123,97,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(123,97,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orb */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(123,97,255,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        {/* Avatar */}
        <div
          ref={photoRef}
          className="relative mb-8 float-anim"
        >
          <div
            className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden p-1 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(123,97,255,0.4) 0%, rgba(24,24,27,0.8) 100%)',
              border: '2px solid rgba(123,97,255,0.6)',
              boxShadow: '0 0 40px rgba(123,97,255,0.4), 0 0 80px rgba(123,97,255,0.15)',
            }}
          >
            <img
              src="/img001.png"
              alt="Alimou Diallo"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div
              className="w-full h-full rounded-full hidden items-center justify-center text-3xl md:text-4xl font-bold font-mono-code text-accent"
              style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
            >
              AD
            </div>
          </div>
          {/* Online indicator */}
          <span
            className="absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-void"
            style={{ background: '#22C55E' }}
          />
        </div>

        {/* Brand label */}
        <div className="font-mono-code text-accent text-xs tracking-widest uppercase mb-4 opacity-70">
          Broktor.Design
        </div>

        {/* Name */}
        <h1
          ref={nameRef}
          className="font-display-sans text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-ghost mb-4 glow-text"
        >
          Alimou
          <br />
          <span style={{ color: '#7B61FF' }}>Diallo</span>
        </h1>

        {/* Title */}
        <p
          ref={titleRef}
          className="font-display-serif text-xl sm:text-2xl md:text-3xl text-muted mb-8"
        >
          Designer Graphique & Créateur Digital
        </p>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex items-center gap-4 md:gap-8 mb-10 flex-wrap justify-center"
        >
          {[
            [`${DATA.yearsExp} ans exp.`],
            [`${DATA.projectsCount} projets`],
            [DATA.location],
          ].map(([stat], i) => (
            <React.Fragment key={stat}>
              <span className="font-mono-code text-xs md:text-sm text-muted">{stat}</span>
              {i < 2 && <span className="text-accent opacity-50 font-mono-code">|</span>}
            </React.Fragment>
          ))}
        </div>

        {/* CTAs */}
        <div ref={ctasRef} className="flex flex-wrap gap-4 justify-center">
          <a
            href="/cv-alimou-diallo.pdf"
            download
            className="btn-primary"
            id="hero-download-cv"
          >
            <Download size={16} />
            Télécharger mon CV
          </a>
          <a href="#contact" className="btn-outline" id="hero-contact-btn">
            <Mail size={16} />
            Me contacter
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="font-mono-code text-xs tracking-widest text-muted">SCROLL</span>
        <ChevronDown size={16} className="text-accent animate-bounce" />
      </div>
    </section>
  );
}

/* ============================================================
   C. À PROPOS — Le Manifeste Personnel
   ============================================================ */
function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-title', {
        opacity: 0,
        x: -50,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
      gsap.from('.about-text', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      });
      gsap.from('.about-tag', {
        opacity: 0,
        scale: 0.8,
        stagger: 0.08,
        duration: 0.5,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding" style={{ background: 'linear-gradient(180deg, #0A0A14 0%, #0f0f1a 100%)' }}>
      <div className="section-container">
        {/* Header */}
        <div className="flex items-start gap-6 mb-16">
          <div className="about-title">
            <p className="font-mono-code text-accent text-xs tracking-widest uppercase mb-3 opacity-60">01 — À PROPOS</p>
            <h2 className="font-display-serif text-4xl md:text-6xl text-ghost">
              Le Manifeste
            </h2>
          </div>
          <div
            className="hidden md:block flex-1 h-px mt-16"
            style={{ background: 'linear-gradient(90deg, rgba(123,97,255,0.4), transparent)' }}
          />
        </div>

        {/* Content — two columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left — Vertical accent line + label */}
          <div className="md:col-span-1 hidden md:flex justify-center">
            <div
              className="w-px"
              style={{ background: 'linear-gradient(to bottom, rgba(123,97,255,0.6), transparent)', minHeight: '200px' }}
            />
          </div>

          {/* Right — Text */}
          <div className="md:col-span-11 about-text">
            <p
              className="text-lg md:text-xl leading-relaxed mb-10"
              style={{ color: '#b5b3c0', lineHeight: '1.85' }}
            >
              {DATA.about}
            </p>

            {/* Tool tags */}
            <div className="flex flex-wrap gap-3">
              {DATA.tools.map((tool) => (
                <span
                  key={tool}
                  className="about-tag font-mono-code text-xs px-4 py-2 rounded-full"
                  style={{
                    background: 'rgba(123,97,255,0.08)',
                    border: '1px solid rgba(123,97,255,0.2)',
                    color: '#9D86FF',
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { label: 'Identités Visuelles', value: '7+', sub: 'Logos & chartes graphiques' },
            { label: 'Campagnes Digitales', value: '10+', sub: 'Print, Social, Vidéo' },
            { label: 'Années d\'Activité', value: '3+', sub: 'Design & création de contenu' },
          ].map((card, i) => (
            <div
              key={i}
              className="rounded-4xl p-8 glow-card hover:scale-[1.02] transition-all duration-300"
              style={{
                background: 'rgba(24,24,27,0.6)',
                border: '1px solid rgba(123,97,255,0.12)',
              }}
            >
              <p className="font-display-sans text-4xl text-accent mb-2">{card.value}</p>
              <p className="font-sans text-ghost font-semibold text-sm mb-1">{card.label}</p>
              <p className="font-mono-code text-muted text-xs">{card.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   D. EXPERIENCE — La Timeline Vivante
   ============================================================ */
function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.exp-title-block', {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });

      document.querySelectorAll('.exp-card-left').forEach((el) => {
        gsap.from(el, {
          opacity: 0, x: -80, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%' },
        });
      });
      document.querySelectorAll('.exp-card-right').forEach((el) => {
        gsap.from(el, {
          opacity: 0, x: 80, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%' },
        });
      });
      document.querySelectorAll('.timeline-dot').forEach((dot) => {
        ScrollTrigger.create({
          trigger: dot,
          start: 'top 75%',
          onEnter: () => gsap.from(dot, { scale: 0, duration: 0.4, ease: 'back.out(2)' }),
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-padding" style={{ background: '#0A0A14' }}>
      <div className="section-container">
        {/* Header */}
        <div className="exp-title-block mb-20">
          <p className="font-mono-code text-accent text-xs tracking-widest uppercase mb-3 opacity-60">02 — EXPÉRIENCE</p>
          <h2 className="font-display-serif text-4xl md:text-6xl text-ghost">
            La Timeline Vivante
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line — desktop */}
          <div className="hidden md:block timeline-line" />

          <div className="space-y-12 md:space-y-0">
            {DATA.experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex items-start md:mb-16 ${exp.side === 'right'
                    ? 'md:flex-row-reverse md:text-right'
                    : 'md:flex-row'
                  }`}
              >
                {/* Card */}
                <div
                  className={`w-full md:w-5/12 ${exp.side === 'right'
                      ? 'exp-card-right md:ml-auto'
                      : 'exp-card-left md:mr-auto'
                    }`}
                >
                  <div
                    className="rounded-4xl p-8 glow-card hover:scale-[1.01] hover:shadow-2xl transition-all duration-300 cursor-default"
                    style={{
                      background: 'rgba(24,24,27,0.7)',
                      border: '1px solid rgba(123,97,255,0.12)',
                    }}
                  >
                    <p className="font-mono-code text-accent text-xs tracking-wider mb-3 flex items-center gap-2" style={{ justifyContent: exp.side === 'right' ? 'flex-end' : 'flex-start' }}>
                      <Calendar size={11} />
                      {exp.period}
                    </p>
                    <h3 className="font-sans font-bold text-ghost text-lg mb-1 leading-tight">
                      {exp.title}
                    </h3>
                    <p className="font-sans text-sm mb-4" style={{ color: '#9D86FF' }}>
                      {exp.company}
                    </p>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: '#71717A' }}>
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot — desktop */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 items-center justify-center">
                  <div
                    className="timeline-dot w-4 h-4 rounded-full"
                    style={{
                      background: '#7B61FF',
                      boxShadow: '0 0 0 4px rgba(123,97,255,0.2), 0 0 20px rgba(123,97,255,0.5)',
                    }}
                  />
                </div>

                {/* Mobile: left border indicator */}
                <div
                  className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
                  style={{ background: 'linear-gradient(to bottom, #7B61FF, transparent)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   E. COMPÉTENCES — Le Tableau de Bord Exhaustif
   ============================================================ */
function Skills() {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const circumference = 2 * Math.PI * 52;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding relative"
      style={{ background: 'linear-gradient(180deg, #0A0A14 0%, #0d0d1a 50%, #0A0A14 100%)' }}
    >
      <div className="section-container">
        {/* Header */}
        <div className="skills-header mb-16">
          <p className="font-mono-code text-accent text-xs tracking-widest uppercase mb-3 opacity-60">03 — COMPÉTENCES & OUTILS</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display-serif text-4xl md:text-6xl text-ghost mb-4">
                Le Tableau de Bord
              </h2>
              <p className="font-sans text-muted text-base max-w-xl">
                Expertise technique approfondie et application directe sur des projets broadcast, branding et produits digitaux.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono-code text-xs px-4 py-2 rounded-full border border-accent/30 text-accent-light bg-accent/10">
                5 Pôles d'Expertise
              </span>
              <span className="font-mono-code text-xs px-4 py-2 rounded-full border border-white/10 text-muted bg-graphite">
                8+ Logiciels Pro
              </span>
            </div>
          </div>
        </div>

        {/* 1. Top Skills Dials (Pôles Clés) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
          {DATA.skills.map((skill, i) => {
            const Icon = skill.icon;
            const dashOffset = circumference - (circumference * skill.level) / 100;
            return (
              <div
                key={i}
                className="rounded-4xl p-6 flex flex-col items-center gap-3 hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 cursor-default"
                style={{
                  background: 'rgba(24,24,27,0.7)',
                  border: '1px solid rgba(123,97,255,0.18)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }}
              >
                {/* Dial SVG */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
                  <svg className="absolute inset-0 skill-circle" width="100%" height="100%" viewBox="0 0 120 120">
                    <circle
                      cx="60" cy="60" r="52"
                      fill="none"
                      stroke="rgba(123,97,255,0.12)"
                      strokeWidth="5"
                    />
                    <circle
                      cx="60" cy="60" r="52"
                      fill="none"
                      stroke="#7B61FF"
                      strokeWidth="5"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: dashOffset,
                        filter: 'drop-shadow(0 0 8px rgba(123,97,255,0.8))',
                        transition: 'stroke-dashoffset 1.5s ease-out',
                      }}
                    />
                  </svg>
                  <div className="flex flex-col items-center gap-0.5 z-10">
                    <Icon size={18} style={{ color: '#7B61FF' }} />
                    <span className="font-mono-code font-bold text-sm text-ghost">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="font-sans text-xs font-bold text-ghost leading-tight mb-1">
                    {skill.name}
                  </p>
                  <p className="font-mono-code text-[10px] text-accent-light opacity-80">
                    {skill.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Detailed Software Application Cards */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <h3 className="font-mono-code text-sm uppercase tracking-widest text-ghost">
              Maîtrise des Logiciels & Cas d'Usage Réels
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {DATA.toolsDetailed.map((tool, i) => {
              const Icon = tool.icon;
              return (
                <div
                  key={i}
                  className="rounded-4xl p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-2xl flex flex-col justify-between group"
                  style={{
                    background: 'rgba(24,24,27,0.75)',
                    border: '1px solid rgba(123,97,255,0.15)',
                  }}
                >
                  {/* Top: Icon + Name + Badge */}
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                          style={{ background: 'rgba(123,97,255,0.15)', border: '1px solid rgba(123,97,255,0.3)' }}
                        >
                          <Icon size={22} style={{ color: '#7B61FF' }} />
                        </div>
                        <div>
                          <h4 className="font-sans font-bold text-ghost text-lg group-hover:text-accent-light transition-colors">
                            {tool.name}
                          </h4>
                          <p className="font-mono-code text-xs text-muted">
                            {tool.category}
                          </p>
                        </div>
                      </div>
                      <span
                        className="font-mono-code text-xs px-3 py-1 rounded-full flex-shrink-0"
                        style={{
                          background: tool.badge === 'Expert' ? 'rgba(123,97,255,0.2)' : 'rgba(255,255,255,0.06)',
                          color: tool.badge === 'Expert' ? '#9D86FF' : '#F0EFF4',
                          border: '1px solid rgba(123,97,255,0.3)',
                        }}
                      >
                        {tool.badge} · {tool.level}%
                      </span>
                    </div>

                    {/* Progress line */}
                    <div className="w-full bg-graphite-light h-1.5 rounded-full overflow-hidden mb-6">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${tool.level}%`,
                          background: 'linear-gradient(90deg, #7B61FF 0%, #9D86FF 100%)',
                          boxShadow: '0 0 10px rgba(123,97,255,0.8)',
                        }}
                      />
                    </div>

                    {/* Role */}
                    <p className="font-sans text-xs font-semibold text-ghost/90 mb-3 flex items-center gap-2">
                      <span className="text-accent">▸</span> {tool.role}
                    </p>

                    {/* Project Usage */}
                    <div
                      className="rounded-2xl p-4 mb-6"
                      style={{
                        background: 'rgba(10,10,20,0.6)',
                        border: '1px solid rgba(123,97,255,0.1)',
                      }}
                    >
                      <p className="font-mono-code text-[11px] text-accent uppercase tracking-wider mb-1.5 opacity-90">
                        Application Concrète sur Projets :
                      </p>
                      <p className="font-sans text-sm leading-relaxed text-muted">
                        {tool.usage}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables tags */}
                  <div>
                    <p className="font-mono-code text-[10px] text-muted uppercase tracking-wider mb-2">
                      Livrables Clés :
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tool.deliverables.map((d, dIdx) => (
                        <span
                          key={dIdx}
                          className="font-mono-code text-xs px-3 py-1 rounded-full text-ghost/90"
                          style={{
                            background: 'rgba(123,97,255,0.08)',
                            border: '1px solid rgba(123,97,255,0.2)',
                          }}
                        >
                          ✓ {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Quick Tools Stack */}
        <div
          className="rounded-4xl p-8"
          style={{
            background: 'rgba(24,24,27,0.5)',
            border: '1px solid rgba(123,97,255,0.12)',
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <p className="font-mono-code text-xs text-accent uppercase tracking-widest mb-1">
                Boîte à Outils Complète
              </p>
              <h4 className="font-sans font-bold text-ghost text-lg">
                Écosystème Logiciel & Matériel
              </h4>
            </div>
            <span className="font-mono-code text-xs text-muted">
              Broktor.Design Stack
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {DATA.tools.map((tool) => (
              <span
                key={tool}
                className="font-mono-code text-xs px-4 py-2.5 rounded-full hover:border-accent hover:text-accent-light hover:scale-105 transition-all duration-200 cursor-default flex items-center gap-2"
                style={{
                  background: 'rgba(123,97,255,0.08)',
                  border: '1px solid rgba(123,97,255,0.2)',
                  color: '#9D86FF',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   F. FORMATION — Les Fondations
   ============================================================ */
function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.edu-card', {
        opacity: 0, y: 50, stagger: 0.15, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding"
      style={{ background: 'linear-gradient(180deg, #0d0d1a 0%, #0A0A14 100%)' }}
    >
      <div className="section-container">
        <div className="mb-12">
          <p className="font-mono-code text-accent text-xs tracking-widest uppercase mb-3 opacity-60">04 — FORMATION</p>
          <h2 className="font-display-serif text-4xl md:text-5xl text-ghost">
            Les Fondations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DATA.education.map((edu, i) => (
            <div
              key={i}
              className="edu-card rounded-4xl p-8"
              style={{
                background: 'rgba(24,24,27,0.6)',
                border: '1px solid rgba(123,97,255,0.12)',
              }}
            >
              <p className="font-mono-code text-accent text-xs tracking-wider mb-4">{edu.year}</p>
              <h3 className="font-sans font-bold text-ghost text-lg mb-2 leading-tight">{edu.degree}</h3>
              <p className="font-sans text-sm mb-3" style={{ color: '#9D86FF' }}>{edu.school}</p>
              {edu.note && (
                <span
                  className="font-mono-code text-xs px-3 py-1 rounded-full"
                  style={{ background: 'rgba(123,97,255,0.12)', color: '#7B61FF' }}
                >
                  {edu.note}
                </span>
              )}
            </div>
          ))}

          {/* Projects card */}
          <div
            className="edu-card rounded-4xl p-8"
            style={{
              background: 'rgba(24,24,27,0.6)',
              border: '1px solid rgba(123,97,255,0.12)',
            }}
          >
            <p className="font-mono-code text-accent text-xs tracking-wider mb-4">PROJETS NOTABLES</p>
            {DATA.projects.map((proj, i) => (
              <div key={i} className={i > 0 ? 'mt-4 pt-4 border-t border-graphite-light' : ''}>
                <h3 className="font-sans font-bold text-ghost text-base mb-1">{proj.name}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: '#71717A' }}>{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   G. CONTACT — Le Pont
   ============================================================ */
function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-title', {
        opacity: 0, y: 50, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
      gsap.from('.contact-link', {
        opacity: 0, x: -30, stagger: 0.1, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      });
      gsap.from('.contact-cta', {
        opacity: 0, y: 20, duration: 0.6, delay: 0.3, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const links = [
    { icon: Mail, label: 'Email', value: DATA.contact.email, href: `mailto:${DATA.contact.email}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'alimoudiallo', href: DATA.contact.linkedin },
    { icon: Instagram, label: 'Instagram', value: '@broktor.design', href: DATA.contact.instagram },
    { icon: MapPin, label: 'Localisation', value: DATA.location, href: null },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding"
      style={{
        background: 'linear-gradient(135deg, #0A0A14 0%, #0f0820 50%, #0A0A14 100%)',
        borderTop: '1px solid rgba(123,97,255,0.12)',
      }}
    >
      <div className="section-container">
        {/* Header */}
        <div className="contact-title text-center mb-16">
          <p className="font-mono-code text-accent text-xs tracking-widest uppercase mb-4 opacity-60">05 — CONTACT</p>
          <h2
            className="font-display-serif text-5xl md:text-7xl lg:text-8xl mb-6"
            style={{ color: '#F0EFF4' }}
          >
            Travaillons
            <br />
            <span style={{ color: '#7B61FF' }} className="glow-text">Ensemble</span>
          </h2>
          <p className="font-sans text-muted text-lg max-w-lg mx-auto leading-relaxed">
            Disponible pour des projets freelance, des collaborations créatives et des opportunités professionnelles.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {links.map((link, i) => {
            const Icon = link.icon;
            const inner = (
              <div
                className="contact-link flex items-center gap-4 rounded-3xl p-6 hover:border-accent hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
                style={{
                  background: 'rgba(24,24,27,0.6)',
                  border: '1px solid rgba(123,97,255,0.12)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(123,97,255,0.12)' }}
                >
                  <Icon size={18} style={{ color: '#7B61FF' }} />
                </div>
                <div>
                  <p className="font-mono-code text-xs text-muted uppercase tracking-wider">{link.label}</p>
                  <p className="font-sans text-ghost text-sm font-medium group-hover:text-accent transition-colors">
                    {link.value}
                  </p>
                </div>
                {link.href && (
                  <ExternalLink size={14} className="ml-auto text-muted group-hover:text-accent transition-colors" />
                )}
              </div>
            );
            return link.href ? (
              <a key={i} href={link.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                {inner}
              </a>
            ) : (
              <div key={i}>{inner}</div>
            );
          })}
        </div>

        {/* Main CTA */}
        <div className="contact-cta text-center">
          <a
            href={`mailto:${DATA.contact.email}`}
            className="btn-primary text-base py-4 px-10"
            id="contact-main-cta"
          >
            <Mail size={18} />
            Envoyer un message
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   H. FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer
      className="py-10 text-center"
      style={{
        background: '#050508',
        borderTop: '1px solid rgba(123,97,255,0.08)',
        borderRadius: '4rem 4rem 0 0',
      }}
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-muted text-sm">
            <span className="text-ghost font-semibold">Alimou Diallo</span> — Fait avec ❤️ & Vibe Coding · {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-2 font-mono-code text-xs" style={{ color: '#22C55E' }}>
            <span
              className="w-2 h-2 rounded-full pulse-dot"
              style={{ background: '#22C55E', display: 'inline-block' }}
            />
            En ligne — Disponible pour de nouveaux projets
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   APP
   ============================================================ */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
