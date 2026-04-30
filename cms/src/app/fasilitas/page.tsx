"use client";

import React, { useState } from "react";

interface Facility {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  status: "Aktif" | "Pemeliharaan" | "Tutup";
}

const initialFacilities: Facility[] = [
  {
    id: "1",
    name: "Olympic Pool",
    category: "Kolam Renang",
    description: "Kolam renang standar olimpiade dengan kedalaman 1.5m - 2m.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=400",
    status: "Aktif",
  },
  {
    id: "2",
    name: "Dragon Slide",
    category: "Wahana Air",
    description: "Perosotan air raksasa berbentuk naga dengan ketinggian 15 meter.",
    image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=400",
    status: "Aktif",
  },
  {
    id: "3",
    name: "Kids Playground",
    category: "Area Bermain",
    description: "Area bermain air khusus anak-anak dengan pancuran dan ember tumpah.",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=400",
    status: "Aktif",
  },
];

export default function FacilityManagement() {
  const [facilities, setFacilities] = useState<Facility[]>(initialFacilities);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFacility, setEditingFacility] = useState<Facility | null>(null);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Aktif": return "badge-success";
      case "Pemeliharaan": return "badge-warning";
      case "Tutup": return "badge-danger";
      default: return "badge-info";
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Hapus fasilitas ini?")) {
      setFacilities(facilities.filter(f => f.id !== id));
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
        <div>
          <h1 className="page-title">Manajemen Fasilitas</h1>
          <p className="page-subtitle">Kelola daftar wahana, kolam renang, dan area pendukung di Slanik Waterpark.</p>
        </div>
        <button
          className="btn-primary"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          onClick={() => {
            setEditingFacility(null);
            setIsModalOpen(true);
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Tambah Fasilitas
        </button>
      </div>

      {/* Facilities Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "24px" }}>
        {facilities.map((facility) => (
          <div key={facility.id} className="card-premium" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", height: "200px", width: "100%" }}>
              <img
                src={facility.image}
                alt={facility.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", top: "12px", right: "12px" }}>
                <span className={getStatusBadge(facility.status)}>{facility.status}</span>
              </div>
            </div>

            <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ marginBottom: "12px" }}>
                <span style={{ fontSize: "11px", fontWeight: "700", color: "var(--brand-accent)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  {facility.category}
                </span>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--brand-secondary)", marginTop: "4px" }}>{facility.name}</h3>
              </div>

              <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: "1.6", marginBottom: "20px", flex: 1 }}>
                {facility.description}
              </p>

              <div style={{ display: "flex", gap: "10px", paddingTop: "16px", borderTop: "1px solid var(--divider)" }}>
                <button
                  className="btn-outline"
                  style={{ flex: 1, padding: "8px", fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}
                  onClick={() => {
                    setEditingFacility(facility);
                    setIsModalOpen(true);
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                  </svg>
                  Edit
                </button>
                <button
                  className="btn-danger"
                  style={{ padding: "8px 12px" }}
                  onClick={() => handleDelete(facility.id)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(4px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 1000, padding: "20px"
        }}>
          <div className="card-premium" style={{
            width: "100%", maxWidth: "600px", background: "white", padding: "32px",
            maxHeight: "90vh", overflowY: "auto"
          }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "24px", color: "var(--brand-secondary)" }}>
              {editingFacility ? "Edit Fasilitas" : "Tambah Fasilitas Baru"}
            </h2>

            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={(e) => {
              e.preventDefault();
              setIsModalOpen(false);
            }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Nama Fasilitas</label>
                <input type="text" className="input-field" placeholder="Contoh: Kolam Arus, Tower Slide..." defaultValue={editingFacility?.name} required />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Kategori</label>
                  <select className="input-field" defaultValue={editingFacility?.category || "Wahana Air"}>
                    <option value="Kolam Renang">Kolam Renang</option>
                    <option value="Wahana Air">Wahana Air</option>
                    <option value="Area Bermain">Area Bermain</option>
                    <option value="Fasilitas Umum">Fasilitas Umum</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Status</label>
                  <select className="input-field" defaultValue={editingFacility?.status || "Aktif"}>
                    <option value="Aktif">Aktif</option>
                    <option value="Pemeliharaan">Pemeliharaan</option>
                    <option value="Tutup">Tutup</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Deskripsi</label>
                <textarea className="input-field" rows={3} placeholder="Jelaskan detail fasilitas..." defaultValue={editingFacility?.description}></textarea>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Foto Fasilitas</label>
                <div style={{
                  border: "2px dashed var(--input-border)",
                  borderRadius: "12px",
                  padding: "24px",
                  textAlign: "center",
                  background: "#f8fafc",
                  cursor: "pointer"
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" style={{ marginBottom: "8px" }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>Klik atau seret foto ke sini untuk upload</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                <button type="button" className="btn-outline" style={{ flex: 1 }} onClick={() => setIsModalOpen(false)}>Batal</button>
                <button type="submit" className="btn-primary" style={{ flex: 1 }}>Simpan Fasilitas</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
