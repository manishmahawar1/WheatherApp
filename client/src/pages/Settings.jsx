import { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";
import useAuthStore from "../store/authStore";
import toast from "react-hot-toast";

function Settings() {
  const { user, logout, updateUser } = useAuthStore();

  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");

  //  SAVE PROFILE
  const handleSave = async () => {
    try {
      if (!username || !email) {
        return toast.error("Username or email required");
      }

      await updateUser({ username, email });

      toast.success("Profile updated!");
    } catch (err) {
      console.log(err);
      toast.error("Update failed");
    }
  };

  return (
    <AppLayout>
      <div className="text-white">
        {/* HEADING */}
        <div className="mb-10">
          <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-300 via-violet-400 to-purple-500 bg-clip-text text-transparent">
            Settings
          </h1>
        </div>

        {/* PROFILE */}
        <div className="bg-white/10 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6">Profile</h2>

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-xl bg-black/20 mb-4 text-white"
            placeholder="Username"
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-black/20 mb-4 text-white"
            placeholder="Email"
          />

          <button
            onClick={handleSave}
            className="px-6 py-3 bg-violet-600 rounded-xl"
          >
            Save Changes
          </button>
        </div>

        {/* LOGOUT */}
        <div className="bg-white/10 p-8 rounded-3xl mt-6">
          <h2 className="text-2xl font-bold mb-6">Account</h2>

          <button onClick={logout} className="px-6 py-3 bg-red-500 rounded-xl">
            Logout
          </button>
        </div>
      </div>
    </AppLayout>
  );
}

export default Settings;
