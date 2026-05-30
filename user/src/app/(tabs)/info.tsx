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

  // --- AMBIL DATA REAL-TIME DARI API BACKEND ---
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        // Ganti IP di bawah ini dengan IP laptop kamu jika tes di HP riil ya, Fit!
        const response = await fetch("http://192.168.1.10:3000/api/ticket");
        const data = await response.json();
        
        if (response.ok && Array.isArray(data)) {
          setTickets(data);
        }
      } catch (err) {
        console.log("Koneksi API offline, memuat data lokal riil.");
        // Data cadangan lokal otomatis jika server backend belum dinyalakan
        const mockData: TicketData[] = [
          { id: 1, namaKategori: "Anak-Anak", tipeHari: "Weekday (Senin-Jumat)", hargaDasar: 35000 },
          { id: 2, namaKategori: "Dewasa", tipeHari: "Weekday (Senin-Jumat)", hargaDasar: 40000 },
          { id: 3, namaKategori: "Anak-Anak", tipeHari: "Weekend / Libur", hargaDasar: 40000 },
          { id: 4, namaKategori: "Dewasa", tipeHari: "Weekend / Libur", hargaDasar: 45000 },
        ];
        setTickets(mockData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  // Fungsi untuk memicu aplikasi WhatsApp terbuka otomatis
  const hubungiWhatsApp = (nomor: string) => {
    Linking.openURL(`https://wa.me/${nomor}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0EA5E9" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HERO HEADER */}
        <View style={styles.hero}>
          <View style={styles.heroCircle}>
            <Ionicons name="water" size={45} color="#0EA5E9" />
          </View>

          <Text style={styles.heroTitle}>
            Slanik Waterpark
          </Text>

          <Text style={styles.heroSubtitle}>
            Tempat Rekreasi Keluarga Terbaik
          </Text>
        </View>

        <View style={styles.content}>
          {/* ====== SEKSI 1: TARIF TIKET DARI DATABASE ====== */}
          <Text style={styles.heading}>
            🎟 Tarif Tiket
          </Text>

          {isLoading ? (
            <ActivityIndicator size="small" color="#0EA5E9" style={{ marginVertical: 15 }} />
          ) : tickets.length === 0 ? (
            <Text style={styles.emptyText}>Belum ada data tarif tiket aktif.</Text>
          ) : (
            tickets.map((ticket) => (
              <View key={ticket.id} style={styles.ticketCard}>
                <View style={{ flex: 1, paddingRight: 10 }}>
                  <Text style={styles.ticketName}>
                    {ticket.namaKategori.charAt(0).toUpperCase() + ticket.namaKategori.slice(1)}
                  </Text>

                  <Text style={styles.ticketDay}>
                    {ticket.tipeHari}
                  </Text>
                </View>

                <View style={styles.priceBadge}>
                  <Text style={styles.price}>
                    Rp {Number(ticket.hargaDasar).toLocaleString("id-ID")}
                  </Text>
                </View>
              </View>
            ))
          )}

          {/* ====== SEKSI 2: JAM OPERASIONAL ====== */}
          <Text style={styles.heading}>
            ⏰ Jam Operasional
          </Text>

          <View style={styles.scheduleRow}>
            <View style={styles.scheduleCard}>
              <Ionicons name="time" size={26} color="#0EA5E9" />
              <Text style={styles.scheduleTitle}>Weekday</Text>
              <Text style={styles.scheduleTime}>09.00 - 17.00</Text>
            </View>

            <View style={styles.scheduleCard}>
              <Ionicons name="calendar" size={26} color="#F59E0B" />
              <Text style={styles.scheduleTitle}>Weekend</Text>
              <Text style={styles.scheduleTime}>08.00 - 17.30</Text>
            </View>
          </View>

          {/* ====== SEKSI 3: HUBUNGI KAMI (WHATSAPP AKTIF) ====== */}
          <Text style={styles.heading}>
            📱 Hubungi Kami
          </Text>

          <View style={styles.contactRow}>
            <TouchableOpacity 
              style={styles.contactCard}
              onPress={() => hubungiWhatsApp("6287841000565")}
              activeOpacity={0.7}
            >
              <Ionicons name="logo-whatsapp" size={34} color="#25D366" />
              <Text style={styles.contactName}>Annisa</Text>
              <Text style={styles.contactRole}>Humas Tiket</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.contactCard}
              onPress={() => hubungiWhatsApp("6281273348835")}
              activeOpacity={0.7}
            >
              <Ionicons name="logo-whatsapp" size={34} color="#25D366" />
              <Text style={styles.contactName}>Eva</Text>
              <Text style={styles.contactRole}>Operasional</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// === STYLING UTAMA YANG SUDAH DI-CLEANUP BIAR ANTI-EROR ===
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FFF" },
  hero: {
    backgroundColor: "#0EA5E9",
    paddingVertical: 40,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  heroCircle: {
    width: 80,
    height: 80,
    backgroundColor: "#FFF",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  heroTitle: { color: "#FFF", fontSize: 24, fontWeight: "bold" },
  heroSubtitle: { color: "#E0F2FE", fontSize: 13, marginTop: 4 },
  
  content: { padding: 20 },
  heading: { fontSize: 16, fontWeight: "700", color: "#1E293B", marginTop: 20, marginBottom: 12 },
  
  // Gaya Card Tiket Sinkron
  ticketCard: {
    backgroundColor: "#F8FAFC",
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginBottom: 10,
  },
  ticketName: { fontSize: 15, fontWeight: "700", color: "#0F172A" },
  ticketDay: { fontSize: 11, color: "#64748B", marginTop: 3 },
  priceBadge: { backgroundColor: "#E0F2FE", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20 },
  price: { color: "#0EA5E9", fontWeight: "800", fontSize: 13 },

  // Gaya Baris Jadwal Operasional Kesamping
  scheduleRow: { flexDirection: "row", justifyContent: "space-between" },
  scheduleCard: {
    backgroundColor: "#F8FAFC",
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
    width: "48%",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  scheduleTitle: { fontSize: 13, fontWeight: "700", color: "#1E293B", marginTop: 8 },
  scheduleTime: { fontSize: 12, color: "#64748B", marginTop: 2 },

  // Gaya Tombol Kontak Berdampingan
  contactRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  contactCard: {
    backgroundColor: "#F8FAFC",
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
    width: "48%",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  contactName: { fontSize: 14, fontWeight: "700", color: "#1E293B", marginTop: 8 },
  contactRole: { fontSize: 11, color: "#64748B", marginTop: 2 },
  
  emptyText: { fontSize: 12, color: "#94a3b8", textAlign: "center", fontStyle: "italic", marginVertical: 10 },
});