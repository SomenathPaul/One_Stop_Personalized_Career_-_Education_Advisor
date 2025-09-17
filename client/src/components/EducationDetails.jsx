import { useState } from "react";

export default function EducationDetails({ data, updateFormData }) {
  const [formData, setFormData] = useState({
    educationLevel: "",
    degree: "",
    stream: "",
    performance: "",
    institute: "",
    favoriteSubjects: "",
    languages: "",
    previousEducation: [],
    details: {},
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      updateFormData(updated);
      return updated;
    });
  };

  const handleCheckboxChange = (level) => {
    setFormData((prev) => {
      let updatedList = [...prev.previousEducation];
      if (updatedList.includes(level)) {
        updatedList = updatedList.filter((item) => item !== level);
      } else {
        updatedList.push(level);
      }
      const updated = { ...prev, previousEducation: updatedList };
      updateFormData(updated);
      return updated;
    });
  };

  const handleDetailChange = (level, field, value) => {
    setFormData((prev) => {
      const updatedDetails = {
        ...prev.details,
        [level]: { ...prev.details[level], [field]: value },
      };
      const updated = { ...prev, details: updatedDetails };
      updateFormData(updated);
      return updated;
    });
  };

  const levels = [
    "10th",
    "12th",
    "Undergraduate",
    "Graduate",
    "Diploma",
    "ITI",
    "Others",
  ];

  const degreeOptions = [
    "B.Tech",
    "B.Sc",
    "B.Com",
    "BA",
    "M.Tech",
    "M.Sc",
    "MBA",
    "PhD",
    "Other",
  ];

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      {/* Current Education Level */}
      <select
        name="educationLevel"
        value={formData.educationLevel}
        onChange={handleChange}
        required
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
      >
        <option value="">Select Current Education Level</option>
        {levels.map((lvl) => (
          <option key={lvl} value={lvl}>
            {lvl}
          </option>
        ))}
      </select>

      {/* Current Degree */}
      <select
        name="degree"
        value={formData.degree}
        onChange={handleChange}
        required
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
      >
        <option value="">Select Current Degree</option>
        {degreeOptions.map((deg) => (
          <option key={deg} value={deg}>
            {deg}
          </option>
        ))}
      </select>

      {/*  Current Stream */}
      <input
        type="text"
        name="stream"
        value={formData.stream}
        onChange={handleChange}
        placeholder="Enter your stream (e.g., Science, Commerce, Arts)"
        required
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
      />

      {/* Current Academic Performance */}
      <input
        type="text"
        name="performance"
        value={formData.performance}
        onChange={handleChange}
        placeholder="Enter percentage/CGPA"
        required
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
      />

      {/*  Current Institute Name */}
      <input
        type="text"
        name="institute"
        value={formData.institute}
        onChange={handleChange}
        placeholder="Enter Institute Name"
        required
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
      />

      {/*  Favorite Subjects */}
      <input
        type="text"
        name="favoriteSubjects"
        value={formData.favoriteSubjects}
        onChange={handleChange}
        placeholder="Favourite Subjects E.g., Math, Physics, Computer Science"
        required
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
      />

      {/*  Languages Known */}
      <input
        type="text"
        name="languages"
        value={formData.languages}
        onChange={handleChange}
        placeholder="Languages Known E.g., English, Hindi, Bengali"
        required
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
      />

      {/*  Previous Education (Multiple Choice) */}
      <div className="space-y-2">
        <p className="font-semibold">Previous Education</p>
        <div className="grid grid-cols-2 gap-2">
          {levels.map((lvl) => (
            <label key={lvl} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.previousEducation.includes(lvl)}
                onChange={() => handleCheckboxChange(lvl)}
                className="w-4 h-4"
              />
              {lvl}
            </label>
          ))}
        </div>
      </div>

      {/*  Dynamic Fields for Each Selected Previous Education */}
      {formData.previousEducation.map((lvl) => (
        <div
          key={lvl}
          className="p-4 mt-4 border border-gray-600 rounded-lg bg-gray-800"
        >
          <h3 className="font-bold mb-3">{lvl} Details</h3>

          <input
            type="text"
            placeholder="Institute Name"
            value={formData.details[lvl]?.institute || ""}
            onChange={(e) =>
              handleDetailChange(lvl, "institute", e.target.value)
            }
            required
            className="w-full p-3 mb-3 rounded-lg bg-gray-700 text-white border border-gray-500 focus:border-purple-500 focus:outline-none transition"
          />

          <select
            value={formData.details[lvl]?.degree || ""}
            onChange={(e) => handleDetailChange(lvl, "degree", e.target.value)}
            required
            className="w-full p-3 mb-3 rounded-lg bg-gray-700 text-white border border-gray-500 focus:border-purple-500 focus:outline-none transition"
          >
            <option value="">Select Degree</option>
            {degreeOptions.map((deg) => (
              <option key={deg} value={deg}>
                {deg}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Stream (e.g., Science, Commerce, Arts)"
            value={formData.details[lvl]?.stream || ""}
            onChange={(e) => handleDetailChange(lvl, "stream", e.target.value)}
            required
            className="w-full p-3 mb-3 rounded-lg bg-gray-700 text-white border border-gray-500 focus:border-purple-500 focus:outline-none transition"
          />

          <input
            type="text"
            placeholder="Marks / CGPA"
            value={formData.details[lvl]?.marks || ""}
            onChange={(e) => handleDetailChange(lvl, "marks", e.target.value)}
            required
            className="w-full p-3 mb-3 rounded-lg bg-gray-700 text-white border border-gray-500 focus:border-purple-500 focus:outline-none transition"
          />

          <input
            type="number"
            placeholder="Year of Completion"
            min="1900"
            max={new Date().getFullYear() + 5}
            value={formData.details[lvl]?.year || ""}
            onChange={(e) => handleDetailChange(lvl, "year", e.target.value)}
            required
            className="w-full p-3 mb-3 rounded-lg bg-gray-700 text-white border border-gray-500 focus:border-purple-500 focus:outline-none transition"
          />
        </div>
      ))}
    </form>
  );
}
