import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "api";
import PageTitle from "components/ui/PageTitle";
import { LoadingButton } from "components/ui/buttons";
import AppLogo from "assets/images/app-logo.png";
import "./login.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value.trimStart() }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { name, password } = formData;
    if (!name || !password) {
      setError("Username and password are required");
      return;
    }

    setLoading(true);

    try {
      const { data } = await api.post("/admin/login", formData);
      if (data.status === "success") {
        localStorage.setItem("admin_token", data.token);
        setTimeout(() => navigate("/dashboard"), 500);
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error =>", err);
      if (err.response) setError(err.response.data.message || "Login failed");
      else if (err.request) navigate("/server-failed");
      else setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login position-relative w-100 vh-100 overflow-hidden">
      <PageTitle title="Login | Ebsar" />

      <div className="background w-100 h-100"></div>
      <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

      <div className="form-wrapper rounded-2 text-center position-absolute top-50 start-50 w-100">
        <div className="form-header mb-4">
          <img src={AppLogo} alt="Logo" className="bg-white rounded-circle" />
        </div>

        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <div className="form-group">
            <label htmlFor="username" className="text-start">Username</label>
            <input
              type="text"
              id="username"
              name="name"
              className="rounded-2 form-control"
              value={formData.name}
              onChange={handleChange}
              autoComplete="username"
              aria-label="Username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="text-start">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="rounded-2 form-control"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              aria-label="Password"
            />
          </div>

          <button
            type="submit"
            className="bg-white rounded-2 btn-submit"
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
