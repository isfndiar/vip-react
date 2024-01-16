import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

export default function useLogin() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(localStorage.getItem("token")));
    } else {
      window.location.href = "/login";
      // window.open("/login");
    }
  }, []);
  return username;
}
