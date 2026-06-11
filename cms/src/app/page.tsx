"use client";

import React, { useState, useEffect } from "react";
import { getAllFacilities } from "../services/fasilitasService";
import { getAllGallery } from "../services/galeriService";
import { getAllTickets } from "../services/tiketService";
import { getInfoWisata } from "../services/infoService";

interface DashboardStats {
  totalFacilities: number;
  totalGallery: number;
  totalTicketTypes: number;
  todayStatus: string;
  todayHours: string;
}

const INITIAL_STATS: DashboardStats = {
  totalFacilities: 0,
  totalGallery: 0,
  totalTicketTypes: 0,
  todayStatus: "Memuat...",
  todayHours: "",
};

const DAYS_ID = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>(INITIAL_STATS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [facilities, gallery, tickets, info] = await Promise.all([
          getAllFacilities(),
          getAllGallery(),
          getAllTickets(),
          getInfoWisata(),
        ]);

        const todayDayName = DAYS_ID[new Date().getDay()];
        const todayHour = info.hours.find(h => h.day === todayDayName);
        const todayStatus = todayHour?.isClosed
          ? "Tutup"
          : todayHour
          ? "Buka"
          : "Buka";
        const todayHoursStr = todayHour && !todayHour.isClosed
          ? `${todayHour.openTime} – ${todayHour.closeTime} WIB · Hari ini`
          : "Waterpark tutup hari ini";

        setStats({
          totalFacilities: facilities.length,
          totalGallery: gallery.length,
          totalTicketTypes: tickets.length,
          todayStatus,
          todayHours: todayHoursStr,
        });
      } catch (err) {
        console.warn("Dashboard: Failed to fetch some data, showing partial stats.", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const statCards = [
    {
      label: "Total Pengunjung",
      value: "12,480",
      change: "+8.2%",
      trend: "up",
      sub: "bulan ini (estimasi)",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      color: "#0ea5e9",
      bg: "rgba(14, 165, 233, 0.1)",
    },
    {
      label: "Harga Tiket Aktif",
      value: isLoading ? "—" : String(stats.totalTicketTypes),
      change: "Terkini",
      trend: "neutral",
      sub: "kategori harga",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
          <path d="M13 5v2M13 17v2M13 11v2" />
        </svg>
      ),
      color: "#06b6d4",
      bg: "rgba(6, 182, 212, 0.1)",
    },
    {
      label: "Fasilitas",
      value: isLoading ? "—" : String(stats.totalFacilities),
      change: "Aktif",
      trend: "up",
      sub: "fasilitas tersedia",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
          <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
          <path d="M12 4v6M2 18h20" />
        </svg>
      ),
      color: "#8b5cf6",
      bg: "rgba(139, 92, 246, 0.1)",
    },
    {
      label: "Foto Galeri",
      value: isLoading ? "—" : String(stats.totalGallery),
      change: "Total",
      trend: "up",
      sub: "foto aktif",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
      ),
      color: "#f59e0b",
      bg: "rgba(245, 158, 11, 0.1)",
    },
  ];

  const recentActivities = [
    { action: "Harga tiket weekend diperbarui", time: "2 jam lalu", type: "ticket" },
    { action: "3 foto baru ditambahkan ke galeri", time: "5 jam lalu", type: "gallery" },
    { action: "Fasilitas \"Wahana Seluncur\" diaktifkan", time: "1 hari lalu", type: "facility" },
    { action: "Pengumuman libur Lebaran diterbitkan", time: "2 hari lalu", type: "announcement" },
    { action: "Jam operasional hari Senin diubah", time: "3 hari lalu", type: "schedule" },
  ];

  const activityTypeColor: Record<string, { bg: string; color: string; icon: React.ReactNode }> = {
    ticket: { bg: "rgba(6, 182, 212, 0.1)", color: "#0891b2", icon: "🎟️" },
    gallery: { bg: "rgba(245, 158, 11, 0.1)", color: "#d97706", icon: "🖼️" },
    facility: { bg: "rgba(139, 92, 246, 0.1)", color: "#7c3aed", icon: "🏊" },
    announcement: { bg: "rgba(239, 68, 68, 0.1)", color: "#dc2626", icon: "📢" },
    schedule: { bg: "rgba(14, 165, 233, 0.1)", color: "#0284c7", icon: "🕐" },
  };

  const quickLinks = [
    { label: "Tambah Harga Tiket", href: "/tiket", icon: "🎟️" },
    { label: "Upload Foto", href: "/galeri", icon: "📸" },
    { label: "Edit Fasilitas", href: "/fasilitas", icon: "🏊" },
    { label: "Buat Pengumuman", href: "/pengumuman", icon: "📢" },
  ];

  return (
    <div style={{ maxWidth: "1100px" }}>
      {/* Page Header */}
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "26px", fontWeight: "700", letterSpacing: "-0.5px", color: "var(--foreground)", margin: 0, marginBottom: "6px" }}>
          Dashboard
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "14px", margin: 0 }}>
          Ringkasan data dan aktivitas terkini SlanikGo — Slanik Waterpark
        </p>
      </div>

      {/* Stats Grid */}
      <style>{`
        @keyframes pulse-shimmer {
          0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; }
        }
        .stat-skeleton { animation: pulse-shimmer 1.4s ease-in-out infinite; }
      `}</style>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "32px" }}>
        {statCards.map((stat, i) => (
          <div key={i} className="card-premium" style={{ padding: "20px 22px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: stat.bg, display: "flex", alignItems: "center", justifyContent: "center", color: stat.color }}>
                {stat.icon}
              </div>
              <span style={{
                fontSize: "11px", fontWeight: "600", padding: "3px 8px", borderRadius: "99px",
                background: stat.trend === "up" ? "rgba(16, 185, 129, 0.1)" : "rgba(14, 165, 233, 0.1)",
                color: stat.trend === "up" ? "#059669" : "#0284c7",
              }}>
                {stat.change}
              </span>
            </div>
            {isLoading && stat.value === "—" ? (
              <div className="stat-skeleton" style={{ height: "32px", width: "50%", background: "#cbd5e1", borderRadius: "8px", marginBottom: "8px" }} />
            ) : (
              <p style={{ fontSize: "28px", fontWeight: "700", color: "var(--foreground)", margin: 0, lineHeight: 1, letterSpacing: "-0.5px" }}>
                {stat.value}
              </p>
            )}
            <p style={{ fontSize: "13px", color: "var(--text-muted)", margin: "6px 0 0" }}>{stat.label}</p>
            <p style={{ fontSize: "11px", color: "var(--text-muted)", margin: "2px 0 0", opacity: 0.7 }}>{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Bottom Grid: Recent Activity + Quick Actions */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "20px" }}>
        {/* Recent Activity */}
        <div className="card-premium" style={{ padding: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
            <h2 style={{ fontSize: "15px", fontWeight: "600", margin: 0, color: "var(--foreground)" }}>Aktivitas Terkini</h2>
            <span style={{ fontSize: "11px", padding: "3px 10px", borderRadius: "99px", background: "rgba(14, 165, 233, 0.08)", color: "#0284c7", fontWeight: "500" }}>
              5 terbaru
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {recentActivities.map((activity, i) => {
              const typeInfo = activityTypeColor[activity.type];
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px", borderRadius: "10px", transition: "background 0.15s ease", cursor: "default" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(14, 165, 233, 0.04)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
                >
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: typeInfo.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>
                    {typeInfo.icon as React.ReactNode}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "13px", fontWeight: "500", color: "var(--foreground)", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {activity.action}
                    </p>
                    <p style={{ fontSize: "11px", color: "var(--text-muted)", margin: "2px 0 0" }}>{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Dynamic Status Operasional */}
          <div className="card-premium" style={{ padding: "20px", background: "linear-gradient(135deg, #0c4a6e, #075985)", border: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: stats.todayStatus === "Buka" ? "#4ade80" : "#f87171",
                boxShadow: `0 0 6px ${stats.todayStatus === "Buka" ? "#4ade80" : "#f87171"}`,
              }} />
              <p style={{ fontSize: "13px", fontWeight: "600", color: "#bae6fd", margin: 0 }}>Status Waterpark</p>
            </div>
            {isLoading ? (
              <div className="stat-skeleton" style={{ height: "28px", width: "60%", background: "rgba(186,230,253,0.2)", borderRadius: "8px", marginBottom: "8px" }} />
            ) : (
              <p style={{ fontSize: "22px", fontWeight: "700", color: "white", margin: 0, marginBottom: "4px" }}>
                {stats.todayStatus === "Buka" ? "🟢" : "🔴"} {stats.todayStatus}
              </p>
            )}
            <p style={{ fontSize: "12px", color: "rgba(186, 230, 253, 0.65)", margin: 0 }}>
              {isLoading ? "Memuat jadwal..." : stats.todayHours}
            </p>
            <div style={{ marginTop: "14px", paddingTop: "14px", borderTop: "1px solid rgba(186, 230, 253, 0.15)", fontSize: "11px", color: "rgba(186, 230, 253, 0.5)" }}>
              Sesuai jadwal jam operasional backend
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card-premium" style={{ padding: "20px" }}>
            <p style={{ fontSize: "13px", fontWeight: "600", color: "var(--foreground)", margin: 0, marginBottom: "14px" }}>Aksi Cepat</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {quickLinks.map((link, i) => (
                <a key={i} href={link.href} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", borderRadius: "10px", textDecoration: "none", fontSize: "13px", fontWeight: "500", color: "var(--foreground)", border: "1px solid var(--card-border)", transition: "all 0.15s ease", background: "transparent" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#0ea5e9"; (e.currentTarget as HTMLAnchorElement).style.color = "#0284c7"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(14, 165, 233, 0.05)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--card-border)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--foreground)"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
                >
                  <span style={{ fontSize: "16px" }}>{link.icon}</span>
                  {link.label}
                  <svg style={{ marginLeft: "auto", opacity: 0.4 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
