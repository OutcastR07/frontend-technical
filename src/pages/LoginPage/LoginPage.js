import {
  Email,
  GitHub,
  Google,
  HelpOutline,
  LinkedIn,
  LockOpen,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const validateEmail = (input) => {
  // Email validation regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input);
};

const validatePassword = (input) => {
  // Password validation regular expression
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=()])(?=\S+$).{8,20}$/;
  return passwordRegex.test(input);
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Perform input validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be 8 characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character"
      );
      return;
    }

    // Navigate to home route
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1
          className="text-center text-4xl mb-5"
          style={{ fontFamily: "'Sacramento', cursive" }}
        >
          Techno Geek
        </h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              E-mail
            </label>
            <input
              type="text"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full outline-none"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full outline-none"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </span>
            </div>
            {error && <p className="text-red-500 mb-3">{error}</p>}
            <button
              type="button"
              className="transition duration-200 bg-blue-500 hover:bg-blue-600 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              onClick={handleLogin}
            >
              <span className="inline-block mr-2">Login</span>
            </button>
          </div>
          <div className="p-5 flex justify-between gap-x-3">
            <button
              type="button"
              className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
            >
              <Email />
            </button>
            <button
              type="button"
              className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
            >
              <Google />
            </button>
            <button
              type="button"
              className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
            >
              <GitHub />
            </button>
            <button
              type="button"
              className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
            >
              <LinkedIn />
            </button>
          </div>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-3 py-2 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100">
                  <LockOpen />
                  <span className="inline-block ml-1">Forgot Password</span>
                </button>
              </div>
              <div className="text-center sm:text-right whitespace-nowrap">
                <button className="transition duration-200 mx-5 px-3 py-2 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100">
                  <HelpOutline />
                  <span className="inline-block ml-1">Help</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
