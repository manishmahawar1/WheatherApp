import AppLayout from "../components/AppLayout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Stats() {
  const [data, setData] = useState(null);

  const lat = 28.4979;
  const lon = 77.2495;

  const fetchWeather = async () => {
    try {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
      );

      setData(res.data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <AppLayout>
      <div className="min-h-screen bg-zinc-600 p-6">
        <h1 className="text-2xl font-bold mb-6">📊 Weather Stats Dashboard</h1>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LOCATION */}
          <div className="bg-slate-900 rounded-2xl shadow p-5">
            <h2 className="text-lg font-semibold mb-3">📍 Location</h2>
            <p className="text-gray-700">Sangam Vihar, Delhi</p>
            <p className="text-gray-500">Lat: {lat}</p>
            <p className="text-gray-500">Lon: {lon}</p>
          </div>

          {/* WEATHER */}
          <div className="bg-slate-900 rounded-2xl shadow p-5">
            <h2 className="text-lg font-semibold mb-3">🌤 Current Weather</h2>

            {data ? (
              <div className="space-y-2 text-gray-700">
                <p>
                  🌡 Temperature: <b>{data.main.temp}°C</b>
                </p>
                <p>🤔 Feels Like: {data.main.feels_like}°C</p>
                <p>💧 Humidity: {data.main.humidity}%</p>
                <p>🌬 Wind Speed: {data.wind.speed} km/h</p>
                <p>☁ Condition: {data.weather[0].description}</p>
              </div>
            ) : (
              <p className="text-gray-500">Loading weather...</p>
            )}
          </div>

          {/* SYSTEM INFO */}
          <div className="bg-slate-900 rounded-2xl shadow p-5">
            <h2 className="text-lg font-semibold mb-3">⚙ System Info</h2>
            <p className="text-gray-700">API: OpenWeather</p>
            <p className="text-gray-700">
              Status: {data ? "Active 🟢" : "Loading 🟡"}
            </p>
            <p className="text-gray-500">
              Last Update: {new Date().toLocaleTimeString()}
            </p>
          </div>

          {/* MAP */}
          <div className="bg-slate-900 rounded-2xl shadow p-5">
            <h2 className="text-lg font-semibold mb-3">🗺 Map Preview</h2>

            <iframe
              title="map"
              className="w-full h-64 rounded-xl"
              loading="lazy"
              src={`https://www.google.com/maps?q=${lat},${lon}&z=14&output=embed`}
            ></iframe>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
