import { motion } from "framer-motion";

const links = ["About", "Contact", "Privacy Policy"];

export default function Footer() {
  return (
    <footer className="relative w-full bg-gray-900 py-8 px-6 overflow-hidden select-none">
      {/* Animated radial glows with pulsing */}
      <motion.div
        className="absolute -top-10 -left-20 w-72 h-72 bg-purple-700 rounded-full opacity-30 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-10 -right-20 w-72 h-72 bg-indigo-700 rounded-full opacity-30 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.07, 1], opacity: [0.3, 0.42, 0.3] }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.p
          className="text-gray-400 tracking-wide text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          &copy; 2025&nbsp;
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400 animate-gradient-x">
            CareerGuide
          </span>
          . All rights reserved.
        </motion.p>

        <nav className="flex gap-10">
          {links.map((link) => (
            <motion.a
              key={link}
              href={`/${link.toLowerCase().replace(/\s+/g, "")}`}
              className="text-gray-400 text-lg font-semibold tracking-wide relative group focus:outline-none"
              whileHover={{
                scale: 1.05,
                color: "rgb(139 92 246)", // purple-600 tint
                transition: { duration: 0.3 },
              }}
              whileFocus={{
                scale: 1.05,
                color: "rgb(139 92 246)",
                transition: { duration: 0.3 },
              }}
            >
              <span className="relative z-10">{link}</span>
              {/* Underline Slide */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-400 group-hover:w-full group-focus:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>
      </div>
      {/* Gradient animation keyframes */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </footer>
  );
}
