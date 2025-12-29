import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";

const MyProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  if (!user) return <p>No user logged in</p>;

  return (
    <div className="flex flex-col items-center gap-2">
      {user.photoURL && (
        <img src={user.photoURL} alt="Profile" className="rounded-full w-20 h-20" />
      )}
      <p className="font-semibold">Name: {user.displayName}</p>
      <p className="font-semibold">Email: {user.email}</p>

      <div className="mt-4">
        <button onClick={handleLogout} className="btn btn-primary">
          Logout
        </button>
      </div>
    </div>
  );
};

export default MyProfile;