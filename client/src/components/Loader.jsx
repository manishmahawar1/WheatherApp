export default function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020817] text-white">
      <div className="text-center">
        <div className="w-24 h-24 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

        <h1 className="mt-8 text-3xl font-bold bg-gradient-to-r from-cyan-300 via-violet-400 to-purple-500 bg-clip-text text-transparent">
          Loading Weather Pro...
        </h1>
      </div>
    </div>
  );
}
