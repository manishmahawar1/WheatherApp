import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

// ================= LANDING PAGE =================

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('/wheather-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#020817]/80 backdrop-blur-sm"></div>

      {/* GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-violet-600/30 blur-[140px] rounded-full"></div>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-md rounded-[45px] bg-white/10 backdrop-blur-2xl border border-white/10 p-10 text-center shadow-2xl">
        {/* WEATHER ICON */}
        <div className="text-[150px] animate-bounce">🌦️</div>

        {/* TITLE */}
        <h1 className="text-5xl font-extrabold text-white leading-tight mt-2">
          Weather
        </h1>

        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
          Forecasts
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-300 mt-6 leading-7">
          Real-time weather updates, forecasts, wind, humidity and temperature
          around the world.
        </p>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/login")}
          className="mt-10 w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:scale-105 transition duration-300 text-white text-xl font-bold shadow-2xl"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
