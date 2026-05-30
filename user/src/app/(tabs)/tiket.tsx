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
  if (width > 1024) return 3;
  if (width > 768) return 2;
  return 1;
};

const DUMMY_TIKET = [
  {
    id: "1",
    kategori: "Tiket Anak",
    tipe: "WEEKDAY",
    harga: 35000,
    ket: "Senin - Jumat • Tinggi 90cm - 11 Tahun",
    icon: "happy",
    color: "#0284C7", // Sky blue premium
    bgLight: "#E0F2FE",
  },
  {
    id: "2",
    kategori: "Tiket Dewasa",
    tipe: "WEEKDAY",
    harga: 40000,
    ket: "Senin - Jumat • Usia 12 Tahun ke atas",
    icon: "people",
    color: "#2563EB", // Royal blue
    bgLight: "#DBEAFE",
  },
  {
    id: "3",
    kategori: "Tiket Anak",
    tipe: "WEEKEND",
    harga: 40000,
    ket: "Sabtu, Minggu & Libur Nasional",
    icon: "sunny",
    color: "#EA580C", // Vibrant Orange
    bgLight: "#FFEDD5",
  },
  {
    id: "4",
    kategori: "Tiket Dewasa",
    tipe: "WEEKEND",
    harga: 45000,
    ket: "Sabtu, Minggu & Libur Nasional",
    icon: "flame",
    color: "#DC2626", // Red Crimson
    bgLight: "#FEE2E2",
  },
  {
    id: "5",
    kategori: "Sewa Ban Singel / Double",
    tipe: "FASILITAS",
    harga: 15000,
    ket: "Penyewaan ban • Durasi sepuasnya di wahana",
    icon: "water",
    color: "#059669", // Emerald Green
    bgLight: "#D1FAE5",
  },
];

