// src/components/Loader.jsx
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <motion.div
        initial={{ scale: 0.5, opacity: 0.3 }}
        animate={{ scale: 1, opacity: 1, rotate: 360 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="h-12 w-12 rounded-full border-t-4 border-b-4 border-purple-500 border-solid"
        style={{
          borderLeft: "4px solid transparent",
          borderRight: "4px solid transparent",
        }}
      />
    </div>
  );
}
