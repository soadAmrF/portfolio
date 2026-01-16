import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import AOS from 'aos';
import 'aos/dist/aos.css';

// import img from "./assets/WhatsApp Image 2025-11-12 at 23.00.18_0a69e5ca.jpg";
import img2 from "./assets/WhatsApp Image 2026-01-16 at 12.18.45 AM.jpeg";
// import img3 from "./assets/WhatsApp Image 2026-01-16 at 12.18.46 AM.jpeg";

import itSharks from "../public/front end.jpeg";
import front from "../public/front.jpeg";
import design from "../public/design.jpeg";
import icdl from "../public/icdl.jpeg";

import app from "./assets/app.png";
import figma from "./assets/figma.png";
import CRUDS from "./assets/cruds.png";
const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  const closeNav = () => setNavExpanded(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: false,   
    mirror: true  
  });
}, []);

// 1. Refresh
useEffect(() => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
}, []);

// 2.  زرار الصعود
const [showTopBtn, setShowTopBtn] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};



  return (
    <div className="portfolio-container">
      {/* --- Navbar --- */}
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          scrolled ? "nav-scrolled" : "nav-initial"
        }`}
      >
        <div className="container">
          <a className="navbar-brand fw-bold pink-text fs-3" href="#home">
            PORTFOLIO.
          </a>

          <button
            className="navbar-toggler custom-toggler"
            type="button"
            onClick={() => setNavExpanded(!navExpanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${navExpanded ? "show" : ""}`}
            id="mainNav"
          >
            <ul className="navbar-nav ms-auto text-center">
              {[
                { name: "Home", link: "#home" },
                { name: "About", link: "#about" },
                { name: "Certificates", link: "#certificates" },
                { name: "Skills", link: "#skills" },
                { name: "Projects", link: "#projects" },
                { name: "Contact", link: "#contact" },
              ].map((item) => (
                <li key={item.name} className="nav-item">
                  <a
                    className="nav-link text-white px-3 fw-bold nav-link-hover"
                    href={item.link}
                    onClick={closeNav}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <a
                  href="#contact"
                  className="btn btn-pink-custom px-4 rounded-pill fw-bold"
                  onClick={closeNav}
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* --- Home Section --- */}
      <section
        id="home"
        className="hero-section d-flex align-items-center overflow-hidden"
      >
        <div className="container mt-5">
          <div className="row align-items-center g-5">
            {/* Lift*/}
            <div className="col-lg-6 text-center text-lg-start">
              {/* <div className="badge-modern mb-3">Available for Freelance</div> */}
              <h1 className="display-1 fw-bolder text-white mb-3 tracking-tighter">
                DIGITAL <br />
                <span className="pink-text">ARCHITECT</span>
              </h1>

              <div className="fs-2 fw-bold text-white-50 mb-4">
                I'm{" "}
                <span className="text-white">
                  <Typewriter
                    options={{
                      strings: [
                        "Soad Amr",
                        "Front-End Developer",
                        "Front-End React Developer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>

              <p
                className="text-secondary fs-5 mb-5 opacity-75"
                style={{ maxWidth: "500px" }}
              >
              Building high-performance web solutions that combine cutting-edge technology with stunning visual aesthetics.
              </p>

              <div className="d-flex gap-4 justify-content-center justify-content-lg-start">
                <a href="#projects" className="btn-glow">
                  Explore Work
                </a>
                <a
                  href="#contact"
                  className="text-white text-decoration-none fw-bold d-flex align-items-center"
                >
                  Let's Talk <i className="fa-solid fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>

            {/* right */}
            <div className="col-lg-6 d-none d-lg-block">
              <div className="code-window shadow-lg">
                <div className="code-header d-flex gap-2 p-3">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="code-body p-4">
                  <pre>
                    <code>
                      <span className="c-1">const</span>{" "}
                      <span className="c-2">Developer</span> = {"{"} <br />
                      &nbsp;&nbsp;name: <span className="c-3">'Soad Amr'</span>,
                      <br />
                      &nbsp;&nbsp;role:{" "}
                      <span className="c-3">'Front-End Engineer'</span>,<br />
                      &nbsp;&nbsp;skills: [<span className="c-3">
                        'React'
                      </span>, <span className="c-3">'UX'</span>,{" "}
                      <span className="c-3">'Vite'</span>],
                      <br />
                      &nbsp;&nbsp;passion:{" "}
                      <span className="c-3">'Clean Code'</span>
                      <br />
                      {"}"};<br />
                      <br />
                      <span className="c-1">if</span> (passionate) {"{"} <br />
                      &nbsp;&nbsp;<span className="c-2">console</span>.log(
                      <span className="c-3">'Let\'s build something!'</span>);
                      <br />
                      {"}"}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-5 bg-darker">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            {/* Lift*/}
            <div className="col-lg-5">
              <div className="about-img-wrapper">
                <img
                  src={img2}
                  alt="About Soad"
                  className="about-img img-fluid shadow-lg"
                />
                <div className="about-experience-badge">
                  <h2 className="fw-bold mb-0">1+</h2>
                  <p className="small mb-0">projects.</p>
                </div>
              </div>
            </div>

            {/* Right*/}
            <div className="col-lg-7">
              <h5 className="pink-text fw-bold mb-3">WHO AM I?</h5>
              <h2 className="display-5 fw-bold text-white mb-4">
                I'm <span className="pink-text">Soad Amr</span>, a Creative
                Front-End Developer
              </h2>
              <p className="text-secondary fs-5 mb-4">
                I am a Front-End Developer who builds modern, efficient, and
                user-friendly web interfaces. I have solid experience with HTML,
                CSS, JavaScript, React, and Bootstrap. I am proficient in
                creating fully responsive layouts that work well on all devices.
                I also integrate front-end applications with back-end services
                using Fetch API and Axios. I focus on writing clean,
                well-organized, and maintainable code. I apply best practices to
                ensure high performance and a smooth user experience. I always
                look to expand my technical knowledge and stay current with the
                latest web development trends and tools. With a strong sense of
                responsibility and professionalism, I excel in collaborative
                environments and enjoy contributing to meaningful digital
                solutions. I want to join a dynamic team where I can continue to
                develop my skills, deliver significant results, and grow in the
                field of Front-End development.
              </p>
                        {/* معلومات */}
              <div className="row g-4 mb-5">
                <div className="col-sm-6">
                  <div className="info-item">
                    <span className="text-pink fw-bold">Birthday:</span>
                    <span className="text-white ms-2">27 Jan 2005</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="info-item">
                    <span className="text-pink fw-bold">Phone:</span>
                    <span className="text-white ms-2">+20 1012743104</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="info-item">
                    <span className="text-pink fw-bold">City:</span>
                    <span className="text-white ms-2">Cairo, Egypt</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="info-item">
                    <span className="text-pink fw-bold">Freelance:</span>
                    <span className="text-white ms-2">Available</span>
                  </div>
                </div>
              </div>

              <a
                href="../public/Soad Amr Fathy cv.pdf"
                target="blank"
                className="btn btn-pink-custom px-5 py-3 rounded-pill fw-bold"
              >
                Download CV <i className="fa-solid fa-download ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- certificates Section --- */}
    <section id="certificates" className="py-5 bg-black">
  <div className="container py-5">
    <div className="text-center mb-5" data-aos="fade-up">
      <h2 className="display-4 fw-bold text-white">
        Professional <span className="pink-text">Certificates</span>
      </h2>
      <div className="pink-underline mx-auto"></div>
    </div>
    
    <div className="row g-4">
      {[
        { title: "Front-End Diploma", issuer: "IT Sharks", img: itSharks, link: "/front end.jpeg" },
        { title: "Front End Dev", issuer: "Netlab Academy", img: front, link: "/front.jpeg" },
        { title: "Design Thinking", issuer: "Netlab Academy", img: design, link: "/design.jpeg" },
        { title: "ICDL Certificate", issuer: "Cairo University", img: icdl, link: "/icdl.jpeg" }
      ].map((cert, index) => (
        <div 
          key={index} 
          className="col-lg-3 col-md-6"
          data-aos="zoom-in-up"    
          data-aos-delay={index * 200} 
        >
          <div className="cert-card">
            <div className="cert-img-container">
              <img src={cert.img} alt={cert.title} className="cert-img" />
              <div className="cert-overlay">
                <a href={cert.link} target="_blank" rel="noreferrer" className="btn btn-pink-custom rounded-pill">View</a>
              </div>
            </div>
            <div className="p-3 text-center">
              <h6 className="text-white fw-bold mb-1">{cert.title}</h6>
              <p className="pink-text small mb-0">{cert.issuer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>  

      {/* --- Skills Section --- */}
      <section id="skills" className="py-5">
  <div className="container py-5">
    <div className="text-center mb-5" data-aos="fade-up">
      <h2 className="display-4 fw-bold text-white">
        My Technical <span className="pink-text">Skills</span>
      </h2>
      <div className="pink-underline mx-auto"></div>
    </div>

    <div className="row g-4 justify-content-center">
      {[
        { name: "Frontend Development", icon: "fa-code", level: "90%" },
        { name: "React.js / Vite", icon: "fa-atom", level: "85%" },
        { name: "UI/UX Design", icon: "fa-bezier-curve", level: "80%" },
        { name: "Bootstrap / Tailwind", icon: "fa-layer-group", level: "95%" },
        { name: "JavaScript ES6", icon: "fa-js", level: "88%" },
        { name: "Web Performance", icon: "fa-gauge-high", level: "82%" },
      ].map((skill, index) => (
        <div 
          key={index} 
          className="col-md-4 col-sm-6" 
          data-aos="fade-right" 
          data-aos-delay={index * 100}
        >
          <div className="skill-card-new">
            <div className="skill-icon-wrap">
              <i className={`${skill.icon === "fa-js" ? "fa-brands" : "fa-solid"} ${skill.icon} fs-2 pink-text`}></i>
            </div>
            <h5 className="text-white mt-3 fw-bold">{skill.name}</h5>
            
            <div className="progress-container mt-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="text-secondary small">Mastery</span>
                <span className="pink-text small fw-bold">{skill.level}</span>
              </div>
              <div className="progress bg-dark" style={{ height: "6px", borderRadius: "10px" }}>

                <div
                  className="progress-bar-pink"
                  role="progressbar"
                  style={{ width: skill.level }}
                  data-aos="slide-right" 
                  data-aos-anchor-placement="center-bottom"
                ></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* --- Projects Section --- */}
    <section id="projects" className="py-5 bg-black">
  <div className="container py-5">
    {/* Section Header */}
    <div className="text-center mb-5" data-aos="fade-up">
      <h2 className="display-4 fw-bold text-white">
        Featured <span className="pink-text">Projects</span>
      </h2>
      <div className="pink-underline mx-auto"></div>
      <p className="text-secondary mt-3 fs-5">
        Bringing ideas to life through code and interactive design
      </p>
    </div>

    <div className="row g-4">
      {[
        {
          id: 1,
          title: "Islamic Web App",
          tech: "React / Bootstrap",
          img: app,
          link: "https://superlative-seahorse-7f2523.netlify.app/",
          github: "https://github.com/soadAmrF/Islamic-Web-App-React",
        },
        {
          id: 2,
          title: "Furniture Store",
          tech: "Bootstrap / CSS",
          img: figma,
          link: "https://soadamrf.github.io/Figma-Project/",
          github: "https://github.com/soadAmrF/Figma-Project",
        },
        {
          id: 3,
          title: "E-Commerce System",
          tech: "JS / CRUD System",
          img: CRUDS,
          link: "https://soadamrf.github.io/CRUDS/",
          github: "https://github.com/soadAmrF/CRUDS",
        },
      ].map((proj, index) => (
        <div 
          key={proj.id} 
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={index * 200} 
        >
          <div className="project-card-custom h-100">

            <div className="project-img-wrapper">
              <img
                src={proj.img}
                alt={proj.title}
                className="project-img"
              />
              <div className="project-hover-overlay">
                <div className="overlay-content">
                  <div className="d-flex gap-3">
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-btn"
                      title="Live Preview"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-btn"
                      title="Source Code"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="project-details p-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="badge-tech">{proj.tech}</span>
              </div>
              <h4 className="text-white fw-bold mb-2">{proj.title}</h4>
              <p className="text-secondary small">
                High-performance web solution focused on user experience and clean architecture.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* --- Contact Section --- */}
    <section id="contact" className="py-5 bg-darker-extra">
  <div className="container py-5 text-center">
    {/* Section Header */}
    <div className="mb-5">
      <h2 className="display-3 fw-bold text-white mb-3">
        Ready to start a <span className="pink-text">Project?</span>
      </h2>
      <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: "700px" }}>
        I'm currently available for freelance work and new opportunities. 
        Choose your preferred way to connect with me:
      </p>
    </div>

    <div className="row g-4 justify-content-center mt-4">
      {/* WhatsApp  */}
      <div className="col-lg-3 col-md-6">
        <a href="https://api.whatsapp.com/send?phone=201012843104" target="_blank" rel="noreferrer" className="contact-card-link">
          <div className="contact-modern-card p-4">
            <div className="icon-wrapper mb-3">
              <i className="fa-brands fa-whatsapp fs-1"></i>
            </div>
            <h4 className="text-white">WhatsApp</h4>
            <p className="text-secondary small">Available for quick chat</p>
            <span className="action-link">Chat Now <i className="fa-solid fa-arrow-right ms-1"></i></span>
          </div>
        </a>
      </div>

      {/* GitHub */}
      <div className="col-lg-3 col-md-6">
        <a href="https://github.com/soadAmrF" target="_blank" rel="noreferrer" className="contact-card-link">
          <div className="contact-modern-card p-4">
            <div className="icon-wrapper mb-3">
              <i className="fa-brands fa-github fs-1"></i>
            </div>
            <h4 className="text-white">GitHub</h4>
            <p className="text-secondary small">Explore my source code</p>
            <span className="action-link">View Profile <i className="fa-solid fa-arrow-right ms-1"></i></span>
          </div>
        </a>
      </div>

      {/* Email  */}
      <div className="col-lg-3 col-md-6">
        <a href="mailto:soadAmrfathy@gmail.com" className="contact-card-link">
          <div className="contact-modern-card p-4 highlight-card">
            <div className="icon-wrapper mb-3">
              <i className="fa-solid fa-envelope-open-text fs-1"></i>
            </div>
            <h4 className="text-white">Email Me</h4>
            <p className="text-secondary small">For formal inquiries</p>
            <span className="action-link">Send Mail <i className="fa-solid fa-arrow-right ms-1"></i></span>
          </div>
        </a>
      </div>

      {/* LinkedIn  */}
      <div className="col-lg-3 col-md-6">
        <a href="https://www.linkedin.com/in/soad-amr-fathy/" target="_blank" rel="noreferrer" className="contact-card-link">
          <div className="contact-modern-card p-4">
            <div className="icon-wrapper mb-3">
              <i className="fa-brands fa-linkedin-in fs-1"></i>
            </div>
            <h4 className="text-white">LinkedIn</h4>
            <p className="text-secondary small">Let's connect professionally</p>
            <span className="action-link">Connect <i className="fa-solid fa-arrow-right ms-1"></i></span>
          </div>
        </a>
      </div>
    </div>

    {/* Footer Section */}
    <footer className="mt-5 pt-5 border-top border-secondary border-opacity-10">
      <p className="text-secondary mb-0">
        © 2026 Crafted with <span className="pink-text">♥</span> by Soad Amr
      </p>
    </footer>
  </div>
</section>
{showTopBtn && (
  <div className="back-to-top" onClick={goToTop}>
    <i className="fa-solid fa-arrow-up"></i>
  </div>
)}
    </div>
    
  );
  
};

export default App;
