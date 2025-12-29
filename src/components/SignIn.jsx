import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase/firebase";

const SignIn = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate(); 
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        // Login successful, navigate to Home
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4 text-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend text-2xl font-semibold">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" required />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" required />

        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>

      <p>Or,</p>
      <button className="btn btn-neutral mt-4" onClick={handleGoogleSignIn}>
        Sign in with Google
      </button>
      <a
        className="underline font-semibold text-black hover:text-gray-500"
        href="/"
      >
        Back to Home
      </a>
    </div>
  );
};

export default SignIn;
