import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const getNumColumns = () => {
  if (width > 1024) return 3; // Layar Desktop/Laptop besar
  if (width > 768) return 2;  // Layar Laptop kecil/Tablet
  return 1;                   // Layar Smartphone
};

const DUMMY_TIKET = [
  {
    id: "1",
    kategori: "Tiket Anak",
    tipe: "Weekday",
    hari: "(Senin - Jumat)",
    harga: 35000,
    ket: "Tinggi Badan 90cm - 11 Tahun",
    icon: "happy-outline",
    color: "#2563EB", 
    benefits: ["Akses ke semua wahana anak", "Gratis ban pelampung", "Parkir kendaraan aman"],
  },
  {
    id: "2",
    kategori: "Tiket Dewasa",
    tipe: "Weekday",
    hari: "(Senin - Jumat)",
    harga: 40000,
    ket: "Usia 12 Tahun ke atas",
    icon: "people-outline",
    color: "#2563EB",
    benefits: ["Akses semua wahana ekstrem", "Fasilitas gazebo umum", "Parkir kendaraan aman"],
  },
  {
    id: "3",
    kategori: "Tiket Anak",
    tipe: "Weekend",
    hari: "(Sabtu - Minggu & Libur)",
    harga: 40000,
    ket: "Tinggi Badan 90cm - 11 Tahun",
    icon: "sunny-outline",
    color: "#EA580C",
    benefits: ["Akses ke semua wahana anak", "Gratis ban pelampung", "Termasuk live music event"],
  },
  {
    id: "4",
    kategori: "Tiket Dewasa",
    tipe: "Weekend",
    hari: "(Sabtu - Minggu & Libur)",
    harga: 45000,
    ket: "Usia 12 Tahun ke atas",
    icon: "flame-outline",
    color: "#EA580C",
    benefits: ["Akses semua wahana ekstrem", "Fasilitas gazebo umum", "Termasuk live music event"],
  },
  {
    id: "5",
    kategori: "Sewa Ban",
    tipe: "Fasilitas",
    hari: "(Durasi Sepuasnya)",
    harga: 15000,
    ket: "Penyewaan ban Singel / Double",
    icon: "water-outline",
    color: "#059669",
    benefits: ["Penggunaan sepuasnya seharian", "Bisa tukar ukuran ban", "Bebas antrean sewa ulang"],
  },
];

