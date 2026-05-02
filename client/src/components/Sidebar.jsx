import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    {
      icon: "🏠",
      path: "/dashboard",
    },

    {
      icon: "📊",
      path: "/stats",
    },

    // {
    //   icon: "📍",
    //   path: "/location",
    // },

    {
      icon: "⚙️",
      path: "/settings",
    },
  ];

  return (
    <div className="hidden md:flex flex-col items-center gap-6 w-[90px] bg-white/5 backdrop-blur-xl border-r border-white/10 py-8">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition ${
            location.pathname === link.path
              ? "bg-violet-600"
              : "bg-white/10 hover:bg-white/20"
          }`}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
