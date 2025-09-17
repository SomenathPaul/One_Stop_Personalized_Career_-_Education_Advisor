import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: (
      <svg
        className="w-10 h-10 text-purple-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 20l9-5-9-5-9 5 9 5z" />
        <path d="M12 12l9-5-9-5-9 5 9 5z" />
      </svg>
    ),
    title: "AI-driven Insights",
    description:
      "Get personalized career recommendations powered by AI tailored to your background.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-purple-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Real-time Resume Analysis",
    description:
      "Optimize your resume with instant feedback to land your dream job.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-purple-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M3 10h18M3 6h18M3 14h18M3 18h18" />
      </svg>
    ),
    title: "Comprehensive Dashboard",
    description:
      "Track your career goals and progress with an intuitive dashboard.",
  },
];

export default function HeroSection() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-x-hidden overflow-y-auto">
      {/* Multi-layered Particles Background */}
      <Particles
        id="tsparticles-main"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: ["repulse", "grab"] },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 120, duration: 0.6 },
              grab: { distance: 150, links: { opacity: 0.4 } },
              push: { quantity: 4 },
            },
          },
          particles: {
            number: { value: 70, density: { enable: true, area: 900 } },
            color: { value: ["#a78bfa", "#8b5cf6", "#c4b5fd", "#d8b4fe"] },
            shape: { type: ["circle", "star"] },
            opacity: {
              value: 0.7,
              anim: { enable: true, speed: 1, opacity_min: 0.2, sync: false },
            },
            size: {
              value: { min: 1, max: 5 },
              anim: { enable: true, speed: 2, size_min: 1, sync: false },
            },
            links: {
              enable: true,
              distance: 130,
              color: "#8b5cf6",
              opacity: 0.3,
              width: 1.2,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "bounce" },
              attract: { enable: false },
            },
          },
          detectRetina: true,
          background: { color: "transparent" },
        }}
        className="absolute inset-0 z-0"
      />

      <motion.h1
        className="relative text-5xl md:text-6xl font-extrabold mb-6 leading-tight max-w-4xl cursor-default z-10
           bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 120, damping: 20 }}
        whileHover={{
          scale: 1.07,
          rotate: 1.5,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
      >
        One-Stop{" "}
        <span className="bg-clip-text text-transparent">
          Personalized Career
        </span>{" "}
        &{" "}
        <span className="bg-clip-text text-transparent">Education Advisor</span>
      </motion.h1>

      <motion.p
        className="relative text-lg md:text-xl max-w-3xl mb-10 text-gray-300 z-10"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2 }}
      >
        Discover your best-fit career path powered by AI-driven insights
        tailored to your personal and educational background.
      </motion.p>

      {/* Cards container */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full px-4 mb-10">
        {highlights.map(({ icon, title, description }) => (
          <motion.div
            key={title}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(139, 92, 246, 0.6)",
            }}
            className="bg-gradient-to-r from-purple-700 to-indigo-700 p-6 rounded-xl shadow-lg cursor-pointer flex flex-col items-center text-center"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{
          scale: 1.1,
          rotate: [0, 2, -2, 0],
          boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)",
        }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-bold text-lg shadow-lg relative overflow-hidden"
        onClick={() => (window.location.href = "/signup")}
        aria-label="Get Started with Signup"
      >
        <motion.span
          className="absolute inset-0 bg-white opacity-10 rounded-full"
          animate={{ x: [-200, 200] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
        Get Started
      </motion.button>

      {/* Gradient animation CSS */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
