import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const demoDetails = {
  1: {
    careerName: "Software Engineer",
    whyRecommended:
      "Strong fit with your education and interests in technology.",
    subjects: ["Computer Science", "Mathematics", "Algorithms"],
    colleges: ["MIT", "Stanford", "Carnegie Mellon University"],
    jobRoles: [
      "Frontend Developer",
      "Backend Developer",
      "Full-Stack Engineer",
    ],
    salaries: "$70k - $120k per year",
    growth: "High growth with demand increasing across industries.",
  },
  2: {
    careerName: "Data Scientist",
    whyRecommended:
      "Your analytical skills and educational background align well.",
    subjects: ["Statistics", "Machine Learning", "Python Programming"],
    colleges: ["Harvard", "UC Berkeley", "University of Washington"],
    jobRoles: ["Data Analyst", "ML Engineer", "Research Scientist"],
    salaries: "$80k - $130k per year",
    growth: "Rapidly growing field with expanding application areas.",
  },
  3: {
    careerName: "UI/UX Designer",
    whyRecommended:
      "Creative skills and interest in user-centric design match well.",
    subjects: [
      "Design Principles",
      "Human-Computer Interaction",
      "Graphic Design",
    ],
    colleges: ["Rhode Island School of Design", "Parsons", "Pratt Institute"],
    jobRoles: ["UX Researcher", "Visual Designer", "Product Designer"],
    salaries: "$60k - $90k per year",
    growth: "Steady growth as companies focus on customer experience.",
  },
};

export default function RecommendationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // Simulated fetch for career details by id
    setDetails(demoDetails[id]);
  }, [id]);

  if (!details) return <div className="text-white p-8">Loading details...</div>;

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 bg-gray-900 rounded-xl text-white min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-lg font-semibold transition"
      >
        &larr; Back
      </button>
      <h1 className="text-4xl font-bold mb-4">{details.careerName}</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Why Recommended?</h2>
        <p className="text-gray-300">{details.whyRecommended}</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Subjects to Focus On</h2>
        <ul className="list-disc pl-6 text-gray-300">
          {details.subjects.map((subj) => (
            <li key={subj}>{subj}</li>
          ))}
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          Possible Colleges/Courses
        </h2>
        <ul className="list-disc pl-6 text-gray-300">
          {details.colleges.map((college) => (
            <li key={college}>{college}</li>
          ))}
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Job Roles & Salaries</h2>
        <p className="text-gray-300 mb-2">{details.jobRoles.join(", ")}</p>
        <p className="text-gray-300">{details.salaries}</p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Growth Prospects</h2>
        <p className="text-gray-300">{details.growth}</p>
      </section>
    </main>
  );
}
