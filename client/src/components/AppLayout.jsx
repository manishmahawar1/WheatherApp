import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function AppLayout({ children }) {
  return (
    <div
      className="min-h-screen relative overflow-hidden text-white"
      style={{
        backgroundImage:
          "url('https://openweathermap.org//payload/api/media/file/pexels-brett-sayles-1431822_1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#020817]/80 backdrop-blur-sm"></div>

      {/* MAIN */}
      <div className="relative z-10 flex min-h-screen">
        {/* SIDEBAR */}
        <Sidebar />

        {/* CONTENT */}
        <div className="flex-1 p-4 md:p-8">
          {/* NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          {children}
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
