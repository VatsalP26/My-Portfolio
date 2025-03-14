import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p>&copy; 2025 [Your Name]. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;