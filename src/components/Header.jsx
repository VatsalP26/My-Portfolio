import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="header glass"
    >
      <h1>Vatsal Prajapati</h1>
    </motion.header>
  );
};

export default Header;