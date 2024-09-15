import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMail, MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false); // Track password visibility
  const [icon, setIcon] = useState(<MdVisibilityOff />); // Track the current icon
  const [type, setType] = useState("password"); // Track input type

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
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        return;
      }
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    if (type === "password") {
      setIcon(<MdVisibility />);
      setType("text");
    } else {
      setIcon(<MdVisibilityOff />);
      setType("password");
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Email Input with Icon on Right */}
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

        {/* Password Input with Visibility Toggle */}
        <div className="relative">
          <input
            type={type}
            placeholder="Password"
            className="border p-3 pr-10 rounded-lg w-full"
            id="password"
            onChange={handleChange}
          />
          <span
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {icon}
          </span>
        </div>

        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90">
          Sign In
        </button>
      </form>

      <div className="flex gap-2 mt-3">
        <p>Don't have an Account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>
    </div>
  );
}
