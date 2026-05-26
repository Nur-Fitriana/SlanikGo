"use client";

import React, { useState } from "react";
import Image from "next/image";
import { authService } from "../../services/authService";
import { setToken } from "../../utils/token";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await authService.login({ username, password });
      if (res.success && res.data) {
        setToken(res.data.username);
        window.location.href = "/";
      } else {
        throw new Error(res.message || "Username atau password salah");
      }
    } catch (err: any) {
      console.error(err);
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Circles */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(2,132,199,0.15), rgba(14,165,233,0.05))",
          filter: "blur(60px)",
        }}
      />

      <div
        className="card-premium"
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "40px",
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 24px rgba(2, 132, 199, 0.15)",
            marginBottom: "20px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/slatnik_logo.png"
            alt="Slanik Waterpark Logo"
            width={80}
            height={80}
            style={{ objectFit: "cover" }}
          />
        </div>

        <h1
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "var(--brand-secondary)",
            marginBottom: "4px",
            textAlign: "center",
          }}
        >
          SlanikGo CMS
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "var(--text-muted)",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          Masuk ke panel admin untuk mengelola konten Slanik Waterpark.
        </p>

        <form style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={handleLogin}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-secondary)" }}>
              Username
            </label>
            <input
              type="text"
              placeholder="Masukkan username admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "12px",
                border: "1px solid var(--input-border)",
                background: "white",
                fontSize: "14px",
                outline: "none",
                transition: "all 0.2s ease",
                boxSizing: "border-box",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--brand-primary)";
                e.target.style.boxShadow = "0 0 0 3px rgba(2, 132, 199, 0.15)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "var(--input-border)";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-secondary)" }}>
              Kata Sandi
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px 48px 12px 16px",
                  borderRadius: "12px",
                  border: "1px solid var(--input-border)",
                  background: "white",
                  fontSize: "14px",
                  outline: "none",
                  transition: "all 0.2s ease",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--brand-primary)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(2, 132, 199, 0.15)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--input-border)";
                  e.target.style.boxShadow = "none";
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary"
            disabled={isLoading}
            style={{
              width: "100%",
              padding: "14px",
              marginTop: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              fontSize: "15px",
              position: "relative",
              overflow: "hidden",
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? "not-allowed" : "pointer",
              transition: "all 0.2s ease-in-out",
            }}
          >
            {isLoading ? (
              <span
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "20px",
                  border: "3px solid rgba(255,255,255,0.3)",
                  borderTopColor: "white",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
            ) : (
              "Masuk ke Dashboard"
            )}
          </button>
        </form>

        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", margin: 0 }}>
            &copy; {new Date().getFullYear()} Slanik Waterpark
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
