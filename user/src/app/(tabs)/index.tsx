import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

interface PengumumkanItem {
  id: number;
  judul: string;
  info: string;
}

// Data Dummy Promo
const DUMMY_PENGUMUMAN: PengumumkanItem[] = [
  { id: 1, judul: "Promo Ramadhan", info: "Diskon 50% untuk tiket terusan!" },
  { id: 2, judul: "Wahana Baru", info: "Nikmati sensasi seluncuran pelangi sekarang." },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* HEADER GRADASI */}
        <LinearGradient
          colors={["#1e3a8a", "#3b82f6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerGradient}
        >
          <View style={styles.headerContent}>
            {/* KIRI: TEKS GREETING */}
            <View style={styles.textContainer}>
              <Text style={styles.mainAppTitle}>Beranda</Text>
              <Text style={styles.greeting}>Halo, Fitri!</Text>
              <Text style={styles.subGreeting}>Mau seru-seruan di SlanikGo hari ini?</Text>
            </View>

            {/* TENGAH: LOGO BULAT SUPER PAS & COCOK */}
            <View style={styles.logoWrapper}>
              <Image
                source={require("../../../assets/images/logo_slanik.png")}
                style={styles.homeLogo}
                resizeMode="contain"
              />
            </View>

            {/* KANAN: NOTIFIKASI */}
            <TouchableOpacity style={styles.notificationBadge} activeOpacity={0.7}>
              <Ionicons name="notifications" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* KONTEN UTAMA */}
        <View style={styles.mainContent}>
          
          {/* SECTION INFO & PROMO TERBARU */}
          <View style={styles.sectionHeaderRow}>
            <Ionicons name="information-circle" size={20} color="#1E293B" style={{ marginRight: 6 }} />
            <Text style={styles.sectionTitle}>Info & Promo Terbaru</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width > 600 ? 550 : width - 64}
            decelerationRate="fast"
            contentContainerStyle={styles.sliderContainer}
          >
            {DUMMY_PENGUMUMAN.map((item) => (
              <View key={item.id} style={styles.announcementCard}>
                <LinearGradient
                  colors={["#0ea5e9", "#06b6d4"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.gradientCard}
                >
                  <View style={styles.cardHeaderRow}>
                    <Text style={styles.announcementTitle}>{item.judul}</Text>
                    <Ionicons name="sparkles" size={18} color="#fef08a" />
                  </View>
                  <Text style={styles.announcementInfo}>{item.info}</Text>
                </LinearGradient>
              </View>
            ))}
          </ScrollView>

          {/* MENU UTAMA GRID */}
          <Text style={[styles.sectionTitle, { marginTop: 25, marginBottom: 15 }]}>Menu Utama</Text>
          <View style={styles.quickGridMenu}>
            <TouchableOpacity style={styles.menuItemRow} activeOpacity={0.8}>
              <View style={[styles.iconCircle, { backgroundColor: "#EFF6FF" }]}>
                <Ionicons name="ticket" size={24} color="#2563EB" />
              </View>
              <Text style={styles.menuText}>Tiket</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItemRow} activeOpacity={0.8}>
              <View style={[styles.iconCircle, { backgroundColor: "#ECFDF5" }]}>
                <Ionicons name="water" size={24} color="#10B981" />
              </View>
              <Text style={styles.menuText}>Wahana</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItemRow} activeOpacity={0.8}>
              <View style={[styles.iconCircle, { backgroundColor: "#FFF7ED" }]}>
                <Ionicons name="images" size={24} color="#F97316" />
              </View>
              <Text style={styles.menuText}>Galeri</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItemRow} activeOpacity={0.8}>
              <View style={[styles.iconCircle, { backgroundColor: "#FDF2F8" }]}>
                <Ionicons name="map" size={24} color="#EC4899" />
              </View>
              <Text style={styles.menuText}>Peta</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#1e3a8a" },
  container: { flex: 1, backgroundColor: "#F8FAFC" },

  headerGradient: {
    paddingHorizontal: 24,
    paddingTop: 25,
    paddingBottom: 45,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Bikin konten rata tengah secara vertikal
  },
  textContainer: { 
    flex: 2,
  },
  mainAppTitle: {
    fontSize: 26,
    fontWeight: "900",
    color: "#E2E8F0",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  greeting: { 
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#FFFFFF" 
  },
  subGreeting: { 
    fontSize: 12, 
    color: "#F1F5F9", 
    marginTop: 2, 
    opacity: 0.85,
  },

  logoWrapper: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  // Logo dibuat pas 110 biar kelihatan bulat mantap dan gak kekecilan!
  homeLogo: {
    width: 110, 
    height: 110,
  },
  notificationBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 10,
    borderRadius: 50,
  },

  mainContent: { 
    paddingHorizontal: 24, 
    marginTop: -25,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    borderRadius: 24,
    paddingVertical: 24,
    elevation: 5,
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    maxWidth: 800, // Biar pas di web gak melar kelebaran
    alignSelf: "center",
    width: "92%",
  },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: { 
    fontSize: 16, 
    fontWeight: "700", 
    color: "#1E293B",
  },

  sliderContainer: { paddingVertical: 4 },
  announcementCard: {
    width: width > 600 ? 500 : width - 88,
    height: 115,
    marginRight: 12,
    borderRadius: 16,
    overflow: "hidden",
  },
  gradientCard: { 
    flex: 1, 
    padding: 20, 
    justifyContent: "center" 
  },
  cardHeaderRow: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center" 
  },
  announcementTitle: { 
    color: "#FFFFFF", 
    fontSize: 18, 
    fontWeight: "bold" 
  },
  announcementInfo: { 
    color: "#FFFFFF", 
    fontSize: 13, 
    marginTop: 4, 
    opacity: 0.9,
  },

  quickGridMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: 500, // Membatasi jarak menu biar ga renggang di laptop
    width: "100%",
    alignSelf: "center",
  },
  menuItemRow: {
    alignItems: "center",
    flex: 1,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  menuText: { 
    fontSize: 13, 
    fontWeight: "600", 
    color: "#475569",
  },
});