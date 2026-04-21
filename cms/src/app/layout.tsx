import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SlanikGo Admin — CMS Panel",
  description:
    "Panel admin untuk mengelola konten website SlanikGo — Slanik Waterpark Lampung Selatan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-color-scheme="light"
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{ colorScheme: "light" }}
    >
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row",
          margin: 0,
          padding: 0,
        }}
      >
        <Sidebar />

        {/* Main content area */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            overflow: "hidden",
          }}
        >
          {/* Top bar */}
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
            <div>
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

          {/* Page content */}
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
      </body>
    </html>
  );
}
