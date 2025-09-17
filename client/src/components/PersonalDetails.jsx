import { useState, useEffect } from "react";

export default function PersonalDetails({ data, updateFormData }) {
  const [formData, setFormData] = useState({
    fullName: data.fullName || "",
    email: data.email || "",
    phone: data.phone || "",
    password: data.password || "",
    confirmPassword: data.confirmPassword || "",
    age: data.age || "",
    gender: data.gender || "",
    location: data.location || "",
  });

  // Keep parent state updated whenever local state changes
  useEffect(() => {
    updateFormData(formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-6">
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Enter your full name"
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 
        focus:border-purple-500 focus:outline-none transition"
        required
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 
        focus:border-purple-500 focus:outline-none transition"
        required
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your phone number (optional)"
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 
        focus:border-purple-500 focus:outline-none transition"
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter password"
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 
        focus:border-purple-500 focus:outline-none transition"
        required
        minLength={8}
      />

      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm password"
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 
        focus:border-purple-500 focus:outline-none transition"
        required
        minLength={8}
      />

      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Enter your age"
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 
        focus:border-purple-500 focus:outline-none transition"
        required
        min={10}
        max={100}
      />

      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 
        focus:border-purple-500 focus:outline-none transition"
        required
      >
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other / Prefer not to say</option>
      </select>

      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Enter your city/state"
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 
        focus:border-purple-500 focus:outline-none transition"
        required
      />
    </div>
  );
}
