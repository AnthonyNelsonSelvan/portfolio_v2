import { motion } from "framer-motion";

const Stagerred = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Stagerred;