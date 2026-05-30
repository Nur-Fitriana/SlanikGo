import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface TicketData {
  id: number;
  namaKategori: string;
  tipeHari: string;
  hargaDasar: number;
}

export default function InfoScreen() {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        // Silakan sesuaikan IP Laptop kamu di sini ya, Fit!
        const response = await fetch("http://192.168.1.10:3000/api/ticket");
        const data = await response.json();

        if (response.ok && Array.isArray(data)) {
          setTickets(data);
        }
      } catch (err) {
        // Data tiruan estetik jika backend sedang offline
        const mockData: TicketData[] = [
          {
            id: 1,
            namaKategori: "Anak-Anak",
            tipeHari: "Weekday (Senin - Jumat)",
            hargaDasar: 35000,
          },
          {
            id: 2,
            namaKategori: "Dewasa",
            tipeHari: "Weekday (Senin - Jumat)",
            hargaDasar: 40000,
          },
          {
            id: 3,
            namaKategori: "Anak-Anak",
            tipeHari: "Weekend / Libur Nasional",
            hargaDasar: 40000,
          },
          {
            id: 4,
            namaKategori: "Dewasa",
            tipeHari: "Weekend / Libur Nasional",
            hargaDasar: 45000,
          },
        ];
        setTickets(mockData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const hubungiWhatsApp = (nomor: string) => {
    Linking.openURL(`https://wa.me/${nomor}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      {/* HEADER UTAMA MODERN */}
      <View style={styles.headerBar}>
        <Text style={styles.headerTitle}>Informasi & Kontak</Text>
        <Text style={styles.headerSubtitle}>Slanik Waterpark Pusat</Text>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentPadding}>
          {/* ================= SECTION 1: TARIF HARGA TIKET (DESAIN PREMIUM) ================= */}
          <View style={styles.sectionHeader}>
            <View style={styles.accentLine} />
            <Text style={styles.sectionTitle}>Daftar Tarif Tiket Masuk</Text>
          </View>

          {isLoading ? (
            <ActivityIndicator
              size="large"
              color="#007ae6"
              style={{ marginVertical: 30 }}
            />
          ) : tickets.length === 0 ? (
            <View style={styles.emptyCard}>
              <Ionicons name="ticket-outline" size={32} color="#94a3b8" />
              <Text style={styles.emptyText}>
                Belum ada data tiket aktif dari CMS.
              </Text>
            </View>
          ) : (
            tickets.map((ticket) => {
              const isAnak = ticket.namaKategori.toLowerCase().includes("anak");
              return (
                <View key={ticket.id} style={styles.ticketCard}>
                  {/* Bagian Kiri: Visual Icon & Kategori */}
                  <View style={styles.ticketLeftSection}>
                    <View
                      style={[
                        styles.iconContainer,
                        { backgroundColor: isAnak ? "#E0F2FE" : "#FFE4E6" },
                      ]}
                    >
                      <Ionicons
                        name={isAnak ? "body" : "people"}
                        size={20}
                        color={isAnak ? "#007ae6" : "#E11D48"}
                      />
                    </View>
                    <View style={styles.ticketMeta}>
                      <Text style={styles.categoryTitle}>
                        {ticket.namaKategori.charAt(0).toUpperCase() +
                          ticket.namaKategori.slice(1)}
                      </Text>
                      <Text style={styles.dayText}>{ticket.tipeHari}</Text>
                    </View>
                  </View>

                  {/* Bagian Kanan: Harga Standar Aplikasi Komersial */}
                  <View style={styles.ticketRightSection}>
                    <Text style={styles.priceText}>
                      <Text style={styles.currency}>Rp </Text>
                      {Number(ticket.hargaDasar).toLocaleString("id-ID")}
                    </Text>
                    <Text style={styles.priceSub}>/orang</Text>
                  </View>
                </View>
              );
            })
          )}

          {/* ================= SECTION 2: JAM OPERASIONAL ================= */}
          <View style={[styles.sectionHeader, { marginTop: 24 }]}>
            <View style={[styles.accentLine, { backgroundColor: "#10B981" }]} />
            <Text style={styles.sectionTitle}>Jam Operasional</Text>
          </View>

          <View style={styles.opsCard}>
            <View style={styles.opsRow}>
              <View style={styles.opsIconBox}>
                <Ionicons name="time" size={18} color="#10B981" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.opsLabel}>Hari Biasa (Senin - Jumat)</Text>
                <Text style={styles.opsTime}>09.00 WIB - 17.00 WIB</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.opsRow}>
              <View style={[styles.opsIconBox, { backgroundColor: "#FEF3C7" }]}>
                <Ionicons name="calendar" size={18} color="#D97706" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.opsLabel}>
                  Akhir Pekan & Libur Nasional
                </Text>
                <Text style={[styles.opsTime, { color: "#D97706" }]}>
                  08.00 WIB - 17.30 WIB
                </Text>
              </View>
            </View>
          </View>

          {/* ================= SECTION 3: HUBUNGI INSTAGRAM ROMBONGAN ================= */}
          <View style={[styles.sectionHeader, { marginTop: 24 }]}>
            <View style={[styles.accentLine, { backgroundColor: "#25D366" }]} />
            <Text style={styles.sectionTitle}>Layanan Rombongan & Tiket</Text>
          </View>

          <Text style={styles.contactDesc}>
            Butuh potongan harga khusus rombongan? Sila hubungi humas
            operasional kami melalui akses pintas WhatsApp di bawah ini:
          </Text>

          <View style={styles.btnGroup}>
            <TouchableOpacity
              style={[styles.waButton, { backgroundColor: "#25D366" }]}
              onPress={() => hubungiWhatsApp("6287841000565")}
              activeOpacity={0.8}
            >
              <View style={styles.waBtnInner}>
                <Ionicons name="logo-whatsapp" size={18} color="#FFF" />
                <Text style={styles.waButtonText}>Chat Kak Annisa</Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={16}
                color="#FFF"
                opacity={0.7}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.waButton,
                { backgroundColor: "#059669", marginTop: 10 },
              ]}
              onPress={() => hubungiWhatsApp("6281273348835")}
              activeOpacity={0.8}
            >
              <View style={styles.waBtnInner}>
                <Ionicons name="logo-whatsapp" size={18} color="#FFF" />
                <Text style={styles.waButtonText}>Chat Kak Eva</Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={16}
                color="#FFF"
                opacity={0.7}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#F8FAFC" },

  // Header modern minimalis ala iOS/Android masa kini
  headerBar: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#F1F5F9",
  },
  headerTitle: {
    color: "#0F172A",
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "500",
    marginTop: 2,
  },

  container: { flex: 1, backgroundColor: "#F8FAFC" },
  contentPadding: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 30 },

  // Penanda section aksen garis vertikal berwarna berwarna
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  accentLine: {
    width: 4,
    height: 16,
    backgroundColor: "#007ae6",
    borderRadius: 2,
    marginRight: 8,
  },
  sectionTitle: { fontSize: 15, fontWeight: "700", color: "#1E293B" },
  contactDesc: {
    fontSize: 13,
    color: "#64748B",
    lineHeight: 18,
    marginBottom: 14,
    paddingLeft: 4,
  },

  // --- DESAIN PREMIUM TIKET CARD ---
  ticketCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    // Efek Shadow Halus Maskulin ala Figma Desain
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  ticketLeftSection: { flexDirection: "row", alignItems: "center", flex: 1 },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  ticketMeta: { marginLeft: 12, flex: 1 },
  categoryTitle: { fontSize: 15, fontWeight: "700", color: "#0F172A" },
  dayText: { fontSize: 11, color: "#64748B", marginTop: 2, fontWeight: "500" },

  ticketRightSection: { alignItems: "flex-end", marginLeft: 10 },
  priceText: { fontSize: 16, fontWeight: "800", color: "#0F172A" },
  currency: { fontSize: 12, fontWeight: "600", color: "#007ae6" },
  priceSub: { fontSize: 10, color: "#94a3b8", marginTop: 1 },

  // --- JAM OPERASIONAL CARD ---
  opsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 10,
  },
  opsRow: { flexDirection: "row", alignItems: "center" },
  opsIconBox: {
    width: 34,
    height: 34,
    backgroundColor: "#E6F4EA",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  opsLabel: { fontSize: 11, color: "#64748B", fontWeight: "600" },
  opsTime: { fontSize: 14, fontWeight: "700", color: "#10B981", marginTop: 2 },
  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginVertical: 12,
  },

  // --- BUTTON WHATSAPP PREMIUM ---
  btnGroup: { marginTop: 4 },
  waButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  waBtnInner: { flexDirection: "row", alignItems: "center" },
  waButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
    marginLeft: 10,
  },

  emptyCard: {
    backgroundColor: "#FFFFFF",
    padding: 24,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    borderStyle: "dashed",
  },
  emptyText: {
    fontSize: 12,
    color: "#94a3b8",
    marginTop: 6,
    fontWeight: "500",
  },
});
