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

  // Nama user dinamis
  const [userName, setUserName] = useState("Fitri");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* StatusBar disamakan dengan warna Biru Slanik */}
      <StatusBar barStyle="light-content" backgroundColor="#1E3A8A" />
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* HEADER HERO SOLID BIRU */}
        <View style={styles.headerHeroSolid}>
          <View style={styles.headerTopRow}>
            <View style={styles.logoPlaceholderCircle}>
              <Ionicons name="water" size={22} color="#1E3A8A" />
            </View>
            
            <TouchableOpacity style={styles.notifButton} activeOpacity={0.7}>
              <Ionicons name="notifications" size={22} color="#FFF" />
              <View style={styles.notifBadge} />
            </TouchableOpacity>
          </View>

          <Text style={styles.greeting}>Halo, {userName}! 👋</Text>
          <Text style={styles.subGreeting}>Mau seru-seruan di SlanikGo hari ini?</Text>

          {/* Tombol CTA Tiket */}
          <TouchableOpacity style={styles.ctaButton} activeOpacity={0.8}>
            <Ionicons name="ticket" size={16} color="#1E3A8A" style={{ marginRight: 6 }} />
            <Text style={styles.ctaText}>Pesan Tiket Sekarang</Text>
            <Ionicons name="chevron-forward" size={14} color="#1E3A8A" style={{ marginLeft: 6 }} />
          </TouchableOpacity>
        </View>

        {/* AREA KONTEN UTAMA */}
        <View style={styles.contentBody}>

          {/* PROMO SECTION */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Promo Terbaru</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Lihat semua <Ionicons name="chevron-forward" size={12} /></Text>
            </TouchableOpacity>
          </View>

          {/* Banner Promo - Sekarang pakai warna solid biru konsisten */}
          <View style={styles.promoBanner}>
            <View style={styles.promoBadge}><Text style={styles.promoBadgeText}>SPESIAL RAMADHAN</Text></View>
            <Text style={styles.promoTitle}>Diskon 50%</Text>
            <Text style={styles.promoSub}>untuk tiket terusan!</Text>
            <Text style={styles.promoDate}>Berlaku hingga 30 April 2026</Text>
            <TouchableOpacity style={styles.promoBtn}><Text style={styles.promoBtnText}>Lihat Promo</Text></TouchableOpacity>
            <Ionicons name="gift" size={110} color="rgba(255,255,255,0.1)" style={styles.promoWatermark} />
          </View>

          {/* WAHANA SECTION */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Wahana Populer</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Lihat semua <Ionicons name="chevron-forward" size={12} /></Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
            {/* Card Wahana 1 - Warna Solid Biru */}
            <View style={styles.wahanaCard}>
              <View style={styles.wahanaBgSolid}>
                <Ionicons name="sparkles" size={26} color="rgba(255,255,255,0.2)" style={styles.wahanaIconBack} />
                <View style={styles.wahanaOverlayContent}>
                  <Text style={styles.wahanaName}>Rainbow Slide</Text>
                  <Text style={styles.wahanaRating}><Ionicons name="star" color="#eab308" size={12}/> 4.8 (1.287)</Text>
                </View>
              </View>
            </View>

            {/* Card Wahana 2 - Warna Solid Biru */}
            <View style={styles.wahanaCard}>
              <View style={styles.wahanaBgSolid}>
                <Ionicons name="boat" size={26} color="rgba(255,255,255,0.2)" style={styles.wahanaIconBack} />
                <View style={styles.wahanaOverlayContent}>
                  <Text style={styles.wahanaName}>Wave Pool</Text>
                  <Text style={styles.wahanaRating}><Ionicons name="star" color="#eab308" size={12}/> 4.7 (953)</Text>
                </View>
              </View>
            </View>
          </ScrollView>

          {/* EVENT SECTION */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Event Terdekat</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>Lihat semua <Ionicons name="chevron-forward" size={12} /></Text>
            </TouchableOpacity>
          </View>

          <View style={styles.eventCard}>
            <View style={styles.eventIconPlaceholder}>
              <Ionicons name="calendar" size={24} color="#1E3A8A" />
            </View>
            <View style={styles.eventInfoContainer}>
              <Text style={styles.eventTitle}>Water Festival</Text>
              <Text style={styles.eventDetail}><Ionicons name="calendar-outline" size={11}/> 20 - 22 Juni 2026</Text>
              <Text style={styles.eventDetail}><Ionicons name="location-outline" size={11}/> SlanikGo Waterpark</Text>
            </View>
            <TouchableOpacity style={styles.eventArrow}>
              <Ionicons name="arrow-forward" size={16} color="#1E3A8A" />
            </TouchableOpacity>
          </View>

          {/* TIKET & POIN SECTION */}
          <Text style={[styles.sectionTitle, { marginTop: 10, marginBottom: 12 }]}>Tiket & Poin Saya</Text>
          
          <View style={styles.statsRow}>
            <TouchableOpacity style={styles.statsBox}>
              <View style={styles.statsIconCircle}>
                <Ionicons name="ticket" size={18} color="#1E3A8A" />
              </View>
              <View style={styles.statsTextColumn}>
                <Text style={styles.statsLabel}>Tiket Saya</Text>
                <Text style={styles.statsCount}>2</Text>
                <Text style={styles.statsSub}>Tiket aktif</Text>
              </View>
              <Ionicons name="chevron-forward" size={14} color="#94a3b8" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.statsBox}>
              <View style={[styles.statsIconCircle, { backgroundColor: "#FEF3C7" }]}>
                <Ionicons name="star" size={18} color="#D97706" />
              </View>
              <View style={styles.statsTextColumn}>
                <Text style={styles.statsLabel}>Poin Saya</Text>
                <Text style={styles.statsCount}>350</Text>
                <Text style={styles.statsSub}>Poin tersedia</Text>
              </View>
              <Ionicons name="chevron-forward" size={14} color="#94a3b8" />
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
    backgroundColor: "#F8FAFC",
  },
  container: {
    flex: 1,
  },
  // KUNCI UTAMA: Menggunakan warna solid tunggal #1E3A8A
  headerHeroSolid: {
    width: "100%",
    backgroundColor: "#1E3A8A", 
    paddingHorizontal: 25,
    paddingTop: 30,
    paddingBottom: 40,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  logoPlaceholderCircle: {
    width: 40,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  notifButton: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
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
    fontWeight: "800",
    color: "#FFFFFF",
  },
  subGreeting: {
    fontSize: 14,
    color: "#E2E8F0",
    marginTop: 4,
    opacity: 0.9,
  },
  ctaButton: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 25,
    alignSelf: "flex-start",
  },
  ctaText: {
    color: "#1E3A8A",
    fontWeight: "700",
    fontSize: 14,
  },
  contentBody: {
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 40,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
  },
  seeAllText: {
    fontSize: 13,
    color: "#1E3A8A",
    fontWeight: "600",
  },
  // BANNER SEKARANG PAKAI SOLID BIRU #1E3A8A
  promoBanner: {
    width: "100%",
    backgroundColor: "#1E3A8A",
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
    color: "#E2E8F0",
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
    color: "#1E3A8A",
    fontSize: 12,
    fontWeight: "700",
  },
  promoWatermark: {
    position: "absolute",
    right: 15,
    bottom: 10,
  },
  horizontalScroll: {
    paddingBottom: 10,
  },
  wahanaCard: {
    width: 160,
    height: 110,
    borderRadius: 16,
    marginRight: 12,
    overflow: "hidden",
  },
  // WAHANA JUGA SEKARANG PAKAI SOLID BIRU #1E3A8A
  wahanaBgSolid: {
    flex: 1,
    backgroundColor: "#1E3A8A",
    padding: 12,
    justifyContent: "flex-end",
    position: "relative",
  },
  wahanaIconBack: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  wahanaOverlayContent: {
    zIndex: 2,
  },
  wahanaName: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
  wahanaRating: {
    color: "#E2E8F0",
    fontSize: 11,
    marginTop: 2,
  },
  eventCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#F1F5F9",
  },
  eventIconPlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: "#EFF6FF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  eventInfoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  eventTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1E293B",
  },
  eventDetail: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 3,
  },
  eventArrow: {
    backgroundColor: "#EFF6FF",
    padding: 8,
    borderRadius: 50,
  },
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
    borderRadius: 18,
    backgroundColor: "#EFF6FF",
    justifyContent: "center",
    alignItems: "center",
  },
  statsTextColumn: {
    flex: 1,
    marginLeft: 10,
  },
  statsLabel: {
    fontSize: 11,
    color: "#64748B",
    fontWeight: "500",
  },
  statsCount: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1E293B",
  },
  statsSub: {
    fontSize: 10,
    color: "#94a3b8",
  },
});