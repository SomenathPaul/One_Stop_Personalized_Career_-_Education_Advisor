// src/components/AnalysisResult.jsx
import { motion } from "framer-motion";

export default function AnalysisResult({ analysis }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-10 bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-4">
        Resume Score: {analysis.score}%
      </h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-green-400 mb-2">Strengths</h3>
        <ul className="list-disc list-inside text-green-300">
          {analysis.strengths.map((str, idx) => (
            <li key={idx}>{str}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-red-400 mb-2">
          Areas for Improvement
        </h3>
        <ul className="list-disc list-inside text-red-300">
          {analysis.improvements.map((imp, idx) => (
            <li key={idx}>{imp}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
