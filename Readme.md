# Weather Pro 🌦️

A modern full-stack weather dashboard application built using the MERN stack with authentication, protected routes, responsive UI, and real-time weather data.

---

# 🚀 Features

- 🔐 JWT Authentication
- 🍪 Secure Cookie-Based Login System
- 🛡️ Protected Routes
- 🌤️ Real-Time Weather Data
- 📍 Search Weather by City
- 📊 Weather Stats Page
- ⚙️ Settings Page
- 📱 Fully Responsive Design
- 🌈 Modern Glassmorphism UI
- 🔥 React Hot Toast Notifications
- 🌙 Dark Themed Dashboard
- ⚡ Fast and Smooth User Experience

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Tailwind CSS
- React Router DOM
- Axios
- Zustand
- React Hot Toast
- Lucide React Icons

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Cookie Parser
- CORS

## API
- OpenWeatherMap API

---

# 📂 Project Structure

```txt
weather-pro/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── README.md
```

---

# 🔑 Authentication Flow

```txt
Landing Page
↓
Login / Signup
↓
JWT Token Stored in HTTP-Only Cookie
↓
Protected Dashboard Access
↓
Logout
```

---

# ⚙️ Environment Variables

## Backend `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

NODE_ENV=development
```

---

# 📦 Installation

## 1️⃣ Clone Repository

```bash
git clone <your-repository-url>
```

---

## 2️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## 3️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

# ▶️ Run Project

## Start Backend

```bash
npm run dev
```

---

## Start Frontend

```bash
npm run dev
```

---

# 🔐 Cookie Security

Production-ready secure cookie setup:

```js
res.cookie("weatherToken", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite:
    process.env.NODE_ENV === "production"
      ? "none"
      : "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});
```

---

# 📱 Pages

- Landing Page
- Login Page
- Signup Page
- Dashboard
- Stats
- Settings
- Location

---

# 🔮 Future Improvements

- ⭐ Save Favorite Cities
- 📈 Weather Charts & Analytics
- 🌍 Geo Location Weather
- 🌙 Dark / Light Mode
- 🔔 Weather Alerts
- 📅 7-Day Forecast
- 🖼️ Dynamic Weather Backgrounds
- 📡 Real-Time Weather Updates

---

# 👨‍💻 Author

Made with ❤️ by Manish
