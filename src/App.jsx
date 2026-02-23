import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const SKILLS = {
  "Programming Languages": ["Java", "C#"],
  "Web Technologies": ["HTML", "CSS", "JavaScript", "React"],
  "Databases": ["MySQL"],
  "Tools & Platforms": ["Git", "VS Code"],
};

const PROJECTS = [
  {
    title: "Bricks to Break",
    desc: "Engineered an interactive brick-breaking game in C# featuring custom collision detection, dynamic ball physics, and a real-time scoring system.",
    tag: "C#",
    link: "https://github.com/Sedhuraman-1876/Bricks-to-Break",
    icon: "🧱",
  },
  {
    title: "Ping Pong",
    desc: "Engineered a 2D ping pong game in C# featuring real-time paddle physics, dynamic ball velocity logic, and precise collision detection.",
    tag: "C#",
    link: "https://github.com/Sedhuraman-1876/Ping-Pong",
    icon: "🏓",
  },
  {
    title: "SEO Using Machine Learning",
    desc: "Developed a command-line SEO audit tool with a GUI dashboard, utilizing Random Forest for backlink prediction and NLP for automated keyword extraction.",
    tag: "Python · ML · NLP",
    link: null,
    icon: "🤖",
  },
  {
    title: "Personal Portfolio",
    desc: "Responsive portfolio website built using React and CSS showcasing projects, skills, and contact information.",
    tag: "React · CSS",
    link: null,
    icon: "💼",
  },
];

