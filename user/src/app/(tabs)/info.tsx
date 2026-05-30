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
import { API_URL } from '../../constants/network';

// Interface data tiket sesuai backend CMS kamu
interface TicketData {
  id: number;
  namaKategori: string;
  tipeHari: string;
  hargaDasar: number;
}

export default function InfoScreen() {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- AMBIL DATA TARIF HARGA REAL-TIME DARI API BACKEND ---
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(`${API_URL}/ticket`);
        const data = await response.json();
        
        if (response.ok && Array.isArray(data)) {
          setTickets(data);
        }
      } catch (err) {
        console.log("Koneksi API gagal, memuat data riil Instagram Slanik.");
        // Data Fallback Riil sesuai brosur Mei-Juni 2026 Slanik Waterpark jika API offline
        const mockData: TicketData[] = [
          { id: 1, namaKategori: "Anak-Anak", tipeHari: "Weekday (Senin - Jumat)", hargaDasar: 35000 },
          { id: 2, namaKategori: "Dewasa", tipeHari: "Weekday (Senin - Jumat)", hargaDasar: 40000 },
          { id: 3, namaKategori: "Anak-Anak", tipeHari: "Weekend (Sabtu - Minggu)", hargaDasar: 40000 },
          { id: 4, namaKategori: "Dewasa", tipeHari: "Weekend (Sabtu - Minggu)", hargaDasar: 45000 },
        ];
        setTickets(mockData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  // Fungsi dinamis untuk langsung chat ke nomor WhatsApp Humas Rombongan Slanik
  const hubungiWhatsApp = (nomor: string) => {
    Linking.openURL(`https://wa.me/${nomor}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* HEADER UTAMA */}
      <View style={styles.headerBar}>
        <Text style={styles.headerTitle}>Informasi & Kontak</Text>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentPadding}>
          
          {/* ================= SECTION 1: DAFTAR TARIF TIKET (PISAH KOTAK) ================= */}
          <Text style={styles.sectionTitle}>💰 Daftar Tarif Tiket Masuk</Text>
          <Text style={styles.sectionSubtitle}>Data harga tiket terupdate sinkron dari CMS Admin SlanikGo</Text>

          {isLoading ? (
            <ActivityIndicator size="large" color="#007ae6" style={{ marginTop: 10 }} />
          ) : tickets.length === 0 ? (
            <View style={styles.emptyCard}>
              <Ionicons name="ticket-outline" size={28} color="#94a3b8" />
              <Text style={styles.emptyText}>Belum ada data tarif tiket aktif.</Text>
            </View>
          ) : (
            tickets.map((ticket) => (
              <View key={ticket.id} style={styles.ticketInfoCard}>
                <View style={styles.ticketLeftIconBox}>
                  <Ionicons 
                    name={ticket.namaKategori.toLowerCase().includes("anak") ? "body" : "people"} 
                    size={22} 
                    color="#007ae6" 
                  />
                </View>
                
                <View style={styles.ticketMainDetails}>
                  <Text style={styles.ticketCategoryText}>
                    Tiket {ticket.namaKategori.charAt(0).toUpperCase() + ticket.namaKategori.slice(1)}
                  </Text>
                  <View style={styles.dayBadge}>
                    <Text style={styles.dayBadgeText}>{ticket.tipeHari}</Text>
                  </View>
                </View>

                <View style={styles.ticketPriceContainer}>
                  <Text style={styles.ticketPriceText}>
                    Rp {Number(ticket.hargaDasar).toLocaleString("id-ID")}
                  </Text>
                  <Text style={styles.ticketPriceSub}>/orang</Text>
                </View>
              </View>
            ))
          )}

          {/* ================= SECTION 2: JAM OPERASIONAL RIIL ================= */}
          <Text style={[styles.sectionTitle, { marginTop: 24 }]}>🕒 Jam Operasional Hari Biasa</Text>
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Ionicons name="time-outline" size={20} color="#007ae6" style={styles.rowIcon} />
              <View>
                <Text style={styles.infoLabel}>Weekday (Senin - Jumat)</Text>
                <Text style={styles.infoValue}>09.00 WIB - 17.00 WIB</Text>
              </View>
            </View>
            <View style={[styles.infoRow, { marginTop: 14, borderTopWidth: 1, borderColor: '#E2E8F0', paddingTop: 14 }]}>
              <Ionicons name="calendar-outline" size={20} color="#007ae6" style={styles.rowIcon} />
              <View>
                <Text style={styles.infoLabel}>Weekend (Sabtu - Minggu)</Text>
                <Text style={styles.infoValue}>08.00 WIB - 17.30 WIB</Text>
              </View>
            </View>
          </View>

          {/* ================= SECTION 3: KONTAK ROMBONGAN INSTAGRAM ================= */}
          <Text style={[styles.sectionTitle, { marginTop: 24 }]}>📞 Info Rombongan & Tiket</Text>
          <Text style={styles.sectionSubtitle}>Klik salah satu tombol kontak resmi Slanik Waterpark di bawah ini:</Text>
          
          <TouchableOpacity 
            style={styles.whatsappButton} 
            onPress={() => hubungiWhatsApp("6287841000565")} 
            activeOpacity={0.85}
          >
            <Ionicons name="logo-whatsapp" size={20} color="#FFF" style={{ marginRight: 10 }} />
            <Text style={styles.whatsappButtonText}>Hubungi Kak Annisa</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.whatsappButton, { backgroundColor: '#128C7E', marginTop: 10 }]} 
            onPress={() => hubungiWhatsApp("6281273348835")} 
            activeOpacity={0.85}
          >
            <Ionicons name="logo-whatsapp" size={20} color="#FFF" style={{ marginRight: 10 }} />
            <Text style={styles.whatsappButtonText}>Hubungi Kak Eva</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FFFFFF" },
  headerBar: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#E2E8F0"
  },
  headerTitle: {
    color: "#1E293B",
    fontSize: 18,
    fontWeight: "800",
  },
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  contentPadding: { paddingHorizontal: 24, paddingTop: 20, paddingBottom: 40 },
  sectionTitle: { fontSize: 16, fontWeight: "700", color: "#1E293B" },
  sectionSubtitle: { fontSize: 12, color: "#64748B", marginTop: 4, marginBottom: 14, lineHeight: 16 },

  // Kotak List Tarif Terpisah
  ticketInfoCard: {
    backgroundColor: "#F8FAFC",
    borderRadius: 14,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 10,
  },
  ticketLeftIconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0F2FE",
  },
  ticketMainDetails: { flex: 1, marginLeft: 12, justifyContent: "center" },
  ticketCategoryText: { fontSize: 14, fontWeight: "700", color: "#1E293B" },
  dayBadge: {
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginTop: 4,
  },
  dayBadgeText: { fontSize: 10, fontWeight: "600", color: "#475569" },
  ticketPriceContainer: { alignItems: "flex-end" },
  ticketPriceText: { fontSize: 15, fontWeight: "800", color: "#007ae6" },
  ticketPriceSub: { fontSize: 10, color: "#64748B" },

  // Jam Operasional Card
  infoCard: {
    backgroundColor: "#F8FAFC",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 10,
  },
  infoRow: { flexDirection: "row", alignItems: "center" },
  rowIcon: { marginRight: 12 },
  infoLabel: { fontSize: 11, color: "#64748B", fontWeight: "500" },
  infoValue: { fontSize: 13, fontWeight: "700", color: "#1E293B", marginTop: 1 },

  // Tombol WhatsApp Hijau Tradisional
  whatsappButton: {
    backgroundColor: "#25D366",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 12,
    elevation: 1,
  },
  whatsappButtonText: { color: "#FFFFFF", fontSize: 13, fontWeight: "700" },

  emptyCard: {
    backgroundColor: "#F8FAFC",
    padding: 20,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderStyle: "dashed",
  },
  emptyText: { fontSize: 12, color: "#64748B", marginTop: 6 },
});