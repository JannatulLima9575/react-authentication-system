import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const form = e.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.conformPassword.value;

    // Confirm password check
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    // Strong password check
    const strongPassword =
      /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!strongPassword.test(password)) {
      setErrorMessage(
        "Password must be at least 6 characters, include 1 uppercase letter and 1 number"
      );
      return;
    }

    // Create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessMessage("Registration successful! Redirecting...");
        
        // Auto redirect to profile/home
        setTimeout(() => {
          navigate("/profile"); // or "/"
        }, 1500);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-4 text-center">
      <form
        onSubmit={handleRegister}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend text-2xl">Register</legend>

        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Name"
          required
        />

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Email"
          required
        />

        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input"
          placeholder="Password"
          required
        />

        <label className="label">Confirm Password</label>
        <input
          name="conformPassword"
          type="password"
          className="input"
          placeholder="Confirm Password"
          required
        />

        <button className="btn btn-neutral mt-4">Register</button>
      </form>

      {/* Error */}
      {errorMessage && (
        <p className="text-red-500">{errorMessage}</p>
      )}

      {/* Success */}
      {successMessage && (
        <p className="text-green-500">{successMessage}</p>
      )}

      <div className="flex items-center gap-2">
        <p>Already have an account?</p>
        <a
          href="/login"
          className="underline font-semibold text-black hover:text-gray-500"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default SignUp;