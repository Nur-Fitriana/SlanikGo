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
    const alamatLengkap = "Slanik Waterpark, Jl. Raya Karang Anyar No.10, Karang Anyar, Kec. Jati Agung, Kabupaten Lampung Selatan, Lampung 35365";
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(alamatLengkap)}`;
    
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

      {/* 🌊 SEKARANG JAUH LEBIH HIDUP DENGAN LATAR BELAKANG BIRU AIR SEGAR */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        
        {/* ================= 1. HERO BANNER PREMIUM ================= */}
        <View style={styles.heroContainer}>
          <Image 
            source={require("../../../assets/images/slanik_hero.png")} 
            style={styles.heroImage}
            resizeMode="cover"
          />
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
            <Text style={styles.sectionSubHeading}>Sesuaikan waktu kedatangan Anda dengan jadwal operasional terbaru kami.</Text>
            
            <View style={styles.responsiveGridRow}>
              
              {/* Card Weekday */}
              <View style={styles.modernScheduleCard}>
                <View style={[styles.accentSideBorder, { backgroundColor: "#0284C7" }]} />
                <View style={[styles.scheduleIconBox, { backgroundColor: "#E0F2FE" }]}>
                  <Ionicons name="calendar" size={24} color="#0284C7" />
                </View>
                <View style={styles.scheduleInfoTextContainer}>
                  <Text style={styles.scheduleMainType}>Weekday</Text>
                  <Text style={styles.scheduleDaysDetail}>Senin s/d Jumat</Text>
                </View>
                <View style={styles.modernTimeBadgeBlue}>
                  <Text style={styles.timeTextBlue}>09:00 - 17:00</Text>
                </View>
              </View>

              {/* Card Weekend */}
              <View style={styles.modernScheduleCard}>
                <View style={[styles.accentSideBorder, { backgroundColor: "#F59E0B" }]} />
                <View style={[styles.scheduleIconBox, { backgroundColor: "#FEF3C7" }]}>
                  <Ionicons name="sunny" size={24} color="#F59E0B" />
                </View>
                <View style={styles.scheduleInfoTextContainer}>
                  <Text style={styles.scheduleMainType}>Weekend</Text>
                  <Text style={styles.scheduleDaysDetail}>Sabtu, Minggu & Libur Nasional</Text>
                </View>
                <View style={styles.modernTimeBadgeOrange}>
                  <Text style={styles.timeTextOrange}>08:00 - 17:30</Text>
                </View>
              </View>

            </View>
          </View>

          {/* ================= 3. HUBUNGI KAMI ================= */}
          <View style={styles.sectionBlock}>
            <Text style={styles.sectionHeading}>📞 Hubungi Tim Humas Slanik</Text>
            <Text style={styles.sectionSubHeading}>
              Punya pertanyaan atau rencana datang bersama rombongan besar? Hubungi tim admin kami secara langsung:
            </Text>
            
            <View style={styles.responsiveGridRow}>

              {/* Kontak 1 */}
              <TouchableOpacity 
                style={styles.premiumProfileCard} 
                onPress={() => hubungiWhatsApp("6287841000565")}
                activeOpacity={0.9}
              >
                <View style={styles.profileHeaderRow}>
                  <View style={[styles.avatarCircle, { backgroundColor: "#E0F2FE" }]}>
                    <Ionicons name="person" size={24} color="#0284C7" />
                    <View style={styles.activeDot} />
                  </View>
                  <View style={styles.profileMeta}>
                    <Text style={styles.profileName}>Kak Annisa</Text>
                    <Text style={styles.profileTag}>Humas Tiket & Reservasi</Text>
                  </View>
                  <View style={styles.whatsappBadgeIcon}>
                    <Ionicons name="logo-whatsapp" size={20} color="#25D366" />
                  </View>
                </View>
                <View style={styles.profileActionDivider} />
                <View style={styles.profileBottomButton}>
                  <Text style={styles.profileButtonText}>Mulai Obrolan</Text>
                  <Ionicons name="arrow-forward-circle" size={18} color="#0284C7" />
                </View>
              </TouchableOpacity>

              {/* Kontak 2 */}
              <TouchableOpacity 
                style={styles.premiumProfileCard} 
                onPress={() => hubungiWhatsApp("6281273348835")}
                activeOpacity={0.9}
              >
                <View style={styles.profileHeaderRow}>
                  <View style={[styles.avatarCircle, { backgroundColor: "#E6F4EA" }]}>
                    <Ionicons name="person" size={24} color="#10B981" />
                    <View style={styles.activeDot} />
                  </View>
                  <View style={styles.profileMeta}>
                    <Text style={styles.profileName}>Kak Eva</Text>
                    <Text style={styles.profileTag}>Koordinator Operasional</Text>
                  </View>
                  <View style={styles.whatsappBadgeIcon}>
                    <Ionicons name="logo-whatsapp" size={20} color="#25D366" />
                  </View>
                </View>
                <View style={styles.profileActionDivider} />
                <View style={styles.profileBottomButton}>
                  <Text style={[styles.profileButtonText, { color: "#10B981" }]}>Mulai Obrolan</Text>
                  <Ionicons name="arrow-forward-circle" size={18} color="#10B981" />
                </View>
              </TouchableOpacity>

            </View>
          </View>

          {/* ================= 4. LOKASI WITH VISUAL MAP BACKGROUND ================= */}
          <View style={styles.sectionBlock}>
            <Text style={styles.sectionHeading}>📍 Lokasi</Text>
            <Text style={styles.sectionSubHeading}>Temukan rute tercepat menuju petualangan air tak terlupakan.</Text>
            
            <TouchableOpacity style={styles.aestheticLocationCard} onPress={bukaPeta} activeOpacity={0.95}>
              <View style={styles.mapVisualDecorator}>
                <View style={styles.mapGridLine1} />
                <View style={styles.mapGridLine2} />
                <View style={styles.mapPulseCircle} />
              </View>
              
              <View style={styles.locationMainContentContainer}>
                <View style={styles.locationIconBox}>
                  <Ionicons name="navigate-circle" size={32} color="#0284C7" />
                </View>
                <View style={styles.locationDetailsWrapper}>
                  <Text style={styles.locationCardMainTitle}>Slanik Waterpark Lampung</Text>
                  <Text style={styles.locationCardSubTitle}>
                    Jl. Raya Karang Anyar No.10, Karang Anyar, Kec. Jati Agung, Kabupaten Lampung Selatan, Lampung 35365
                  </Text>
                </View>
                <View style={styles.modernMapActionBtn}>
                  <Text style={styles.mapBtnText}>Petunjuk Arah</Text>
                  <Ionicons name="map" size={16} color="#FFF" style={{ marginLeft: 6 }} />
                </View>
              </View>
            </TouchableOpacity>
          </View>

        </View>
        
        {/* Padding bawah agar tidak tertutup Tab Bar */}
        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#0284C7" },
  
  // ✨ DIUBAH: Menggunakan warna es/air biru muda yang transparan dan sejuk
  scrollView: { flex: 1, backgroundColor: "#E0F2FE" },

  // Hero Banner Stylings
  heroContainer: { width: "100%", height: width > 768 ? 420 : 300, position: "relative", overflow: "hidden" },
  heroImage: { width: "100%", height: "100%", position: "absolute" },
  heroGradientOverlay: { flex: 1, backgroundColor: "rgba(15, 23, 42, 0.45)", justifyContent: "flex-end", paddingBottom: 35 },
  heroContentWrapper: { paddingHorizontal: "8%" },
  heroBadge: { backgroundColor: "#0284C7", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 30, alignSelf: "flex-start", marginBottom: 12 },
  heroBadgeText: { color: "#FFF", fontSize: 11, fontWeight: "800", letterSpacing: 0.8 },
  heroMainTitle: { color: "#FFF", fontSize: width > 768 ? 44 : 32, fontWeight: "900", letterSpacing: -0.5 },
  heroSubTitle: { color: "#F1F5F9", fontSize: width > 768 ? 16 : 14, marginTop: 6, fontWeight: "500", maxWidth: 650, lineHeight: 22 },
  heroStatsRow: { flexDirection: "row", marginTop: 16 },
  statItem: { flexDirection: "row", alignItems: "center", backgroundColor: "rgba(15, 23, 42, 0.6)", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, marginRight: 10 },
  statItemBlank: { flexDirection: "row", alignItems: "center", backgroundColor: "rgba(255, 255, 255, 0.2)", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8 },
  statText: { color: "#FFF", fontSize: 12, fontWeight: "600", marginLeft: 6 },

  // Layout Grid Konten Utama
  fullWebBody: { paddingHorizontal: "8%", paddingTop: 35 },
  sectionBlock: { marginBottom: 35 },
  
  // ✨ DIUBAH: Header section kini berwarna Biru Samudra (Ocean Blue) tua yang kontras tinggi
  sectionHeading: { fontSize: 24, fontWeight: "900", color: "#0369A1", marginBottom: 4, letterSpacing: -0.3 },
  sectionSubHeading: { fontSize: 14, color: "#0F172A", marginBottom: 20, fontWeight: "500", opacity: 0.75 },
  responsiveGridRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: 20 },

  // ====== 🕒 MODERN SCHEDULE CARD ======
  modernScheduleCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 22,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 400,
    position: "relative",
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: "#B9E6FE", // Border tipis biru muda estetik
    shadowColor: "#0284C7",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  accentSideBorder: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 6,
  },
  scheduleIconBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  scheduleInfoTextContainer: { flex: 1 },
  scheduleMainType: { fontSize: 19, fontWeight: "900", color: "#0F172A" },
  scheduleDaysDetail: { fontSize: 13, color: "#334155", marginTop: 2, fontWeight: "600" },
  
  // ✨ DIUBAH: Badge waktu dibuat solid dan tegas agar langsung terbaca mata
  modernTimeBadgeBlue: { backgroundColor: "#0284C7", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 12 },
  timeTextBlue: { color: "#FFFFFF", fontSize: 14, fontWeight: "800" },
  modernTimeBadgeOrange: { backgroundColor: "#F59E0B", paddingHorizontal: 16, paddingVertical: 8, borderRadius: 12 },
  timeTextOrange: { color: "#FFFFFF", fontSize: 14, fontWeight: "800" },

  // ====== 📞 PREMIUM PROFILE CONTACT CARD ======
  premiumProfileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 22,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 400,
    borderWidth: 1.5,
    borderColor: "#B9E6FE",
    shadowColor: "#0284C7",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
  },
  profileHeaderRow: { flexDirection: "row", alignItems: "center" },
  avatarCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  activeDot: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#10B981",
    borderWidth: 2.5,
    borderColor: "#FFFFFF",
  },
  profileMeta: { flex: 1 },
  profileName: { fontSize: 19, fontWeight: "900", color: "#0F172A" },
  profileTag: { fontSize: 13, color: "#475569", marginTop: 2, fontWeight: "600" },
  whatsappBadgeIcon: {
    backgroundColor: "#DCFCE7",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#BBF7D0",
  },
  profileActionDivider: { height: 1.5, backgroundColor: "#E2E8F0", marginTop: 16, marginBottom: 14 },
  profileBottomButton: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  profileButtonText: { fontSize: 14, fontWeight: "800", color: "#0284C7" },

  // ====== 📍 AESTHETIC MAP CARD ======
  aestheticLocationCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#0284C7", // Bingkai peta dipertegas warna tema utama
    position: "relative",
    overflow: "hidden",
    shadowColor: "#0284C7",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 6,
  },
  mapVisualDecorator: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "45%",
    backgroundColor: "#E0F2FE", // Latar belakang aksen peta bernuansa air jernih
    opacity: 0.7,
  },
  mapGridLine1: { position: "absolute", top: "45%", left: 0, right: 0, height: 2.5, backgroundColor: "#BAE6FD", transform: [{ rotate: "12deg" }] },
  mapGridLine2: { position: "absolute", left: "55%", top: 0, bottom: 0, width: 2.5, backgroundColor: "#BAE6FD" },
  mapPulseCircle: {
    position: "absolute",
    right: 60,
    top: "35%",
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "rgba(14, 165, 233, 0.25)",
    borderWidth: 5,
    borderColor: "#0284C7",
  },
  locationMainContentContainer: { flexDirection: "row", alignItems: "center", padding: 26, flexWrap: "wrap", gap: 16, zIndex: 2 },
  locationIconBox: { marginRight: 4 },
  locationDetailsWrapper: { flex: 1, minWidth: 280 },
  locationCardMainTitle: { fontSize: 20, fontWeight: "900", color: "#0F172A" },
  locationCardSubTitle: { fontSize: 13, color: "#1E293B", marginTop: 4, lineHeight: 20, fontWeight: "600" },
  modernMapActionBtn: {
    backgroundColor: "#0284C7",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 14,
    shadowColor: "#0284C7",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 4,
  },
  mapBtnText: { color: "#FFFFFF", fontSize: 14, fontWeight: "900" },
});