import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    // Normally, send data to backend or email service here
  };

  return (
    <main className="max-w-4xl mx-auto p-8 bg-gray-900 rounded-xl text-white min-h-screen motion-safe:animate-fadeInUp">
      <h1 className="text-4xl font-extrabold mb-6 tracking-wide">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition transform focus:scale-105"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition transform focus:scale-105"
        />
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition transform focus:scale-105 resize-none"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-purple-600 rounded-xl font-semibold hover:bg-purple-700 transition transform hover:scale-105"
          disabled={submitted}
        >
          {submitted ? "Message Sent!" : "Send Message"}
        </button>
      </form>
    </main>
  );
}
