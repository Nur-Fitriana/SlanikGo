"use client";

import React, { useState } from "react";

interface Announcement {
  id: string;
  title: string;
  content: string;
  type: "Promo" | "Event" | "Informasi";
  status: "Aktif" | "Draft" | "Arsip";
  date: string;
}

const initialAnnouncements: Announcement[] = [
  {
    id: "1",
    title: "Promo Ramadhan Ceria",
    content: "Dapatkan diskon 30% untuk kunjungan di hari biasa selama bulan Ramadhan. Berlaku untuk kategori Dewasa.",
    type: "Promo",
    status: "Aktif",
    date: "2024-03-10",
  },
  {
    id: "2",
    title: "Event Splash Night 2024",
    content: "Pesta kolam malam hari dengan penampilan DJ lokal dan kembang api. Tiket terbatas!",
    type: "Event",
    status: "Aktif",
    date: "2024-05-15",
  },
  {
    id: "3",
    title: "Pemeliharaan Rutin Area Dragon Slide",
    content: "Mohon maaf, wahana Dragon Slide akan ditutup untuk pemeliharaan rutin pada tanggal 25-26 April.",
    type: "Informasi",
    status: "Draft",
    date: "2024-04-25",
  },
];

export default function AnnouncementManagement() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Announcement | null>(null);

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "Promo": return "badge-success";
      case "Event": return "badge-warning";
      case "Informasi": return "badge-info";
      default: return "badge-info";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Aktif": return "badge-success";
      case "Draft": return "badge-warning";
      case "Arsip": return "badge-danger";
      default: return "badge-info";
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Hapus pengumuman ini?")) {
      setAnnouncements(announcements.filter(a => a.id !== id));
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
        <div>
          <h1 className="page-title">Pengumuman & Banner</h1>
          <p className="page-subtitle">Kelola promo, event mendatang, dan informasi penting untuk pengunjung.</p>
        </div>
        <button 
          className="btn-primary" 
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          onClick={() => {
            setEditingItem(null);
            setIsModalOpen(true);
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Buat Pengumuman
        </button>
      </div>

      <div className="table-container shadow-xl">
        <table className="table-base">
          <thead>
            <tr>
              <th style={{ width: "30%" }}>Judul Pengumuman</th>
              <th>Tipe</th>
              <th>Status</th>
              <th>Tanggal Post</th>
              <th style={{ textAlign: "right" }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((item) => (
              <tr key={item.id}>
                <td>
                  <div style={{ fontWeight: "700", color: "var(--brand-secondary)", fontSize: "15px" }}>{item.title}</div>
                  <div style={{ 
                    fontSize: "12px", 
                    color: "var(--text-muted)", 
                    marginTop: "4px",
                    display: "-webkit-box",
                    WebkitLineClamp: "1",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}>
                    {item.content}
                  </div>
                </td>
                <td><span className={getTypeBadge(item.type)}>{item.type}</span></td>
                <td><span className={getStatusBadge(item.status)}>{item.status}</span></td>
                <td><div style={{ fontSize: "13px", color: "var(--text-secondary)" }}>{item.date}</div></td>
                <td>
                  <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                    <button 
                      className="btn-outline" 
                      style={{ padding: "6px 10px", borderRadius: "8px" }}
                      onClick={() => {
                        setEditingItem(item);
                        setIsModalOpen(true);
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                      </svg>
                    </button>
                    <button 
                      className="btn-danger" 
                      style={{ padding: "6px 10px", borderRadius: "8px" }}
                      onClick={() => handleDelete(item.id)}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
            width: "100%", maxWidth: "700px", background: "white", padding: "32px",
            maxHeight: "90vh", overflowY: "auto"
          }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "24px", color: "var(--brand-secondary)" }}>
              {editingItem ? "Edit Pengumuman" : "Buat Pengumuman Baru"}
            </h2>
            
            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={(e) => {
              e.preventDefault();
              setIsModalOpen(false);
            }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Judul</label>
                <input type="text" className="input-field" placeholder="Masukkan judul menarik..." defaultValue={editingItem?.title} required />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Tipe</label>
                  <select className="input-field" defaultValue={editingItem?.type || "Promo"}>
                    <option value="Promo">Promo</option>
                    <option value="Event">Event</option>
                    <option value="Informasi">Informasi</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Status</label>
                  <select className="input-field" defaultValue={editingItem?.status || "Aktif"}>
                    <option value="Aktif">Aktif</option>
                    <option value="Draft">Draft</option>
                    <option value="Arsip">Arsip</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Isi Pengumuman</label>
                <textarea className="input-field" rows={5} placeholder="Jelaskan detail pengumuman..." defaultValue={editingItem?.content} required></textarea>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Banner Image (Opsional)</label>
                <div style={{ 
                  border: "2px dashed var(--input-border)", 
                  borderRadius: "12px", 
                  padding: "32px",
                  textAlign: "center",
                  background: "#f8fafc",
                  cursor: "pointer"
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" style={{ marginBottom: "8px" }}>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>Upload gambar banner (Rasio ideal 16:9)</p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                <button type="button" className="btn-outline" style={{ flex: 1 }} onClick={() => setIsModalOpen(false)}>Batal</button>
                <button type="submit" className="btn-primary" style={{ flex: 1 }}>Publikasikan</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
