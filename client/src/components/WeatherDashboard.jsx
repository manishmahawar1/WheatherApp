import { Search, MapPin, Wind, Droplets, Eye, Gauge } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function WeatherDashboard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [animateKey, setAnimateKey] = useState(0);
  const [loading, setLoading] = useState(false);

  

  const myAPiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const savedWeather = localStorage.getItem("weatherData");

    if (savedWeather) {
      setWeather(JSON.parse(savedWeather));
    }
  }, []);

  // GET WEATHER
  const getWeather = async () => {
    if (!city.trim()) {
      toast.error("Please enter city name");
      return;
    }


    try {

      setLoading(true); // start loader

      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myAPiKey}&units=metric`,
      );

      setWeather(res.data);
      setAnimateKey((prev) => prev + 1);
      localStorage.setItem("weatherData", JSON.stringify(res.data));
      setLoading(false) // loader closed
    } catch (error) {
      console.log(error);
      toast.error("city not found!");
      setLoading(false)
    }
  };

  // WEATHER ICON
  const getWeatherIcon = (condition) => {
    if (condition === "Clear") return "☀️";
    if (condition === "Clouds") return "☁️";
    if (condition === "Rain") return "🌧️";
    if (condition === "Snow") return "❄️";
    if (condition === "Thunderstorm") return "⛈️";
    return "🌤️";
  };

  if (loading) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#020817] z-50">
      
      {/* simple animated loader */}
      <div className="flex flex-col items-center gap-4">
        
        <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>

        <p className="text-white text-lg animate-pulse">
          Fetching Weather...
        </p>

      </div>

    </div>
  );
}

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
        {/* <div className="hidden md:flex flex-col justify-between items-center w-[90px] bg-white/5 backdrop-blur-xl border-r border-white/10 py-6">
          <div className="flex flex-col items-center gap-8">
            <div className="w-14 h-14 rounded-2xl bg-violet-600 flex items-center justify-center text-2xl shadow-xl">
              ⚡
            </div>

            <div className="flex flex-col gap-6 text-gray-300">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                🏠
              </div>

              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                📊
              </div>

              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                📍
              </div>

              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                ⚙️
              </div>
            </div>
          </div>

          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
            🚪
          </div>
        </div> */}

        {/* CONTENT */}
        <div className="flex-1 p-4 md:p-8">
          {/* TOP BAR */}
          {/* HEADING */}
          {/* <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-violet-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
              Weather Pro
            </h1>

            <p className="text-gray-400 mt-3 text-lg hidden md:block">
              Real-time weather forecasts around the world
            </p>
          </div> */}

          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* SEARCH */}
            <div className="w-full lg:w-[500px] relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full pl-14 pr-5 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 outline-none text-white placeholder:text-gray-400"
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={getWeather}
              className="px-8 py-4 rounded-2xl bg-violet-600 hover:bg-violet-700 transition font-semibold shadow-xl"
            >
              Search
            </button>
          </div>

          {/* WEATHER */}
          {weather && (
            <div
              key={animateKey}
              className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8  weather-card"
            >
              {/* LEFT */}
              <div className="xl:col-span-2 space-y-6">
                {/* MAIN CARD */}
                <div className="weather-card delay-1 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8 shadow-2xl">
                  <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    {/* LEFT INFO */}
                    <div>
                      <div className="inline-flex items-center gap-2 bg-violet-600 px-5 py-2 rounded-full mb-6">
                        <MapPin size={18} />
                        <span>
                          {weather.name}, {weather.sys.country}
                        </span>
                      </div>

                      <h2 className="text-5xl font-bold">
                        {Math.round(weather.main.temp)}°C
                      </h2>

                      <p className="text-2xl text-gray-300 mt-4">
                        {weather.weather[0].main}
                      </p>

                      <p className="text-gray-400 mt-3">
                        Feels Like {Math.round(weather.main.feels_like)}°
                      </p>

                      <div className="flex gap-6 mt-6 text-gray-300">
                        <div>
                          <p className="text-sm">High</p>
                          <p className="text-xl font-bold">
                            {Math.round(weather.main.temp_max)}°
                          </p>
                        </div>

                        <div>
                          <p className="text-sm">Low</p>
                          <p className="text-xl font-bold">
                            {Math.round(weather.main.temp_min)}°
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ICON */}
                    <div className="text-[120px] animate-pulse">
                      {getWeatherIcon(weather.weather[0].main)}
                    </div>
                  </div>
                </div>

                {/* HIGHLIGHTS */}
                <div className="weather-card delay-2  bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-6">
                  <h2 className="text-2xl font-semibold mb-6">
                    Today's Highlights
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* WIND */}
                    <div className="bg-[#081028] rounded-3xl p-6 border border-white/5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-gray-400">Wind Status</h3>

                        <Wind className="text-cyan-300" />
                      </div>

                      <h1 className="text-5xl font-bold mt-5">
                        {weather.wind.speed}
                      </h1>

                      <p className="text-gray-400 mt-2">km/h</p>
                    </div>

                    {/* HUMIDITY */}
                    <div className="bg-[#081028] rounded-3xl p-6 border border-white/5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-gray-400">Humidity</h3>

                        <Droplets className="text-blue-300" />
                      </div>

                      <h1 className="text-5xl font-bold mt-5">
                        {weather.main.humidity}%
                      </h1>
                    </div>

                    {/* VISIBILITY */}
                    <div className="bg-[#081028] rounded-3xl p-6 border border-white/5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-gray-400">Visibility</h3>

                        <Eye className="text-yellow-300" />
                      </div>

                      <h1 className="text-5xl font-bold mt-5">
                        {weather.visibility / 1000}
                      </h1>

                      <p className="text-gray-400 mt-2">km</p>
                    </div>

                    {/* PRESSURE */}
                    <div className="bg-[#081028] rounded-3xl p-6 border border-white/5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-gray-400">Pressure</h3>

                        <Gauge className="text-pink-300" />
                      </div>

                      <h1 className="text-5xl font-bold mt-5">
                        {weather.main.pressure}
                      </h1>

                      <p className="text-gray-400 mt-2">hPa</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="space-y-6">
                {/* SMALL CARD */}
                <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8 text-center">
                  <div className="text-8xl mb-5">
                    {getWeatherIcon(weather.weather[0].main)}
                  </div>

                  <h2 className="text-3xl font-bold">
                    {weather.weather[0].description}
                  </h2>

                  <p className="text-gray-400 mt-4">Updated:</p>

                  <p className="mt-2 text-lg">
                    {new Date().toLocaleTimeString()}
                  </p>
                </div>

                {/* SUN */}
                <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[35px] p-8">
                  <h2 className="text-2xl font-semibold mb-8">Sun & Time</h2>

                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-400">Sunrise</p>

                      <h1 className="text-3xl font-bold mt-2">
                        {new Date(
                          weather.sys.sunrise * 1000,
                        ).toLocaleTimeString()}
                      </h1>
                    </div>

                    <div>
                      <p className="text-gray-400">Sunset</p>

                      <h1 className="text-3xl font-bold mt-2">
                        {new Date(
                          weather.sys.sunset * 1000,
                        ).toLocaleTimeString()}
                      </h1>
                    </div>

                    <div>
                      <p className="text-gray-400">Timezone</p>

                      <h1 className="text-2xl font-bold mt-2">
                        GMT +{weather.timezone / 3600}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WeatherDashboard;
