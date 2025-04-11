import React from "react";
import { motion } from "framer-motion";

const WelcomeMessage = ({ user }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md"
    >
      Welcome Back, {user}!
    </motion.div>
  );
};

export default WelcomeMessage;
