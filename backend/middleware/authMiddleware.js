import jwt from "jsonwebtoken";

const protectRoute = (req, res, next) => {
  try {
    const token = req.cookies.weatherToken;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.log(error);

    res.status(401).json({
      message: "Invalid Token",
    });
  }
};

export default protectRoute;
