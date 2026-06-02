import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [typed, setTyped] = useState("");

  const roles = ["Mechatronics Engineer", "Robotics Developer", "Software Engineer",];
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const type = () => {
      const current = roles[roleIndex.current];
      if (isDeleting.current) {
        setTyped(current.substring(0, charIndex.current - 1));
        charIndex.current--;
        if (charIndex.current === 0) {
          isDeleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % roles.length;
        }
      } else {
        setTyped(current.substring(0, charIndex.current + 1));
        charIndex.current++;
        if (charIndex.current === current.length) {
          isDeleting.current = true;
          setTimeout(type, 1800);
          return;
        }
      }
      setTimeout(type, isDeleting.current ? 60 : 100);
    };
    const t = setTimeout(type, 500);
    return () => clearTimeout(t);
  }, []);

  const theme = darkMode
    ? {
        bg: "#0f0e0d",
        surface: "#1a1816",
        card: "#211f1c",
        border: "#2e2b27",
        primary: "#f5efe6",
        secondary: "#a89880",
        accent: "#c8945c",
        accentBg: "rgba(200,148,92,0.12)",
      }
    : {
        bg: "#faf8f4",
        surface: "#f2ede4",
        card: "#ffffff",
        border: "#e4ddd2",
        primary: "#1a1410",
        secondary: "#7a6a5a",
        accent: "#b87333",
        accentBg: "rgba(184,115,51,0.08)",
      };

  const skills = [
    {
      category: "Programming & Systems",
      icon: "💻",
      items: [
        { name: "Java", level: 75 },
        { name: "SQL", level: 70 },
        { name: "Python (Basics)", level: 60 },
        { name: "Arduino / C", level: 72 },
      ],
    },
    {
      category: "Robotics & Automation",
      icon: "🤖",
      items: [
        { name: "ROS 2", level: 70 },
        { name: "Embedded Firmware", level: 65 },
        { name: "MATLAB", level: 60 },
        { name: "PLC Basics", level: 55 },
      ],
    },
    {
      category: "Design & Modeling",
      icon: "📐",
      items: [
        { name: "SolidWorks", level: 75 },
        { name: "AutoCAD", level: 80 },
        { name: "Digital Twin Simulation", level: 50 },
        { name: "Circuit Design", level: 50 },
      ],
    },
  ];

  const projects = [
    {
      title: "RFID-Based Smart Door Lock System",
      domain: "Embedded Systems & IoT",
      year: "2024",
      impact: "99.8% read accuracy · 40% faster access response",
      description:
        "Engineered a secure access control framework using RFID authentication. Designed custom firmware to interface microcontrollers with hardware modules. Achieved 99.8% read accuracy across 200+ test cycles and reduced unauthorized-access response time by 40% vs manual systems.",
      stack: ["Embedded C", "Microcontrollers", "RFID Modules", "Hardware Architecture"],
      github: "https://github.com/adeeb-fawwaz",
      color: "#b87333",
    },
    {
      title: "Robotic Kinematics & Workflow Simulation",
      domain: "Industrial Automation",
      year: "2024",
      impact: "22% cycle-time reduction · Multi-axis path planning",
      description:
        "Modeled 6-DOF robotic arm path-planning sequences in ROS 2 and SolidWorks. Simulated production-line material handling paths and optimized process loops, achieving a 22% reduction in simulated cycle time through trajectory smoothing algorithms.",
      stack: ["ROS 2", "SolidWorks", "Automation Logic", "Python"],
      github: "https://github.com/adeeb-fawwaz",
      color: "#5c8a6e",
    },
  ];

  const certifications = [
    { title: "NPTEL – Introduction to Robotics", issuer: "IIT Bombay", year: "2024" },
    { title: "Embedded Systems Fundamentals", issuer: "Coursera / Uni. of Colorado", year: "2024" },
    { title: "SolidWorks Essentials", issuer: "Dassault Systèmes", year: "2023" },
  ];

  const navLinks = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body { background: ${theme.bg}; transition: background 0.3s ease; }

    html { scroll-behavior: smooth; }

    .portfolio-root {
      font-family: 'DM Sans', sans-serif;
      background: ${theme.bg};
      color: ${theme.primary};
      min-height: 100vh;
      line-height: 1.65;
      transition: background 0.3s, color 0.3s;
    }

    .navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 999;
      background: ${theme.bg}ee;
      backdrop-filter: blur(14px);
      border-bottom: 1px solid ${theme.border};
      padding: 0 5%;
      display: flex; align-items: center; justify-content: space-between;
      height: 60px;
      transition: background 0.3s;
    }

    .nav-logo {
      font-family: 'DM Serif Display', serif;
      font-size: 1.35rem;
      color: ${theme.primary};
      letter-spacing: -0.5px;
    }

    .nav-links { display: flex; gap: 30px; list-style: none; }
    .nav-links a {
      font-size: 0.88rem; font-weight: 500;
      color: ${theme.secondary};
      text-decoration: none;
      cursor: pointer;
      transition: color 0.2s;
      letter-spacing: 0.3px;
    }
    .nav-links a:hover { color: ${theme.accent}; }

    .nav-right { display: flex; align-items: center; gap: 14px; }

    .toggle-btn {
      background: ${theme.surface};
      border: 1px solid ${theme.border};
      border-radius: 20px;
      padding: 4px 12px;
      font-size: 0.8rem;
      font-weight: 500;
      color: ${theme.secondary};
      cursor: pointer;
      transition: all 0.2s;
    }
    .toggle-btn:hover { border-color: ${theme.accent}; color: ${theme.accent}; }

    .resume-btn {
      background: ${theme.accent};
      color: #fff;
      border: none;
      border-radius: 6px;
      padding: 7px 18px;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      transition: opacity 0.2s, transform 0.15s;
      display: inline-block;
    }
    .resume-btn:hover { opacity: 0.88; transform: translateY(-1px); }

    .hamburger { display: none; background: none; border: none; cursor: pointer; color: ${theme.primary}; font-size: 1.4rem; }

    section { padding: 90px 5% 70px; max-width: 960px; margin: 0 auto; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .fade-up { animation: fadeUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) both; }

    .hero-section {
      min-height: 100vh;
      display: flex; align-items: center;
      padding-top: 60px;
      max-width: 100%;
      padding-left: 8%;
      padding-right: 8%;
    }

    .hero-inner {
      display: flex; justify-content: space-between; align-items: center;
      width: 100%; gap: 40px; flex-wrap: wrap;
    }

    .hero-text { flex: 1; min-width: 280px; }

    .hero-eyebrow {
      font-size: 0.82rem; font-weight: 600; letter-spacing: 2px;
      text-transform: uppercase; color: ${theme.accent};
      margin-bottom: 16px;
      animation: fadeUp 0.6s 0.1s both;
    }

    .hero-name {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(2.8rem, 6vw, 4.8rem);
      line-height: 1.05;
      letter-spacing: -2px;
      color: ${theme.primary};
      margin-bottom: 16px;
      animation: fadeUp 0.6s 0.2s both;
    }

    .hero-role {
      font-size: 1.2rem; font-weight: 300;
      color: ${theme.secondary};
      margin-bottom: 28px;
      min-height: 32px;
      animation: fadeUp 0.6s 0.3s both;
    }

    .cursor {
      display: inline-block; width: 2px; height: 1.1em;
      background: ${theme.accent}; margin-left: 2px;
      vertical-align: middle;
      animation: blink 0.9s step-end infinite;
    }
    @keyframes blink { 50% { opacity: 0; } }

    .hero-bio {
      font-size: 1rem; color: ${theme.secondary}; max-width: 480px;
      margin-bottom: 36px; line-height: 1.75;
      animation: fadeUp 0.6s 0.4s both;
    }

    .hero-cta { display: flex; gap: 14px; flex-wrap: wrap; animation: fadeUp 0.6s 0.5s both; }

    .cta-primary {
      background: ${theme.primary}; color: ${theme.bg};
      border: none; border-radius: 8px; padding: 13px 28px;
      font-size: 0.92rem; font-weight: 600; cursor: pointer;
      transition: opacity 0.2s, transform 0.15s; text-decoration: none;
    }
    .cta-primary:hover { opacity: 0.85; transform: translateY(-2px); }

    .cta-secondary {
      background: transparent; color: ${theme.primary};
      border: 1.5px solid ${theme.border}; border-radius: 8px; padding: 13px 28px;
      font-size: 0.92rem; font-weight: 500; cursor: pointer;
      transition: border-color 0.2s, color 0.2s; text-decoration: none;
    }
    .cta-secondary:hover { border-color: ${theme.accent}; color: ${theme.accent}; }

    .hero-avatar {
      width: 220px; height: 220px; border-radius: 50%;
      border: 3px solid ${theme.accent};
      overflow: hidden; flex-shrink: 0;
      background: ${theme.surface};
      display: flex; align-items: center; justify-content: center;
      font-family: 'DM Serif Display', serif;
      font-size: 3.5rem; color: ${theme.accent};
      animation: fadeUp 0.6s 0.3s both;
      box-shadow: 0 0 0 8px ${theme.accentBg};
    }
    .hero-avatar img { width: 100%; height: 100%; object-fit: cover; }

    .section-label {
      font-size: 0.75rem; font-weight: 600; letter-spacing: 2.5px;
      text-transform: uppercase; color: ${theme.accent};
      margin-bottom: 10px;
    }

    .section-title {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(1.8rem, 3vw, 2.5rem);
      letter-spacing: -1px; color: ${theme.primary};
      margin-bottom: 36px; line-height: 1.15;
    }

    .divider {
      height: 1px; background: ${theme.border};
      max-width: 960px; margin: 0 auto;
    }

    /* ABOUT */
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; }
    .about-stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 28px; }
    .stat-card {
      background: ${theme.surface}; border-radius: 10px; padding: 18px 20px;
      border: 1px solid ${theme.border};
    }
    .stat-number { font-family: 'DM Serif Display', serif; font-size: 2rem; color: ${theme.accent}; }
    .stat-label { font-size: 0.82rem; color: ${theme.secondary}; margin-top: 2px; }

    /* SKILLS */
    .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
    .skill-card {
      background: ${theme.card}; border: 1px solid ${theme.border};
      border-radius: 12px; padding: 24px;
    }
    .skill-cat-header { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
    .skill-cat-icon { font-size: 1.3rem; }
    .skill-cat-name { font-size: 0.95rem; font-weight: 600; color: ${theme.primary}; }
    .skill-item { margin-bottom: 14px; }
    .skill-row { display: flex; justify-content: space-between; margin-bottom: 5px; }
    .skill-name { font-size: 0.85rem; color: ${theme.secondary}; }
    .skill-pct { font-size: 0.8rem; color: ${theme.accent}; font-weight: 600; }
    .skill-bar-bg { height: 5px; background: ${theme.surface}; border-radius: 4px; overflow: hidden; }
    .skill-bar-fill {
      height: 100%; border-radius: 4px; background: ${theme.accent};
      transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1);
    }

    /* PROJECTS */
    .project-card {
      background: ${theme.card}; border: 1px solid ${theme.border};
      border-radius: 14px; padding: 30px;
      transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s;
      cursor: default; margin-bottom: 20px;
    }
    .project-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(0,0,0,0.07);
      border-color: ${theme.accent}88;
    }
    .project-header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px; margin-bottom: 6px; }
    .project-title { font-size: 1.15rem; font-weight: 600; color: ${theme.primary}; }
    .project-year { font-size: 0.8rem; color: ${theme.secondary}; background: ${theme.surface}; padding: 3px 10px; border-radius: 20px; }
    .project-domain { font-size: 0.78rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.8px; color: ${theme.accent}; margin-bottom: 10px; }
    .impact-pill {
      display: inline-block; background: ${theme.accentBg}; color: ${theme.accent};
      border: 1px solid ${theme.accent}44; border-radius: 20px;
      font-size: 0.78rem; font-weight: 600; padding: 4px 12px; margin-bottom: 14px;
    }
    .project-desc { font-size: 0.92rem; color: ${theme.secondary}; margin-bottom: 18px; line-height: 1.7; }
    .tag-row { display: flex; flex-wrap: wrap; gap: 8px; }
    .tech-tag {
      background: ${theme.surface}; color: ${theme.secondary};
      border: 1px solid ${theme.border}; border-radius: 6px;
      font-size: 0.78rem; font-weight: 500; padding: 4px 10px;
    }
    .project-links { margin-top: 18px; display: flex; gap: 12px; }
    .proj-link {
      font-size: 0.83rem; font-weight: 600; color: ${theme.accent};
      text-decoration: none; display: flex; align-items: center; gap: 5px;
      border-bottom: 1px solid transparent; transition: border-color 0.2s;
    }
    .proj-link:hover { border-color: ${theme.accent}; }

    /* EDUCATION & CERTS */
    .edu-card {
      background: ${theme.card}; border: 1px solid ${theme.border};
      border-radius: 12px; padding: 26px 30px;
      display: flex; justify-content: space-between; align-items: flex-start;
      flex-wrap: wrap; gap: 16px; margin-bottom: 16px;
    }
    .edu-degree { font-size: 1.05rem; font-weight: 600; color: ${theme.primary}; margin-bottom: 4px; }
    .edu-inst { font-size: 0.9rem; color: ${theme.accent}; font-weight: 500; margin-bottom: 8px; }
    .edu-highlight { font-size: 0.88rem; color: ${theme.secondary}; line-height: 1.6; max-width: 520px; }
    .edu-duration {
      font-size: 0.82rem; font-weight: 600; color: ${theme.secondary};
      background: ${theme.surface}; padding: 4px 14px; border-radius: 20px;
      white-space: nowrap; height: fit-content;
    }

    .cert-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; margin-top: 28px; }
    .cert-card {
      background: ${theme.surface}; border: 1px solid ${theme.border};
      border-radius: 10px; padding: 16px 18px;
    }
    .cert-title { font-size: 0.88rem; font-weight: 600; color: ${theme.primary}; margin-bottom: 4px; }
    .cert-meta { font-size: 0.78rem; color: ${theme.secondary}; }

    /* CONTACT */
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; flex-wrap: wrap; }
    .contact-info { display: flex; flex-direction: column; gap: 16px; }
    .contact-item {
      display: flex; align-items: center; gap: 14px;
      background: ${theme.card}; border: 1px solid ${theme.border};
      border-radius: 10px; padding: 14px 18px;
    }
    .contact-icon { font-size: 1.1rem; width: 30px; text-align: center; }
    .contact-label { font-size: 0.75rem; color: ${theme.secondary}; margin-bottom: 1px; text-transform: uppercase; letter-spacing: 0.5px; }
    .contact-val { font-size: 0.9rem; color: ${theme.primary}; font-weight: 500; }
    .contact-form { display: flex; flex-direction: column; gap: 12px; }
    .form-input, .form-textarea {
      background: ${theme.card}; border: 1px solid ${theme.border};
      border-radius: 8px; padding: 12px 14px;
      font-size: 0.9rem; color: ${theme.primary}; font-family: 'DM Sans', sans-serif;
      width: 100%; transition: border-color 0.2s;
      outline: none;
    }
    .form-input::placeholder, .form-textarea::placeholder { color: ${theme.secondary}88; }
    .form-input:focus, .form-textarea:focus { border-color: ${theme.accent}; }
    .form-textarea { resize: vertical; min-height: 110px; }
    .form-submit {
      background: ${theme.accent}; color: #fff; border: none;
      border-radius: 8px; padding: 12px 28px;
      font-size: 0.92rem; font-weight: 600; cursor: pointer;
      transition: opacity 0.2s, transform 0.15s; align-self: flex-start;
    }
    .form-submit:hover { opacity: 0.88; transform: translateY(-1px); }

    .social-row { display: flex; gap: 14px; margin-top: 16px; }
    .social-link {
      background: ${theme.surface}; border: 1px solid ${theme.border};
      border-radius: 8px; padding: 9px 18px;
      font-size: 0.83rem; font-weight: 600; color: ${theme.secondary};
      text-decoration: none; transition: border-color 0.2s, color 0.2s;
    }
    .social-link:hover { border-color: ${theme.accent}; color: ${theme.accent}; }

    footer {
      border-top: 1px solid ${theme.border}; text-align: center;
      padding: 28px 20px; font-size: 0.82rem; color: ${theme.secondary};
    }

    @media (max-width: 768px) {
      .nav-links { display: none; }
      .hamburger { display: block; }
      .mobile-menu {
        position: fixed; top: 60px; left: 0; right: 0; z-index: 998;
        background: ${theme.bg}; border-bottom: 1px solid ${theme.border};
        padding: 16px 5%; display: flex; flex-direction: column; gap: 14px;
      }
      .mobile-menu a {
        font-size: 1rem; font-weight: 500; color: ${theme.secondary};
        text-decoration: none; cursor: pointer; padding: 8px 0;
        border-bottom: 1px solid ${theme.border};
      }
      .hero-inner { flex-direction: column-reverse; text-align: center; }
      .hero-cta { justify-content: center; }
      .hero-bio { margin: 0 auto 28px; }
      .about-grid, .contact-grid { grid-template-columns: 1fr; }
      .hero-avatar { width: 160px; height: 160px; font-size: 2.5rem; }
    }
  `;

  return (
    <div className="portfolio-root">
      <style>{css}</style>

      {/* NAVBAR */}
      <nav className="navbar">
        <span className="nav-logo">AF.</span>
        <ul className="nav-links">
          {navLinks.map((l) => (
            <li key={l}>
              <a onClick={() => scrollTo(l)}>{l}</a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀ Light" : "☾ Dark"}
          </button>
          <a href="/d:\Adeeb_Fawwaz_Resume.pdf" download className="resume-btn">
            ↓ Resume
          </a>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((l) => (
            <a key={l} onClick={() => scrollTo(l)}>
              {l}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <div id="home">
        <div className="hero-section">
          <div className="hero-inner">
            <div className="hero-text">
              <p className="hero-eyebrow">Available for Internships · 2026-27</p>
              <h1 className="hero-name">Adeeb<br />Fawwaz</h1>
              <p className="hero-role">
                <span>{typed}</span>
                <span className="cursor" />
              </p>
              <p className="hero-bio">
                Mechatronics Engineering student at Sri Manakula Vinayagar Engineering College (2023–2027), passionate about building intelligent systems that bridge software and hardware — from embedded firmware to robotic automation.
              </p>
              <div className="hero-cta">
                <a onClick={() => scrollTo("Projects")} className="cta-primary" style={{ cursor: "pointer" }}>
                  View Projects →
                </a>
                <a onClick={() => scrollTo("Contact")} className="cta-secondary" style={{ cursor: "pointer" }}>
                  Contact Me
                </a>
              </div>
            </div>
            <div className="hero-avatar">
              <img
                src="/d:\photo.jpg"
                alt="Adeeb Fawwaz"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              AF
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="divider" />
      <section id="about" className="fade-up">
        <p className="section-label">Who I am</p>
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div>
            <p style={{ color: theme.secondary, lineHeight: 1.8, marginBottom: 16, fontSize: "1rem" }}>
              I'm a second-year Mechatronics Engineering student deeply invested in the intersection of mechanical systems, control theory, and software. My work focuses on turning engineering concepts into deployable, production-ready solutions.
            </p>
            <p style={{ color: theme.secondary, lineHeight: 1.8, fontSize: "1rem" }}>
              I believe great engineering isn't just technically correct — it's efficient, scalable, and human-centered. I bring that mindset to every project, from hardware prototyping to digital simulation.
            </p>
            <div className="social-row">
              <a href="https://github.com/adeeb-fawwaz" target="_blank" rel="noreferrer" className="social-link">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/adeeb-fawwaz-a0a4482a7/" target="_blank" rel="noreferrer" className="social-link">
                LinkedIn ↗
              </a>
              <a href="mailto:adeebny2005@gmail.com" className="social-link">
                Email ↗
              </a>
            </div>
          </div>
          <div className="about-stat-grid">
            {[
              { n: "2+", l: "Years of Engineering Study" },
              { n: "3+", l: "Hands-on Projects" },
              { n: "10+", l: "Technical Skills" },
              { n: "2027", l: "Expected Graduation" },
            ].map((s) => (
              <div className="stat-card" key={s.l}>
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <div className="divider" />
      <section id="skills" className="fade-up">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((cat) => (
            <div className="skill-card" key={cat.category}>
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <span className="skill-cat-name">{cat.category}</span>
              </div>
              {cat.items.map((sk) => (
                <div className="skill-item" key={sk.name}>
                  <div className="skill-row">
                    <span className="skill-name">{sk.name}</span>
                    <span className="skill-pct">{sk.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: `${sk.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <div className="divider" />
      <section id="projects" className="fade-up">
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Engineering Projects</h2>
        {projects.map((p, i) => (
          <div
            className="project-card"
            key={i}
            onMouseEnter={() => setHoveredProject(i)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-header">
              <span className="project-title">{p.title}</span>
              <span className="project-year">{p.year}</span>
            </div>
            <p className="project-domain">{p.domain}</p>
            <span className="impact-pill">⚡ {p.impact}</span>
            <p className="project-desc">{p.description}</p>
            <div className="tag-row">
              {p.stack.map((t) => (
                <span className="tech-tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">
                ⌥ View on GitHub
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* EDUCATION */}
      <div className="divider" />
      <section id="education" className="fade-up">
        <p className="section-label">Academic background</p>
        <h2 className="section-title">Education</h2>
        <div className="edu-card">
          <div>
            <p className="edu-degree">Bachelor of Technology — Mechatronics Engineering</p>
            <p className="edu-inst">Sri Manakula Vinayagar Engineering College</p>
            <p className="edu-highlight">
              Specialization in Industrial Automation, Robotics Kinematics, and Embedded Firmware Logic. Active participant in robotics clubs and IEEE student chapter.
            </p>
          </div>
          <span className="edu-duration">2023 – 2027</span>
        </div>

        <p className="section-label" style={{ marginTop: 32 }}>Credentials</p>
        <p style={{ fontSize: "1rem", fontWeight: 500, color: theme.primary, marginBottom: 6 }}>Certifications</p>
        <div className="cert-grid">
          {certifications.map((c) => (
            <div className="cert-card" key={c.title}>
              <p className="cert-title">{c.title}</p>
              <p className="cert-meta">{c.issuer} · {c.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <div className="divider" />
      <section id="contact" className="fade-up">
        <p className="section-label">Get in touch</p>
        <h2 className="section-title">Contact</h2>
        <div className="contact-grid">
          <div className="contact-info">
            {[
              { icon: "📍", label: "Location", val: "19, Raja Street West,Neravy, Karaikal, Puducherry, India" },
              { icon: "✉️", label: "Email", val: "adeebny2005@gmail.com" },
              { icon: "🎓", label: "Institution", val: "Sri Manakula Vinayagar Engineering College" },
              { icon: "📅", label: "Available From", val: "Summer 2026-27 · Open to Internships" },
            ].map((c) => (
              <div className="contact-item" key={c.label}>
                <span className="contact-icon">{c.icon}</span>
                <div>
                  <p className="contact-label">{c.label}</p>
                  <p className="contact-val">{c.val}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="contact-form">
            <input className="form-input" placeholder="Your Name" />
            <input className="form-input" placeholder="Your Email" type="email" />
            <input className="form-input" placeholder="Subject" />
            <textarea className="form-textarea" placeholder="Your message..." />
            <button
              className="form-submit"
              onClick={() => {
                const subject = encodeURIComponent("Portfolio Inquiry");
                window.location.href = `mailto:adeebny2005@gmail.com?subject=${subject}`;
              }}
            >
              Send Message →
            </button>
          </div>
        </div>
      </section>

      <footer>
        <p style={{ marginBottom: 6 }}>
          <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.1rem" }}>Adeeb Fawwaz</span>
          &nbsp;·&nbsp; Mechatronics Engineer &nbsp;·&nbsp; Neravy, Karaikal, Puducherry, India
        </p>
        <p>© 2026 · Built with React · Open to opportunities</p>
      </footer>
    </div>
  );
}
