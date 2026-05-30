import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DUMMY_TIKET = [
  {
    id: "1",
    kategori: "Weekday",
    hari: "(Senin - Jumat)",
    harga: 40000,
    color: "#2563EB", // Biru Slanik
    badgeBg: "#2563EB",
    benefits: ["Akses ke semua wahana", "Gratis pelampung", "Parkir kendaraan"],
  },
  {
    id: "2",
    kategori: "Weekend",
    hari: "(Sabtu - Minggu & Libur)",
    harga: 50000,
    color: "#EA580C", // Oranye Slanik
    badgeBg: "#F59E0B",
    benefits: ["Akses ke semua wahana", "Gratis pelampung", "Parkir kendaraan"],
  },
];

export default function TiketScreen() {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#0EA5E9" />
      
      <FlatList
        data={DUMMY_TIKET}
        keyExtractor={(item) => item.id}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        
        // ================== HEADER BIRU MELENGKUNG SLANIK ==================
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <View style={styles.blueHeroHeader}>
              <Ionicons name="ticket" size={28} color="#FFFFFF" style={{ marginBottom: 8 }} />
              <Text style={styles.heroTitle}>Tiket &amp; Harga</Text>
              <Text style={styles.heroSubtitle}>Pilih tiket masuk Slanik Waterpark sesuai hari kunjunganmu</Text>
            </View>

            {/* BANNER PROMO KUNING */}
            <View style={styles.promoBanner}>
              <View style={styles.promoBadge}>
                <Text style={styles.promoBadgeText}>PROMO SPECIAL IDUL ADHA</Text>
              </View>
              <Text style={styles.promoTitle}>💥 BUY 1 GET 1 FREE!</Text>
              <Text style={styles.promoDesc}>
                Beli 1 tiket masuk gratis 1 tiket wahana atraksi (Crazy Slide / Dragon River). Anak di bawah 90cm GRATIS masuk!
              </Text>
            </View>
            
            {/* WRAPPER DUA KOLOM UTAMA (ILUSTRASI KIRI + KARTU KANAN) */}
            <Text style={styles.sectionHeading}>Harga Tiket</Text>
            <Text style={styles.sectionSubHeading}>Pilih Tiket Terbaikmu</Text>
            
            <View style={styles.mainLayoutGrid}>
              
              {/* KOLOM KIRI: ILUSTRASI KHAS SLANIKGO */}
              <View style={styles.leftIllustrationCard}>
                <View style={styles.waterOverlay}>
                  <Ionicons name="water" size={64} color="#0EA5E9" />
                  <Text style={styles.illusTitle}>Slanik</Text>
                  <Text style={styles.illusSub}>Waterpark</Text>
                  <View style={styles.waveDecoration} />
                </View>
              </View>

              {/* KOLOM KANAN: TEMPAT KARTU TIKET MENGALIR */}
              <View style={styles.rightTicketsContainer}>
                {DUMMY_TIKET.map((item) => {
                  const isWeekend = item.kategori === "Weekend";
                  return (
                    <View key={item.id} style={styles.ticketCard}>
                      {/* Badge Hari Melengkung Oval Tengah Atas */}
                      <View style={styles.badgeRowCenter}>
                        <View style={[styles.tipeBadge, { backgroundColor: item.badgeBg }]}>
                          <Text style={styles.tipeBadgeText}>{item.kategori}</Text>
                        </View>
                      </View>
                      
                      <Text style={styles.hariSubText}>{item.hari}</Text>

                      {/* Komponen Harga Kebanggaan */}
                      <View style={styles.priceContainer}>
                        <Text style={[styles.currencyLabel, { color: item.color }]}>Rp</Text>
                        <Text style={[styles.priceValue, { color: item.color }]}>
                          {item.harga.toLocaleString("id-ID")}
                        </Text>
                        <Text style={styles.perOrangLabel}>/orang</Text>
                      </View>

                      {/* Checklist Keuntungan */}
                      <View style={styles.benefitBox}>
                        {item.benefits.map((benefit, idx) => (
                          <View key={idx} style={styles.benefitRow}>
                            <Ionicons name="checkmark" size={16} color="#10B981" style={{ marginRight: 6 }} />
                            <Text style={styles.benefitText}>{benefit}</Text>
                          </View>
                        ))}
                      </View>

                      {/* Tombol Pesan Sekarang Oranye / Biru Panjang Semok */}
                      <View style={[styles.actionButton, { backgroundColor: isWeekend ? "#F59E0B" : "#2563EB" }]}>
                        <Text style={styles.actionButtonText}>Pesan Sekarang</Text>
                        <Ionicons name="arrow-forward" size={14} color="#FFF" style={{ marginLeft: 6 }} />
                      </View>
                    </View>
                  );
                })}
              </View>

            </View>
          </View>
        }
        renderItem={null} // Semua di-handle di header agar menyatu sempurna dalam susunan web desktop
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#F4F9FF", // Background kebiruan soft biar menyatu cerah
  },
  scrollContent: {
    width: "100%",
    maxWidth: 1200,
    alignSelf: "center",
    paddingBottom: 140,
  },
  headerContainer: {
    width: "100%",
  },
  blueHeroHeader: {
    backgroundColor: "#0EA5E9",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingVertical: 40,
    alignItems: "center",
    width: "100%",
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  heroSubtitle: {
    fontSize: 13,
    color: "#E0F2FE",
    marginTop: 4,
    textAlign: "center",
  },
  promoBanner: {
    backgroundColor: "#FFFBEB",
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 40,
    borderWidth: 1,
    borderColor: "#FEF3C7",
    marginBottom: 32,
  },
  promoBadge: {
    backgroundColor: "#F59E0B",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  promoBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "800",
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#78350F",
  },
  promoDesc: {
    fontSize: 13,
    color: "#92400E",
    lineHeight: 18,
    marginTop: 4,
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: "700",
    color: "#2563EB",
    marginHorizontal: 40,
    textTransform: "uppercase",
  },
  sectionSubHeading: {
    fontSize: 26,
    fontWeight: "900",
    color: "#1E293B",
    marginHorizontal: 40,
    marginBottom: 24,
    letterSpacing: -0.5,
  },
  
  // CONTAINER LAYOUT 2 KOLOM KEMBAR REFERENSI
  mainLayoutGrid: {
    flexDirection: "row",
    paddingHorizontal: 40,
    gap: 24,
    width: "100%",
  },
  
  // KOLOM KIRI (KASTIL AIR / ILUSTRASI)
  leftIllustrationCard: {
    flex: 1,
    backgroundColor: "#E0F2FE",
    borderRadius: 24,
    overflow: "hidden",
    minHeight: 400,
    borderWidth: 1,
    borderColor: "#BAE6FD",
    justifyContent: "center",
    alignItems: "center",
  },
  waterOverlay: {
    alignItems: "center",
  },
  illusTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#0369A1",
    marginTop: 12,
  },
  illusSub: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0EA5E9",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  waveDecoration: {
    height: 6,
    width: 60,
    backgroundColor: "#0EA5E9",
    borderRadius: 3,
    marginTop: 16,
  },

  // KOLOM KANAN (DAFTAR KARTU TIKET BERBARIS KESAMPING/GRID)
  rightTicketsContainer: {
    flex: 2,
    flexDirection: "row",
    gap: 20,
  },
  ticketCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    justifyContent: "space-between",
    ...Platform.select({
      web: { boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)" },
    }),
  },
  badgeRowCenter: {
    alignItems: "center",
    width: "100%",
    marginBottom: 4,
  },
  tipeBadge: {
    paddingHorizontal: 24,
    paddingVertical: 6,
    borderRadius: 20,
  },
  tipeBadgeText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
  hariSubText: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "500",
    marginBottom: 16,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 16,
  },
  currencyLabel: {
    fontSize: 16,
    fontWeight: "800",
    marginRight: 2,
  },
  priceValue: {
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: -1,
  },
  perOrangLabel: {
    fontSize: 12,
    color: "#64748B",
    marginLeft: 2,
  },
  benefitBox: {
    width: "100%",
    gap: 8,
    marginBottom: 24,
  },
  benefitRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  benefitText: {
    fontSize: 13,
    color: "#475569",
  },
  
  // TOMBOL LEBAR ELEGAN PAS DI BAWAH
  actionButton: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
});