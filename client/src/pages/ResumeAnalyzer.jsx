import { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";
import AnalysisResult from "../components/AnalysisResult";
import Loader from "../components/Loader";

export default function ResumeAnalyzer() {
  const [resumeFile, setResumeFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Simulated AI analyze function
  const analyzeResume = () => {
    if (!resumeFile) {
      setError("Please upload a resume file before analysis.");
      return;
    }
    setError(null);
    setLoading(true);

    // Simulate AI logic delay
    setTimeout(() => {
      setLoading(false);
      // Dummy analysis result
      setAnalysis({
        score: 82,
        strengths: [
          "Strong technical skills highlighted",
          "Clear structure and formatting",
          "Relevant project experience",
        ],
        improvements: [
          "Add more quantifiable achievements",
          "Use more action verbs",
          "Tailor summary to job description",
        ],
      });
    }, 2500);
  };

  return (
    <main className="max-w-4xl mx-auto p-8 bg-gray-900 rounded-xl text-white min-h-screen motion-safe:animate-fadeInUp">
      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wide">
        AI-Powered Resume Analyzer
      </h1>
      <ResumeUpload resumeFile={resumeFile} setResumeFile={setResumeFile} />
      <div className="flex justify-center mt-6">
        <button
          onClick={analyzeResume}
          className="px-8 py-3 bg-purple-600 rounded-xl font-semibold hover:bg-purple-700 transition transform hover:scale-105"
        >
          Analyze Resume
        </button>
      </div>

      {error && (
        <p className="mt-4 text-red-500 text-center font-semibold animate-pulse">
          {error}
        </p>
      )}

      {loading && <Loader />}

      {analysis && !loading && <AnalysisResult analysis={analysis} />}
    </main>
  );
}
