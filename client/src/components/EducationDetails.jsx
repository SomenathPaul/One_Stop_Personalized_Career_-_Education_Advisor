import { useState } from "react";

export default function EducationDetails() {
  const [formData, setFormData] = useState({
    highestQualification: "",
    university: "",
    graduationYear: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="highestQualification"
        value={formData.highestQualification}
        onChange={handleChange}
        placeholder="Highest Qualification"
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
        required
      />
      <input
        type="text"
        name="university"
        value={formData.university}
        onChange={handleChange}
        placeholder="University/College Name"
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
        required
      />
      <input
        type="number"
        name="graduationYear"
        value={formData.graduationYear}
        onChange={handleChange}
        placeholder="Year of Graduation"
        min="1900"
        max={new Date().getFullYear() + 5} // Future-proof
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
        required
      />
    </form>
  );
}
