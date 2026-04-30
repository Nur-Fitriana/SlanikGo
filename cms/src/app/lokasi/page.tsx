"use client";

import React, { useState } from "react";

export default function LocationContactManagement() {
  const [formData, setFormData] = useState({
    address: "Jl. Raya Variasi No.1, Bandar Lampung, Lampung 35144, Indonesia",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.9701831804364!2d105.25884947498427!3d-5.421453994558237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db72186985a9%3A0xe54d249f70d110!2sSlanik%20Waterpark!5e0!3m2!1sen!2sid!4v1713620000000!5m2!1sen!2sid",
    phone: "0812-3456-7890",
    email: "info@slanikwaterpark.co.id",
    instagram: "@slanikwaterpark",
    facebook: "Slanik Waterpark Official",
    whatsapp: "0812-3456-7890",
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Informasi kontak berhasil diperbarui!");
    }, 1000);
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: "32px" }}>
        <h1 className="page-title">Lokasi & Kontak</h1>
        <p className="page-subtitle">Kelola alamat fisik, peta, dan informasi kontak yang tampil di footer website.</p>
      </div>

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
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Google Maps Embed URL</label>
                <input 
                  type="text" 
                  className="input-field" 
                  value={formData.googleMapsUrl}
                  onChange={(e) => setFormData({...formData, googleMapsUrl: e.target.value})}
                />
                <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "6px" }}>Ambil dari Google Maps &gt; Share &gt; Embed a map &gt; src="..."</p>
              </div>
            </div>
          </div>

          <div className="card-premium" style={{ padding: "24px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "20px", color: "var(--brand-secondary)", display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Kontak & Media Sosial
            </h3>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Telepon</label>
                <input type="text" className="input-field" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>WhatsApp</label>
                <input type="text" className="input-field" value={formData.whatsapp} onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} />
              </div>
            </div>
            
            <div style={{ marginTop: "16px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Email</label>
              <input type="email" className="input-field" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Instagram</label>
                <input type="text" className="input-field" value={formData.instagram} onChange={(e) => setFormData({...formData, instagram: e.target.value})} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Facebook</label>
                <input type="text" className="input-field" value={formData.facebook} onChange={(e) => setFormData({...formData, facebook: e.target.value})} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Preview */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="card-premium" style={{ flex: 1, padding: "24px", display: "flex", flexDirection: "column" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "20px", color: "var(--brand-secondary)" }}>Preview Peta Lokasi</h3>
            <div style={{ 
              flex: 1, 
              background: "#f1f5f9", 
              borderRadius: "12px", 
              overflow: "hidden", 
              border: "1px solid var(--divider)",
              minHeight: "300px"
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
    </div>
  );
}
