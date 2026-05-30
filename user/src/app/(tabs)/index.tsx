import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  // Menyembunyikan header default agar full screen ke atas rapi
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
      
      {/* APP CONTAINER (Mengunci layout HP di tengah layar web laptop) */}
      <View style={styles.appContainer}>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          
          {/* 1. HEADER HERO DENGAN BACKGROUND WAHANA */}
          <ImageBackground
            source={require("../../../assets/images/bg_header_slanik.png")} // Pastikan aset gambarmu ada, atau ganti dengan LinearGradient jika belum ada
            style={styles.headerHero}
            resizeMode="cover"
          >
            <LinearGradient
              colors={["rgba(30, 58, 138, 0.8)", "rgba(59, 130, 246, 0.4)"]}
              style={styles.headerOverlay}
            >
              <View style={styles.headerTopRow}>
                <Image
                  source={require("../../../assets/images/logo_slanik.png")}
                  style={styles.appLogo}
                  resizeMode="contain"
                />
                <TouchableOpacity style={styles.notifButton} activeOpacity={0.7}>
                  <Ionicons name="notifications" size={22} color="#FFF" />
                  <View style={styles.notifBadge} />
                </TouchableOpacity>
              </View>

              <Text style={styles.greeting}>Halo, Fitri! 👋</Text>
              <Text style={styles.subGreeting}>Mau seru-seruan di SlanikGo hari ini?</Text>

              <TouchableOpacity style={styles.ctaButton} activeOpacity={0.8}>
                <Ionicons name="card" size={16} color="#2563EB" style={{ marginRight: 6 }} />
                <Text style={styles.ctaText}>Pesan Tiket Sekarang</Text>
                <Ionicons name="chevron-forward" size={14} color="#2563EB" style={{ marginLeft: 6 }} />
              </TouchableOpacity>
            </LinearGradient>
          </ImageBackground>

          {/* CONTENT SECTION CONTAINER */}
          <View style={styles.contentBody}>

            {/* 2. SECTION PROMO TERBARU */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Promo Terbaru</Text>
              <TouchableOpacity><Text style={styles.seeAllText}>Lihat semua <Ionicons name="chevron-forward" size={12} /></Text></TouchableOpacity>
            </View>

            {/* Banner Promo Besar bergaya mockup */}
            <LinearGradient colors={["#38bdf8", "#0369a1"]} style={styles.promoBanner} start={{x:0, y:0}} end={{x:1, y:1}}>
              <View style={styles.promoBadge}><Text style={styles.promoBadgeText}>SPESIAL RAMADHAN</Text></View>
              <Text style={styles.promoTitle}>Diskon 50%</Text>
              <Text style={styles.promoSub}>untuk tiket terusan!</Text>
              <Text style={styles.promoDate}>Berlaku hingga 30 April 2026</Text>
              <TouchableOpacity style={styles.promoBtn}><Text style={styles.promoBtnText}>Lihat Promo</Text></TouchableOpacity>
              
              {/* Ilustrasi Hadiah Transparan Kanan */}
              <Ionicons name="gift" size={110} color="rgba(255,255,255,0.15)" style={styles.promoWatermark} />
            </LinearGradient>

            {/* 3. SECTION WAHANA POPULER */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Wahana Populer</Text>
              <TouchableOpacity><Text style={styles.seeAllText}>Lihat semua <Ionicons name="chevron-forward" size={12} /></Text></TouchableOpacity>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
              {/* Card Wahana 1 */}
              <View style={styles.wahanaCard}>
                <Image source={require("../../../assets/images/rainbow_slide.png")} style={styles.wahanaImg} />
                <LinearGradient colors={["transparent", "rgba(0,0,0,0.8)"]} style={styles.wahanaOverlay}>
                  <Text style={styles.wahanaName}>Rainbow Slide</Text>
                  <Text style={styles.wahanaRating}><Ionicons name="star" color="#eab308" size={12}/> 4.8 (1.287)</Text>
                </LinearGradient>
              </View>

              {/* Card Wahana 2 */}
              <View style={styles.wahanaCard}>
                <Image source={require("../../../assets/images/wave_pool.png")} style={styles.wahanaImg} />
                <LinearGradient colors={["transparent", "rgba(0,0,0,0.8)"]} style={styles.wahanaOverlay}>
                  <Text style={styles.wahanaName}>Wave Pool</Text>
                  <Text style={styles.wahanaRating}><Ionicons name="star" color="#eab308" size={12}/> 4.7 (953)</Text>
                </LinearGradient>
              </View>
            </ScrollView>

            {/* 4. SECTION EVENT TERDEKAT */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Event Terdekat</Text>
              <TouchableOpacity><Text style={styles.seeAllText}>Lihat semua <Ionicons name="chevron-forward" size={12} /></Text></TouchableOpacity>
            </View>

            <View style={styles.eventCard}>
              <Image source={require("../../../assets/images/event_festival.png")} style={styles.eventImg} />
              <View style={styles.eventInfoContainer}>
                <Text style={styles.eventTitle}>Water Festival</Text>
                <Text style={styles.eventDetail}><Ionicons name="calendar-outline"/> 20 - 22 Juni 2026</Text>
                <Text style={styles.eventDetail}><Ionicons name="location-outline"/> SlanikGo Waterpark</Text>
              </View>
              <TouchableOpacity style={styles.eventArrow}><Ionicons name="arrow-forward" size={16} color="#2563EB" /></TouchableOpacity>
            </View>

            {/* 5. SECTION TIKET & POIN */}
            <Text style={[styles.sectionTitle, { marginTop: 10, marginBottom: 12 }]}>Tiket & Poin Saya</Text>
            
            <View style={styles.statsRow}>
              {/* Tiket Box */}
              <TouchableOpacity style={styles.statsBox}>
                <View style={[styles.statsIconCircle, { backgroundColor: "#EFF6FF" }]}>
                  <Ionicons name="ticket" size={20} color="#2563EB" />
                </View>
                <View style={styles.statsTextColumn}>
                  <Text style={styles.statsLabel}>Tiket Saya</Text>
                  <Text style={styles.statsCount}>2</Text>
                  <Text style={styles.statsSub}>Tiket aktif</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#94a3b8" />
              </TouchableOpacity>

              {/* Poin Box */}
              <TouchableOpacity style={styles.statsBox}>
                <View style={[styles.statsIconCircle, { backgroundColor: "#FEF3C7" }]}>
                  <Ionicons name="star" size={20} color="#D97706" />
                </View>
                <View style={styles.statsTextColumn}>
                  <Text style={styles.statsLabel}>Poin Saya</Text>
                  <Text style={styles.statsCount}>350</Text>
                  <Text style={styles.statsSub}>Poin tersedia</Text>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#94a3b8" />
              </TouchableOpacity>
            </View>

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
  },
  container: {
    flex: 1,
  },
  // Header Hero Styles
  headerHero: {
    width: "100%",
    height: 230,
  },
  headerOverlay: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  appLogo: {
    width: 45,
    height: 45,
  },
  notifButton: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
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
    fontSize: 24,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  subGreeting: {
    fontSize: 13,
    color: "#E2E8F0",
    marginTop: 4,
  },
  ctaButton: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 16,
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  ctaText: {
    color: "#2563EB",
    fontWeight: "700",
    fontSize: 13,
  },
  // Body Content Styles
  contentBody: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1E293B",
  },
  seeAllText: {
    fontSize: 12,
    color: "#2563EB",
    fontWeight: "600",
  },
  // Promo Banner Card Styles
  promoBanner: {
    width: "100%",
    borderRadius: 20,
    padding: 18,
    marginBottom: 15,
    position: "relative",
    overflow: "hidden",
  },
  promoBadge: {
    backgroundColor: "#FBBF24",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginBottom: 8,
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
    fontWeight: "700",
    color: "#FFFFFF",
    marginTop: -2,
  },
  promoDate: {
    fontSize: 11,
    color: "#E0F2FE",
    marginTop: 8,
    opacity: 0.9,
  },
  promoBtn: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginTop: 14,
  },
  promoBtnText: {
    color: "#0369a1",
    fontSize: 12,
    fontWeight: "700",
  },
  promoWatermark: {
    position: "absolute",
    right: 15,
    bottom: 10,
  },
  // Wahana Card Styles
  horizontalScroll: {
    paddingBottom: 10,
  },
  wahanaCard: {
    width: 150,
    height: 110,
    borderRadius: 16,
    marginRight: 12,
    overflow: "hidden",
    position: "relative",
  },
  wahanaImg: {
    width: "100%",
    height: "100%",
  },
  wahanaOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 8,
  },
  wahanaName: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
  wahanaRating: {
    color: "#CBD5E1",
    fontSize: 10,
    marginTop: 2,
  },
  // Event Card Styles
  eventCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#F1F5F9",
  },
  eventImg: {
    width: 60,
    height: 50,
    borderRadius: 10,
  },
  eventInfoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E293B",
  },
  eventDetail: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 2,
  },
  eventArrow: {
    backgroundColor: "#EFF6FF",
    padding: 8,
    borderRadius: 50,
  },
  // Tiket & Poin Saya Styles
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statsBox: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "#F1F5F9",
  },
  statsIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  statsTextColumn: {
    flex: 1,
    marginLeft: 10,
  },
  statsLabel: {
    fontSize: 10,
    color: "#64748B",
    fontWeight: "500",
  },
  statsCount: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1E293B",
    marginVertical: 1,
  },
  statsSub: {
    fontSize: 9,
    color: "#94a3b8",
  },
});