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

const DUMMY_PENGUMUMAN: PengumumkanItem[] = [
  { id: 1, judul: "Promo Ramadhan", info: "Diskon 50% untuk tiket terusan!" },
  { id: 2, judul: "Wahana Baru", info: "Nikmati sensasi seluncuran pelangi sekarang." },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
      
      {/* CONTAINER UTAMA: Mengunci layout seukuran HP di tengah layar laptop */}
      <View style={styles.appContainer}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          
          {/* HEADER GRADASI ELEGAN */}
          <LinearGradient
            colors={["#1E3A8A", "#3B82F6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.headerGradient}
          >
            <View style={styles.headerContent}>
              {/* KIRI: TEKS SAMBUTAN & BUTTON CTA */}
              <View style={styles.textContainer}>
                <Text style={styles.greeting}>Halo, Fitri 👋</Text>
                <Text style={styles.subGreeting}>Selamat datang di SlanikGo</Text>
                
                <TouchableOpacity style={styles.ctaButton} activeOpacity={0.8}>
                  <Text style={styles.ctaText}>Pesan Tiket Sekarang</Text>
                </TouchableOpacity>
              </View>
              
              {/* KANAN: LOGO & NOTIFIKASI */}
              <View style={styles.rightHeaderAction}>
                <Image
                  source={require("../../../assets/images/logo_slanik.png")}
                  style={styles.homeLogo}
                  resizeMode="contain"
                />
                <TouchableOpacity style={styles.notificationBadge} activeOpacity={0.7}>
                  <Ionicons name="notifications" size={20} color="#FFF" />
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
          
          {/* QUICK MENU FLOATING (Melayang memotong header) */}
          <View style={styles.quickMenu}>
            <TouchableOpacity style={styles.quickItem} activeOpacity={0.7}>
              <View style={[styles.iconCircle, { backgroundColor: "#EFF6FF", borderColor: "#DBEAFE" }]}>
                <Ionicons name="ticket" size={24} color="#2563EB" />
              </View>
              <Text style={styles.quickText}>Tiket</Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={styles.quickItem} activeOpacity={0.7}>
              <View style={[styles.iconCircle, { backgroundColor: "#ECFDF5", borderColor: "#D1FAE5" }]}>
                <Ionicons name="water" size={24} color="#10B981" />
              </View>
              <Text style={styles.quickText}>Wahana</Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={styles.quickItem} activeOpacity={0.7}>
              <View style={[styles.iconCircle, { backgroundColor: "#FFF7ED", borderColor: "#FFEDD5" }]}>
                <Ionicons name="images" size={24} color="#F97316" />
              </View>
              <Text style={styles.quickText}>Galeri</Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={styles.quickItem} activeOpacity={0.7}>
              <View style={[styles.iconCircle, { backgroundColor: "#FDF2F8", borderColor: "#FCE7F3" }]}>
                <Ionicons name="map" size={24} color="#EC4899" />
              </View>
              <Text style={styles.quickText}>Peta</Text>
            </TouchableOpacity>
          </View>
          
          {/* KONTEN UTAMA */}
          <View style={styles.mainContent}>
            
            {/* INFO & PROMO TERBARU */}
            <View style={styles.sectionHeaderRow}>
              <Ionicons name="information-circle" size={18} color="#1E293B" style={{ marginRight: 6 }} />
              <Text style={styles.sectionTitle}>Info & Promo Terbaru</Text>
            </View>
            
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              decelerationRate="fast"
              snapToInterval={294} 
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
                    {/* Pembungkus teks biar aman ga ketutup icon */}
                    <View style={styles.cardTextContent}>
                      <Text style={styles.announcementTitle}>{item.judul}</Text>
                      <Text style={styles.announcementInfo}>{item.info}</Text>
                    </View>

                    {/* Watermark Ikon Kado Besar Transparan di Pojok Kanan Bawah */}
                    <Ionicons
                      name="gift"
                      size={75}
                      color="rgba(255, 255, 255, 0.18)"
                      style={styles.backgroundIcon}
                    />
                  </LinearGradient>
                </View>
              ))}
            </ScrollView>

          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1e3a8a",
  },
  appContainer: {
    flex: 1,
    width: "100%",
    maxWidth: 450, 
    alignSelf: "center",
    backgroundColor: "#F8FAFC",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  headerGradient: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 70, 
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subGreeting: {
    fontSize: 13,
    color: "#F1F5F9",
    marginTop: 4,
    opacity: 0.9,
  },
  ctaButton: {
    backgroundColor: "#FFF",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 12,
    alignSelf: "flex-start",
    elevation: 2,
  },
  ctaText: {
    color: "#2563EB",
    fontWeight: "700",
    fontSize: 12,
  },
  rightHeaderAction: {
    flexDirection: "row",
    alignItems: "center",
  },
  homeLogo: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  notificationBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 8,
    borderRadius: 50,
  },
  quickMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginTop: -35, 
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 10,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  quickItem: {
    alignItems: "center",
    flex: 1,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginBottom: 6,
  },
  quickText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#334155",
  },
  mainContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1E293B",
  },
  sliderContainer: {
    paddingVertical: 4,
  },
  announcementCard: {
    width: 282,
    height: 115,
    marginRight: 12,
    borderRadius: 16,
    overflow: "hidden", // Supaya sisa potongan icon kado tidak bleber keluar card
    position: "relative",
  },
  gradientCard: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  cardTextContent: {
    zIndex: 2, 
    paddingRight: 40, // Memberi ruang aman di kanan agar tulisan promo gak tabrakan dengan icon
  },
  announcementTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  announcementInfo: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 4,
    opacity: 0.95,
  },
  backgroundIcon: {
    position: "absolute",
    bottom: -12,
    right: -10,
    zIndex: 1,
  },
}); 