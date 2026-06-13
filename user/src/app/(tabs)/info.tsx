import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Linking,
  Image,
  Alert,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function InfoScreen() {
  const hubungiWhatsApp = async (nomor: string) => {
    const url = `https://wa.me/${nomor}`;
    const bisaBuka = await Linking.canOpenURL(url);
    
    if (bisaBuka) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Error", "Tidak dapat membuka WhatsApp. Pastikan aplikasi sudah terinstal.");
    }
  };

  const bukaPeta = async () => {
    const url = "https://goo.gl/maps/SlanikWaterparkLampung"; // Tautan universal peta yang aman
    const bisaBuka = await Linking.canOpenURL(url);

    if (bisaBuka) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Error", "Tidak dapat membuka aplikasi peta.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0284C7" />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        
        {/* ================= 1. HERO BANNER RE-DESIGN (HD & FULL WIDTH) ================= */}
        <View style={styles.heroContainer}>
          <Image 
            source={require("../../../assets/images/slanik_hero.png")} 
            style={styles.heroImage}
            resizeMode="cover"
          />
          {/* Lapisan gradasi gelap tipis agar teks tetap terbaca tajam */}
          <View style={styles.heroGradientOverlay}>
            <View style={styles.heroContentWrapper}>
              <View style={styles.heroBadge}>
                <Text style={styles.heroBadgeText}>🌴 THE LARGEST WATERPARK IN LAMPUNG</Text>
              </View>
              <Text style={styles.heroMainTitle}>🌊 Slanik Waterpark</Text>
              <Text style={styles.heroSubTitle}>
                Tempat Rekreasi Air Terbesar & Terfavorit Keluarga di Lampung
              </Text>

              <View style={styles.heroStatsRow}>
                <View style={styles.statItem}>
                  <Ionicons name="star" size={14} color="#FBBF24" />
                  <Text style={styles.statText}>4.9 Top Rated 2026</Text>
                </View>
                <View style={styles.statItemBlank}>
                  <Ionicons name="location" size={14} color="#FFF" />
                  <Text style={styles.statText}>Lampung Selatan</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* CONTAINER UTAMA KONTEN */}
        <View style={styles.fullWebBody}>

          {/* ================= 2. JAM OPERASIONAL ================= */}
          <View style={styles.sectionBlock}>
            <Text style={styles.sectionHeading}>🕒 Rencanakan Kunjunganmu</Text>
            <View style={styles.responsiveGridRow}>
              
              <View style={[styles.gridScheduleCard, { borderTopColor: "#0284C7" }]}>
                <View style={[styles.gridIconCircle, { backgroundColor: "#E0F2FE" }]}>
                  <Ionicons name="calendar-outline" size={22} color="#0284C7" />
                </View>
                <Text style={styles.scheduleTitle}>Weekday</Text>
                <Text style={styles.scheduleSubTitle}>Senin s/d Jumat</Text>
                <View style={styles.timePillBlue}>
                  <Text style={styles.timePillTextBlue}>09:00 - 17:00</Text>
                </View>
              </View>

              <View style={[styles.gridScheduleCard, { borderTopColor: "#F59E0B" }]}>
                <View style={[styles.gridIconCircle, { backgroundColor: "#FEF3C7" }]}>
                  <Ionicons name="sunny-outline" size={22} color="#F59E0B" />
                </View>
                <Text style={styles.scheduleTitle}>Weekend</Text>
                <Text style={styles.scheduleSubTitle}>Sabtu, Minggu & Libur</Text>
                <View style={styles.timePillOrange}>
                  <Text style={styles.timePillTextOrange}>08:00 - 17:30</Text>
                </View>
              </View>

            </View>
          </View>

          {/* ================= 3. HUBUNGI KAMI ================= */}
          <View style={styles.sectionBlock}>
            <Text style={styles.sectionHeading}>📞 Hubungi Tim Humas Slanik</Text>
            <Text style={styles.sectionSubHeading}>
              Punya pertanyaan atau rencana datang bersama rombongan besar? Ketuk salah satu admin WhatsApp di bawah ini:
            </Text>
            <View style={styles.responsiveGridRow}>

              <TouchableOpacity 
                style={styles.premiumContactCard} 
                onPress={() => hubungiWhatsApp("6287841000565")}
                activeOpacity={0.85}
              >
                <View style={styles.waIconFloatContainer}>
                  <Ionicons name="logo-whatsapp" size={24} color="#FFF" />
                </View>
                <Text style={styles.csNameText}>Kak Annisa</Text>
                <Text style={styles.csRoleSub}>Humas Tiket & Reservasi</Text>
                <View style={styles.actionChatBadge}>
                  <Text style={styles.actionChatText}>Kirim Chat</Text>
                  <Ionicons name="chevron-forward" size={12} color="#0EA5E9" />
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.premiumContactCard} 
                onPress={() => hubungiWhatsApp("6281273348835")}
                activeOpacity={0.85}
              >
                <View style={[styles.waIconFloatContainer, { backgroundColor: "#10B981" }]}>
                  <Ionicons name="logo-whatsapp" size={24} color="#FFF" />
                </View>
                <Text style={styles.csNameText}>Kak Eva</Text>
                <Text style={styles.csRoleSub}>Koordinator Operasional</Text>
                <View style={[styles.actionChatBadge, { backgroundColor: "#E6F4EA" }]}>
                  <Text style={[styles.actionChatText, { color: "#10B981" }]}>Kirim Chat</Text>
                  <Ionicons name="chevron-forward" size={12} color="#10B981" />
                </View>
              </TouchableOpacity>

            </View>
          </View>

          {/* ================= 4. LOKASI STRIP BANNER ================= */}
          <View style={styles.sectionBlock}>
            <Text style={styles.sectionHeading}>📍 Lokasi</Text>
            <TouchableOpacity style={styles.fullLocationCard} onPress={bukaPeta} activeOpacity={0.9}>
              <View style={styles.locationLeftBox}>
                <View style={styles.mapIconCircle}>
                  <Ionicons name="map-outline" size={24} color="#0284C7" />
                </View>
                <View style={styles.locationMetaDetails}>
                  <Text style={styles.locationMainTitle}>Slanik Waterpark</Text>
                  <Text style={styles.locationSubTitle}>Jl. Raya Karang Anyar, Jati Agung, Lampung Selatan</Text>
                </View>
              </View>
              <View style={styles.openMapBadge}>
                <Text style={styles.openMapText}>Buka Peta</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#0284C7" },
  scrollView: { flex: 1, backgroundColor: "#F8FAFC" },

  // Desain Baru untuk Hero Banner full website & HD
  heroContainer: {
    width: "100%",
    height: width > 768 ? 480 : 320, // Menyesuaikan layar desktop web (lebih tinggi) vs mobile
    position: "relative",
    backgroundColor: "#0284C7",
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  heroGradientOverlay: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.4)", // Lapisan gelap agar teks tetap tajam HD
    justifyContent: "flex-end",
    paddingBottom: 40,
  },
  heroContentWrapper: {
    paddingHorizontal: "8%",
  },
  heroBadge: {
    backgroundColor: "#0284C7",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  heroBadgeText: { color: "#FFF", fontSize: 11, fontWeight: "800", letterSpacing: 0.8 },
  heroMainTitle: { color: "#FFF", fontSize: width > 768 ? 46 : 32, fontWeight: "900", letterSpacing: -0.5 },
  heroSubTitle: { color: "#F1F5F9", fontSize: width > 768 ? 16 : 14, marginTop: 8, fontWeight: "500", maxWidth: 700, lineHeight: 22 },
  heroStatsRow: { flexDirection: "row", marginTop: 20 },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 10,
  },
  statItemBlank: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 10,
  },
  statText: { color: "#FFF", fontSize: 12, fontWeight: "600", marginLeft: 5 },

  fullWebBody: {
    paddingHorizontal: "8%",
    paddingTop: 40,
    paddingBottom: 60,
  },
  sectionBlock: {
    marginBottom: 40,
  },
  sectionHeading: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 6,
  },
  sectionSubHeading: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 20,
    lineHeight: 20,
  },
  responsiveGridRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 20,
  },

  gridScheduleCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    borderTopWidth: 5,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 340,
  },
  gridIconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  scheduleTitle: { fontSize: 18, fontWeight: "800", color: "#1E293B" },
  scheduleSubTitle: { fontSize: 13, color: "#64748B", marginTop: 2 },
  timePillBlue: {
    backgroundColor: "#E0F2FE",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 12,
    marginTop: 14,
  },
  timePillTextBlue: { color: "#0EA5E9", fontSize: 14, fontWeight: "800" },
  timePillOrange: {
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 12,
    marginTop: 14,
  },
  timePillTextOrange: { color: "#D97706", fontSize: 14, fontWeight: "800" },

  premiumContactCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 28,
    alignItems: "center",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 340,
  },
  waIconFloatContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#25D366",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  csNameText: { fontSize: 18, fontWeight: "800", color: "#1E293B" },
  csRoleSub: { fontSize: 13, color: "#94A3B8", textAlign: "center", marginTop: 4, fontWeight: "500" },
  actionChatBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0F2FE",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 16,
  },
  actionChatText: { color: "#0EA5E9", fontSize: 12, fontWeight: "700", marginRight: 4 },

  fullLocationCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    flexWrap: "wrap",
    gap: 16,
  },
  locationLeftBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    minWidth: 300,
  },
  mapIconCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#E0F2FE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  locationMetaDetails: {
    flex: 1,
  },
  locationMainTitle: { fontSize: 18, fontWeight: "800", color: "#1E293B" },
  locationSubTitle: { fontSize: 13, color: "#64748B", marginTop: 4, lineHeight: 18 },
  openMapBadge: {
    backgroundColor: "#0284C7",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  openMapText: { color: "#FFFFFF", fontSize: 13, fontWeight: "700" },
});