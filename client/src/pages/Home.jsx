import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";

const features = [
  {
    icon: "🤖",
    title: "AI-Powered Insights",
    description:
      "Get personalized career recommendations using advanced AI analysis.",
  },
  {
    icon: "📄",
    title: "Resume Analysis",
    description:
      "Upload your resume and receive detailed AI feedback to improve it.",
  },
  {
    icon: "🎯",
    title: "Goal Tracking",
    description:
      "Monitor your progress towards your educational and career goals.",
  },
];

const steps = [
  "Create your profile with education and interests",
  "Analyze your resume using AI-powered tools",
  "Receive personalized career and education advice",
  "Track progress and refine your path",
];

const testimonials = [
  {
    name: "Alice Johnson",
    quote: "CareerGuide helped me find my perfect career path effortlessly!",
  },
  {
    name: "Michael Smith",
    quote: "The resume analyzer gave actionable tips that got me noticed.",
  },
  {
    name: "Priya Patel",
    quote: "I love how the platform is tailored exactly to my profile.",
  },
];

export default function Home() {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col overflow-x-hidden">
      {/* Floating bubbles */}
      <div className="bubbles fixed inset-0 z-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`bubble bubble-${i + 1}`} />
        ))}
      </div>

      <div className="relative z-10 flex flex-col w-full">
        <HeroSection />

        {/* Features Section */}
        <motion.section
          className="max-w-7xl mx-auto my-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-10 bg-gray-800 bg-opacity-60 rounded-xl p-8 shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {features.map(({ icon, title, description }, i) => (
            <motion.div
              key={title}
              className={`p-6 rounded-2xl shadow-lg cursor-default transition-transform hover:scale-105 border-2 ${
                i % 2 === 0
                  ? "border-purple-600 bg-gradient-to-tr from-purple-900 to-indigo-900"
                  : "border-indigo-600 bg-gradient-to-tr from-indigo-900 to-purple-900"
              } neon-glow-soft`}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-7xl mb-6">{icon}</div>
              <h3 className="text-3xl font-bold mb-3 neon-glow-soft-text">
                {title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* How It Works Section */}
        <section className="max-w-5xl mx-auto my-20 px-6 bg-gradient-to-b from-gray-850 via-gray-900 to-gray-850 rounded-xl shadow-lg p-12">
          <h2 className="text-5xl font-extrabold mb-12 text-center neon-glow-soft-text drop-shadow-lg">
            How It Works
          </h2>
          <ol className="flex flex-col md:flex-row gap-10 text-gray-300 text-lg">
            {steps.map((step, index) => (
              <motion.li
                key={index}
                className="bg-gray-800 bg-opacity-60 rounded-xl p-5 shadow-md flex-1 flex items-start space-x-5 border-l-4 border-purple-600"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mt-1">
                  {index + 1}
                </div>
                <p className="leading-relaxed">{step}</p>
              </motion.li>
            ))}
          </ol>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-5xl mx-auto my-20 px-6 bg-gradient-to-t from-indigo-900 via-purple-900 to-indigo-900 rounded-xl shadow-xl p-10">
          <h2 className="text-5xl font-extrabold mb-12 text-center text-white neon-glow-soft-text drop-shadow-lg">
            What Users Say
          </h2>
          <motion.div className="space-y-10 text-center">
            {testimonials.map(({ name, quote }, i) => (
              <motion.blockquote
                key={name}
                className="bg-gray-800 bg-opacity-75 p-8 rounded-2xl italic shadow-lg max-w-3xl mx-auto neon-glow-soft-text"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: i * 0.5 }}
              >
                “{quote}” — <span className="font-bold">{name}</span>
              </motion.blockquote>
            ))}
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-700 py-16 px-6 text-center rounded-t-[3rem] shadow-2xl max-w-6xl mx-auto mb-24">
          <h2 className="text-5xl font-extrabold mb-8 text-white neon-glow-soft-text drop-shadow-lg">
            Ready to start your journey?
          </h2>
          <motion.button
            whileHover={{ scale: 1.12, boxShadow: "0 0 20px #bb86fc" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-700 rounded-full px-12 py-5 font-extrabold shadow-lg neon-button-soft transition-all duration-300"
            onClick={() => (window.location.href = "/signup")}
            aria-label="Get started with signup"
          >
            Get Started Now
          </motion.button>
        </section>
      </div>

      {/* Soft neon glow CSS */}
      <style>{`
        .neon-glow-soft-text {
          text-shadow:
            0 0 4px #bb86fc88,
            0 0 8px #bb86fc66,
            0 0 12px #7c3aed44;
        }
        .neon-glow-soft {
          box-shadow:
            0 0 8px #bb86fc88,
            0 0 12px #bb86fc66,
            0 0 18px #7c3aed44;
          transition: box-shadow 0.3s ease;
        }
        .neon-glow-soft:hover {
          box-shadow:
            0 0 14px #bb86fcbb,
            0 0 20px #bb86fc99,
            0 0 25px #7c3aed88;
        }
        .neon-button-soft {
          transition: box-shadow 0.3s ease;
        }
        .neon-button-soft:hover {
          box-shadow:
            0 0 20px #bb86fcdd,
            0 0 40px #bb86fcbb,
            0 0 60px #7c3aedaa;
        }
        .bubbles {
          position: fixed;
          width: 100%;
          height: 100%;
          overflow: visible;
          z-index: 0;
          pointer-events: none;
        }
        .bubble {
  position: absolute;
  bottom: -100px;
  border-radius: 50%;
  filter: blur(4px); /* less blur for sharper edges */
  opacity: 0.8; /* higher opacity */
  animation-name: floatUp;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

/* Darker and higher contrast bubble colors */
.bubble-1 { width: 45px; height: 45px; left: 10%; background: rgba(80, 30, 180, 0.8); animation-duration: 12s; animation-delay: 0s; }
.bubble-2 { width: 65px; height: 65px; left: 20%; background: rgba(50, 70, 160, 0.75); animation-duration: 18s; animation-delay: 3s; }
.bubble-3 { width: 50px; height: 50px; left: 30%; background: rgba(90, 40, 200, 0.8); animation-duration: 15s; animation-delay: 6s; }
.bubble-4 { width: 70px; height: 70px; left: 45%; background: rgba(75, 30, 170, 0.8); animation-duration: 20s; animation-delay: 2s; }
.bubble-5 { width: 40px; height: 40px; left: 60%; background: rgba(70, 55, 190, 0.78); animation-duration: 14s; animation-delay: 4s; }
.bubble-6 { width: 55px; height: 55px; left: 75%; background: rgba(60, 70, 210, 0.8); animation-duration: 17s; animation-delay: 5s; }
.bubble-7 { width: 55px; height: 55px; left: 85%; background: rgba(78, 35, 160, 0.8); animation-duration: 13s; animation-delay: 1s; }
.bubble-8 { width: 50px; height: 50px; left: 90%; background: rgba(80, 50, 230, 0.78); animation-duration: 16s; animation-delay: 7s; }
.bubble-9 { width: 45px; height: 45px; left: 5%; background: rgba(65, 30, 180, 0.78); animation-duration: 19s; animation-delay: 8s; }
.bubble-10 { width: 50px; height: 50px; left: 95%; background: rgba(40, 60, 200, 0.75); animation-duration: 21s; animation-delay: 10s; }

        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-120vh) scale(1.3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
