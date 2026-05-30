import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

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
      {/* StatusBar Biru Cerah Slanik */}
      <StatusBar barStyle="light-content" backgroundColor="#007ae6" />
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* 1. HEADER HERO ESTETIK (Biru Cerah Slanik dengan Aksen Geometris Transparan) */}
        <View style={styles.headerHeroSolid}>
          {/* Efek Lingkaran Estetik di Background Header */}
          <View style={styles.bgCircleAccent1} />
          <View style={styles.bgCircleAccent2} />

          <View style={styles.headerTopRow}>
            <View style={styles.logoCircle}>
              <Ionicons name="water" size={22} color="#007ae6" />
            </View>
            
            <TouchableOpacity style={styles.notifButton} activeOpacity={0.7}>
              <Ionicons name="notifications" size={22} color="#FFF" />
              <View style={styles.notifBadge}><Text style={styles.notifCount}>3</Text></View>
            </TouchableOpacity>
          </View>

          <Text style={styles.greeting}>Halo, {userName}! 👋</Text>
          <Text style={styles.subGreeting}>Mau seru-seruan di SlanikGo hari ini?</Text>

          {/* Tombol Pesan Tiket yang Elegan */}
          <TouchableOpacity style={styles.ctaButton} activeOpacity={0.9}>
            <Ionicons name="ticket-outline" size={18} color="#007ae6" style={{ marginRight: 8 }} />
            <Text style={styles.ctaText}>Pesan Tiket Sekarang</Text>
            <Ionicons name="chevron-forward" size={16} color="#007ae6" style={{ marginLeft: 8 }} />
          </TouchableOpacity>
        </View>

        {/* AREA KONTEN UTAMA */}
        <View style={styles.contentBody}>

          {/* PROMO SECTION (Gak Polos, Pakai Gradasi Gradual Mewah) */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Promo Terbaru</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Lihat semua <Ionicons name="chevron-forward" size={12} /></Text>
            </TouchableOpacity>
          </View>

          {/* Banner Promo Estetik Berwarna Biru Cerah */}
          <LinearGradient colors={["#0086ff", "#005cbd"]} style={styles.promoBanner} start={{x:0, y:0}} end={{x:1, y:1}}>
            <View style={styles.promoBadge}><Text style={styles.promoBadgeText}>SPESIAL RAMADHAN</Text></View>
            <Text style={styles.promoTitle}>Diskon 50%</Text>
            <Text style={styles.promoSub}>untuk tiket terusan!</Text>
            <Text style={styles.promoDate}>Berlaku hingga 30 April 2026</Text>
            <TouchableOpacity style={styles.promoBtn}><Text style={styles.promoBtnText}>Lihat Promo</Text></TouchableOpacity>
            
            {/* Watermark Ikon Besar biar Gak Sepi/Polos */}
            <Ionicons name="gift" size={120} color="rgba(255,255,255,0.15)" style={styles.promoWatermark} />
          </LinearGradient>


          {/* WAHANA POPULER SECTION */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Wahana Populer</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Lihat semua <Ionicons name="chevron-forward" size={12} /></Text>
            </TouchableOpacity>
          </View>

          {/* List Horizontal Wahana Estetik */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
            <TouchableOpacity style={styles.wahanaCard} activeOpacity={0.9}>
              <LinearGradient colors={["#00a2ff", "#006ee6"]} style={styles.wahanaBg}>
                <Ionicons name="sparkles" size={32} color="rgba(255,255,255,0.25)" style={styles.wahanaIconBack} />
                <View>
                  <Text style={styles.wahanaName}>Rainbow Slide</Text>
                  <Text style={styles.wahanaRating}><Ionicons name="star" color="#fbbf24" size={12}/> 4.8 (1.287)</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.wahanaCard} activeOpacity={0.9}>
              <LinearGradient colors={["#00bfa5", "#007ae6"]} style={styles.wahanaBg}>
                <Ionicons name="boat" size={32} color="rgba(255,255,255,0.25)" style={styles.wahanaIconBack} />
                <View>
                  <Text style={styles.wahanaName}>Wave Pool</Text>
                  <Text style={styles.wahanaRating}><Ionicons name="star" color="#fbbf24" size={12}/> 4.7 (953)</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.wahanaCard} activeOpacity={0.9}>
              <LinearGradient colors={["#7c4dff", "#006ee6"]} style={styles.wahanaBg}>
                <Ionicons name="water" size={32} color="rgba(255,255,255,0.25)" style={styles.wahanaIconBack} />
                <View>
                  <Text style={styles.wahanaName}>Crazy River</Text>
                  <Text style={styles.wahanaRating}><Ionicons name="star" color="#fbbf24" size={12}/> 4.6 (764)</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>


          {/* EVENT TERDEKAT */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Event Terdekat</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Lihat semua <Ionicons name="chevron-forward" size={12} /></Text>
            </TouchableOpacity>
          </View>

          <View style={styles.eventCard}>
            <View style={styles.eventIconPlaceholder}>
              <Ionicons name="calendar" size={24} color="#007ae6" />
            </View>
            <View style={styles.eventInfoContainer}>
              <Text style={styles.eventTitle}>Water Festival 2026</Text>
              <Text style={styles.eventDetail}><Ionicons name="calendar-outline" size={12}/> 20 - 22 Juni 2026</Text>
              <Text style={styles.eventDetail}><Ionicons name="location-outline" size={12}/> SlanikGo Waterpark</Text>
            </View>
            <TouchableOpacity style={styles.eventArrow}>
              <Ionicons name="arrow-forward" size={16} color="#007ae6" />
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFC", // Background dasar aplikasi abu-abu cerah super bersih
  },
  container: {
    flex: 1,
  },
  // Header Biru Cerah dengan Posisi Relatif untuk Akses Objek Dekoratif
  headerHeroSolid: {
    width: "100%",
    backgroundColor: "#007ae6", 
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 40,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    position: "relative",
    overflow: "hidden",
  },
  // Akses dekorasi bulatan transparan biar header mewah gak polos teles
  bgCircleAccent1: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "rgba(255, 255, 255, 0.07)",
    top: -30,
    right: -20,
  },
  bgCircleAccent2: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 0.04)",
    bottom: -60,
    left: -40,
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    zIndex: 10,
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
    top: -2,
    right: -2,
    backgroundColor: "#EF4444",
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  notifCount: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "700",
  },
  greeting: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FFFFFF",
    zIndex: 10,
  },
  subGreeting: {
    fontSize: 14,
    color: "#F1F5F9",
    marginTop: 4,
    opacity: 0.9,
    zIndex: 10,
  },
  ctaButton: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 25,
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    zIndex: 10,
  },
  ctaText: {
    color: "#007ae6",
    fontWeight: "700",
    fontSize: 14,
  },
  contentBody: {
    paddingHorizontal: 24,
    paddingTop: 25,
    paddingBottom: 40,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
  },
  seeAllText: {
    fontSize: 13,
    color: "#007ae6",
    fontWeight: "600",
  },
  // PROMO BANNER GRADASI BIRU INTEGRAL
  promoBanner: {
    width: "100%",
    borderRadius: 20,
    padding: 22,
    marginBottom: 25,
    position: "relative",
    overflow: "hidden",
    shadowColor: "#007ae6",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  promoBadge: {
    backgroundColor: "#FBBF24",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  promoBadgeText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#78350F",
  },
  promoTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#FFFFFF",
  },
  promoSub: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginTop: 2,
  },
  promoDate: {
    fontSize: 11,
    color: "#E2E8F0",
    marginTop: 10,
    opacity: 0.9,
  },
  promoBtn: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginTop: 16,
  },
  promoBtnText: {
    color: "#005cbd",
    fontSize: 12,
    fontWeight: "700",
  },
  promoWatermark: {
    position: "absolute",
    right: 10,
    bottom: -10,
  },
  horizontalScroll: {
    paddingBottom: 15,
  },
  // WAHANA CARD PREMIUM DESIGN
  wahanaCard: {
    width: 200,
    height: 130,
    borderRadius: 20,
    marginRight: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  wahanaBg: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-end",
    position: "relative",
  },
  wahanaIconBack: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  wahanaName: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  wahanaRating: {
    color: "#F1F5F9",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "500",
  },
  eventCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#F1F5F9",
  },
  eventIconPlaceholder: {
    width: 52,
    height: 52,
    backgroundColor: "#EFF6FF",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  eventInfoContainer: {
    flex: 1,
    marginLeft: 14,
  },
  eventTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1E293B",
  },
  eventDetail: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 4,
  },
  eventArrow: {
    backgroundColor: "#EFF6FF",
    padding: 10,
    borderRadius: 50,
  },
});