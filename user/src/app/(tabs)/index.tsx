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

// Data Dummy Promo Aktual dari CMS
const DUMMY_PENGUMUMAN: PengumumkanItem[] = [
  { id: 1, judul: "Promo Ramadhan", info: "Diskon 50% untuk tiket terusan!" },
  { id: 2, judul: "Wahana Baru", info: "Nikmati sensasi seluncuran pelangi sekarang." },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* 1. HEADER GRADASI UTAMA */}
        <LinearGradient
          colors={["#1e3a8a", "#3b82f6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerGradient}
        >
          {/* SUSUNAN TOP BAR: GREETING & LOGO */}
          <View style={styles.headerContent}>
            <View style={styles.textContainer}>
              <Text style={styles.mainAppTitle}>Beranda</Text>
              <Text style={styles.greeting}>Halo, Fitri!</Text>
              <Text style={styles.subGreeting}>Mau seru-seruan di SlanikGo hari ini?</Text>
            </View>

            {/* LOGO DI TENGAH AGAR SEIMBANG DAN GEDE MANTAP */}
            <View style={styles.logoWrapper}>
              <Image
                source={require("../../../assets/images/logo_slanik.png")}
                style={styles.homeLogo}
                resizeMode="contain"
              />
            </View>

            {/* TOMBOL NOTIFIKASI DI POJOK KANAN */}
            <TouchableOpacity style={styles.notificationBadge} activeOpacity={0.7}>
              <Ionicons name="notifications" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* 2. BODY CONTENT (KONTEN UTAMA DI BAWAH HEADER) */}
        <View style={styles.mainContent}>
          
          {/* SECTION INFO & PROMO TERBARU */}
          <View style={styles.sectionHeaderRow}>
            <Ionicons name="information-circle" size={20} color="#1E293B" style={{ marginRight: 6 }} />
            <Text style={styles.sectionTitle}>Info & Promo Terbaru</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width - 32}
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

          {/* QUICK MENU GRID BERGAYA MODEREN */}
          <Text style={[styles.sectionTitle, { marginTop: 15, marginBottom: 15 }]}>Menu Utama</Text>
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

  // Desain Gradasi Header yang kokoh dan presisi
  headerGradient: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 40,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 10,
  },
  textContainer: { 
    flex: 2,
  },
  mainAppTitle: {
    fontSize: 26,
    fontWeight: "900",
    color: "#E2E8F0",
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  greeting: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: "#FFFFFF" 
  },
  subGreeting: { 
    fontSize: 13, 
    color: "#F1F5F9", 
    marginTop: 4, 
    opacity: 0.9,
    lineHeight: 18,
  },

  // WRAPPER LOGO BIAR JALANNYA AMAN DAN BISA DIBIKIN GEDE
  logoWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
  },
  // UKURAN LOGO BARU: Super Gede, Bulat Jelas, Anti Buram!
  homeLogo: {
    width: 90, 
    height: 90,
  },
  notificationBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 10,
    borderRadius: 50,
  },

  // Styling Konten Inti
  mainContent: { 
    paddingHorizontal: 16, 
    marginTop: -20,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    borderRadius: 24,
    paddingVertical: 20,
    elevation: 4,
    shadowColor: "#0f172a",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: { 
    fontSize: 16, 
    fontWeight: "700", 
    color: "#1E293B",
    letterSpacing: 0.2,
  },

  // Moderenisasi Slider Card Banner Promo
  sliderContainer: { paddingVertical: 8 },
  announcementCard: {
    width: width - 64,
    height: 125,
    marginRight: 12,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#0ea5e9",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  gradientCard: { 
    flex: 1, 
    padding: 18, 
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
    marginTop: 6, 
    opacity: 0.95,
  },

  // DESAIN MENU LAYOUT BARU: Berjajar horizontal rapi bentuk grid list
  quickGridMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  menuItemRow: {
    alignItems: "center",
    width: (width - 96) / 4,
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#F1F5F9",
  },
  menuText: { 
    fontSize: 13, 
    fontWeight: "600", 
    color: "#475569",
    textAlign: "center"
  },
});