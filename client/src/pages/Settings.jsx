import AppLayout from "../components/AppLayout";

import useAuthStore from "../store/authStore";

function Settings() {
  const { user, logout } = useAuthStore();

  return (
    <AppLayout>
      <div className="text-white">
        {/* HEADING */}
        <div className="mb-10">
          <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-300 via-violet-400 to-purple-500 bg-clip-text text-transparent">
            Settings
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Manage your account preferences
          </p>
        </div>

        {/* PROFILE CARD */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* AVATAR */}
            <div className="w-28 h-28 rounded-full bg-violet-600 flex items-center justify-center text-5xl font-bold shadow-2xl">
              {user?.username?.charAt(0).toUpperCase()}
            </div>

            {/* INFO */}
            <div className="flex-1">
              <h1 className="text-4xl font-black">{user?.username}</h1>

              <p className="text-gray-400 mt-3 text-lg">{user?.email}</p>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="px-5 py-2 rounded-2xl bg-violet-600/30 border border-violet-400/20">
                  Premium User
                </div>

                <div className="px-5 py-2 rounded-2xl bg-cyan-500/20 border border-cyan-400/20">
                  Weather Explorer
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SETTINGS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {/* TEMPERATURE */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8">
            <h2 className="text-3xl font-bold mb-8">Temperature Unit</h2>

            <div className="flex gap-4">
              <button className="px-8 py-4 rounded-2xl bg-violet-600 font-semibold">
                °C Celsius
              </button>

              <button className="px-8 py-4 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/20 transition">
                °F Fahrenheit
              </button>
            </div>
          </div>

          {/* BACKGROUND */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8">
            <h2 className="text-3xl font-bold mb-8">App Theme</h2>

            <div className="flex gap-4">
              <button className="px-8 py-4 rounded-2xl bg-violet-600 font-semibold">
                Dark
              </button>

              <button className="px-8 py-4 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/20 transition">
                Light
              </button>
            </div>
          </div>
        </div>

        {/* LOGOUT */}
        <div className="mt-10 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8">
          <h2 className="text-3xl font-bold mb-6">Account Actions</h2>

          <button
            onClick={logout}
            className="px-8 py-4 rounded-2xl bg-red-500 hover:bg-red-600 transition font-semibold shadow-xl"
          >
            Logout
          </button>
        </div>
      </div>
    </AppLayout>
  );
}

export default Settings;
