import { Navigate } from "react-router-dom";

import Loader from "./Loader.jsx";

import useAuthStore from "../store/authStore.js";

export default function ProtectedRoute({ children }) {
  const { user, checkingAuth } = useAuthStore();
  //  console.log(user);
   
  if (checkingAuth) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
