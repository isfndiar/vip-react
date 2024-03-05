import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";
import { Navigate, redirect, useNavigate } from "react-router-dom";
export default function useLogin() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(localStorage.getItem("token")));
    } else {
      navigate("/login");
      // window.open("/login");
    }
  }, [navigate]);
  return username;
}
