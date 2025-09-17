import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import EducationDetails from "./EducationDetails";
import InterestDetails from "./InterestDetails";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  // Lifted form state for all steps
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    highestQualification: "",
    university: "",
    graduationYear: "",
    interests: "",
  });

  // Update form data from children
  const updateFormData = (stepData) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
  };

  const nextStep = () => setStep((cur) => Math.min(cur + 1, 3));
  const prevStep = () => setStep((cur) => Math.max(cur - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    // For demo: log form data, replace with API call
    console.log("Submitting form data:", formData);

    try {
      // Example API call, replace with your backend endpoint
      /*
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Signup failed");
      alert("Account created successfully!");
      // Redirect or reset form here
      */

      alert("Account created successfully! (Demo)");
    } catch (error) {
      alert("Error creating account: " + error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-8 bg-gray-900 rounded-2xl shadow-lg border border-gray-700 text-white"
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Step {step} of 3</h2>
        <div className="flex justify-center gap-4">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-8 h-2 rounded-full transition-colors duration-500 ${
                step === s ? "bg-purple-600" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="min-h-[300px]">
        {step === 1 && (
          <PersonalDetails data={formData} updateFormData={updateFormData} />
        )}
        {step === 2 && (
          <EducationDetails data={formData} updateFormData={updateFormData} />
        )}
        {step === 3 && (
          <InterestDetails data={formData} updateFormData={updateFormData} />
        )}
      </div>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={prevStep}
          disabled={step === 1}
          className="px-5 py-2 bg-gray-700 rounded-lg font-semibold hover:bg-gray-600 transition disabled:opacity-50"
        >
          Previous
        </button>
        {step < 3 ? (
          <button
            type="button"
            onClick={nextStep}
            className="px-5 py-2 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="px-5 py-2 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Create Account
          </button>
        )}
      </div>
    </form>
  );
}
