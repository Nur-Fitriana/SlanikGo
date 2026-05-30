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
    kategori: "Tiket Anak",
    tipe: "Weekday",
    hari: "(Senin - Jumat)",
    harga: 35000,
    ket: "Tinggi 90cm - 11 Tahun",
    color: "#2563EB", 
    benefits: ["Wahana anak lengkap", "Gratis ban pelampung"],
  },
  {
    id: "2",
    kategori: "Tiket Dewasa",
    tipe: "Weekday",
    hari: "(Senin - Jumat)",
    harga: 40000,
    ket: "Usia 12 Tahun ke atas",
    color: "#2563EB",
    benefits: ["Semua wahana ekstrem", "Akses gazebo umum"],
  },
  {
    id: "3",
    kategori: "Tiket Anak",
    tipe: "Weekend",
    hari: "(Sabtu - Minggu & Libur)",
    harga: 40000,
    ket: "Tinggi 90cm - 11 Tahun",
    color: "#EA580C",
    benefits: ["Wahana anak lengkap", "Termasuk live event"],
  },
  {
    id: "4",
    kategori: "Tiket Dewasa",
    tipe: "Weekend",
    hari: "(Sabtu - Minggu & Libur)",
    harga: 45000,
    ket: "Usia 12 Tahun ke atas",
    color: "#EA580C",
    benefits: ["Semua wahana ekstrem", "Termasuk live event"],
  },
  {
    id: "5",
    kategori: "Sewa Ban Singel/Double",
    tipe: "Fasilitas",
    hari: "(Durasi Sepuasnya)",
    harga: 15000,
    ket: "Penyewaan ban seharian",
    color: "#059669",
    benefits: ["Bisa tukar ukuran ban", "Bebas antrean ulang"],
  },
];

export default function TiketScreen() {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#0EA5E9" />
      
      <FlatList
        data={[]} 
        keyExtractor={(_, index) => index.toString()}
        renderItem={null}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            {/* ================== HEADER BIRU MELENGKUNG ================== */}
            <View style={styles.blueHeroHeader}>
              <Ionicons name="ticket" size={28} color="#FFFFFF" style={{ marginBottom: 8 }} />
              <Text style={styles.heroTitle}>Harga Tiket</Text>
              <Text style={styles.heroSubtitle}>Pilih Tiket Terbaikmu &amp; Nikmati Keseruan Wahana</Text>
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
            
            <Text style={styles.sectionHeading}>Pilihan Tiket Tersedia</Text>
            
            {/* ================== LAYOUT UTAMA 2 KOLOM WEB ================== */}
            <View style={styles.mainLayoutGrid}>
              
              {/* KOLOM KIRI: BANNER UNTUK JANGKAR VISUAL DESKTOP */}
              <View style={styles.leftIllustrationCard}>
                <Ionicons name="water" size={64} color="#0EA5E9" />
                <Text style={styles.illusTitle}>Slanik</Text>
                <Text style={styles.illusSub}>Waterpark</Text>
                <View style={styles.waveDecoration} />
              </View>

              {/* KOLOM KANAN: GRID LAYOUT UNTUK TIKET-TIKET */}
              <View style={styles.rightTicketsGrid}>
                {DUMMY_TIKET.map((item) => {
                  const isWeekend = item.tipe === "Weekend";
                  const isFasilitas = item.tipe === "Fasilitas";
                  
                  const badgeBg = isWeekend ? "#FEF3C7" : isFasilitas ? "#D1FAE5" : "#DBEAFE";
                  const textColor = isWeekend ? "#D97706" : isFasilitas ? "#059669" : "#2563EB";
                  const buttonBg = isWeekend ? "#F59E0B" : isFasilitas ? "#059669" : "#2563EB";

                  return (
                    <View 
                      key={item.id} 
                      style={[
                        styles.ticketCard, 
                        isFasilitas && styles.fullWidthRow
                      ]}
                    >
                      {/* Atas Kartu */}
                      <View style={styles.cardHeaderRow}>
                        <View style={[styles.tipeBadge, { backgroundColor: badgeBg }]}>
                          <Text style={[styles.tipeBadgeText, { color: textColor }]}>{item.tipe}</Text>
                        </View>
                        <Text style={styles.hariSubText}>{item.hari}</Text>
                      </View>
                      
                      {/* Kategori Judul */}
                      <Text style={styles.categoryTitle}>{item.kategori}</Text>
                      <Text style={styles.categoryDesc}>{item.ket}</Text>

                      {/* Komponen Harga - FIXED KURUNG SIKU */}
                      <View style={styles.priceContainer}>
                        <Text style={[styles.currencyLabel, { color: item.color }]}>Rp</Text>
                        <Text style={[styles.priceValue, { color: item.color }]}>
                          {item.harga.toLocaleString("id-ID")}
                        </Text>
                        <Text style={styles.perOrangLabel}>/orang</Text>
                      </View>

                      <View style={styles.dividerLine} />

                      {/* Checklist Keuntungan */}
                      <View style={styles.benefitBox}>
                        {item.benefits.map((benefit, idx) => (
                          <View key={idx} style={styles.benefitRow}>
                            <Ionicons name="checkmark-circle" size={16} color="#10B981" style={{ marginRight: 6 }} />
                            <Text style={styles.benefitText}>{benefit}</Text>
                          </View>
                        ))}
                      </View>

                      {/* Tombol Aksi */}
                      <View style={[styles.actionButton, { backgroundColor: buttonBg }]}>
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
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#F4F9FF",
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
    fontSize: 22,
    fontWeight: "900",
    color: "#1E293B",
    marginHorizontal: 40,
    marginBottom: 24,
    letterSpacing: -0.5,
  },
  mainLayoutGrid: {
    flexDirection: "row",
    paddingHorizontal: 40,
    gap: 28,
    width: "100%",
  },
  leftIllustrationCard: {
    width: 240, 
    backgroundColor: "#E0F2FE",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#BAE6FD",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  illusTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#0369A1",
    marginTop: 12,
  },
  illusSub: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0EA5E9",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  waveDecoration: {
    height: 5,
    width: 50,
    backgroundColor: "#0EA5E9",
    borderRadius: 3,
    marginTop: 16,
  },
  rightTicketsGrid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap", 
    gap: 20,
  },
  ticketCard: {
    width: "48%", // Menggunakan persentase aman biar jalan lancar di browser web & emulator android sekaligus
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    ...Platform.select({
      web: { boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.03)" },
    }),
  },
  fullWidthRow: {
    width: "100%", 
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  tipeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 30,
  },
  tipeBadgeText: {
    fontSize: 11,
    fontWeight: "800",
  },
  hariSubText: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "500",
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#0F172A",
    letterSpacing: -0.5,
  },
  categoryDesc: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 2,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 14,
  },
  currencyLabel: {
    fontSize: 15,
    fontWeight: "800",
    marginRight: 2,
  },
  priceValue: {
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: -0.5,
  },
  perOrangLabel: {
    fontSize: 12,
    color: "#64748B",
    marginLeft: 2,
  },
  dividerLine: {
    height: 1,
    backgroundColor: "#F1F5F9",
    marginVertical: 16,
  },
  benefitBox: {
    gap: 8,
    marginBottom: 20,
  },
  benefitRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  benefitText: {
    fontSize: 13,
    color: "#475569",
  },
  actionButton: {
    width: "100%",
    paddingVertical: 11,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
  },
  actionButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
});