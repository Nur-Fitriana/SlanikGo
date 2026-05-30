import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("Fitri");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Warna status bar disamakan persis dengan warna login */}
      <StatusBar barStyle="light-content" backgroundColor="#007ae6" />
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* HEADER HERO SOLID BIRU CERAH */}
        <View style={styles.headerHeroSolid}>
          <View style={styles.headerTopRow}>
            {/* Logo Lingkaran Putih */}
            <View style={styles.logoCircle}>
              <Ionicons name="water" size={22} color="#007ae6" />
            </View>
            
            {/* Notifikasi */}
            <TouchableOpacity style={styles.notifButton} activeOpacity={0.7}>
              <Ionicons name="notifications" size={22} color="#FFF" />
              <View style={styles.notifBadge} />
            </TouchableOpacity>
          </View>

          <Text style={styles.greeting}>Halo, {userName}! 👋</Text>
          <Text style={styles.subGreeting}>Selamat datang di SlanikGo</Text>

          {/* Tombol Pesan Tiket Putih */}
          <TouchableOpacity style={styles.ctaButton} activeOpacity={0.8}>
            <Text style={styles.ctaText}>Pesan Tiket Sekarang</Text>
          </TouchableOpacity>
        </View>

        {/* AREA UTAMA */}
        <View style={styles.contentBody}>

          {/* MENU UTAMA GRID (Tiket, Wahana, Galeri, Peta) */}
          <View style={styles.menuGrid}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={[styles.menuIconBox, { backgroundColor: "#EFF6FF" }]}>
                <Ionicons name="ticket" size={24} color="#007ae6" />
              </View>
              <Text style={styles.menuLabel}>Tiket</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={[styles.menuIconBox, { backgroundColor: "#E6F4EA" }]}>
                <Ionicons name="water" size={24} color="#137333" />
              </View>
              <Text style={styles.menuLabel}>Wahana</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={[styles.menuIconBox, { backgroundColor: "#FEF7E0" }]}>
                <Ionicons name="images" size={24} color="#B06000" />
              </View>
              <Text style={styles.menuLabel}>Galeri</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <View style={[styles.menuIconBox, { backgroundColor: "#FCE8E6" }]}>
                <Ionicons name="map" size={24} color="#C5221F" />
              </View>
              <Text style={styles.menuLabel}>Peta</Text>
            </TouchableOpacity>
          </View>

          {/* SECTION HEADER INFO & PROMO */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              <Ionicons name="information-circle" size={18} color="#007ae6" /> Info & Promo Terbaru
            </Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Lihat semua <Ionicons name="chevron-forward" size={12} /></Text>
            </TouchableOpacity>
          </View>

          {/* Banner Promo 1 - Solid Biru Cerah */}
          <View style={styles.promoBanner}>
            <Text style={styles.promoTitle}>Promo Ramadhan</Text>
            <Text style={styles.promoSub}>Diskon 50% untuk tiket terusan!</Text>
            <Ionicons name="gift" size={80} color="rgba(255,255,255,0.15)" style={styles.promoWatermark} />
          </View>

          {/* Banner Promo 2 - Solid Biru Cerah */}
          <View style={styles.promoBanner}>
            <Text style={styles.promoTitle}>Wahana Baru</Text>
            <Text style={styles.promoSub}>Nikmati sensasi seru wahana baru kami.</Text>
            <Ionicons name="sparkles" size={80} color="rgba(255,255,255,0.15)" style={styles.promoWatermark} />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF", 
  },
  container: {
    flex: 1,
  },
  // Kunci utama: Menggunakan warna tunggal konsisten #007ae6 dan lebar 100% penuh kanan-kiri
  headerHeroSolid: {
    width: "100%",
    backgroundColor: "#007ae6", 
    paddingHorizontal: 24,
    paddingTop: 25,
    paddingBottom: 45,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logoCircle: {
    width: 42,
    height: 42,
    backgroundColor: "#FFFFFF",
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  notifButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 10,
    borderRadius: 50,
    position: "relative",
  },
  notifBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#EF4444",
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  greeting: {
    fontSize: 26,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  subGreeting: {
    fontSize: 14,
    color: "#FFFFFF",
    marginTop: 4,
    opacity: 0.9,
  },
  ctaButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: "flex-start",
  },
  ctaText: {
    color: "#007ae6",
    fontWeight: "700",
    fontSize: 13,
  },
  contentBody: {
    paddingHorizontal: 24,
    paddingTop: 25,
    paddingBottom: 40,
  },
  menuGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: -25, // Membuat card menu melayang rapi di atas batas header melengkung
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 25,
  },
  menuItem: {
    alignItems: "center",
    flex: 1,
  },
  menuIconBox: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  menuLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#475569",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E293B",
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    fontSize: 12,
    color: "#007ae6",
    fontWeight: "600",
  },
  promoBanner: {
    width: "100%",
    backgroundColor: "#007ae6", // Konsisten pakai warna biru yang sama
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    position: "relative",
    overflow: "hidden",
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  promoSub: {
    fontSize: 13,
    color: "#FFFFFF",
    marginTop: 5,
    opacity: 0.9,
  },
  promoWatermark: {
    position: "absolute",
    right: 15,
    bottom: -5,
  },
});