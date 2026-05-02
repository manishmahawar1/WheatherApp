export default function WeatherCard({ title, value, icon }) {
  return (
    <div className="bg-[#081028] rounded-3xl p-6 border border-white/5 text-white">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-400">{title}</h3>

        <div className="text-3xl">{icon}</div>
      </div>

      <h1 className="text-5xl font-bold mt-5">{value}</h1>
    </div>
  );
}