export default function TiketScreen() {
  const columns = getNumColumns();

  return (
    <SafeAreaView style={styles.outerContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#F1F5F9" />
      
      <FlatList
        data={DUMMY_TIKET}
        keyExtractor={(item) => item.id}
        numColumns={columns}
        key={`grid-premium-${columns}`}
        columnWrapperStyle={columns > 1 ? styles.gridRowGap : null}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerWrapper}
        
        ListHeaderComponent={
          <View style={styles.headerWrapper}>
            {/* HERO TITLE DENGAN AKSEN GRADASI VISUAL */}
            <View style={styles.headerCard}>
              <View>
                <View style={styles.sparkRow}>
                  <Ionicons name="sparkles" size={18} color="#0EA5E9" style={{ marginRight: 6 }} />
                  <Text style={styles.topBadgeText}>PRICING PLAN</Text>
                </View>
                <Text style={styles.headerTitle}>Tiket &amp; Kategori Harga</Text>
                <Text style={styles.headerSubtitle}>Nikmati keseruan tanpa batas di Slanik Waterpark Lampung</Text>
              </View>
              <View style={styles.ticketIconCircle}>
                <Ionicons name="ticket-outline" size={26} color="#0EA5E9" />
              </View>
            </View>

            {/* BANNER PROMO DENGAN GLASSMORPHISM LOOK */}
            <View style={styles.promoContainer}>
              <View style={styles.promoContent}>
                <View style={styles.promoBadgeRow}>
                  <Text style={styles.promoBadgeText}>💥 PROMO TERBATAS</Text>
                </View>
                <Text style={styles.promoTitleText}>BUY 1 GET 1 FREE!</Text>
                <Text style={styles.promoDescriptionText}>
                  Setiap pembelian <Text style={styles.boldText}>1 tiket masuk utama</Text> gratis 1 tiket wahana atraksi pilihan (Crazy Slide / Dragon River). Anak di bawah tinggi badan 90cm <Text style={styles.boldText}>Gratis Masuk</Text>!
                </Text>
              </View>
              <View style={styles.promoAccentBar} />
            </View>
            
            <Text style={styles.sectionHeading}>Pilihan Tiket Masuk</Text>
          </View>
        }
        
        renderItem={({ item }) => {
          const isWeekend = item.tipe === "WEEKEND";
          const isFasilitas = item.tipe === "FASILITAS";
          
          return (
            <View style={[styles.ticketCard, { maxWidth: columns > 1 ? `${100 / columns - 2}%` : "100%" }]}>
              
              {/* BADGE HARI / TIPE DI ATAS KARTU */}
              <View style={styles.cardTopRow}>
                <View style={[
                  styles.tipeBadge, 
                  { backgroundColor: isWeekend ? "#FFEDD5" : isFasilitas ? "#D1FAE5" : "#E0F2FE" }
                ]}>
                  <Text style={[
                    styles.tipeBadgeText, 
                    { color: isWeekend ? "#EA580C" : isFasilitas ? "#059669" : "#0284C7" }
                  ]}>
                    {item.tipe}
                  </Text>
                </View>
                
                <View style={[styles.iconContainer, { backgroundColor: item.bgLight }]}>
                  <Ionicons name={item.icon as any} size={22} color={item.color} />
                </View>
              </View>

              {/* INFORMASI UTAMA KATEGORI */}
              <View style={styles.textDetails}>
                <Text style={styles.categoryTitle}>{item.kategori}</Text>
                <Text style={styles.categoryDescription}>{item.ket}</Text>
              </View>

              {/* DIVIDER GARIS PUTUS-PUTUS HALUS */}
              <View style={styles.cardDivider} />

              {/* FOOTER KARTU: HARGA & TOMBOL SIMULASI */}
              <View style={styles.cardFooterRow}>
                <View>
                  <Text style={styles.priceLabelSub}>Harga Tiket</Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.currencyLabel}>Rp</Text>
                    <Text style={styles.priceValue}>{item.harga.toLocaleString("id-ID")}</Text>
                    <Text style={styles.perOrangLabel}>/pax</Text>
                  </View>
                </View>
                
                {/* Tombol dekoratif aksen biar kelihatan professional e-commerce */}
                <View style={[styles.fakeButton, { backgroundColor: item.color }]}>
                  <Ionicons name="arrow-forward" size={16} color="#FFF" />
                </View>
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
    backgroundColor: "#F1F5F9", // Latar belakang abu pastel eksklusif agar kartu putih terlihat pop-out
  },
  centerWrapper: {
    width: "100%",
    maxWidth: 1200,
    alignSelf: "center",
    paddingHorizontal: 40,
    paddingTop: 48,
    paddingBottom: 160, 
  },
  headerWrapper: {
    width: "100%",
    marginBottom: 10,
  },
  gridRowGap: {
    justifyContent: "flex-start",
    gap: "3%",
  },
  sparkRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  topBadgeText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#0EA5E9",
    letterSpacing: 1.5,
  },
  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: "900",
    color: "#0F172A",
    letterSpacing: -1,
  },
  headerSubtitle: {
    fontSize: 15,
    color: "#64748B",
    fontWeight: "400",
    marginTop: 4,
  },
  ticketIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  promoContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    overflow: "hidden",
    marginBottom: 44,
    ...Platform.select({
      web: { boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.04)" },
    }),
  },
  promoContent: {
    padding: 32,
    flex: 1,
  },
  promoAccentBar: {
    width: 10,
    backgroundColor: "#F59E0B",
  },
  promoBadgeRow: {
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 30,
    alignSelf: "flex-start",
    marginBottom: 14,
  },
  promoBadgeText: {
    color: "#D97706",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  promoTitleText: {
    fontSize: 28,
    fontWeight: "900",
    color: "#0F172A",
    letterSpacing: -0.5,
  },
  promoDescriptionText: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 24,
    marginTop: 8,
    maxWidth: 850,
  },
  boldText: {
    fontWeight: "700",
    color: "#0F172A",
  },
  sectionHeading: {
    fontSize: 13,
    fontWeight: "800",
    color: "#94A3B8",
    marginBottom: 24,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  
  // RE-DESIGN KARTU TIKET LUXURY DASHBOARD
  ticketCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    flex: 1,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    justifyContent: "space-between",
    ...Platform.select({
      web: { 
        boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.03), 0 8px 10px -6px rgba(15, 23, 42, 0.03)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease"
      },
    }),
  },
  cardTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  tipeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 30,
  },
  tipeBadgeText: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.8,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  textDetails: {
    width: "100%",
    marginBottom: 20,
    minHeight: 65, // Menjaga tinggi kartu tetap seragam seimbang
  },
  categoryTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#0F172A",
    letterSpacing: -0.3,
  },
  categoryDescription: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 6,
    lineHeight: 18,
  },
  cardDivider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    borderStyle: "dashed",
    width: "100%",
    marginBottom: 16,
  },
  cardFooterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceLabelSub: {
    fontSize: 11,
    color: "#94A3B8",
    fontWeight: "600",
    textTransform: "uppercase",
    marginBottom: 2,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  currencyLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
    marginRight: 2,
  },
  priceValue: {
    fontSize: 26,
    fontWeight: "900",
    color: "#0F172A",
    letterSpacing: -0.5,
  },
  perOrangLabel: {
    fontSize: 12,
    color: "#64748B",
    marginLeft: 4,
    fontWeight: "500",
  },
  fakeButton: {
    width: 36,
    height: 36,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});