export default function SedhuramanPortfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#0F0F0F", color: "#EDEDED", minHeight: "100vh", width: "100vw", maxWidth: "100%", overflowX: "hidden", position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { width: 100%; overflow-x: hidden; }
        body { font-family: 'Nunito', sans-serif; background: #0F0F0F; color: #EDEDED; }

        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; justify-content: space-between; align-items: center;
          padding: 22px 5vw;
          width: 100%; max-width: 100vw;
          transition: all 0.3s ease;
        }
        .nav.scrolled {
          background: rgba(15,15,15,0.94);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 16px 5vw;
        }
        .nav-logo {
          font-family: 'Bebas Neue', cursive;
          font-size: 1.2rem; font-weight: 400;
          color: #FFFFFF; letter-spacing: 2px;
        }
        .nav-links { display: flex; gap: 40px; list-style: none; }
        .nav-links button {
          background: none; border: none; cursor: pointer;
          font-family: 'Nunito', sans-serif;
          font-size: 0.8rem; font-weight: 500;
          color: #999; letter-spacing: 0.8px;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .nav-links button:hover { color: #FFFFFF; }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex; align-items: center;
          padding: 120px 5vw 80px;
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 100vw;
          background: #0F0F0F;
        }
        .hero-glow {
          position: absolute;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(230,90,30,0.10) 0%, transparent 70%);
          top: 50%; right: 0; transform: translateY(-50%);
          pointer-events: none;
        }
        .hero-inner {
          max-width: 1100px; margin: 0 auto; width: 100%;
          display: flex; flex-direction: column; justify-content: center;
          position: relative; z-index: 1;
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(230,90,30,0.10);
          border: 1px solid rgba(230,90,30,0.35);
          border-radius: 100px; padding: 6px 16px;
          font-size: 0.72rem; color: #E65A1E;
          letter-spacing: 1px; text-transform: uppercase; font-weight: 600;
          margin-bottom: 28px;
        }
        .hero-badge-dot { width: 6px; height: 6px; background: #E65A1E; border-radius: 50%; display: inline-block; }
        .hero-name {
          font-family: 'Bebas Neue', cursive;
          font-size: clamp(2.5rem, 4vw, 4rem);
          font-weight: 400; color: #FFFFFF;
          line-height: 1.05; letter-spacing: 3px;
          margin-bottom: 18px; white-space: nowrap;
        }
        .hero-name span { color: #E65A1E; }
        .hero-title {
          font-size: 0.95rem; color: #AAAAAA;
          font-weight: 400; letter-spacing: 0.3px; margin-bottom: 24px;
        }
        .hero-desc {
          font-size: 1rem; color: #BBBBBB;
          line-height: 1.85; max-width: 480px; margin-bottom: 44px;
        }
        .hero-buttons { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-primary {
          background: #E65A1E; color: #FFFFFF;
          border: none; border-radius: 10px;
          padding: 14px 30px; font-family: 'Nunito', sans-serif;
          font-size: 0.85rem; font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-primary:hover { background: #CF4E14; transform: translateY(-2px); }
        .btn-outline {
          background: transparent; color: #DDDDDD;
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 10px; padding: 14px 30px;
          font-family: 'Nunito', sans-serif;
          font-size: 0.85rem; font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-outline:hover { border-color: rgba(255,255,255,0.5); color: #FFFFFF; background: rgba(255,255,255,0.05); }
        .btn-download {
          background: transparent; color: #E65A1E;
          border: 1px solid rgba(230,90,30,0.4);
          border-radius: 10px; padding: 14px 30px;
          font-family: 'Nunito', sans-serif;
          font-size: 0.85rem; font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-download:hover { background: rgba(230,90,30,0.1); border-color: #E65A1E; transform: translateY(-2px); }



        /* SECTIONS BASE */
        section { padding: 100px 5vw; width: 100%; max-width: 100vw; }
        .section-inner { max-width: 1100px; margin: 0 auto; width: 100%; }
        .section-label {
          font-size: 0.7rem; letter-spacing: 2px; text-transform: uppercase;
          color: #E65A1E; font-weight: 600; margin-bottom: 10px;
        }
        .section-title {
          font-family: 'Bebas Neue', cursive;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 400; color: #FFFFFF;
          letter-spacing: 2px; margin-bottom: 16px; line-height: 1.15;
        }
        .divider { width: 40px; height: 3px; background: #E65A1E; border-radius: 2px; margin-bottom: 52px; }

        /* ABOUT */
        #about { background: #141414; }
        .about-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 70px; align-items: start; }
        .about-text { font-size: 1rem; color: #BBBBBB; line-height: 1.9; }
        .about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .stat-card {
          background: #1A1A1A; border-radius: 14px; padding: 26px;
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.3s;
        }
        .stat-card:hover { border-color: rgba(230,90,30,0.3); }
        .stat-num { font-family: 'Bebas Neue', cursive; font-size: 2.4rem; font-weight: 400; letter-spacing: 2px; color: #E65A1E; }
        .stat-label { font-size: 0.78rem; color: #888; margin-top: 6px; }

        /* SKILLS */
        #skills { background: #0F0F0F; }
        .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .skill-card {
          background: #141414; border-radius: 16px; padding: 34px;
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.3s;
        }
        .skill-card:hover { border-color: rgba(230,90,30,0.25); }
        .skill-card-title {
          font-size: 0.7rem; letter-spacing: 1.5px; text-transform: uppercase;
          color: #E65A1E; font-weight: 600; margin-bottom: 20px;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill-tag {
          background: #1E1E1E; color: #CCCCCC;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px; padding: 9px 20px;
          font-size: 0.85rem; font-weight: 500;
          transition: all 0.2s;
        }
        .skill-tag:hover { background: rgba(230,90,30,0.12); border-color: rgba(230,90,30,0.3); color: #FFFFFF; }

        /* PROJECTS */
        #projects { background: #141414; }
        .projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .project-card {
          background: #1A1A1A; border-radius: 18px; padding: 36px;
          border: 1px solid rgba(255,255,255,0.06);
          transition: all 0.3s; display: flex; flex-direction: column;
        }
        .project-card:hover {
          border-color: rgba(230,90,30,0.3);
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .project-icon { font-size: 2rem; margin-bottom: 22px; display: block; }
        .project-tag {
          font-size: 0.7rem; letter-spacing: 1px; text-transform: uppercase;
          color: #E65A1E; font-weight: 600; margin-bottom: 10px;
        }
        .project-title {
          font-family: 'Bebas Neue', cursive; font-size: 1.3rem; font-weight: 400;
          letter-spacing: 1.5px; margin-bottom: 12px; color: #FFFFFF;
        }
        .project-desc { font-size: 0.87rem; color: #999; line-height: 1.75; margin-bottom: 28px; flex: 1; }
        .project-link {
          font-size: 0.82rem; font-weight: 600; color: #E65A1E;
          text-decoration: none; display: inline-flex; align-items: center; gap: 6px;
          transition: gap 0.2s; align-self: flex-start;
        }
        .project-link:hover { gap: 12px; }

        /* RESUME SECTION */
        #resume { background: #0F0F0F; }
        .resume-box {
          background: #141414; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 52px;
          display: flex; align-items: center; justify-content: space-between; gap: 40px;
          transition: border-color 0.3s;
        }
        .resume-box:hover { border-color: rgba(230,90,30,0.25); }
        .resume-text h3 {
          font-family: 'Bebas Neue', cursive; font-size: 1.6rem;
          letter-spacing: 2px; color: #FFFFFF; margin-bottom: 10px;
        }
        .resume-text p { font-size: 0.95rem; color: #888; line-height: 1.7; max-width: 480px; }
        .resume-preview {
          display: flex; gap: 10px; align-items: center; flex-shrink: 0;
        }
        .resume-icon { font-size: 3rem; }

        /* CONTACT */
        #contact { background: #141414; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .contact-card {
          background: #1A1A1A; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px; padding: 26px 30px;
          display: flex; align-items: center; gap: 18px;
          text-decoration: none; transition: all 0.2s;
        }
        .contact-card:hover { border-color: rgba(230,90,30,0.3); background: #202020; }
        .contact-icon {
          font-size: 1.2rem; width: 44px; height: 44px;
          background: #222; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .contact-label { font-size: 0.7rem; letter-spacing: 1px; text-transform: uppercase; color: #666; margin-bottom: 4px; }
        .contact-value { font-size: 0.9rem; color: #DDDDDD; font-weight: 500; }

        /* FOOTER */
        footer {
          background: #0A0A0A; text-align: center;
          padding: 24px; font-size: 0.78rem; color: #555;
          border-top: 1px solid rgba(255,255,255,0.04);
          letter-spacing: 0.5px;
        }

        /* TABLET */
        @media (max-width: 1024px) {
          section { padding: 80px 4vw; }
          .hero { padding: 110px 4vw 80px; }
          .hero-inner { gap: 40px; }
          .about-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
          .projects-grid { grid-template-columns: 1fr 1fr; }
          .skills-grid { grid-template-columns: 1fr 1fr; }
          .contact-grid { grid-template-columns: 1fr 1fr; }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          section { padding: 60px 5vw; }
          .hero { padding: 90px 5vw 60px; }
          .hero-inner { gap: 32px; }
          .hero-name { font-size: 2.2rem; white-space: normal; }
          .hero-title { font-size: 0.85rem; }
          .hero-desc { font-size: 0.92rem; }
          .hero-buttons { flex-direction: column; }
          .btn-primary, .btn-outline, .btn-download { width: 100%; justify-content: center; }
          .nav-logo { font-size: 1rem; }
          .nav-links { gap: 14px; }
          .nav-links button { font-size: 0.7rem; }
          .about-grid { grid-template-columns: 1fr; gap: 36px; }
          .about-stats { grid-template-columns: 1fr 1fr; }
          .skills-grid { grid-template-columns: 1fr; }
          .projects-grid { grid-template-columns: 1fr; }
          .resume-box { flex-direction: column; text-align: center; padding: 32px 20px; gap: 24px; }
          .resume-preview { justify-content: center; flex-direction: column; }
          .contact-grid { grid-template-columns: 1fr; }
          .section-title { font-size: 1.8rem; }
        }

        /* SMALL MOBILE */
        @media (max-width: 400px) {
          .hero-name { font-size: 1.8rem; }
          .nav-links { gap: 8px; }
          .nav-links button { font-size: 0.62rem; }
          .about-stats { grid-template-columns: 1fr 1fr; gap: 10px; }
          .stat-card { padding: 16px; }
          .stat-num { font-size: 1.8rem; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-logo">SS</div>
        <ul className="nav-links">
          {NAV_LINKS.map(link => (
            <li key={link}><button onClick={() => scrollTo(link)}>{link}</button></li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-inner">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot" /> Open to Opportunities
            </div>
            <h1 className="hero-name">Sedhuraman <span>S</span></h1>
            <p className="hero-title">Software Developer &nbsp;·&nbsp; CSE Student &nbsp;·&nbsp; Chennai, TN</p>
            <p className="hero-desc">
              Pre-final year CSE student with a strong foundation in C#, Java, and Web Development. Passionate about building interactive applications and clean, maintainable code.
            </p>
            <div className="hero-buttons">
              <a href="https://github.com/Sedhuraman-1876" target="_blank" rel="noreferrer" className="btn-primary">GitHub →</a>
              <a href="https://www.linkedin.com/in/sedhuraman-s-08b9a8307" target="_blank" rel="noreferrer" className="btn-outline">LinkedIn</a>
              <a href="/Sedhuraman_Resume.pdf" download="Sedhuraman_Resume.pdf" className="btn-download">⬇ Resume</a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="section-inner">
          <p className="section-label">Who I Am</p>
          <h2 className="section-title">About Me</h2>
          <div className="divider" />
          <div className="about-grid">
            <div>
              <p className="about-text">I'm a B.E Computer Science and Engineering student at Panimalar Engineering College (CGPA: 8.1) with a strong foundation in C#, Java, and web development. I enjoy solving logical problems and building real-time interactive applications.</p>
              <br />
              <p className="about-text">Whether it's a game mechanic in C# or a UI component in React, I approach every project with curiosity and care for the user experience — always focused on writing scalable, clean code.</p>
            </div>
            <div className="about-stats">
              {[["4+","Projects Built"],["6+","Technologies Used"],["8.1","CGPA"],["∞","Curiosity to Learn"]].map(([n,l]) => (
                <div className="stat-card" key={l}>
                  <div className="stat-num">{n}</div>
                  <div className="stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-inner">
          <p className="section-label">What I Know</p>
          <h2 className="section-title">Skills</h2>
          <div className="divider" />
          <div className="skills-grid">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div className="skill-card" key={category}>
                <div className="skill-card-title">{category}</div>
                <div className="skill-tags">
                  {items.map(s => <span className="skill-tag" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-inner">
          <p className="section-label">What I've Built</p>
          <h2 className="section-title">Projects</h2>
          <div className="divider" />
          <div className="projects-grid">
            {PROJECTS.map(p => (
              <div className="project-card" key={p.title}>
                <span className="project-icon">{p.icon}</span>
                <div className="project-tag">{p.tag}</div>
                <div className="project-title">{p.title}</div>
                <p className="project-desc">{p.desc}</p>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="project-link">View on GitHub →</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume">
        <div className="section-inner">
          <p className="section-label">My Resume</p>
          <h2 className="section-title">Download CV</h2>
          <div className="divider" />
          <div className="resume-box">
            <div className="resume-text">
              <h3>Sedhuraman S — Resume</h3>
              <p>Contains my full education history, technical skills, projects, certifications, and career objective. Last updated February 2026.</p>
            </div>
            <div className="resume-preview">
              <span className="resume-icon">📄</span>
              <a href="/Sedhuraman_Resume.pdf" download="Sedhuraman_Resume.pdf" className="btn-download" style={{ fontSize: "0.9rem", padding: "16px 36px" }}>
                ⬇ Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-inner">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact</h2>
          <div className="divider" />
          <div className="contact-grid">
            {[
              { href: "mailto:sedhu1876@gmail.com", icon: "✉️", label: "Email", value: "sedhu1876@gmail.com" },
              { href: "tel:6385555919", icon: "📞", label: "Phone", value: "+91 6385555919" },
              { href: "https://github.com/Sedhuraman-1876", icon: "⚡", label: "GitHub", value: "Sedhuraman-1876" },
              { href: "https://www.linkedin.com/in/sedhuraman-s-08b9a8307", icon: "💼", label: "LinkedIn", value: "sedhuraman-s" },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="contact-card">
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <div className="contact-label">{c.label}</div>
                  <div className="contact-value">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} Sedhuraman S · All rights reserved</footer>
    </div>
  );
}
