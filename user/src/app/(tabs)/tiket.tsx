import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

// Tentukan jumlah kolom berdasarkan lebar layar laptop/PC
const getNumColumns = () => {
  if (width > 1024) return 3; // Layar Desktop lebar
  if (width > 640) return 2;  // Layar Tablet / Laptop kecil
  return 1;                   // Layar HP
};

const DUMMY_TIKET = [
  {
    id: "1",
    kategori: "Tiket Anak (Weekday)",
    harga: 35000,
    ket: "Senin - Jumat • Tinggi 90cm - 11 Tahun",
    icon: "happy-outline",
    color: "#3B82F6",
  },
  {
    id: "2",
    kategori: "Tiket Dewasa (Weekday)",
    harga: 40000,
    ket: "Senin - Jumat • Usia 12 Tahun ke atas",
    icon: "people-outline",
    color: "#2563EB",
  },
  {
    id: "3",
    kategori: "Tiket Anak (Weekend)",
    harga: 40000,
    ket: "Sabtu, Minggu & Libur Nasional",
    icon: "sunny-outline",
    color: "#F97316",
  },
  {
    id: "4",
    kategori: "Tiket Dewasa (Weekend)",
    harga: 45000,
    ket: "Sabtu, Minggu & Libur Nasional",
    icon: "flame-outline",
    color: "#EF4444",
  },
  {
    id: "5",
    kategori: "Sewa Ban Singel / Double",
    harga: 15000,
    ket: "Penyewaan ban • Durasi sepuasnya",
    icon: "water-outline",
    color: "#10B981",
  },
];

export default function TiketScreen() {
  const columns = getNumColumns();

  return (
    <SafeAreaView style={styles.outerContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />
      
      <FlatList
        data={DUMMY_TIKET}
        keyExtractor={(item) => item.id}
        numColumns={columns}
        key={`grid-${columns}`} // Memaksa re-render jika ukuran layar ditarik/berubah
        columnWrapperStyle={columns > 1 ? styles.gridRowGap : null}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerWrapper}
        
        // AREA HEADER & BANNER PROMO WIDE-SCREEN
        ListHeaderComponent={
          <View style={styles.headerWrapper}>
            {/* HERO TITLE MINIMALIS MODERN */}
            <View style={styles.headerCard}>
              <View>
                <Text style={styles.headerTitle}>Tiket &amp; Kategori Harga</Text>
                <Text style={styles.headerSubtitle}>Slanik Waterpark Lampung • Informasi Tarif Terbaru</Text>
              </View>
              <View style={styles.ticketIconCircle}>
                <Ionicons name="ticket" size={24} color="#0EA5E9" />
              </View>
            </View>

            {/* BANNER PROMO WIDE-SCREEN */}
            <View style={styles.promoContainer}>
              <View style={styles.promoContent}>
                <View style={styles.promoBadgeRow}>
                  <Text style={styles.promoBadgeText}>💥 PROMO SPESIAL</Text>
                </View>
                <Text style={styles.promoTitleText}>BUY 1 GET 1 FREE!</Text>
                <Text style={styles.promoDescriptionText}>
                  Setiap pembelian <Text style={styles.boldText}>1 tiket masuk utama</Text> gratis 1 tiket wahana atraksi (Crazy Slide / Dragon River). Anak di bawah tinggi badan 90cm gratis masuk!
                </Text>
              </View>
              <View style={styles.promoAccentBar} />
            </View>
            
            <Text style={styles.sectionHeading}>Pilihan Tiket Tersedia</Text>
          </View>
        }
        
        // KARTU TIKET DENGAN SISTEM FLEX GRID PREMIUM
        renderItem={({ item }) => (
          <View style={[styles.ticketCard, { maxWidth: columns > 1 ? `${100 / columns - 2}%` : "100%" }]}>
            {/* Ikon Kategori Atas */}
            <View style={styles.cardHeaderRow}>
              <View style={[styles.iconContainer, { backgroundColor: item.color + "12" }]}>
                <Ionicons name={item.icon as any} size={24} color={item.color} />
              </View>
              <View style={styles.rightPriceContent}>
                <Text style={styles.currencyLabel}>Rp</Text>
                <Text style={styles.priceValue}>{item.harga.toLocaleString("id-ID")}</Text>
              </View>
            </View>

            {/* Detail Teks Bawah */}
            <View style={styles.textDetails}>
              <Text style={styles.categoryTitle}>{item.kategori}</Text>
              <Text style={styles.categoryDescription}>{item.ket}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  // Membatasi lebar konten utama di laptop agar tidak melar mentok ke ujung monitor
  centerWrapper: {
    width: "100%",
    maxWidth: 1200,
    alignSelf: "center",
    paddingHorizontal: 32,
    paddingVertical: 40,
  },
  headerWrapper: {
    width: "100%",
    marginBottom: 20,
  },
  gridRowGap: {
    justifyContent: "flex-start",
    gap: "2%", // Jarak horizontal antar kartu di web desktop
  },
  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#0F172A",
    letterSpacing: -0.8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#64748B",
    fontWeight: "500",
    marginTop: 4,
  },
  ticketIconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#E0F2FE",
    justifyContent: "center",
    alignItems: "center",
  },
  // Promo Banner Lebar Model Modern Dashboard
  promoContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    overflow: "hidden",
    marginBottom: 40,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 12,
  },
  promoContent: {
    padding: 24,
    flex: 1,
  },
  promoAccentBar: {
    width: 12,
    backgroundColor: "#F59E0B",
  },
  promoBadgeRow: {
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  promoBadgeText: {
    color: "#D97706",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  promoTitleText: {
    fontSize: 24,
    fontWeight: "900",
    color: "#1E293B",
    letterSpacing: -0.5,
  },
  promoDescriptionText: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 22,
    marginTop: 6,
    maxWidth: 800,
  },
  boldText: {
    fontWeight: "700",
    color: "#0F172A",
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: "800",
    color: "#64748B",
    marginBottom: 16,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  // Desain Kartu Grid Blok Kotak ala Next.js Premium Dashboard
  ticketCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    flex: 1,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.03,
    shadowRadius: 20,
    elevation: 2,
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textDetails: {
    width: "100%",
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#0F172A",
  },
  categoryDescription: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 6,
    lineHeight: 18,
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  currencyLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#94A3B8",
    marginRight: 3,
  },
  priceValue: {
    fontSize: 24,
    fontWeight: "900",
    color: "#0F172A",
    letterSpacing: -0.5,
  },
});