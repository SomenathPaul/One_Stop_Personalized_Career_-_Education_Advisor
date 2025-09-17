import { useState, useEffect } from "react";

export default function Profile() {
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    phone: "",
    highestQualification: "",
    university: "",
    graduationYear: "",
    interests: "",
  });

  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setProfileData({
        fullName: "Jane Doe",
        email: "jane.doe@example.com",
        phone: "123-456-7890",
        highestQualification: "Bachelor's Degree",
        university: "University of Example",
        graduationYear: "2023",
        interests: "Technology, AI, Design",
      });
      setLoading(false);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    setProfileData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
    setEditing(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white text-xl animate-pulse">
        Loading profile...
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-8 bg-gray-900 rounded-xl text-white min-h-screen motion-safe:animate-fadeInUp">
      <h1 className="text-4xl font-extrabold mb-8 tracking-wide">
        Your Profile
      </h1>
      <div className="space-y-6">
        {[
          { label: "Full Name", name: "fullName", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Phone", name: "phone", type: "tel" },
          {
            label: "Highest Qualification",
            name: "highestQualification",
            type: "text",
          },
          { label: "University", name: "university", type: "text" },
          { label: "Graduation Year", name: "graduationYear", type: "number" },
        ].map(({ label, name, type }) => (
          <div key={name} className="flex flex-col">
            <label className="mb-2 font-semibold">{label}</label>
            <input
              type={type}
              name={name}
              value={profileData[name]}
              onChange={handleChange}
              disabled={!editing}
              className={`p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none transition-transform focus:scale-105 focus:ring-2 focus:ring-purple-500 ${
                editing
                  ? "focus:border-purple-500"
                  : "cursor-not-allowed opacity-60"
              }`}
              autoComplete="off"
            />
          </div>
        ))}
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Interests / Domains</label>
          <textarea
            name="interests"
            rows={4}
            value={profileData.interests}
            onChange={handleChange}
            disabled={!editing}
            className={`p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none transition-transform focus:scale-105 focus:ring-2 focus:ring-purple-500 resize-none ${
              editing ? "" : "cursor-not-allowed opacity-60"
            }`}
          />
        </div>
      </div>

      <div className="mt-8 flex gap-6">
        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="px-8 py-3 bg-purple-600 rounded-xl font-semibold hover:bg-purple-700 transition transform hover:scale-105 motion-safe:animate-fadeInRight"
          >
            Edit Profile
          </button>
        ) : (
          <>
            <button
              onClick={handleSave}
              className="px-8 py-3 bg-indigo-600 rounded-xl font-semibold hover:bg-indigo-700 transition transform hover:scale-105 motion-safe:animate-fadeInRight"
            >
              Save Changes
            </button>
            <button
              onClick={() => setEditing(false)}
              className="px-8 py-3 bg-gray-700 rounded-xl font-semibold hover:bg-gray-600 transition transform hover:scale-105 motion-safe:animate-fadeInRight"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </main>
  );
}
