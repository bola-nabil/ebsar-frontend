import React, { useState } from "react";
import axios from "axios";
import { api } from "../../api";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../components/ui/buttons/loading-button/LoadingButton";
import PageTitle from "../../components/ui/PageTitle";
import AppLogo from "../../assets/images/app-logo.png";
import "./login.css";

axios.defaults.withCredentials = true;

const AdminLogin = () => {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.trimStart(),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.password) {
      setError("Username and password are required");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/admin/login", formData);
      localStorage.setItem("admin_token", response.data.token);

      if (response.data.status === "success") {
        setTimeout(() => navigate("/dashboard"), 500);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error("Error during admin login => ", err);
      if (err.response) {
        setError(err.response.data.message || "Login failed");
      } else if (err.request) {
        navigate("/server-failed");
      } else {
        setError("Error: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login position-relative w-100">
      <PageTitle title="Login | Ebsar" />

      <div className="background"></div>
      <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="form-wrapper rounded-2 text-center position-absolute top-50 start-50">
        <div className="form-header">
          <img
            src={AppLogo}
            alt="Logo"
            className="bg-white rounded-circle"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" className="text-start">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="name"
            className="rounded-2"
            onChange={handleChange}
            autoComplete="username"
            aria-label="Username"
          />

          <label htmlFor="password" className="text-start">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="rounded-2"
            onChange={handleChange}
            autoComplete="current-password"
            aria-label="Password"
          />

          <button
            type="submit"
            className="bg-white rounded-2"
            disabled={loading}
          >
            {loading ? <LoadingButton /> : "Login"}
          </button>

          {error && <p className="text-danger mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
