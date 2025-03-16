import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Particles from "../components/Particles";
import SpotlightCard from "../components/SpotlightCard";
import PixelCard from "../components/PixelCard";
import Carousel from "../components/Carousel";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css";
import emailjs from "@emailjs/browser"; // Import EmailJS

// Importing SVG icons
import ReactIcon from "../assets/icons/react.svg";
import JavaScriptIcon from "../assets/icons/javascript.svg";
import CSSIcon from "../assets/icons/css.svg";
import HTMLIcon from "../assets/icons/html.svg";
import GitIcon from "../assets/icons/github.svg";
import PythonIcon from "../assets/icons/python.svg";
import JavaIcon from "../assets/icons/java.svg";
import ReactNativeIcon from "../assets/icons/reactNative.svg";
import PostgreSQLIcon from "../assets/icons/postgresql.svg";
import MongoDBIcon from "../assets/icons/mongodb.svg";
import SQLIcon from "../assets/icons/sql.png";
import DockerIcon from "../assets/icons/docker.svg";
import SwiftIcon from "../assets/icons/swift.svg";
import DevOpsIcon from "../assets/icons/devops.png";
import PostmanIcon from "../assets/icons/postman.svg";

// Importing certificate and award images
import deansListFall2022 from "../assets/images/Dean_letter-Fall2022.jpg";
import deansListWinter2023 from "../assets/images/Dean_letter-Winter2023.jpg";
import machineLearningCert from "../assets/images/MachineLearningCert.jpg";
import springBootCert from "../assets/images/SpringBootCert.jpg";
import WebDevelopmentCert from "../assets/images/WebDevelopmentCert.jpg";

// // Debug: Log the imported image URLs
// console.log("Imported Images:", {
//   machineLearningCert,
//   springBootCert,
//   WebDevelopmentCert,
//   deansListFall2022,
//   deansListWinter2023,
// });

const Home = () => {
  const [currentSection, setCurrentSection] = useState("hero");

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);
  const formRef = useRef(); 

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

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current.reset(); // Clear the form
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  const skills = [
    { name: "React.js", icon: ReactIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "CSS/SCSS", icon: CSSIcon },
    { name: "HTML", icon: HTMLIcon },
    { name: "Git", icon: GitIcon },
    { name: "Python", icon: PythonIcon },
    { name: "Java", icon: JavaIcon },
    { name: "ReactNative", icon: ReactNativeIcon },
    { name: "PostgreSQL", icon: PostgreSQLIcon },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "SQL", icon: SQLIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "Swift", icon: SwiftIcon },
    { name: "DevOps", icon: DevOpsIcon },
    { name: "Postman", icon: PostmanIcon },
  ];

  const projects = [
    {
      title: "Online Booking App",
      description: "A booking application built with C#.",
      link: "https://github.com/VatsalP26/OnlineBookingApp",
    },
    {
      title: "Online Booking App 2.0",
      description: "An enhanced version of the booking app with improved features.",
      link: "https://github.com/VatsalP26/OnlineBookingApp2.0",
    },
  ];

  const certificates = [
    {
      image: machineLearningCert,
      text: "LinkedIn: Machine Learning & AI Foundations: Linear Regression",
    },
    {
      image: springBootCert,
      text: "LinkedIn: Spring Boot 2.0 Essential Training",
    },
    {
      image: WebDevelopmentCert,
      text: "LinkedIn: Succeeding in Web Development: Full Stack and Front End",
    },
    {
      image: deansListFall2022,
      text: "Dean’s List: Fall 2022",
    },
    {
      image: deansListWinter2023,
      text: "Dean’s List: Winter 2023",
    },
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    adaptiveHeight: true,
    vertical: false, 
    onInit: () => console.log("Carousel initialized"),
    onReInit: () => console.log("Carousel re-initialized"),
    onError: (error) => console.error("Carousel error:", error),
  };

  return (
    <div className="home">
      <Particles className="particles-bg" />

      <nav className="sidebar-nav">
        <a href="#hero" className={currentSection === "hero" ? "active" : ""}>
          Home
        </a>
        <a href="#about" className={currentSection === "about" ? "active" : ""}>
          About
        </a>
        <a href="#skills" className={currentSection === "skills" ? "active" : ""}>
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
          I build modern, responsive web applications with a focus on performance
          and usability.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="social-links"
        >
          <a
            href="https://github.com/VatsalP26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/vatsal-prajapati26/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">LinkedIn</span>
          </a>
        </motion.div>
      </section>

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
          I’m Vatsal Prajapati, an undergrad student pursuing Advanced Diploma in
          Computer Programming and Analysis. I’m passionate about creating modern,
          responsive web applications using technologies like React.js and Framer
          Motion.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          In my projects, I’ve explored a range of tools and frameworks, from
          building interactive Web applications to Mobile applications. I’m eager to
          contribute to innovative projects and grow as a full-stack developer.
        </motion.p>
      </section>

      <section id="skills" ref={skillsRef} className="section skills-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <PixelCard variant="blue">
                <div className="skill-content">
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="skill-icon"
                  />
                  <span>{skill.name}</span>
                </div>
              </PixelCard>
            </motion.div>
          ))}
        </div>
      </section>

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

      <section id="certifications" ref={certificationsRef} className="section certifications-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Certifications & Awards
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Slider
            {...carouselSettings}
            className="certificate-slider"
            style={{ width: "500px" }} // Match the previous width
          >
            {certificates.map((cert, index) => (
              <div key={index} className="certificate-slide">
                <img
                  src={cert.image}
                  alt={cert.text}
                  onError={(e) => console.error(`Image load failed for ${cert.text}:`, e)}
                  onLoad={() => console.log(`Image loaded: ${cert.text}`)}
                  style={{ width: "100%", height: "auto" }}
                />
                <p>{cert.text}</p>
              </div>
            ))}
          </Slider>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="carousel-message"
        >
          Hover to stop rotating
        </motion.p>
      </section>

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
          ref={formRef}
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
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
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
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
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
              name="message" // Match EmailJS template variable
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