export default function TiketScreen() {
  const columns = getNumColumns();

  return (
    <SafeAreaView style={styles.outerContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#0EA5E9" />
      
      <FlatList
        data={DUMMY_TIKET}
        keyExtractor={(item) => item.id}
        numColumns={columns}
        key={`grid-slanik-${columns}`}
        columnWrapperStyle={columns > 1 ? styles.gridRowGap : null}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        
        // ================== HEADER UTAMA (BIRU MELENGKUNG & PROMO) ==================
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            {/* BACKGROUND HEADER BIRU KHAS SLANIKGO */}
            <View style={styles.blueHeroHeader}>
              <View style={styles.whiteIconWrapper}>
                <Ionicons name="ticket" size={28} color="#0EA5E9" />
              </View>
              <Text style={styles.heroTitle}>Tiket &amp; Harga</Text>
              <Text style={styles.heroSubtitle}>Pilih tiket masuk Slanik Waterpark sesuai hari kunjunganmu</Text>
            </View>

            {/* BANNER PROMO DENGAN RE-DESIGN ELEGAN */}
            <View style={styles.promoBanner}>
              <View style={styles.promoBadge}>
                <Text style={styles.promoBadgeText}>PROMO SPESIAL IDUL ADHA</Text>
              </View>
              <Text style={styles.promoTitle}>💥 BUY 1 GET 1 FREE!</Text>
              <Text style={styles.promoDesc}>
                Beli <Text style={styles.weight700}>1 tiket masuk</Text> gratis 1 tiket wahana atraksi pilihan (Crazy Slide / Dragon River). Anak dengan tinggi di bawah 90cm <Text style={styles.weight700}>GRATIS MASUK!</Text>
              </Text>
            </View>

            <Text style={styles.sectionHeading}>Pilih Tiket Terbaikmu</Text>
          </View>
        }
        
        // ================== KARTU TIKET ALA WEB PREMIUM ==================
        renderItem={({ item }) => {
          const isWeekend = item.tipe === "Weekend";
          const isFasilitas = item.tipe === "Fasilitas";
          const accentColor = item.color;

          return (
            <View style={[styles.ticketCard, { maxWidth: columns > 1 ? `${100 / columns - 2}%` : "100%" }]}>
              {/* Badge Tipe Hari */}
              <View style={styles.badgeWrapper}>
                <View style={[
                  styles.tipeBadge, 
                  { backgroundColor: isWeekend ? "#FEF3C7" : isFasilitas ? "#D1FAE5" : "#DBEAFE" }
                ]}>
                  <Text style={[
                    styles.tipeBadgeText, 
                    { color: isWeekend ? "#D97706" : isFasilitas ? "#059669" : "#2563EB" }
                  ]}>
                    {item.tipe}
                  </Text>
                </View>
                <Text style={styles.hariText}>{item.hari}</Text>
              </View>

              {/* Judul & Detail Kategori */}
              <Text style={styles.categoryTitle}>{item.kategori}</Text>
              <Text style={styles.categoryDesc}>{item.ket}</Text>

              {/* Harga Tiket */}
              <View style={styles.priceSection}>
                <Text style={styles.currencySymbol}>Rp</Text>
                <Text style={styles.priceValue}>{item.harga.toLocaleString("id-ID")}</Text>
                <Text style={styles.perPaxLabel}>/orang</Text>
              </View>

              {/* Garis Pembatas Tipis */}
              <View style={styles.dividerLine} />

              {/* Daftar Keuntungan / Benefit List (Mengikuti Desain Utama SlanikGo) */}
              <View style={styles.benefitContainer}>
                {item.benefits.map((benefit, index) => (
                  <View key={index} style={styles.benefitRow}>
                    <Ionicons name="checkmark-circle" size={16} color="#10B981" style={styles.checkIcon} />
                    <Text style={styles.benefitText}>{benefit}</Text>
                  </View>
                ))}
              </View>

              {/* Tombol Aksi Pesan Sekarang */}
              <View style={[styles.orderButton, { backgroundColor: accentColor }]}>
                <Text style={styles.orderButtonText}>Pesan Sekarang</Text>
                <Ionicons name="arrow-forward" size={16} color="#FFF" style={{ marginLeft: 6 }} />
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollContent: {
    width: "100%",
    maxWidth: 1200,
    alignSelf: "center",
    paddingBottom: 160, // Mencegah konten tertutup bottom tab bar
  },
  headerContainer: {
    width: "100%",
  },
  // Efek lengkung header atas agar konsisten dengan halaman info/tiket lama
  blueHeroHeader: {
    backgroundColor: "#0EA5E9",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingVertical: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 32,
  },
  whiteIconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#FFFFFF",
    letterSpacing: -0.5,
  },
  heroSubtitle: {
    fontSize: 14,
    color: "#E0F2FE",
    marginTop: 6,
    fontWeight: "500",
    textAlign: "center",
  },
  // Banner Promo Mewah Melebar
  promoBanner: {
    backgroundColor: "#FFFBEB",
    borderRadius: 20,
    padding: 24,
    marginHorizontal: 40,
    borderWidth: 1,
    borderColor: "#FDE68A",
    marginBottom: 40,
  },
  promoBadge: {
    backgroundColor: "#F59E0B",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  promoBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  promoTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: "#78350F",
  },
  promoDesc: {
    fontSize: 13,
    color: "#92400E",
    lineHeight: 20,
    marginTop: 6,
  },
  weight700: {
    fontWeight: "700",
  },
  sectionHeading: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0F172A",
    marginHorizontal: 40,
    marginBottom: 24,
    letterSpacing: -0.5,
  },
  gridRowGap: {
    paddingHorizontal: 40,
    justifyContent: "flex-start",
    gap: "3%",
  },
  
  // RAGAM KARTU TIKET MAHAL & KELAS ATAS (ALA LANDING PAGE)
  ticketCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 28,
    marginBottom: 28,
    flex: 1,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    ...Platform.select({
      web: {
        boxShadow: "0 10px 30px -5px rgba(15, 23, 42, 0.04), 0 4px 12px -4px rgba(15, 23, 42, 0.03)",
      },
    }),
  },
  badgeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  tipeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 30,
    marginRight: 8,
  },
  tipeBadgeText: {
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  hariText: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "500",
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#0F172A",
    letterSpacing: -0.5,
  },
  categoryDesc: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 4,
  },
  priceSection: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 20,
    marginBottom: 4,
  },
  currencySymbol: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1E293B",
    marginRight: 2,
  },
  priceValue: {
    fontSize: 34,
    fontWeight: "950",
    color: "#1E293B",
    letterSpacing: -1,
  },
  perPaxLabel: {
    fontSize: 13,
    color: "#64748B",
    marginLeft: 4,
    fontWeight: "500",
  },
  dividerLine: {
    height: 1,
    backgroundColor: "#F1F5F9",
    width: "100%",
    marginVertical: 20,
  },
  // Bagian Daftar Fitur Keuntungan
  benefitContainer: {
    width: "100%",
    marginBottom: 24,
    gap: 10,
  },
  benefitRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkIcon: {
    marginRight: 8,
  },
  benefitText: {
    fontSize: 13,
    color: "#475569",
    fontWeight: "400",
  },
  // Tombol Utama Pesan Sekarang
  orderButton: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto", // Mendorong tombol agar selalu presisi di dasar kartu
  },
  orderButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
});