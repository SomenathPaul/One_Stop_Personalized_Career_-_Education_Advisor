// src/layouts/MainLayout.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import FloatingChatButton from "@/components/FloatingChatButton";

export default function MainLayout({ children }) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex-grow max-w-7xl mx-auto w-full px-6 py-12"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <FloatingChatButton />
      <Footer />
    </div>
  );
}
