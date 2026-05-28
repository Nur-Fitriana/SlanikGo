"use client";

import React, { useState, useEffect } from "react";
import { useToast } from "../components/ToastProvider";
import { getAllTickets, createTicket, updateTicket, TicketPrice } from "../../services/tiketService";

export default function TicketManagement() {
  const [tickets, setTickets] = useState<TicketPrice[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTicket, setEditingTicket] = useState<TicketPrice | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { showToast } = useToast();

  useEffect(() => {
    async function loadTickets() {
      try {
        setIsLoading(true);
        const data = await getAllTickets();
        setTickets(data);
        setError(null);
      } catch (err: any) {
        setError(err.message || "Gagal memuat data tiket.");
        showToast("Gagal memuat data tiket", "error");
      } finally {
        setIsLoading(false);
      }
    }
    loadTickets();
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const togglePromo = (id: string) => {
    setTickets(
      tickets.map((t) =>
        t.id === id ? { ...t, isPromoActive: !t.isPromoActive } : t
      )
    );
    showToast("Status promo berhasil diubah!", "success");
  };

  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus harga tiket ini?")) {
      setTickets(tickets.filter((t) => t.id !== id));
      showToast("Harga tiket berhasil dihapus!", "success");
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
        <div>
          <h1 className="page-title">Manajemen Harga Tiket</h1>
          <p className="page-subtitle">Atur tarif masuk, paket, dan promo aktif untuk pengunjung Slanik Waterpark.</p>
        </div>
        <button 
          className="btn-primary"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          onClick={() => {
            setEditingTicket(null);
            setIsModalOpen(true);
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Tambah Harga
        </button>
      </div>

      {/* Stats Quick View */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "32px" }}>
        <div className="card-premium" style={{ padding: "20px" }}>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: "600", marginBottom: "8px" }}>Total Kategori</p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "700", color: "var(--brand-primary)" }}>{tickets.length}</h2>
            <span className="badge-info">Aktif</span>
          </div>
        </div>
        <div className="card-premium" style={{ padding: "20px" }}>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: "600", marginBottom: "8px" }}>Promo Berjalan</p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#15803d" }}>
              {tickets.filter(t => t.isPromoActive).length}
            </h2>
            <span className="badge-success">On Air</span>
          </div>
        </div>
        <div className="card-premium" style={{ padding: "20px" }}>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: "600", marginBottom: "8px" }}>Harga Termurah</p>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "700", color: "var(--foreground)" }}>
              {tickets.length > 0
                ? formatPrice(Math.min(...tickets.map(t => t.isPromoActive && t.promoPrice ? t.promoPrice : t.price)))
                : "Rp 0"}
            </h2>
          </div>
        </div>
      </div>

      {/* Tickets Table */}
      <div className="table-container shadow-xl">
        <table className="table-base">
          <thead>
            <tr>
              <th>Kategori & Deskripsi</th>
              <th>Tipe</th>
              <th>Harga Dasar</th>
              <th>Status Promo</th>
              <th>Harga Akhir</th>
              <th style={{ textAlign: "right" }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "40px" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      border: "3px solid rgba(14, 165, 233, 0.2)",
                      borderTopColor: "var(--brand-primary)",
                      animation: "spin 0.8s linear infinite"
                    }} />
                    <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "14px" }}>Memuat data harga tiket...</p>
                  </div>
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "40px", color: "#dc2626", fontWeight: "500" }}>
                  {error}
                </td>
              </tr>
            ) : tickets.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "40px", color: "var(--text-muted)", fontWeight: "500" }}>
                  Belum ada data harga tiket.
                </td>
              </tr>
            ) : (
              tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>
                    <div>
                      <div style={{ fontWeight: "600", color: "var(--brand-secondary)", fontSize: "15px" }}>{ticket.category}</div>
                      <div style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "2px" }}>{ticket.description}</div>
                    </div>
                  </td>
                  <td>
                    <span className={`badge-${ticket.type === "Weekday" ? "info" : ticket.type === "Weekend" ? "warning" : "success"}`}>
                      {ticket.type}
                    </span>
                  </td>
                  <td>
                    <span style={{ 
                      textDecoration: ticket.isPromoActive ? "line-through" : "none",
                      color: ticket.isPromoActive ? "var(--text-muted)" : "inherit"
                    }}>
                      {formatPrice(ticket.price)}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <button
                        onClick={() => togglePromo(ticket.id)}
                        style={{
                          width: "40px",
                          height: "20px",
                          borderRadius: "20px",
                          background: ticket.isPromoActive ? "#15803d" : "#cbd5e1",
                          position: "relative",
                          cursor: "pointer",
                          border: "none",
                          transition: "all 0.3s ease",
                          display: "flex",
                          alignItems: "center",
                          padding: "0 4px"
                        }}
                      >
                        <div style={{
                          width: "14px",
                          height: "14px",
                          borderRadius: "50%",
                          background: "white",
                          position: "absolute",
                          left: ticket.isPromoActive ? "22px" : "4px",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                        }} />
                      </button>
                      <span style={{ fontSize: "12px", fontWeight: "600", color: ticket.isPromoActive ? "#15803d" : "var(--text-muted)" }}>
                        {ticket.isPromoActive ? "Promo Aktif" : "Non-Promo"}
                      </span>
                    </div>
                  </td>
                  <td>
                    <div style={{ fontWeight: "700", color: ticket.isPromoActive ? "#dc2626" : "var(--foreground)", fontSize: "16px" }}>
                      {ticket.isPromoActive && ticket.promoPrice 
                        ? formatPrice(ticket.promoPrice) 
                        : formatPrice(ticket.price)}
                    </div>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                      <button 
                        className="btn-outline" 
                        style={{ padding: "6px 10px", borderRadius: "8px" }}
                        onClick={() => {
                          setEditingTicket(ticket);
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
                        onClick={() => handleDelete(ticket.id)}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Overlay (Simplified) */}
      {isModalOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(15, 23, 42, 0.6)",
          backdropFilter: "blur(4px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "20px"
        }}>
          <div className="card-premium" style={{ 
            width: "100%", 
            maxWidth: "500px", 
            background: "white", 
            padding: "32px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "24px", color: "var(--brand-secondary)" }}>
              {editingTicket ? "Edit Harga Tiket" : "Tambah Kategori Harga"}
            </h2>
            
            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }} onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const category = formData.get("category") as string;
              const type = formData.get("type") as "Weekday" | "Weekend" | "Paket";
              const price = Number(formData.get("price"));
              const description = formData.get("description") as string;
              const isPromoActive = formData.get("isPromoActive") === "on";
              const promoPriceVal = formData.get("promoPrice");
              const promoPrice = promoPriceVal ? Number(promoPriceVal) : undefined;

              const ticketData = {
                category,
                type,
                price,
                description,
                isPromoActive,
                promoPrice,
              };

              try {
                if (editingTicket) {
                  const updated = await updateTicket(editingTicket.id, ticketData);
                  setTickets(tickets.map(t => t.id === editingTicket.id ? updated : t));
                  showToast("Harga tiket berhasil diperbarui!", "success");
                } else {
                  const newTicket = await createTicket(ticketData);
                  setTickets([...tickets, newTicket]);
                  showToast("Kategori tiket baru ditambahkan!", "success");
                }
                setIsModalOpen(false);
              } catch (err: any) {
                showToast(err.message || "Gagal menyimpan tiket", "error");
              }
            }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Kategori Tiket</label>
                <input type="text" name="category" className="input-field" placeholder="Contoh: Dewasa, Anak-anak, Pelajar..." defaultValue={editingTicket?.category} required />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Tipe</label>
                  <select name="type" className="input-field" defaultValue={editingTicket?.type || "Weekday"}>
                    <option value="Weekday">Weekday</option>
                    <option value="Weekend">Weekend</option>
                    <option value="Paket">Paket</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Harga Dasar (Rp)</label>
                  <input type="number" name="price" className="input-field" placeholder="35000" defaultValue={editingTicket?.price} required />
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "600", marginBottom: "8px", color: "var(--text-secondary)" }}>Deskripsi Singkat</label>
                <textarea name="description" className="input-field" rows={3} placeholder="Penjelasan mengenai tiket ini..." defaultValue={editingTicket?.description}></textarea>
              </div>

              <div style={{ 
                background: "#f0f7ff", 
                padding: "16px", 
                borderRadius: "12px", 
                border: "1px dashed var(--brand-accent)",
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--brand-primary)" }}>Aktifkan Promo?</span>
                  <input type="checkbox" name="isPromoActive" defaultChecked={editingTicket?.isPromoActive} style={{ width: "18px", height: "18px" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: "600", marginBottom: "6px", color: "var(--text-secondary)" }}>Harga Promo (Rp)</label>
                  <input type="number" name="promoPrice" className="input-field" placeholder="Opsional" defaultValue={editingTicket?.promoPrice} />
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                <button type="button" className="btn-outline" style={{ flex: 1 }} onClick={() => setIsModalOpen(false)}>Batal</button>
                <button type="submit" className="btn-primary" style={{ flex: 1 }}>Simpan Perubahan</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
