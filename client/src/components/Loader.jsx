export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#020817]">
      <div className="text-center flex flex-col items-center gap-6">
        
        {/* Spinner */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-violet-500/30"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-violet-500 animate-spin"></div>
        </div>

        {/* Text */}
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-cyan-300 via-violet-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
          Loading Weather Pro...
        </h1>
      </div>
    </div>
  );
}