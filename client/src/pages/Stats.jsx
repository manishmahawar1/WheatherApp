import AppLayout from "../components/AppLayout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Stats() {
  const [data, setData] = useState(null);
  const [coords, setCoords] = useState({
    lat: 28.4979,
    lon: 77.2495,
  });

  // 🌤 Fetch weather function
  const fetchWeather = async (lat, lon) => {
    try {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );

      setData(res.data);
    } catch (err) {
      console.log("Weather error:", err);
    }
  };

  // 📍 Get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        setCoords({ lat, lon });
        fetchWeather(lat, lon);
      },
      () => {
        // fallback location (Sangam Vihar)
        fetchWeather(coords.lat, coords.lon);
      }
    );
  }, []);

  return (
    <AppLayout>
      <div className="min-h-screen bg-zinc-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-6">📊 Weather Stats Dashboard</h1>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LOCATION */}
          <div className="bg-zinc-800 rounded-2xl shadow p-5">
            <h2 className="text-lg font-semibold mb-3">📍 Location</h2>
            <p className="text-gray-300">
              Lat: {coords.lat.toFixed(4)}
            </p>
            <p className="text-gray-300">
              Lon: {coords.lon.toFixed(4)}
            </p>
          </div>

          {/* WEATHER */}
          <div className="bg-zinc-800 rounded-2xl shadow p-5">
            <h2 className="text-lg font-semibold mb-3">🌤 Current Weather</h2>

            {data ? (
              <div className="space-y-2 text-gray-300">
                <p>🌡 Temperature: <b>{data.main.temp}°C</b></p>
                <p>🤔 Feels Like: {data.main.feels_like}°C</p>
                <p>💧 Humidity: {data.main.humidity}%</p>
                <p>🌬 Wind Speed: {data.wind.speed} km/h</p>
                <p>☁ Condition: {data.weather[0].description}</p>
              </div>
            ) : (
              <p className="text-gray-400">Loading weather...</p>
            )}
          </div>

          {/* SYSTEM INFO */}
          <div className="bg-zinc-800 rounded-2xl shadow p-5">
            <h2 className="text-lg font-semibold mb-3">⚙ System Info</h2>
            <p className="text-gray-300">API: OpenWeather</p>
            <p className="text-gray-300">
              Status: {data ? "Active 🟢" : "Loading 🟡"}
            </p>
            <p className="text-gray-400">
              Last Update: {new Date().toLocaleTimeString()}
            </p>
          </div>

          {/* MAP */}
          <div className="bg-zinc-800 rounded-2xl shadow p-5">
            <h2 className="text-lg font-semibold mb-3">🗺 Map Preview</h2>

            <iframe
              title="map"
              className="w-full h-64 rounded-xl"
              loading="lazy"
              src={`https://www.google.com/maps?q=${coords.lat},${coords.lon}&z=14&output=embed`}
            ></iframe>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}