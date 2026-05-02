import { useState } from "react";
import { Menu, X } from "lucide-react";

import toast from "react-hot-toast";

import useAuthStore from "../store/authStore.js";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuthStore();

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();

    navigate("/");

    toast.success("Logout successful.");
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full mb-6 md:mb-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-5 text-white shadow-xl relative">
        <div className="flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            {/* LOGO */}
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-violet-600 flex items-center justify-center text-xl md:text-2xl shadow-xl">
              🌦️
            </div>

            {/* TEXT */}
            <div>
              <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-cyan-300 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                Weather Pro
              </h1>

              <p className="hidden sm:block text-gray-400 text-xs md:text-sm">
                Real-time weather dashboard
              </p>
            </div>
          </div>

          {/* DESKTOP RIGHT */}
          <div className="hidden md:flex items-center gap-4">
            {/* USER */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center font-bold text-lg shadow-lg">
                {user?.username?.charAt(0).toUpperCase()}
              </div>

              <div>
                <h2 className="font-semibold">{user?.username}</h2>

                <p className="text-xs text-gray-400">Logged In</p>
              </div>
            </div>

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 transition font-semibold shadow-lg"
            >
              Logout
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden mt-5 bg-[#081028] border border-white/10 rounded-3xl p-5 animate-in fade-in duration-300">
            {/* USER */}
            <div className="flex items-center gap-4 pb-5 border-b border-white/10">
              <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center font-bold text-lg">
                {user?.username?.charAt(0).toUpperCase()}
              </div>

              <div>
                <h2 className="font-semibold text-lg">{user?.username}</h2>

                <p className="text-sm text-gray-400">Logged In</p>
              </div>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-3 mt-5">
              <button
                onClick={() => navigate("/dashboard")}
                className="w-full text-left px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 transition"
              >
                🏠 Dashboard
              </button>

              <button
                onClick={() => navigate("/stats")}
                className="w-full text-left px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 transition"
              >
                📊 Stats
              </button>

              {/* <button
                onClick={() => navigate("/location")}
                className="w-full text-left px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 transition"
              >
                📍 Location
              </button> */}

              <button
                onClick={() => navigate("/settings")}
                className="w-full text-left px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 transition"
              >
                ⚙️ Settings
              </button>

              <button
                onClick={handleLogout}
                className="w-full px-4 py-3 rounded-2xl bg-red-500 hover:bg-red-600 transition font-semibold mt-3"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
