"use client";

import React, { useState } from "react";
import { useToast } from "../components/ToastProvider";

interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  order: number;
}

const initialPhotos: GalleryPhoto[] = [
  { id: "1", url: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=600", caption: "Dragon Slide", order: 1 },
  { id: "2", url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=600", caption: "Olympic Pool Area", order: 2 },
  { id: "3", url: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=600", caption: "Kids Zone Splash", order: 3 },
  { id: "4", url: "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=600", caption: "Lazy River View", order: 4 },
  { id: "5", url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=600", caption: "Main Entrance", order: 5 },
  { id: "6", url: "https://images.unsplash.com/photo-1600336153113-d66c79ded3e9?auto=format&fit=crop&q=80&w=600", caption: "Night Event Lighting", order: 6 },
];

export default function GalleryManagement() {
  const [photos, setPhotos] = useState<GalleryPhoto[]>(initialPhotos);
  const { showToast } = useToast();

  const movePhoto = (index: number, direction: "up" | "down") => {
    const newPhotos = [...photos];
    if (direction === "up" && index > 0) {
      [newPhotos[index], newPhotos[index - 1]] = [newPhotos[index - 1], newPhotos[index]];
    } else if (direction === "down" && index < photos.length - 1) {
      [newPhotos[index], newPhotos[index + 1]] = [newPhotos[index + 1], newPhotos[index]];
    }
    setPhotos(newPhotos.map((p, i) => ({ ...p, order: i + 1 })));
  };

  const handleDelete = (id: string) => {
    if (confirm("Hapus foto ini dari galeri?")) {
      setPhotos(photos.filter(p => p.id !== id));
      showToast("Foto berhasil dihapus dari galeri!", "success");
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
        <div>
          <h1 className="page-title">Manajemen Galeri</h1>
          <p className="page-subtitle">Kelola foto-foto wisata untuk ditampilkan di landing page utama.</p>
        </div>
        <button 
          className="btn-primary" 
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          onClick={() => showToast("Fitur upload foto segera hadir!", "info")}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
          </svg>
          Upload Foto
        </button>
      </div>

      {/* Gallery Grid */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
        gap: "24px" 
      }}>
        {photos.map((photo, index) => (
          <div key={photo.id} className="card-premium group" style={{ 
            overflow: "hidden", 
            position: "relative"
          }}>
            <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
              <img 
                src={photo.url} 
                alt={photo.caption} 
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
              />
              <div style={{ 
                position: "absolute", 
                top: 0, left: 0, right: 0, bottom: 0, 
                background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "16px"
              }}>
                <p style={{ color: "white", fontSize: "14px", fontWeight: "600", margin: 0 }}>{photo.caption}</p>
              </div>
              
              {/* Order Controls */}
              <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", gap: "4px" }}>
                <button 
                  onClick={() => movePhoto(index, "up")}
                  disabled={index === 0}
                  style={{ 
                    width: "32px", height: "32px", borderRadius: "8px", 
                    background: "rgba(255,255,255,0.9)", border: "none", 
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: index === 0 ? "default" : "pointer",
                    opacity: index === 0 ? 0.4 : 1,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1d6fa4" strokeWidth="2.5">
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </button>
                <button 
                  onClick={() => movePhoto(index, "down")}
                  disabled={index === photos.length - 1}
                  style={{ 
                    width: "32px", height: "32px", borderRadius: "8px", 
                    background: "rgba(255,255,255,0.9)", border: "none", 
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: index === photos.length - 1 ? "default" : "pointer",
                    opacity: index === photos.length - 1 ? 0.4 : 1,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1d6fa4" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>

              {/* Delete Button */}
              <button 
                onClick={() => handleDelete(photo.id)}
                style={{ 
                  position: "absolute", top: "12px", right: "12px",
                  width: "32px", height: "32px", borderRadius: "8px", 
                  background: "#fee2e2", border: "none", 
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(220,38,38,0.2)"
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
            
            <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: "600" }}>Urutan: #{photo.order}</span>
              <button style={{ 
                fontSize: "12px", color: "var(--brand-accent)", background: "transparent", border: "none", 
                fontWeight: "600", cursor: "pointer" 
              }}>Edit Caption</button>
            </div>
          </div>
        ))}

        {/* Empty State / Add Card */}
        <div 
          style={{ 
            height: "260px", 
            border: "2px dashed var(--input-border)", 
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            cursor: "pointer",
            background: "rgba(255,255,255,0.4)",
            transition: "all 0.2s ease"
          }}
          onClick={() => showToast("Fitur tambah foto segera hadir!", "info")}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.8)";
            e.currentTarget.style.borderColor = "var(--brand-accent)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.4)";
            e.currentTarget.style.borderColor = "var(--input-border)";
          }}
        >
          <div style={{ 
            width: "48px", height: "48px", borderRadius: "50%", background: "var(--blue-50)", 
            display: "flex", alignItems: "center", justifyContent: "center" 
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-accent)" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--brand-secondary)" }}>Tambah Foto</span>
        </div>
      </div>
    </div>
  );
}
