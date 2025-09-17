import { Link } from "react-router-dom";
import RecommendationCard from "../components/RecommendationCard";

const demoDetails = {
  1: {
    careerName: "Software Engineer",
    fitScore: 95,
    description: "Strong fit with your education and interests in technology.",
  },
  2: {
    careerName: "Data Scientist",
    fitScore: 92,
    description: "Your analytical skills align well with this career.",
  },
  3: {
    careerName: "UI/UX Designer",
    fitScore: 88,
    description: "Creative skills and interest in design match well.",
  },
};

export default function Recommendations() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 bg-gray-900 rounded-xl text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Career Recommendations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(demoDetails).map(([id, career]) => (
          <Link key={id} to={`/recommendations/${id}`}>
            <RecommendationCard
              careerName={career.careerName}
              fitScore={career.fitScore}
              description={career.description}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
