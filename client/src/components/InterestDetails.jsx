import { useState } from "react";

export default function InterestDetails({ updateFormData }) {
  const [formData, setFormData] = useState({
    careerInterests: [],
    skills: "",
    learningStyle: "",
    futureGoal: "",
    domainSelection: [],
    description: "",
  });

  const [interestInput, setInterestInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      updateFormData?.(updated);
      return updated;
    });
  };

  const handleCheckboxChange = (domain) => {
    setFormData((prev) => {
      let updatedDomains = [...prev.domainSelection];
      if (updatedDomains.includes(domain)) {
        updatedDomains = updatedDomains.filter((d) => d !== domain);
      } else {
        updatedDomains.push(domain);
      }
      const updated = { ...prev, domainSelection: updatedDomains };
      updateFormData?.(updated);
      return updated;
    });
  };

  const addInterest = (e) => {
    e.preventDefault();
    if (interestInput.trim() !== "") {
      setFormData((prev) => {
        const updated = {
          ...prev,
          careerInterests: [...prev.careerInterests, interestInput.trim()],
        };
        updateFormData?.(updated);
        return updated;
      });
      setInterestInput("");
    }
  };

  const removeInterest = (interest) => {
    setFormData((prev) => {
      const updated = {
        ...prev,
        careerInterests: prev.careerInterests.filter((i) => i !== interest),
      };
      updateFormData?.(updated);
      return updated;
    });
  };

  const learningStyles = ["Online", "Offline", "Hybrid"];
  const futureGoals = [
    "Higher Studies Abroad",
    "Competitive Exams (JEE/NEET/UPSC)",
    "Job-Oriented Training",
    "Startup / Entrepreneurship",
  ];
  const domainOptions = [
    "Tech (AI, Web, Data Science)",
    "Healthcare",
    "Arts & Humanities",
    "Commerce & Finance",
    "Law & Governance",
    "Design & Creativity",
    "Social Sciences",
  ];

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      {/* Career Interests */}
      <div>
        <label className="block mb-2 font-semibold">Career Interests</label>
        <div className="flex flex-wrap gap-2 mb-2">
          {formData.careerInterests.map((interest) => (
            <span
              key={interest}
              className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {interest}
              <button
                type="button"
                onClick={() => removeInterest(interest)}
                className="text-xs bg-red-500 px-2 py-0.5 rounded"
              >
                x
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={interestInput}
            onChange={(e) => setInterestInput(e.target.value)}
            placeholder="Type an interest and press Add"
            className="flex-1 p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
          />
          <button
            type="button"
            onClick={addInterest}
            className="px-4 py-2 bg-purple-600 rounded-lg text-white font-semibold hover:bg-purple-700"
          >
            Add
          </button>
        </div>
      </div>

      {/* Skills / Hobbies */}
      <div>
        <label className="block mb-2 font-semibold">Skills / Hobbies</label>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="E.g., Coding, Drawing, Music"
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
        />
      </div>

      {/* Learning Style */}
      <div>
        <label className="block mb-2 font-semibold">
          Learning Style Preference
        </label>
        <select
          name="learningStyle"
          value={formData.learningStyle}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
        >
          <option value="">Select Preference</option>
          {learningStyles.map((style) => (
            <option key={style} value={style}>
              {style}
            </option>
          ))}
        </select>
      </div>

      {/* Future Goal */}
      <div>
        <label className="block mb-2 font-semibold">Future Goal</label>
        <select
          name="futureGoal"
          value={formData.futureGoal}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
        >
          <option value="">Select Future Goal</option>
          {futureGoals.map((goal) => (
            <option key={goal} value={goal}>
              {goal}
            </option>
          ))}
        </select>
      </div>

      {/* Domain Selection */}
      <div>
        <label className="block mb-2 font-semibold">Domain Selection</label>
        <div className="grid grid-cols-2 gap-2">
          {domainOptions.map((domain) => (
            <label key={domain} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.domainSelection.includes(domain)}
                onChange={() => handleCheckboxChange(domain)}
                className="w-4 h-4"
                required={formData.domainSelection.length === 0}
              />
              {domain}
            </label>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block mb-2 font-semibold">
          Describe Your Interests & Goals
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Write about your passions, goals, and career interests..."
          rows={5}
          required
          className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition resize-none"
        />
      </div>
    </form>
  );
}
