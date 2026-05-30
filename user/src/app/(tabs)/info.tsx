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
        const response = await fetch("http://192.168.1.10:3000/api/ticket");
        const data = await response.json();

        if (response.ok && Array.isArray(data)) {
          setTickets(data);
        }
      } catch (err) {
        console.log(
          "Koneksi API offline, menggunakan data fallback interaktif."
        );
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
            tipeHari: "Weekend / Tanggal Merah",
            hargaDasar: 40000,
          },
          {
            id: 4,
            namaKategori: "Dewasa",
            tipeHari: "Weekend / Tanggal Merah",
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
      <StatusBar barStyle="light-content" backgroundColor="#0284C7" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {/* ================= HERO BANNER: WAVE VIBES ================= */}
        <View style={styles.heroBanner}>
          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>🌴 WAHOO! WELCOME TO</Text>
          </View>
          <Text style={styles.heroMainTitle}>Slanik Waterpark</Text>
          <Text style={styles.heroSubTitle}>
            Tempat Rekreasi Air Terbesar & Terfavorit di Lampung
          </Text>

          <View style={styles.heroStatsRow}>
            <View style={styles.statItem}>
              <Ionicons name="star" size={14} color="#FBBF24" />
              <Text style={styles.statText}>Top Rated 2026</Text>
            </View>
            <View
              style={[
                styles.statItem,
                { backgroundColor: "rgba(255,255,255,0.15)" },
              ]}
            >
              <Ionicons name="location" size={14} color="#FFF" />
              <Text style={styles.statText}>Lampung Selatan</Text>
            </View>
          </View>
        </View>

        {/* MAIN BODY LAYOUT */}
        <View style={styles.containerContent}>
          {/* ================= SECTION 1: PRICE LIST ================= */}
          <Text style={styles.sectionHeading}>
            🏷️ Pilihan Tiket Masuk Terbaik
          </Text>

          {isLoading ? (
            <ActivityIndicator size="large" color="#0284C7" style={{ marginVertical: 20 }} />
          ) : (
            tickets.map((ticket) => {
              const isAnak = ticket.namaKategori.toLowerCase().includes("anak");
              const isWeekend =
                ticket.tipeHari.toLowerCase().includes("weekend") ||
                ticket.tipeHari.toLowerCase().includes("libur");

              // Tema warna kontras dinamis
              const themeColor = isWeekend ? "#EF4444" : "#0EA5E9";
              const lightBg = isWeekend ? "#FEF2F2" : "#F0F9FF";

              return (
                <View key={ticket.id} style={styles.fancyTicketCard}>
                  <View
                    style={[
                      styles.leftAccentBar,
                      { backgroundColor: themeColor },
                    ]}
                  />

                  <View style={styles.cardInnerContent}>
                    <View
                      style={[
                        styles.avatarIconBox,
                        { backgroundColor: lightBg },
                      ]}
                    >
                      <Ionicons
                        name={isAnak ? "happy-outline" : "people-outline"}
                        size={22}
                        color={themeColor}
                      />
                    </View>

                    <View style={styles.ticketMetaDetails}>
                      <Text style={styles.metaCategoryName}>
                        Tiket{" "}
                        {ticket.namaKategori.charAt(0).toUpperCase() +
                          ticket.namaKategori.slice(1)}
                      </Text>
                      <View
                        style={[
                          styles.dayLabelPill,
                          {
                            backgroundColor: isWeekend ? "#FEE2E2" : "#E0F2FE",
                          },
                        ]}
                      >
                        <Text
                          style={[styles.dayLabelText, { color: themeColor }]}
                        >
                          {ticket.tipeHari}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.priceContainer}>
                      <Text style={[styles.actualPrice, { color: themeColor }]}>
                        <Text style={styles.rpSign}>Rp</Text>
                        {Number(ticket.hargaDasar).toLocaleString("id-ID")}
                      </Text>
                      <Text style={styles.perPersonText}>/ pengunjung</Text>
                    </View>
                  </View>
                </View>
              );
            })
          )}

          {/* ================= SECTION 2: TIMING GRIDS ================= */}
          <Text style={[styles.sectionHeading, { marginTop: 26 }]}>
            🕒 Rencanakan Kunjunganmu
          </Text>

          <View style={styles.flexGridRow}>
            <View style={[styles.gridTimeCard, { borderTopColor: "#38BDF8" }]}>
              <View
                style={[styles.gridIconCircle, { backgroundColor: "#E0F2FE" }]}
              >
                <Ionicons name="time" size={20} color="#0EA5E9" />
              </View>
              <Text style={styles.gridMainLabel}>Weekday</Text>
              <Text style={styles.gridDaysSub}>Senin s/d Jumat</Text>
              <View style={styles.timePillBlue}>
                <Text style={styles.timePillTextBlue}>09:00 - 17:00</Text>
              </View>
            </View>

            <View style={[styles.gridTimeCard, { borderTopColor: "#FBBF24" }]}>
              <View
                style={[styles.gridIconCircle, { backgroundColor: "#FEF3C7" }]}
              >
                <Ionicons name="sunny" size={20} color="#D97706" />
              </View>
              <Text style={styles.gridMainLabel}>Weekend</Text>
              <Text style={styles.gridDaysSub}>Sabtu, Minggu & Libur</Text>
              <View style={styles.timePillOrange}>
                <Text style={styles.timePillTextOrange}>08:00 - 17:30</Text>
              </View>
            </View>
          </View>

          {/* ================= SECTION 3: INTERACTIVE CUSTOMER SERVICE ================= */}
          <Text style={[styles.sectionHeading, { marginTop: 26 }]}>
            📞 Hubungi Tim Humas Slanik
          </Text>
          <Text style={styles.sectionDescription}>
            Punya pertanyaan atau rencana datang bersama rombongan besar? Ketuk
            salah satu admin WhatsApp di bawah ini:
          </Text>

          <View style={styles.flexGridRow}>
            <TouchableOpacity
              style={styles.premiumContactCard}
              onPress={() => hubungiWhatsApp("6287841000565")}
              activeOpacity={0.85}
            >
              <View style={styles.waIconFloatContainer}>
                <Ionicons name="logo-whatsapp" size={24} color="#FFF" />
              </View>
              <Text style={styles.csNameText}>Kak Annisa</Text>
              <Text style={styles.csRoleSub}>Humas Tiket & Reservasi</Text>
              <View style={styles.actionChatBadge}>
                <Text style={styles.actionChatText}>Kirim Chat</Text>
                <Ionicons name="arrow-forward" size={12} color="#0EA5E9" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.premiumContactCard}
              onPress={() => hubungiWhatsApp("6281273348835")}
              activeOpacity={0.85}
            >
              <View
                style={[
                  styles.waIconFloatContainer,
                  { backgroundColor: "#10B981" },
                ]}
              >
                <Ionicons name="logo-whatsapp" size={24} color="#FFF" />
              </View>
              <Text style={styles.csNameText}>Kak Eva</Text>
              <Text style={styles.csRoleSub}>Koordinator Operasional</Text>
              <View
                style={[styles.actionChatBadge, { backgroundColor: "#E6F4EA" }]}
              >
                <Text style={[styles.actionChatText, { color: "#10B981" }]}>
                  Kirim Chat
                </Text>
                <Ionicons name="arrow-forward" size={12} color="#10B981" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#0284C7" },
  scrollView: { flex: 1, backgroundColor: "#F8FAFC" },

  // === BANNER HERO YANG EYE-CATCHING ===
  heroBanner: {
    backgroundColor: "#0284C7",
    paddingTop: 30,
    paddingBottom: 50,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  heroBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  heroBadgeText: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  heroMainTitle: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: -0.5,
  },
  heroSubTitle: {
    color: "#BAE6FD",
    fontSize: 13,
    marginTop: 4,
    lineHeight: 18,
    fontWeight: "500",
  },
  heroStatsRow: { flexDirection: "row", marginTop: 14 },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
  },
  statText: { color: "#FFF", fontSize: 11, fontWeight: "600", marginLeft: 4 },

  // === CONTENT BODY WRAPPER ===
  containerContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    marginTop: -20,
  },
  sectionHeading: {
    fontSize: 15,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 12,
  },
  sectionDescription: {
    fontSize: 12,
    color: "#64748B",
    lineHeight: 16,
    marginBottom: 12,
    marginTop: -6,
  },

  // === STYLING FANCY TIKET CARD ===
  fancyTicketCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    marginBottom: 10,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  leftAccentBar: { width: 6 },
  cardInnerContent: {
    flex: 1,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  avatarIconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  ticketMetaDetails: { flex: 1, marginLeft: 12, justifyContent: "center" },
  metaCategoryName: { fontSize: 15, fontWeight: "800", color: "#0F172A" },
  dayLabelPill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginTop: 5,
  },
  dayLabelText: { fontSize: 9, fontWeight: "700" },
  priceContainer: { alignItems: "flex-end", marginLeft: 10 },
  actualPrice: { fontSize: 18, fontWeight: "900" },
  rpSign: { fontSize: 12, fontWeight: "700", marginRight: 2 },
  perPersonText: {
    fontSize: 9,
    color: "#94a3b8",
    marginTop: 2,
    fontWeight: "500",
  },

  // === FLEX GRID LAYOUT (JADWAL & CS) ===
  flexGridRow: { flexDirection: "row", justifyContent: "space-between" },
  gridTimeCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    alignItems: "center",
    width: "48%",
    borderTopWidth: 4,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },
  gridIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  gridMainLabel: { fontSize: 14, fontWeight: "800", color: "#1E293B" },
  gridDaysSub: {
    fontSize: 10,
    color: "#94a3b8",
    marginTop: 2,
    fontWeight: "500",
  },
  timePillBlue: {
    backgroundColor: "#E0F2FE",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 12,
  },
  timePillTextBlue: { color: "#0EA5E9", fontSize: 11, fontWeight: "800" },
  timePillOrange: {
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 12,
  },
  timePillTextOrange: { color: "#D97706", fontSize: 11, fontWeight: "800" },

  // === PREMIUM INTERACTIVE CS CARDS ===
  premiumContactCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    alignItems: "center",
    width: "48%",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  waIconFloatContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#25D366",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  csNameText: { fontSize: 14, fontWeight: "800", color: "#1E293B" },
  csRoleSub: {
    fontSize: 10,
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 2,
    height: 32,
    fontWeight: "500",
  },
  actionChatBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0F2FE",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 8,
  },
  actionChatText: {
    color: "#0EA5E9",
    fontSize: 10,
    fontWeight: "700",
    marginRight: 4,
  },

  emptyText: {
    fontSize: 12,
    color: "#94a3b8",
    textAlign: "center",
    marginVertical: 10,
  },
});