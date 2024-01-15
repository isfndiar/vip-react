import React from "react";
import useLogin from "../hooks/useLogin";

export default function ProfilePage() {
  const username = useLogin(); // Login Token

  return (
    <div>
      Page
      <div>username : {username}</div>
    </div>
  );
}
