import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainLayoutWrapper from "./components/MainLayoutWrapper";
import { ToastProvider } from "./components/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SlanikGo Admin — CMS Panel",
  description:
    "Panel admin untuk mengelola konten website SlanikGo — Slanik Waterpark Lampung Selatan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-color-scheme="light"
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{ colorScheme: "light" }}
    >
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row",
          margin: 0,
          padding: 0,
        }}
      >
        <ToastProvider>
          <MainLayoutWrapper>
            {children}
          </MainLayoutWrapper>
        </ToastProvider>
      </body>
    </html>
  );
}
