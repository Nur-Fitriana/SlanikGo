"use client";

import React, { useState, useEffect } from "react";
import { useToast } from "../components/ToastProvider";
import { getInfoWisata, updateInfoWisata, InfoWisata } from "../../services/infoService";

export default function LocationContactManagement() {
  const [formData, setFormData] = useState({
    address: "",
    googleMapsUrl: "",
    phone: "",
    email: "",
    instagram: "",
    facebook: "",
    whatsapp: "",
  });
  const [infoData, setInfoData] = useState<InfoWisata | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        setIsLoading(true);
        const info = await getInfoWisata();
        setInfoData(info);
        setFormData({
          address: info.address,
          googleMapsUrl: info.googleMapsUrl,
          phone: info.phone,
          email: info.email,
          instagram: info.instagram,
          facebook: info.facebook,
          whatsapp: info.whatsapp,
        });
      } catch (err: any) {
        showToast("Gagal memuat informasi lokasi & kontak.", "error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchInfo();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!infoData) return;
    setIsSaving(true);
    try {
      const updated = await updateInfoWisata({ ...infoData, ...formData });
      setInfoData(updated);
      showToast("Informasi kontak berhasil diperbarui!", "success");
    } catch (err: any) {
      showToast(err.message || "Gagal menyimpan informasi.", "error");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: "32px" }}>
        <h1 className="page-title">Lokasi &amp; Kontak</h1>
        <p className="page-subtitle">Kelola alamat fisik, peta, dan informasi kontak yang tampil di footer website.</p>
      </div>

      {/* Loading Skeleton */}
      <style>{`
        @keyframes pulse-shimmer {
          0% { opacity: 0.6; } 50% { opacity: 1; } 100% { opacity: 0.6; }
        }
        .skeleton-shimmer { animation: pulse-shimmer 1.5s ease-in-out infinite; }
      `}</style>

      {isLoading ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
          {[0, 1].map(col => (
            <div key={col} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="card-premium skeleton-shimmer" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ height: "20px", width: "50%", background: "#cbd5e1", borderRadius: "6px" }} />
                {[0, 1, 2].map(i => (
                  <div key={i} style={{ height: "40px", width: "100%", background: "#cbd5e1", borderRadius: "8px" }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <form onSubmit={handleSave} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
          {/* Left Column: Form Fields */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div className="card-premium" style={{ padding: "24px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "20px", color: "var(--brand-secondary)", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-12a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Detail Alamat
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Alamat Lengkap</label>
                  <textarea
                    className="input-field"
                    rows={3}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Google Maps Embed URL</label>
                  <input
                    type="text"
                    className="input-field"
                    value={formData.googleMapsUrl}
                    onChange={(e) => setFormData({ ...formData, googleMapsUrl: e.target.value })}
                  />
                  <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "6px" }}>Ambil dari Google Maps &gt; Share &gt; Embed a map &gt; src="..."</p>
                </div>
              </div>
            </div>

            <div className="card-premium" style={{ padding: "24px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "20px", color: "var(--brand-secondary)", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.19 11.9 19.79 19.79 0 0 1 1.12 3.23 2 2 0 0 1 3.1 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Kontak &amp; Media Sosial
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Telepon</label>
                  <input type="text" className="input-field" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>WhatsApp</label>
                  <input type="text" className="input-field" value={formData.whatsapp} onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })} />
                </div>
              </div>

              <div style={{ marginTop: "16px" }}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Email</label>
                <input type="email" className="input-field" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Instagram</label>
                  <input type="text" className="input-field" value={formData.instagram} onChange={(e) => setFormData({ ...formData, instagram: e.target.value })} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Facebook</label>
                  <input type="text" className="input-field" value={formData.facebook} onChange={(e) => setFormData({ ...formData, facebook: e.target.value })} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Preview */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div className="card-premium" style={{ flex: 1, padding: "24px", display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "20px", color: "var(--brand-secondary)" }}>Preview Peta Lokasi</h3>
              <div style={{
                flex: 1, background: "#f1f5f9", borderRadius: "12px",
                overflow: "hidden", border: "1px solid var(--divider)", minHeight: "300px"
              }}>
                <iframe
                  src={formData.googleMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div style={{ marginTop: "20px", padding: "16px", background: "#f0f7ff", borderRadius: "12px", border: "1px solid var(--brand-light)" }}>
                <p style={{ fontSize: "13px", color: "var(--brand-primary)", lineHeight: "1.6", margin: 0 }}>
                  <strong>Live Update:</strong> Perubahan pada koordinat atau alamat akan langsung memperbarui widget peta di website pengunjung setelah disimpan.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: "100%", padding: "16px", fontSize: "16px" }}
              disabled={isSaving}
            >
              {isSaving ? "Menyimpan Perubahan..." : "Simpan Semua Informasi"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
