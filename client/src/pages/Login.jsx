import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import useAuthStore from "../store/authStore.js";

export default function Login() {
  const navigate = useNavigate();

  const { login, loading } = useAuthStore();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData);

      toast.success("Login successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020817] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8 text-white"
      >
        <h1 className="text-4xl font-black text-center bg-gradient-to-r from-cyan-300 via-violet-400 to-purple-500 bg-clip-text text-transparent">
          Login
        </h1>

        <div className="mt-8 space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 outline-none"
          />

          <button
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-violet-600 hover:bg-violet-700 transition font-semibold"
          >
            {loading ? "Loading..." : "Login"}
          </button>

          <p className="text-center text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-violet-400">
              Signup
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
