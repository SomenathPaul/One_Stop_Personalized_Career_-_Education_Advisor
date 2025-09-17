import { useState, useEffect } from "react";
import RecommendationCard from "../components/RecommendationCard";
import Loader from "../components/Loader";

const demoRecommendations = [
  {
    id: 1,
    careerName: "Software Engineer",
    fitScore: 85,
    description: "Design and develop software applications.",
  },
  {
    id: 2,
    careerName: "Data Scientist",
    fitScore: 78,
    description: "Analyze and interpret complex data for insights.",
  },
  {
    id: 3,
    careerName: "UI/UX Designer",
    fitScore: 72,
    description: "Create user-friendly interfaces and experiences.",
  },
];

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Simulate fetching AI recommendations from backend
    setTimeout(() => {
      setRecommendations(demoRecommendations);
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 bg-gray-900 min-h-screen text-white rounded-xl">
      <h1 className="text-4xl font-bold mb-8">Your Career Recommendations</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recommendations.map(({ id, careerName, fitScore, description }) => (
          <RecommendationCard
            key={id}
            careerName={careerName}
            fitScore={fitScore}
            description={description}
          />
        ))}
      </div>
    </main>
  );
}
