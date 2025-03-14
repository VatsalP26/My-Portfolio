import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Particles from "../components/Particles";
import SpotlightCard from "../components/SpotlightCard";

const Home = () => {
  const [currentSection, setCurrentSection] = useState("hero");

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const sections = [
      { id: "hero", ref: heroRef },
      { id: "about", ref: aboutRef },
      { id: "skills", ref: skillsRef },
      { id: "projects", ref: projectsRef },
      { id: "certifications", ref: certificationsRef },
      { id: "contact", ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) observer.unobserve(section.ref.current);
      });
    };
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (This is a demo)");
  };

  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "CSS/SCSS", level: 80 },
    { name: "HTML", level: 90 },
    { name: "Git", level: 75 },
  ];

  const projects = [
    {
      title: "My Portfolio",
      description: "An interactive portfolio built with React.js and Framer Motion.",
      link: "https://github.com/[your-username]/puzzle-portfolio",
    },
    {
      title: "Todo App",
      description: "A task management app with CRUD functionality.",
      link: "https://github.com/[your-username]/todo-app",
    },
  ];

  const certifications = [
    {
      title: "Advanced Diploma in Computer Programming and Analysis",
      issuer: "[Your College Name]",
      date: "May 2025",
    },
    {
      title: "Award for Outstanding Project",
      issuer: "[Your College Name]",
      date: "April 2025",
    },
  ];

  return (
    <div className="home">
      <Particles className="particles-bg" />
      
      {/* Sidebar Navigation */}
      <nav className="sidebar-nav">
        <a
          href="#hero"
          className={currentSection === "hero" ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#about"
          className={currentSection === "about" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#skills"
          className={currentSection === "skills" ? "active" : ""}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={currentSection === "projects" ? "active" : ""}
        >
          Projects
        </a>
        <a
          href="#certifications"
          className={currentSection === "certifications" ? "active" : ""}
        >
          Certifications
        </a>
        <a
          href="#contact"
          className={currentSection === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="hero-section">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Vatsal Prajapati
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Aspiring Full-Stack Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="tagline"
        >
          I build modern, responsive web applications with a focus on performance and usability.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="social-links"
        >
          <a href="https://github.com/[your-username]" target="_blank" rel="noopener noreferrer">
            <span className="icon">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/[your-username]" target="_blank" rel="noopener noreferrer">
            <span className="icon">LinkedIn</span>
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="section about-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          I’m Vatsal Prajapati, a recent graduate with an Advanced Diploma in Computer Programming and Analysis. I’m passionate about creating modern, responsive web applications using technologies like React.js and Framer Motion. My focus is on building user-friendly experiences that are both visually appealing and highly functional.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          In my projects, I’ve explored a range of tools and frameworks, from building interactive portfolios to task management apps. I’m eager to contribute to innovative projects and grow as a full-stack developer.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="section skills-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <div className="skills-badges">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <span>{skill.name}</span>
              <span className="level">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="section projects-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SpotlightCard spotlightColor="rgba(0, 255, 204, 0.2)">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" ref={certificationsRef} className="section certifications-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Certifications & Awards
        </motion.h2>
        <div className="certifications-list">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="certification-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SpotlightCard spotlightColor="rgba(0, 255, 204, 0.2)">
                <h3>{cert.title}</h3>
                <p>
                  {cert.issuer} - {cert.date}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="section contact-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="form-group"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div
            className="form-group"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div
            className="form-group"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Send
          </motion.button>
        </motion.form>
      </section>
    </div>
  );
};

export default Home;