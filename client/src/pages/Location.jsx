// import { useEffect, useState } from "react";
// import AppLayout from "../components/AppLayout";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import axios from "axios";
// import toast from "react-hot-toast";

// export default function Location() {
//   const [lat, setLat] = useState(null);
//   const [lon, setLon] = useState(null);
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const myAPiKey = import.meta.env.VITE_WEATHER_API_KEY;

//   const fetchWeather = async (lat, lon) => {
//     try {
//       const weatherRes = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myAPiKey}&units=metric`,
//       );

//       const geoRes = await axios.get(
//         `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${myAPiKey}`,
//       );

//       const cityName = geoRes.data[0]?.name;
//       console.log(cityName);
      

//       setWeather({
//         ...weatherRes.data,
//         name: cityName || weatherRes.data.name,
//       });
//     } catch (err) {
//       console.log(err);
//       toast.error("Weather fetch failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 📍 GET LOCATION
//   const getMyLocation = () => {
//     if (!navigator.geolocation) {
//       toast.error("Geolocation not supported");
//       return;
//     }

//     setLoading(true);

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;

//         setLat(latitude);
//         setLon(longitude);

//         await fetchWeather(latitude, longitude);
//       },
//       (error) => {
//         console.log(error);
//         toast.error("Location permission denied");
//         setLoading(false);
//       },
//     );
//   };

//   // auto fetch on load
//   useEffect(() => {
//     getMyLocation();
//   }, []);

//   return (
//     <AppLayout>
//       <div className="p-6 text-white">
//         {/* 🔄 LOADING */}
//         {loading && (
//           <div className="flex justify-center items-center h-[60vh]">
//             <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
//           </div>
//         )}

//         {/* 🌡️ WEATHER CARD */}
//         {weather && !loading && (
//           <div className="mb-6 bg-white/10 p-4 rounded-2xl backdrop-blur-xl">
//             <h1 className="text-2xl font-bold">
//               {weather.name}, {weather.sys.country}
//             </h1>
//             <p className="text-xl">🌡️ {Math.round(weather.main.temp)}°C</p>
//             <p className="text-gray-300">{weather.weather[0].description}</p>
//           </div>
//         )}

//         {/* 🗺️ MAP */}
//         {lat && lon && (
//           <div className="rounded-2xl overflow-hidden">
//             <MapContainer
//               center={[lat, lon]}
//               zoom={12}
//               style={{ height: "400px", width: "100%" }}
//               key={`${lat}-${lon}`}
//             >
//               <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//               <Marker position={[lat, lon]}>
//                 <Popup>You are here 📍</Popup>
//               </Marker>
//             </MapContainer>
//           </div>
//         )}
//       </div>
//     </AppLayout>
//   );
// }



// import { useEffect, useState } from "react";
// import axios from "axios";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// export default function Location() {
//   // 📍 Default fallback location (Sangam Vihar)
//   const [coords] = useState({
//     lat: 28.4979,
//     lon: 77.2495,
//   });

//   const [weather, setWeather] = useState(null);

//   const getWeather = async () => {
//     try {
//       // ⚠️ apna API key yahan lagao
//       const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

//       const res = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`
//       );

//       setWeather(res.data);
//     } catch (err) {
//       console.log("Weather error:", err);
//     }
//   };

//   useEffect(() => {
//     getWeather();
//   }, []);

//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       {/* 🌍 MAP */}
//       <MapContainer
//         center={[coords.lat, coords.lon]}
//         zoom={13}
//         style={{ height: "60vh", width: "100%" }}
//       >
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

//         <Marker position={[coords.lat, coords.lon]}>
//           <Popup>📍 Sangam Vihar, Delhi</Popup>
//         </Marker>
//       </MapContainer>

//       {/* 🌤 WEATHER INFO */}
//       <div style={{ padding: "20px" }}>
//         {weather ? (
//           <>
//             <h2>{weather.name}</h2>
//             <p>🌡 Temperature: {weather.main.temp}°C</p>
//             <p>🌥 Condition: {weather.weather[0].description}</p>
//           </>
//         ) : (
//           <p>Loading weather...</p>
//         )}
//       </div>
//     </div>
//   );
// }