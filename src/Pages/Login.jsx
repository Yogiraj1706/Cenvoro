import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

function Login() {
  const [role, setRole] = useState("jobseeker");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "recruiter") {
      navigate("/recruiter-dashboard");
    } else {
      navigate("/jobseeker-dashboard");
    }
  };

  return (
    
    <div className="login-page">
      


      {/* LEFT SIDE */}
      <div className="left-section">
        <div className="company-content">
          <img src="/LOGO.png" alt="Company Logo" className="company-logo" />
          <h1>CENVORO</h1>
          <p>
            Connecting Talent with Opportunity.
            Find your dream job or hire the best candidates easily
            with our smart hiring platform.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-section">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <p>Please login to continue</p>

          <div className="role-toggle">
            <button
              className={role === "jobseeker" ? "active" : ""}
              onClick={() => setRole("jobseeker")}
            >
              Job Seeker
            </button>
            <button
              className={role === "recruiter" ? "active" : ""}
              onClick={() => setRole("recruiter")}
            >
              Recruiter
            </button>
          </div>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>
              <span className="forgot">Forgot Password?</span>
            </div>

            <button type="submit" className="login-btn-1">
              Login as {role === "recruiter" ? "Recruiter" : "Job Seeker"}
            </button>
          </form>

          <p className="signup-text">
            Don’t have an account?{" "}
            <span
              onClick={() =>
                navigate(role === "recruiter" ? "/recruiter-signup" : "/signup")
              }
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>

    </div>
  
  );
}

export default Login;
