export default function RecommendationCard({
  careerName,
  fitScore,
  description,
}) {
  return (
    <div className="bg-gradient-to-tr from-purple-800 to-indigo-900 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer border border-purple-600">
      <h2 className="text-2xl font-semibold mb-2">{careerName}</h2>
      <p className="text-purple-300 font-bold mb-2">
        AI Fit Score: {fitScore}%
      </p>
      <p className="text-gray-300">{description}</p>
      <button
        className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold text-white transition"
        onClick={() => alert(`View details for ${careerName}`)}
      >
        View Details
      </button>
    </div>
  );
}
