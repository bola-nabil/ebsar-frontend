import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api";
import PageTitle from "components/ui/PageTitle";
import { SubmitButton } from "components/ui/buttons";
import { PasswordInput } from "components/inputs";


const ChangePassword = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    current_password: "",
    new_password: "",
    new_password_confirmation: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: null }));
    },
    []
  );

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
    form.new_password &&
    form.new_password_confirmation &&
    form.new_password !== form.new_password_confirmation;

  return (
    <div className="mobile-container edit-page">
      <PageTitle title="Change Password" />
      <h2 className="mb-4">Change Password</h2>

      <div className="form-style center-form center-row">
        <form onSubmit={handleSubmit} className="form-control">
          <PasswordInput
            label="Current Password"
            name="current_password"
            value={form.current_password}
            onChange={handleChange}
            error={errors.current_password}
          />

          <PasswordInput
            label="New Password"
            name="new_password"
            value={form.new_password}
            onChange={handleChange}
            error={errors.new_password}
          />

          <PasswordInput
            label="Confirm New Password"
            name="new_password_confirmation"
            value={form.new_password_confirmation}
            onChange={handleChange}
            error={errors.new_password_confirmation}
          />

          {isMismatch && (
            <p className="text-danger small mb-3">
              * Passwords do not match
            </p>
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
