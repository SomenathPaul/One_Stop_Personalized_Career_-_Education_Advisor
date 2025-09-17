// src/components/ResumeUpload.jsx
import { motion } from "framer-motion";

export default function ResumeUpload({ resumeFile, setResumeFile }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "application/pdf" || file.type.includes("word"))
    ) {
      setResumeFile(file);
    } else {
      alert("Please upload a PDF or Word document.");
      setResumeFile(null);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center border-2 border-dashed border-purple-600 rounded-xl p-10 cursor-pointer hover:border-purple-400 transition-colors"
      whileHover={{ scale: 1.03 }}
      onClick={() => document.getElementById("resume-upload").click()}
    >
      <input
        type="file"
        id="resume-upload"
        className="hidden"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
      />
      <p className="text-gray-300 mb-2">
        {resumeFile ? (
          <span className="text-green-400 font-semibold">
            Selected: {resumeFile.name}
          </span>
        ) : (
          "Click here or drag & drop your resume (PDF or Word)"
        )}
      </p>
      <svg
        className="w-12 h-12 text-purple-600"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v-4a4 4 0 014-4h4m0 12v-4a4 4 0 014-4h4m-8-4v12"
        />
      </svg>
    </motion.div>
  );
}
