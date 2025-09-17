import { useState } from "react";

export default function PersonalDetails() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
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
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address"
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-purple-500 focus:outline-none transition"
        required
      />
    </form>
  );
}
