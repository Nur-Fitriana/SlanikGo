"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import React from "react";

export default function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Jika di halaman login, jangan tampilkan sidebar dan topbar
  if (pathname === "/login") {
    return (
      <main style={{ flex: 1, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {children}
      </main>
    );
  }

  // Layout untuk halaman dashboard (dengan sidebar & topbar)
  return (
    <>
      <Sidebar />
      {/* Overlay latar gelap (hanya muncul di HP saat sidebar terbuka) */}
      <div className="sidebar-overlay" />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <header
          style={{
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 32px",
            background: "var(--topbar-bg)",
            borderBottom: "1px solid var(--topbar-border)",
            position: "sticky",
            top: 0,
            zIndex: 10,
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Tombol Hamburger Menu (Akan disembunyikan di desktop via CSS nanti) */}
            <button 
              className="mobile-menu-btn" 
              style={{
                display: "none", // Sementara disembunyikan, nanti kita atur di CSS untuk versi mobile
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "transparent",
                border: "1px solid var(--card-border)",
                color: "var(--brand-primary)",
                cursor: "pointer",
              }}
              aria-label="Buka Menu Sidebar"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

            <p
              style={{
                fontSize: "13px",
                color: "#1d6fa4",
                margin: 0,
              }}
            >
              Selamat datang di panel admin SlanikGo 🌊
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Notification bell */}
            <button
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                border: "1px solid var(--card-border)",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--text-muted)",
                transition: "all 0.15s ease",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </button>

            {/* Date */}
            <div
              style={{
                padding: "6px 14px",
                borderRadius: "10px",
                background: "rgba(14, 165, 233, 0.08)",
                border: "1px solid rgba(14, 165, 233, 0.15)",
                fontSize: "12px",
                fontWeight: "500",
                color: "#0284c7",
              }}
            >
              {new Date().toLocaleDateString("id-ID", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>
        </header>

        <main
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "32px",
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
}
