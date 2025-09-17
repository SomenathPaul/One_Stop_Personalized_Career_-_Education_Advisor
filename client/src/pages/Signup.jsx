import MultiStepForm from "../components/MultiStepForm";

export default function Signup() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-gray-900 to-gray-800 p-6">
      <div className="w-full max-w-4xl rounded-2xl shadow-xl bg-gray-900 p-8 text-white">
        <h1 className="text-4xl font-bold mb-8 text-center">Create Account</h1>
        <MultiStepForm />
      </div>
    </main>
  );
}
