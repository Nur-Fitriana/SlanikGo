import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  Platform,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Buat Interface sesuai DTO NestJS yang sudah disepakati bersama Tri
interface TicketData {
  id: string;
  category: string;
  type: "Weekday" | "Weekend" | "Paket";
  price: number;
  description: string;
  isPromoActive?: boolean;
  promoPrice?: number;
}

export default function TiketScreen() {
  // State untuk menyimpan data tiket dari API, status loading, dan error
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Ambil data dari API Tri saat halaman pertama kali dibuka
  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // GANTI URL INI dengan alamat API NestJS milik Tri yang sebenarnya
      // Contoh jika lokal: http://10.0.2.2:3000/tiket (untuk emulator Android) atau IP Laptop Tri
      const response = await fetch("http://localhost:3000/tiket"); 
      
      if (!response.ok) {
        throw new Error("Gagal mengambil data tiket terbaru.");
      }
      
      const data = await response.json();
      setTickets(data);
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan jaringan.");
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi pembantu untuk menentukan karakteristik visual kartu berdasarkan tipe
  const getTicketTheme = (type: string) => {
    switch (type) {
      case "Weekend":
        return { badgeBg: "#FEF3C7", textColor: "#D97706", buttonBg: "#F59E0B", color: "#EA580C", labelHari: "(Sabtu - Minggu & Libur)" };
      case "Paket":
      case "Fasilitas":
        return { badgeBg: "#D1FAE5", textColor: "#059669", buttonBg: "#059669", color: "#059669", labelHari: "(Fasilitas Tambahan)" };
      default: // Weekday
        return { badgeBg: "#DBEAFE", textColor: "#2563EB", buttonBg: "#2563EB", color: "#2563EB", labelHari: "(Senin - Jumat)" };
    }
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#0EA5E9" />
      
      <FlatList
        data={[]} 
        keyExtractor={(_, index) => index.toString()}
        renderItem={null}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            {/* ================== HEADER BIRU MELENGKUNG ================== */}
            <View style={styles.blueHeroHeader}>
              <Ionicons name="ticket" size={28} color="#FFFFFF" style={{ marginBottom: 8 }} />
              <Text style={styles.heroTitle}>Harga Tiket</Text>
              <Text style={styles.heroSubtitle}>Pilih Tiket Terbaikmu &amp; Nikmati Keseruan Wahana</Text>
            </View>

            {/* BANNER PROMO KUNING */}
            <View style={styles.promoBanner}>
              <View style={styles.promoBadge}>
                <Text style={styles.promoBadgeText}>PROMO SPECIAL IDUL ADHA</Text>
              </View>
              <Text style={styles.promoTitle}>💥 BUY 1 GET 1 FREE!</Text>
              <Text style={styles.promoDesc}>
                Beli 1 tiket masuk gratis 1 tiket wahana atraksi (Crazy Slide / Dragon River). Anak di bawah 90cm GRATIS masuk!
              </Text>
            </View>
            
            <Text style={styles.sectionHeading}>Pilihan Tiket Tersedia</Text>
            
            {/* ================== LAYOUT UTAMA GRID KOLOM ================== */}
            <View style={styles.mainLayoutGrid}>
              
              {/* KOLOM KIRI: BANNER JANGKAR VISUAL */}
              <View style={styles.leftIllustrationCard}>
                <Ionicons name="water" size={64} color="#0EA5E9" />
                <Text style={styles.illusTitle}>Slanik</Text>
                <Text style={styles.illusSub}>Waterpark</Text>
                <View style={styles.waveDecoration} />
              </View>

              {/* KOLOM KANAN: GRID LAYOUT TIKET */}
              <View style={styles.rightTicketsGrid}>
                {isLoading ? (
                  // Tampilan saat data sedang di-fetch dari API Tri
                  <View style={styles.centerFeedback}>
                    <ActivityIndicator size="large" color="#0EA5E9" />
                    <Text style={styles.feedbackText}>Sinkronisasi tiket Slanik...</Text>
                  </View>
                ) : error ? (
                  // Tampilan jika server Tri mati atau jaringan bermasalah
                  <View style={styles.centerFeedback}>
                    <Ionicons name="alert-circle" size={32} color="#EF4444" />
                    <Text style={[styles.feedbackText, { color: "#EF4444" }]}>{error}</Text>
                  </View>
                ) : tickets.length === 0 ? (
                  // Tampilan jika Cindy belum menginput data apapun di CMS
                  <View style={styles.centerFeedback}>
                    <Ionicons name="receipt-outline" size={32} color="#64748B" />
                    <Text style={styles.feedbackText}>Belum ada tiket aktif hari ini.</Text>
                  </View>
                ) : (
                  tickets.map((item) => {
                    const theme = getTicketTheme(item.type);
                    const isFasilitas = item.type === "Paket";

                    // Logika harga akhir: jika promo diaktifkan oleh Cindy, gunakan harga promo
                    const finalPrice = item.isPromoActive && item.promoPrice ? item.promoPrice : item.price;

                    return (
                      <View 
                        key={item.id} 
                        style={[
                          styles.ticketCard, 
                          isFasilitas && styles.fullWidthRow
                        ]}
                      >
                        {/* Atas Kartu */}
                        <View style={styles.cardHeaderRow}>
                          <View style={[styles.tipeBadge, { backgroundColor: theme.badgeBg }]}>
                            <Text style={[styles.tipeBadgeText, { color: theme.textColor }]}>{item.type}</Text>
                          </View>
                          <Text style={styles.hariSubText}>{theme.labelHari}</Text>
                        </View>
                        
                        {/* Kategori Judul */}
                        <Text style={styles.categoryTitle}>{item.category}</Text>
                        <Text style={styles.categoryDesc} numberOfLines={2}>{item.description}</Text>

                        {/* Komponen Harga Dinamis */}
                        <View style={styles.priceContainer}>
                          <Text style={[styles.currencyLabel, { color: theme.color }]}>Rp</Text>
                          <Text style={[styles.priceValue, { color: theme.color }]}>
                            {finalPrice.toLocaleString("id-ID")}
                          </Text>
                          <Text style={styles.perOrangLabel}>/orang</Text>
                        </View>

                        {/* Indikator coret harga lama kalau promo lagi aktif */}
                        {item.isPromoActive && item.promoPrice && (
                          <Text style={styles.originalPriceCrossover}>
                            Sebelumnya: Rp {item.price.toLocaleString("id-ID")}
                          </Text>
                        )}

                        <View style={styles.dividerLine} />

                        {/* Checklist Keuntungan Statis/Dinamis Ringkas */}
                        <View style={styles.benefitBox}>
                          <View style={styles.benefitRow}>
                            <Ionicons name="checkmark-circle" size={16} color="#10B981" style={{ marginRight: 6 }} />
                            <Text style={styles.benefitText}>Akses wahana utama</Text>
                          </View>
                          <View style={styles.benefitRow}>
                            <Ionicons name="checkmark-circle" size={16} color="#10B981" style={{ marginRight: 6 }} />
                            <Text style={styles.benefitText}>Asuransi pengunjung</Text>
                          </View>
                        </View>

                        {/* Tombol Aksi */}
                        <View style={[styles.actionButton, { backgroundColor: theme.buttonBg }]}>
                          <Text style={styles.actionButtonText}>Pesan Sekarang</Text>
                          <Ionicons name="arrow-forward" size={14} color="#FFF" style={{ marginLeft: 6 }} />
                        </View>
                      </View>
                    );
                  })
                )}
              </View>

            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#F4F9FF",
  },
  scrollContent: {
    width: "100%",
    maxWidth: 1200,
    alignSelf: "center",
    paddingBottom: 140,
  },
  headerContainer: {
    width: "100%",
  },
  blueHeroHeader: {
    backgroundColor: "#0EA5E9",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingVertical: 40,
    alignItems: "center",
    width: "100%",
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  heroSubtitle: {
    fontSize: 13,
    color: "#E0F2FE",
    marginTop: 4,
    textAlign: "center",
  },
  promoBanner: {
    backgroundColor: "#FFFBEB",
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 40,
    borderWidth: 1,
    borderColor: "#FEF3C7",
    marginBottom: 32,
  },
  promoBadge: {
    backgroundColor: "#F59E0B",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  promoBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#78350F",
  },
  promoDesc: {
    fontSize: 13,
    color: "#92400E",
    lineHeight: 18,
    marginTop: 4,
  },
  sectionHeading: {
    fontSize: 22,
    fontWeight: "900",
    color: "#1E293B",
    marginHorizontal: 40,
    marginBottom: 24,
    letterSpacing: -0.5,
  },
  mainLayoutGrid: {
    flexDirection: "row",
    paddingHorizontal: 40,
    gap: 28,
    width: "100%",
  },
  leftIllustrationCard: {
    width: 240, 
    backgroundColor: "#E0F2FE",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#BAE6FD",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    maxHeight: 340,
  },
  illusTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#0369A1",
    marginTop: 12,
  },
  illusSub: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0EA5E9",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  waveDecoration: {
    height: 5,
    width: 50,
    backgroundColor: "#0EA5E9",
    borderRadius: 3,
    marginTop: 16,
  },
  rightTicketsGrid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap", 
    gap: 20,
  },
  ticketCard: {
    width: "48%", 
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    ...Platform.select({
      web: { boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.03)" },
    }),
  },
  fullWidthRow: {
    width: "100%", 
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  tipeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 30,
  },
  tipeBadgeText: {
    fontSize: 11,
    fontWeight: "800",
  },
  hariSubText: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "500",
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#0F172A",
    letterSpacing: -0.5,
  },
  categoryDesc: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 4,
    lineHeight: 16,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 14,
  },
  currencyLabel: {
    fontSize: 15,
    fontWeight: "800",
    marginRight: 2,
  },
  priceValue: {
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: -0.5,
  },
  perOrangLabel: {
    fontSize: 12,
    color: "#64748B",
    marginLeft: 2,
  },
  originalPriceCrossover: {
    fontSize: 11,
    color: "#94A3B8",
    textDecorationLine: "line-through",
    marginTop: 2,
  },
  dividerLine: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginVertical: 16,
  },
  benefitBox: {
    gap: 8,
    marginBottom: 20,
  },
  benefitRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  benefitText: {
    fontSize: 13,
    color: "#475569",
  },
  actionButton: {
    width: "100%",
    paddingVertical: 11,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
  },
  actionButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
  centerFeedback: {
    flex: 1,
    width: "100%",
    paddingVertical: 60,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  feedbackText: {
    fontSize: 14,
    color: "#64748B",
    fontWeight: "600",
  },
});