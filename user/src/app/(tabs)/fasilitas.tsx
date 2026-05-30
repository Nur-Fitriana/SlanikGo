import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// Import data lokal buatan kita
import { FASILITAS_DATA } from "../../constants/slanikData";

export default function FasilitasScreen() {
  // State untuk menyimpan kategori yang sedang aktif dipilih user
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  // Daftar kategori filter sesuai dengan kelompok data di slanikData.ts
  const daftarKategori = ["Semua", "Food and Drink", "Shop", "Service"];

  // Menyaring data fasilitas secara real-time berdasarkan pilihan chip
  const dataTersaring =
    kategoriAktif === "Semua"
      ? FASILITAS_DATA
      : FASILITAS_DATA.filter((item) => item.kategori === kategoriAktif);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* FIXED HERO BANNER (Tidak ikut ter-scroll agar struktur tetap kokoh) */}
      <View style={styles.hero}>
        <MaterialCommunityIcons
          name="office-building"
          size={44}
          color="#FFFFFF"
        />
        <Text style={styles.heroTitle}>Fasilitas Slanik</Text>
        <Text style={styles.heroSubtitle}>
          Kuliner, Toko belanja, dan Pelayanan Umum penunjang liburan Anda
        </Text>
      </View>

      {/* HORIZONTAL FILTER CHIPS */}
      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {daftarKategori.map((kategori) => (
            <TouchableOpacity
              key={kategori}
              onPress={() => setKategoriAktif(kategori)}
              style={[
                styles.chip,
                kategoriAktif === kategori && styles.chipActive,
              ]}
            >
              <Text
                style={[
                  styles.chipText,
                  kategoriAktif === kategori && styles.chipTextActive,
                ]}
              >
                {kategori === "Food and Drink" ? "🍔 Kuliner" : 
                 kategori === "Shop" ? "🛍️ Toko" : 
                 kategori === "Service" ? "🛠️ Layanan" : "✨ Semua"}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* SCROLLABLE CONTENT LIST */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>
            🏢 {kategoriAktif === "Semua" ? "Daftar Fasilitas Resmi" : `Fasilitas: ${kategoriAktif}`}
          </Text>

          {dataTersaring.map((item) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.9}
              style={styles.card}
            >
              <ImageBackground
                source={{ uri: item.image }}
                style={styles.imageCard}
                imageStyle={styles.imageRadius}
              >
                <View style={styles.overlay}>
                  {/* Badge Kategori Dinamis */}
                  <View style={styles.badge}>
                    <MaterialCommunityIcons
                      name={item.icon as any}
                      size={14}
                      color="#FFFFFF"
                    />
                    <Text style={styles.badgeText}>{item.kategori}</Text>
                  </View>

                  <Text style={styles.cardTitle}>{item.nama}</Text>
                  <Text style={styles.cardDesc}>{item.desc}</Text>

                  <View style={styles.bottomRow}>
                    <View style={styles.statusRow}>
                      <MaterialCommunityIcons
                        name="check-circle"
                        size={16}
                        color="#FFD700"
                      />
                      <Text style={styles.statusText}>Tersedia</Text>
                    </View>
                    <MaterialCommunityIcons
                      name="arrow-right-circle"
                      size={28}
                      color="#FFFFFF"
                    />
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FF",
  },
  hero: {
    height: 190,
    backgroundColor: "#0EA5E9",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#FFFFFF",
    marginTop: 6,
  },
  heroSubtitle: {
    fontSize: 12,
    color: "#E0F2FE",
    marginTop: 6,
    textAlign: "center",
    lineHeight: 16,
  },
  filterContainer: {
    paddingVertical: 12,
    paddingLeft: 20,
    backgroundColor: "#F5F9FF",
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    elevation: 2,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  chipActive: {
    backgroundColor: "#0EA5E9",
    borderColor: "#0EA5E9",
  },
  chipText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#64748B",
  },
  chipTextActive: {
    color: "#FFFFFF",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  content: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 15,
    textTransform: "capitalize"
  },
  card: {
    marginBottom: 20,
    borderRadius: 25,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    elevation: 4,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },
  imageCard: {
    height: 220,
    justifyContent: "flex-end",
  },
  imageRadius: {
    borderRadius: 25,
  },
  overlay: {
    padding: 16,
    backgroundColor: "rgba(15, 23, 42, 0.5)",
  },
  badge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0EA5E9",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 6,
  },
  badgeText: {
    color: "#FFFFFF",
    marginLeft: 5,
    fontSize: 10,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
  },
  cardDesc: {
    color: "#E2E8F0",
    fontSize: 12,
    lineHeight: 16,
    marginTop: 4,
  },
  bottomRow: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    color: "#FFFFFF",
    marginLeft: 5,
    fontWeight: "600",
    fontSize: 12,
  },
});