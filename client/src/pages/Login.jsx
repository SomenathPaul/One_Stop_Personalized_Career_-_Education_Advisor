import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login API call
    setTimeout(() => {
      setLoading(false);
      // TODO: Replace with actual auth logic
      alert("Logged in successfully! (Demo)");
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-tr from-gray-900 to-gray-800 p-6">
      <div className="bg-gray-900 p-10 rounded-2xl shadow-xl w-full max-w-md text-white">
        <h1 className="text-4xl font-bold mb-8 text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-purple-500 text-white transition outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-purple-500 text-white transition outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{" "}
          <a href="/signup" className="text-indigo-500 hover:text-indigo-400">
            Sign Up
          </a>
        </p>
      </div>
    </main>
  );
}
