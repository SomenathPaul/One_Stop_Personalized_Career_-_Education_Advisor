import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white p-6 motion-safe:animate-fadeInUp">
      <h1 className="text-8xl font-extrabold mb-4 text-purple-600 animate-pulse">
        404
      </h1>
      <p className="text-2xl mb-6 tracking-wide">Page Not Found</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 transition transform hover:scale-105"
      >
        Go to Home
      </button>
    </main>
  );
}
