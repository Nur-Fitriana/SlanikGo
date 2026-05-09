"use client";

import React, { useState } from "react";
import { useToast } from "../components/ToastProvider";

interface OperationalHour {
  day: string;
  openTime: string;
  closeTime: string;
  isClosed: boolean;
}

const initialHours: OperationalHour[] = [
  { day: "Senin", openTime: "08:00", closeTime: "17:00", isClosed: false },
  { day: "Selasa", openTime: "08:00", closeTime: "17:00", isClosed: false },
  { day: "Rabu", openTime: "08:00", closeTime: "17:00", isClosed: false },
  { day: "Kamis", openTime: "08:00", closeTime: "17:00", isClosed: false },
  { day: "Jumat", openTime: "08:00", closeTime: "17:00", isClosed: false },
  { day: "Sabtu", openTime: "07:30", closeTime: "18:00", isClosed: false },
  { day: "Minggu", openTime: "07:30", closeTime: "18:00", isClosed: false },
];

export default function OperationalHours() {
  const [hours, setHours] = useState<OperationalHour[]>(initialHours);
  const [isSaving, setIsSaving] = useState(false);
  const { showToast } = useToast();

  const handleToggleClosed = (index: number) => {
    const newHours = [...hours];
    newHours[index].isClosed = !newHours[index].isClosed;
    setHours(newHours);
  };

  const handleTimeChange = (index: number, field: "openTime" | "closeTime", value: string) => {
    const newHours = [...hours];
    newHours[index][field] = value;
    setHours(newHours);
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      showToast("Jam operasional berhasil diperbarui!", "success");
    }, 1000);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
        <div>
          <h1 className="page-title">Jam Operasional</h1>
          <p className="page-subtitle">Atur jadwal operasional rutin dan hari libur Slanik Waterpark.</p>
        </div>
        <button 
          className="btn-primary" 
          onClick={handleSave}
          disabled={isSaving}
          style={{ minWidth: "140px" }}
        >
          {isSaving ? "Menyimpan..." : "Simpan Jadwal"}
        </button>
      </div>

      <div className="card-premium" style={{ overflow: "hidden" }}>
        <div style={{ padding: "24px", borderBottom: "1px solid var(--divider)", background: "#f8fafc" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: "20px", fontWeight: "700", color: "var(--brand-primary)", fontSize: "14px" }}>
            <div>HARI</div>
            <div>JAM BUKA</div>
            <div>JAM TUTUP</div>
            <div style={{ textAlign: "center" }}>STATUS</div>
          </div>
        </div>

        <div style={{ padding: "0 24px" }}>
          {hours.map((item, index) => (
            <div key={item.day} style={{ 
              display: "grid", 
              gridTemplateColumns: "1.5fr 1fr 1fr 1fr", 
              gap: "20px", 
              alignItems: "center", 
              padding: "20px 0",
              borderBottom: index === hours.length - 1 ? "none" : "1px solid var(--divider)"
            }}>
              <div style={{ fontWeight: "600", fontSize: "15px", color: "var(--brand-secondary)" }}>
                {item.day}
              </div>
              
              <div>
                <input 
                  type="time" 
                  className="input-field" 
                  value={item.openTime}
                  disabled={item.isClosed}
                  onChange={(e) => handleTimeChange(index, "openTime", e.target.value)}
                  style={{ opacity: item.isClosed ? 0.5 : 1 }}
                />
              </div>

              <div>
                <input 
                  type="time" 
                  className="input-field" 
                  value={item.closeTime}
                  disabled={item.isClosed}
                  onChange={(e) => handleTimeChange(index, "closeTime", e.target.value)}
                  style={{ opacity: item.isClosed ? 0.5 : 1 }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={() => handleToggleClosed(index)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "20px",
                    border: "none",
                    background: item.isClosed ? "#fee2e2" : "#dcfce7",
                    color: item.isClosed ? "#dc2626" : "#15803d",
                    fontSize: "12px",
                    fontWeight: "700",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    minWidth: "80px"
                  }}
                >
                  {item.isClosed ? "TUTUP" : "BUKA"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "24px", padding: "20px", background: "#fff9eb", borderRadius: "16px", border: "1px solid #fef3c7", display: "flex", gap: "16px" }}>
        <div style={{ color: "#d97706" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <div>
          <p style={{ fontSize: "14px", fontWeight: "700", color: "#92400e", marginBottom: "4px" }}>Tips Pengaturan</p>
          <p style={{ fontSize: "13px", color: "#b45309", lineHeight: "1.5" }}>
            Gunakan status <strong>TUTUP</strong> untuk hari libur nasional atau pemeliharaan rutin. Perubahan ini akan langsung tampil di website utama dan aplikasi pengunjung.
          </p>
        </div>
      </div>
    </div>
  );
}
