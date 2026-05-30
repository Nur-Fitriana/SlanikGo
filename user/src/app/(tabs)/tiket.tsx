import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
  return (
    <SafeAreaView style={styles.outerContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#0EA5E9" />
      
      {/* WRAPPER PHONE MOCKUP (Kunci Utama Biar Ga Melar di PC) */}
      <View style={styles.phoneWrapper}>
        <FlatList
          data={DUMMY_TIKET}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          
          // HEADER DI DALAM SCROLL VIEW BIAR COCOK
          ListHeaderComponent={
            <View>
              {/* MINI HERO HEADER */}
              <View style={styles.headerCard}>
                <View style={styles.headerTextContainer}>
                  <Text style={styles.headerTitle}>Tiket &amp; Harga</Text>
                  <Text style={styles.headerSubtitle}>Slanik Waterpark Lampung</Text>
                </View>
                <View style={styles.ticketIconCircle}>
                  <Ionicons name="ticket-outline" size={24} color="#0EA5E9" />
                </View>
              </View>

              {/* BANNER PROMO PREMIUM */}
              <View style={styles.promoContainer}>
                <View style={styles.promoBadgeRow}>
                  <Text style={styles.promoBadgeText}>💥 PROMO IDUL ADHA</Text>
                </View>
                <Text style={styles.promoTitleText}>BUY 1 GET 1 FREE!</Text>
                <Text style={styles.promoDescriptionText}>
                  Setiap pembelian <Text style={{fontWeight: "700"}}>1 tiket masuk</Text> gratis 1 tiket wahana (Crazy Slide / Dragon River).
                </Text>
                <View style={styles.promoFooterLine} />
              </View>
              
              <Text style={styles.sectionHeading}>Daftar Harga Tiket</Text>
            </View>
          }
          
          // RENDER KARTU TIKET MINIMALIS ELEGAN
          renderItem={({ item }) => (
            <View style={styles.ticketCard}>
              {/* Sisi Kiri: Ikon & Detail */}
              <View style={styles.leftContent}>
                <View style={[styles.iconContainer, { backgroundColor: item.color + "12" }]}>
                  <Ionicons name={item.icon as any} size={22} color={item.color} />
                </View>
                <View style={styles.textDetails}>
                  <Text style={styles.categoryTitle}>{item.kategori}</Text>
                  <Text style={styles.categoryDescription}>{item.ket}</Text>
                </View>
              </View>

              {/* Sisi Kanan: Harga Paten */}
              <View style={styles.rightContent}>
                <Text style={styles.currencyLabel}>Rp</Text>
                <Text style={styles.priceValue}>{item.harga.toLocaleString("id-ID")}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Latar belakang abu-abu studio jika dibuka di PC laptop
  outerContainer: {
    flex: 1,
    backgroundColor: Platform.OS === "web" ? "#E2E8F0" : "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
  },
  // Membatasi lebar layout aplikasi di web browser biar ga melar ke samping
  phoneWrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F8FAFC",
    ...Platform.select({
      web: {
        maxWidth: 480, // Ukuran standar layar Hp portrait di monitor
        maxHeight: "95vh",
        borderRadius: 28,
        marginVertical: 20,
        overflow: "hidden",
        boxShadow: "0px 20px 40px rgba(15, 23, 42, 0.15)",
      },
    }),
  },
  listContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  // Header Minimalis Modern ala iOS
  headerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#0F172A",
    letterSpacing: -0.5,
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#64748B",
    fontWeight: "500",
    marginTop: 2,
  },
  ticketIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E0F2FE",
    justifyContent: "center",
    alignItems: "center",
  },
  // Kotak Promo dengan Gaya Glassmorphism Ringan
  promoContainer: {
    backgroundColor: "#FFFBEB",
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: "#FDE68A",
    marginBottom: 25,
  },
  promoBadgeRow: {
    backgroundColor: "#D97706",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  promoBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.3,
  },
  promoTitleText: {
    fontSize: 20,
    fontWeight: "900",
    color: "#78350F",
    letterSpacing: -0.3,
  },
  promoDescriptionText: {
    fontSize: 12,
    color: "#92400E",
    lineHeight: 18,
    marginTop: 4,
  },
  promoFooterLine: {
    height: 3,
    backgroundColor: "#F59E0B",
    borderRadius: 2,
    marginTop: 12,
    width: 40,
  },
  sectionHeading: {
    fontSize: 15,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  // Kartu List Tiket Clean Tipis Super Estetik
  ticketCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    ...Platform.select({
      web: { boxShadow: "0px 4px 10px rgba(15, 23, 42, 0.02)" },
    }),
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  textDetails: {
    marginLeft: 14,
    flex: 1,
    paddingRight: 10,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
  },
  categoryDescription: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 3,
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  currencyLabel: {
    fontSize: 11,
    fontWeight: "600",
    color: "#94A3B8",
    marginRight: 2,
  },
  priceValue: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
  },
});