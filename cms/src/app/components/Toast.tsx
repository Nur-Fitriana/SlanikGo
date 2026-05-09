import React, { useEffect } from "react";

export type ToastType = "success" | "error" | "info";

export interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  onClose: (id: string) => void;
  duration?: number;
}

export default function Toast({ id, message, type, onClose, duration = 3000 }: ToastProps) {
  // Efek untuk menutup toast secara otomatis setelah beberapa detik
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  // Render ikon berdasarkan tipe pesan
  const getIcon = () => {
    if (type === "success") {
      return (
        <div style={{ color: "#10b981", display: "flex", alignItems: "center" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
      );
    }
    if (type === "error") {
      return (
        <div style={{ color: "#ef4444", display: "flex", alignItems: "center" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </div>
      );
    }
    // Default info icon
    return (
      <div style={{ color: "#3b82f6", display: "flex", alignItems: "center" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </div>
    );
  };

  return (
    <div className="toast-item">
      {getIcon()}
      <p style={{ margin: 0, fontSize: "14px", fontWeight: "500", color: "var(--foreground)", flex: 1 }}>
        {message}
      </p>
      <button 
        onClick={() => onClose(id)}
        style={{ 
          background: "none", 
          border: "none", 
          cursor: "pointer", 
          color: "var(--text-muted)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4px",
          marginLeft: "4px",
          borderRadius: "6px",
          transition: "background 0.2s"
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = "var(--neutral-100)"}
        onMouseLeave={(e) => e.currentTarget.style.background = "none"}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}
