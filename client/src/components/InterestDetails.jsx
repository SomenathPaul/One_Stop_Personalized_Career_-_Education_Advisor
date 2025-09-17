import { useState } from "react";

export default function InterestDetails() {
  const [formData, setFormData] = useState({
    interests: "",
  });

  const handleChange = (e) => {
    setFormData({
      interests: e.target.value,
    });
  };

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <textarea
        name="interests"
        value={formData.interests}
        onChange={handleChange}
        placeholder="Describe your interests or preferred domains (e.g., Technology, Arts, Science)"
        rows={5}
        className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition resize-none"
        required
      />
    </form>
  );
}
