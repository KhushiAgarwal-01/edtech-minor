import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import eye icons

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Password toggle state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold my-7">Sign Up</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Username Input with Icon */}
        <div className="relative">
          <input
            type="text"
            placeholder="Username"
            className="border p-3 pr-10 rounded-lg w-full"
            id="username"
            onChange={handleChange}
          />
          <FaUserAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Email Input with Icon */}
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            className="border p-3 pr-10 rounded-lg w-full"
            id="email"
            onChange={handleChange}
          />
          <MdOutlineMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Password Input with Icon */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"} // Show password as text or hide as dots
            placeholder="Password"
            className="border p-3 pr-10 rounded-lg w-full"
            id="password"
            onChange={handleChange}
          />
          {/* Toggle Icon for showing/hiding password */}
          {showPassword ? (
            <AiFillEyeInvisible
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            />
          ) : (
            <AiFillEye
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            />
          )}
        </div>

        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-55"
        >
          {loading ? "loading..." : "Sign Up"}
        </button>
      </form>

      <div className="flex gap-2 mt-3">
        <p>Already have an Account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
