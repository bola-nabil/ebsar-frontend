import React, { useState } from "react";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../components/ui/buttons/submit-button/SubmitButton";
import FieldError from "../components/ui/error/FieldError";
import PageTitle from "../components/ui/PageTitle";


const ChangePassword = () => {
  const [form, setForm] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const response = await api.post("/admin/change-password", form);

      if (response.data.status === "success") {
        setForm({
          current_password: "",
          new_password: "",
          new_password_confirmation: "",
        });
      }
    } catch (err) {
      setErrors(err.response?.data?.errors || {});
      navigate("/server-failed");
    } finally {
      setLoading(false);
    }
  };

  const isMismatch =
    form.new_password && form.new_password !== form.new_password_confirmation;

  return (
    <div className="mobile-container edit-page">
      <PageTitle title="Change Password" />

      <h2>Change Password</h2>

      <div className="form-style center-form center-row">
        <form onSubmit={handleSubmit} className="form-control">
          <div className="mb-4">
            <label htmlFor="current-password" className="form-label">
              Current Password
            </label>
            <input
              className="form-control"
              type="password"
              name="current_password"
              id="current-password"
              placeholder="Current Password"
              value={form.current_password}
              onChange={handleChange}
            />
            <FieldError error={errors.current_password} />
          </div>

          <div className="mb-4">
            <label htmlFor="new-password" className="form-label">
              New Password
            </label>
            <input
              className="form-control"
              type="password"
              name="new_password"
              id="new-password"
              placeholder="New Password"
              value={form.new_password}
              onChange={handleChange}
            />
            <FieldError error={errors.new_password} />
          </div>

          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">
              Confirm New Password
            </label>
            <input
              className="form-control"
              type="password"
              name="new_password_confirmation"
              id="confirm-password"
              placeholder="Confirm New Password"
              value={form.new_password_confirmation}
              onChange={handleChange}
            />
            <FieldError error={errors.new_password_confirmation} />
          </div>

          {isMismatch && (
            <p className="text-danger small mb-3"> * Passwords do not match</p>
          )}

          <SubmitButton
            loading={loading}
            content="Change Password"
            disabled={isMismatch}
          />
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
