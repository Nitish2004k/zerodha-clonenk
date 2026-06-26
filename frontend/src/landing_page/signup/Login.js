import React, { useState } from "react";
import axios from "axios";

const API = "https://zerodha-clonenk.onrender.com";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${API}/login`, form, { withCredentials: true });
      setMessage("✅ " + res.data.message);
      setTimeout(() => window.location.href = "/dashboard", 1500);
    } catch (err) {
      setMessage("❌ " + (err.response?.data?.message || "Invalid credentials"));
    }
    setLoading(false);
  };

  return (
    <div className="container" style={{ maxWidth: "450px", marginTop: "80px" }}>
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Login</h2>
        {message && (
          <div className={`alert ${message.startsWith("✅") ? "alert-success" : "alert-danger"}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email / Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter email"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <a href="/Signup">Signup here</a>
        </p>
      </div>
    </div>
  );
}

export default Login;