import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  Dimensions, 
  Platform,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function InfoScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      
      {/* 🌴 HERO BANNER: Ukuran dan posisinya dikunci agar pas & HD di web maupun mobile */}
      <View style={styles.heroContainer}>
        <Image 
          source={require("../../../assets/images/slanik_hero.png")} 
          style={styles.heroImage}
          resizeMode="cover"
        />
        {/* Efek Gelap Transparan & Teks di Atas Gambar */}
        <View style={styles.heroGradientOverlay}>
          <View style={styles.heroContentCentering}>
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
                <Text style={styles.statText}>Jati Agung, Lamsel</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* 📦 KONTEN UTAMA: Diturunkan posisinya secara alami tanpa position absolute kaku */}
      <View style={styles.webCenteringWrapper}>
        <View style={styles.contentBodyLayout}>
          
          {/* Bagian Teks Jam Operasional */}
          <View style={styles.sectionBlock}>
            <Text style={styles.sectionHeading}>🕒 Jam Operasional</Text>
            <Text style={styles.sectionSubHeading}>Rencanakan waktu liburan terbaik Anda bersama keluarga</Text>
            
            <View style={styles.responsiveGridRow}>
              {/* Kartu Senin - Jumat */}
              <View style={styles.gridScheduleCard}>
                <Text style={styles.scheduleTitle}>Senin - Jumat</Text>
                <Text style={styles.scheduleTime}>09:00 - 17:00 WIB</Text>
              </View>

              {/* Kartu Weekend */}
              <View style={styles.gridScheduleCard}>
                <Text style={styles.scheduleTitle}>Weekend & Libur</Text>
                <Text style={styles.scheduleTime}>08:00 - 17:30 WIB</Text>
              </View>
            </View>
          </View>

        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: { 
    flex: 1, 
    backgroundColor: "#F8FAFC" 
  },
  
  // Gaya Kontainer Gambar Atas agar HD dan responsif lebar monitor web
  heroContainer: {
    width: "100%",
    height: width > 768 ? 360 : 240, // Tinggi otomatis menyesuaikan jika di web (lebih tinggi) vs mobile
    position: "relative",
    backgroundColor: "#0284C7",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  heroGradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(15, 23, 42, 0.45)", // Gelap transparan agar teks terbaca jelas
    justifyContent: "flex-end",
    paddingBottom: 24,
  },
  heroContentCentering: {
    width: "100%",
    maxWidth: 1100, // Menjaga teks tetap rapi di tengah monitor PC
    alignSelf: "center",
    paddingHorizontal: "6%",
  },
  heroBadge: {
    backgroundColor: "#1E88E5",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  heroBadgeText: { color: "#FFF", fontSize: 10, fontWeight: "800" },
  heroMainTitle: { color: "#FFF", fontSize: width > 768 ? 38 : 26, fontWeight: "900" },
  heroSubTitle: { color: "#F1F5F9", fontSize: width > 768 ? 15 : 12, marginTop: 4, fontWeight: "500", maxWidth: 600 },
  heroStatsRow: { flexDirection: "row", marginTop: 12 },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 10,
  },
  statItemBlank: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  statText: { color: "#FFF", fontSize: 11, fontWeight: "600", marginLeft: 5 },

  // Gaya Kontainer Putih Bawah (Tidak Menabrak Banner Lagi)
  webCenteringWrapper: {
    width: "100%",
    maxWidth: 1100,
    alignSelf: "center",
  },
  contentBodyLayout: {
    paddingHorizontal: "6%",
    paddingTop: 24,
    paddingBottom: 110, // Memberi jarak agar konten bawah tidak tertutup floating menu tab kamu
  },
  sectionBlock: {
    marginBottom: 24,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0F172A",
  },
  sectionSubHeading: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 4,
    marginBottom: 16,
  },
  responsiveGridRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  gridScheduleCard: {
    flex: 1,
    minWidth: 280,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    ...Platform.select({ android: { elevation: 2 } }),
  },
  scheduleTitle: { fontSize: 16, fontWeight: "700", color: "#1E293B" },
  scheduleTime: { fontSize: 14, color: "#1E88E5", fontWeight: "800", marginTop: 6 },
});