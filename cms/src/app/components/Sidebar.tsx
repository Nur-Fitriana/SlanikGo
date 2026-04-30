"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";

const navItems = [
  {
    label: "Dashboard",
    href: "/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Harga Tiket",
    href: "/tiket",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M13 5v2" />
        <path d="M13 17v2" />
        <path d="M13 11v2" />
      </svg>
    ),
  },
  {
    label: "Fasilitas",
    href: "/fasilitas",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
        <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <path d="M12 4v6" />
        <path d="M2 18h20" />
      </svg>
    ),
  },
  {
    label: "Jam Operasional",
    href: "/jam-operasional",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Galeri Foto",
    href: "/galeri",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    ),
  },
  {
    label: "Lokasi & Kontak",
    href: "/lokasi",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Pengumuman",
    href: "/pengumuman",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z" />
      </svg>
    ),
  },
];

export default function Sidebar({ isOpen, setIsOpen }: { isOpen?: boolean; setIsOpen?: (v: boolean) => void }) {
  const pathname = usePathname();

  // Tutup otomatis saat admin menekan menu dan berpindah halaman
  useEffect(() => {
    if (setIsOpen) setIsOpen(false);
  }, [pathname, setIsOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <aside
      className={`sidebar-container ${isOpen ? 'open' : ''}`}
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "var(--sidebar-bg)",
        borderRight: "1px solid var(--sidebar-border)",
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: 0,
        flexShrink: 0,
      }}
    >
      {/* Logo & Brand */}
      <div
        style={{
          padding: "24px 20px 20px",
          borderBottom: "1px solid var(--sidebar-border)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
          {/* Logo icon */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
              flexShrink: 0,
              overflow: "hidden"
            }}
          >
            <Image
              src="/slatnik_logo.png"
              alt="Slanik Waterpark Logo"
              width={80}
              height={80}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <p
              style={{
                color: "#bae6fd",
                fontSize: "28px",
                fontWeight: "700",
                letterSpacing: "-0.3px",
                lineHeight: 1,
              }}
            >
              SlanikGo
            </p>
            <p style={{ color: "rgba(186, 230, 253, 0.5)", fontSize: "16px", marginTop: "2px" }}>
              Admin Panel
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ padding: "12px 12px", flex: 1, overflowY: "auto" }}>
        <p
          style={{
            color: "rgba(186, 230, 253, 0.35)",
            fontSize: "10px",
            fontWeight: "600",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "8px 8px 4px",
          }}
        >
          Menu Utama
        </p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 12px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: active ? "600" : "400",
                    color: active ? "#bae6fd" : "rgba(186, 230, 253, 0.65)",
                    background: active ? "var(--sidebar-active)" : "transparent",
                    borderLeft: active ? "3px solid #90caf9" : "3px solid transparent",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLAnchorElement).style.background = "var(--sidebar-hover)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#bae6fd";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(186, 230, 253, 0.65)";
                    }
                  }}
                >
                  <span
                    style={{
                      opacity: active ? 1 : 0.7,
                      color: active ? "#90caf9" : "inherit",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer / User Info */}
      <div
        style={{
          padding: "16px",
          borderTop: "1px solid var(--sidebar-border)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 12px",
            borderRadius: "10px",
            background: "rgba(255, 255, 255, 0.08)",
          }}
        >
          <div
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1565c0, #2196f3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: "700",
              color: "white",
              flexShrink: 0,
            }}
          >
            A
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ color: "#bae6fd", fontSize: "13px", fontWeight: "600", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Admin
            </p>
            <p style={{ color: "rgba(186, 230, 253, 0.45)", fontSize: "11px", margin: 0 }}>
              Super Admin
            </p>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(186, 230, 253, 0.4)" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </div>
      </div>
    </aside>
  );
}
