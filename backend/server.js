import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// ================= MIDDLEWARE =================

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

// ================= ROUTES =================

app.get("/", (req, res) => {
  res.send("server running.");
});

app.use("/api/auth", authRoutes);


app.use(express.static(path.join(process.cwd(), "client/dist")));

app.use((req, res) => {
  if (req.path.startsWith("/api")) return;

  res.sendFile(path.resolve(process.cwd(), "client/dist/index.html"));
});
// ================ GLOBAL ERROR ===============

app.use((err, req, res, next) => {
  console.error("ERROR:", err.message);

  res.status(err.statusCode || 500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Something went wrong"
        : err.message,
  });
});

// ================= DATABASE =================

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
