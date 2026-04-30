"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import Toast, { ToastType } from "./Toast";

// Definisikan struktur fungsi showToast yang bisa dipanggil dari komponen lain
interface ToastContextType {
  showToast: (message: string, type: ToastType, duration?: number) => void;
}

// Buat React Context
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Custom Hook untuk memudahkan pemanggilan Context
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast harus digunakan di dalam ToastProvider!");
  }
  return context;
};

interface ToastData {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  // State untuk menyimpan daftar toast yang sedang aktif
  const [toasts, setToasts] = useState<ToastData[]>([]);

  // Fungsi inti untuk memunculkan pesan baru
  const showToast = useCallback((message: string, type: ToastType, duration: number = 3000) => {
    // Generate ID acak agar setiap toast unik
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type, duration }]);
  }, []);

  // Fungsi untuk membuang toast dari daftar (dipanggil oleh komponen Toast saat waktunya habis / disilang)
  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      {/* Wadah untuk menampung dan merender semua toast yang aktif */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
