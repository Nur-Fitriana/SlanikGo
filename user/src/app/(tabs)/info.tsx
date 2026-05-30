import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView, 
  StatusBar, 
  ActivityIndicator, 
  TouchableOpacity, 
  Linking 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
        // Jangan lupa sesuaikan IP laptop kamu ya!
        const response = await fetch("http://192.168.1.10:3000/api/ticket");
        const data = await response.json();
        
        if (response.ok && Array.isArray(data)) {
          setTickets(data);
        }
      } catch (err) {
        // Data tiruan estetik dengan kategori bervariasi jika backend offline
        const mockData: TicketData[] = [
          { id: 1, namaKategori: "Anak-Anak", tipeHari: "Weekday (Senin - Jumat)", hargaDasar: 35000 },
          { id: 2, namaKategori: "Dewasa", tipeHari: "Weekday (Senin - Jumat)", hargaDasar: 40000 },
          { id: 3, namaKategori: "Anak-Anak", tipeHari: "Weekend & Hari Libur", hargaDasar: 40000 },
          { id: 4, namaKategori: "Dewasa", tipeHari: "Weekend & Hari Libur", hargaDasar: 45000 },
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

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {/* ================= HERO HEADER SUPER PREMIUM (GRADIENT LOOK) ================= */}
        <View style={styles.heroGradient}>
          <View style={styles.heroOverlay}>
            <View style={styles.heroCircle}>
              <Ionicons name="water" size={40} color="#0EA5E9" />
            </View>
            <Text style={styles.heroTitle}>Slanik Waterpark</Text>
            <Text style={styles.heroSubtitle}>Tempat Rekreasi Keluarga Terbaik di Lampung</Text>
          </View>
        </View>

        {/* CONTAINER UTAMA BODY */}
        <View style={styles.mainContent}>
          
          {/* ================= SECTION 1: TARIF TIKET (STYLING FRESH & COLORFUL) ================= */}
          <View style={styles.sectionHeader}>
            <View style={[styles.accentLine, { backgroundColor: '#38BDF8' }]} />
            <Text style={styles.headingText}>🎟️ Tarif Tiket Masuk</Text>
          </View>

          {isLoading ? (
            <ActivityIndicator size="small" color="#0EA5E9" style={{ marginVertical: 20 }} />
          ) : tickets.length === 0 ? (
            <Text style={styles.emptyText}>Belum ada data tiket aktif.</Text>
          ) : (
            tickets.map((ticket, index) => {
              const isWeekend = ticket.tipeHari.toLowerCase().includes("weekend") || ticket.tipeHari.toLowerCase().includes("libur");
              const isAnak = ticket.namaKategori.toLowerCase().includes("anak");
              
              // Tema warna dinamis tiap kartu biar ga monoton
              const cardAccent = isWeekend ? (isAnak ? "#F59E0B" : "#EF4444") : "#0EA5E9";
              const bgBadge = isWeekend ? (isAnak ? "#FEF3C7" : "#FEE2E2") : "#E0F2FE";

              return (
                <View key={ticket.id} style={[styles.ticketCard, { borderLeftColor: cardAccent }]}>
                  <View style={styles.ticketLeft}>
                    <View style={[styles.iconBox, { backgroundColor: bgBadge }]}>
                      <Ionicons 
                        name={isAnak ? "body-shortcut" : "people-sharp"} 
                        size={22} 
                        color={cardAccent} 
                      />
                    </View>
                    <View style={styles.ticketInfo}>
                      <Text style={styles.ticketName}>
                        {ticket.namaKategori.charAt(0).toUpperCase() + ticket.namaKategori.slice(1)}
                      </Text>
                      <Text style={styles.ticketDay}>{ticket.tipeHari}</Text>
                    </View>
                  </View>

                  <View style={[styles.priceBadge, { backgroundColor: bgBadge }]}>
                    <Text style={[styles.priceText, { color: cardAccent }]}>
                      Rp {Number(ticket.hargaDasar).toLocaleString("id-ID")}
                    </Text>
                  </View>
                </View>
              );
            })
          )}

          {/* ================= SECTION 2: JAM OPERASIONAL (GRID STYLE) ================= */}
          <View style={[styles.sectionHeader, { marginTop: 28 }]}>
            <View style={[styles.accentLine, { backgroundColor: '#FBBF24' }]} />
            <Text style={styles.headingText}>⏰ Jam Operasional</Text>
          </View>

          <View style={styles.gridRow}>
            <View style={[styles.gridCard, { borderBottomColor: '#0EA5E9' }]}>
              <View style={[styles.gridIconCircle, { backgroundColor: '#E0F2FE' }]}>
                <Ionicons name="time-outline" size={24} color="#0EA5E9" />
              </View>
              <Text style={styles.gridTitle}>Weekday</Text>
              <Text style={styles.gridSub}>Senin - Jumat</Text>
              <Text style={styles.gridTime}>09.00 - 17.00</Text>
            </View>

            <View style={[styles.gridCard, { borderBottomColor: '#F59E0B' }]}>
              <View style={[styles.gridIconCircle, { backgroundColor: '#FEF3C7' }]}>
                <Ionicons name="calendar-outline" size={24} color="#F59E0B" />
              </View>
              <Text style={styles.gridTitle}>Weekend</Text>
              <Text style={styles.gridSub}>Sabtu - Minggu</Text>
              <Text style={[styles.gridTime, { color: '#F59E0B' }]}>08.00 - 17.30</Text>
            </View>
          </View>

          {/* ================= SECTION 3: KONTAK CS (DESAIN TOMBOL MODERN) ================= */}
          <View style={[styles.sectionHeader, { marginTop: 28 }]}>
            <View style={[styles.accentLine, { backgroundColor: '#10B981' }]} />
            <Text style={styles.headingText}>📱 Hubungi Customer Service</Text>
          </View>

          <View style={styles.gridRow}>
            <TouchableOpacity 
              style={styles.contactButtonCard}
              onPress={() => hubungiWhatsApp("6287841000565")}
              activeOpacity={0.85}
            >
              <View style={[styles.contactIconBg, { backgroundColor: '#DCFCE7' }]}>
                <Ionicons name="logo-whatsapp" size={28} color="#25D366" />
              </View>
              <Text style={styles.contactName}>Annisa</Text>
              <View style={styles.roleTagBlue}>
                <Text style={styles.roleTagTextBlue}>Humas Tiket</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.contactButtonCard}
              onPress={() => hubungiWhatsApp("6281273348835")}
              activeOpacity={0.85}
            >
              <View style={[styles.contactIconBg, { backgroundColor: '#DCFCE7' }]}>
                <Ionicons name="logo-whatsapp" size={28} color="#25D366" />
              </View>
              <Text style={styles.contactName}>Eva</Text>
              <View style={styles.roleTagGreen}>
                <Text style={styles.roleTagTextGreen}>Operasional</Text>
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

  // === DESIGN HERO HEADER YANG MEWAH ===
  heroGradient: {
    backgroundColor: "#0284C7",
    paddingTop: 45,
    paddingBottom: 55,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  heroOverlay: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  heroCircle: {
    width: 76,
    height: 76,
    backgroundColor: "#FFFFFF",
    borderRadius: 38,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  heroTitle: { 
    color: "#FFFFFF", 
    fontSize: 26, 
    fontWeight: "900",
    letterSpacing: -0.5 
  },
  heroSubtitle: { 
    color: "#E0F2FE", 
    fontSize: 13, 
    fontWeight: "500",
    marginTop: 4,
    textAlign: "center" 
  },

  // === BODY CONTENT ===
  mainContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    marginTop: -25, // Membuat efek konten agak naik menimpa Hero header
  },

  // Section Label Aksen Kreatif
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    marginTop: 10,
  },
  accentLine: {
    width: 5,
    height: 18,
    borderRadius: 3,
    marginRight: 10,
  },
  headingText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1E293B",
  },

  // === FRESH TIKET CARD STYLING ===
  ticketCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    borderLeftWidth: 5, // Garis warna dinamis di sebelah kiri kartu
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  ticketLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  ticketInfo: {
    marginLeft: 14,
    flex: 1,
  },
  ticketName: {
    fontSize: 15,
    fontWeight: "800",
    color: "#0F172A",
  },
  ticketDay: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 3,
    fontWeight: "600",
  },
  priceBadge: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    marginLeft: 10,
  },
  priceText: {
    fontWeight: "900",
    fontSize: 14,
  },

  // === GRID STYLE UNTUK JAM & KONTAK ===
  gridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  gridCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    alignItems: "center",
    width: "48%",
    borderBottomWidth: 4, // Garis bawah penanda aksen warna
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  gridIconCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  gridTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#1E293B",
  },
  gridSub: {
    fontSize: 10,
    color: "#94a3b8",
    marginTop: 1,
    fontWeight: "500",
  },
  gridTime: {
    fontSize: 15,
    fontWeight: "900",
    color: "#0EA5E9",
    marginTop: 10,
  },

  // === CS BUTTON CARDS ===
  contactButtonCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    width: "48%",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  contactIconBg: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    shadowColor: "#25D366",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  contactName: {
    fontSize: 15,
    fontWeight: "800",
    color: "#1E293B",
  },
  // Tag Label Berwarna agar bervariasi
  roleTagBlue: {
    backgroundColor: "#E0F2FE",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 6,
  },
  roleTagTextBlue: {
    fontSize: 10,
    color: "#0EA5E9",
    fontWeight: "700",
  },
  roleTagGreen: {
    backgroundColor: "#D1FAE5",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 6,
  },
  roleTagTextGreen: {
    fontSize: 10,
    color: "#10B981",
    fontWeight: "700",
  },

  emptyText: {
    fontSize: 12,
    color: "#94a3b8",
    textAlign: "center",
    fontStyle: "italic",
    marginVertical: 10,
  },
});