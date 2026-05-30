import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// Mengambil data konstanta yang sudah kita buat sebelumnya
import { GALERI_DATA } from "../../constants/slanikData";

const { width } = Dimensions.get("window");
const COLUMN_WIDTH = (width - 50) / 2; // Mengatur grid 2 kolom yang rapi

export default function GaleriScreen() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  // Daftar kategori filter berdasarkan dropdown asli Slanik
  const daftarKategori = [
    "Semua",
    "Wahana Air",
    "Extreme Slide",
    "Adventure",
    "Spot Foto",
  ];

  // Menyaring data berdasarkan chip kategori yang ditekan user
  const dataTersaring =
    kategoriAktif === "Semua"
      ? GALERI_DATA
      : GALERI_DATA.filter((item) => item.kategori === kategoriAktif);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* HEADER UTAMA */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Galeri Wahana</Text>
        <Text style={styles.headerSubtitle}>
          Jelajahi 14 wahana seru dan spot ikonik di Slanik Waterpark
        </Text>
      </View>

      {/* HORIZONTAL FILTER TABS (CHIPS) */}
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
                {kategori}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* GRID MASONRY LAYOUT */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.gridContainer}>
        <View style={styles.gridRow}>
          {dataTersaring.map((item) => (
            <TouchableOpacity key={item.id} activeOpacity={0.9} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardKategori}>{item.kategori}</Text>
                <Text style={styles.cardNama} numberOfLines={1}>
                  {item.nama}
                </Text>
                <Text style={styles.cardDesc} numberOfLines={2}>
                  {item.desc}
                </Text>
                
                <View style={styles.cardFooter}>
                  <Text style={styles.LiatDetail}>Lihat Detail</Text>
                  <MaterialCommunityIcons name="arrow-right" size={12} color="#0EA5E9" />
                </View>
              </View>
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
    backgroundColor: "#F8FAFC",
  },
  header: {
    backgroundColor: "#0EA5E9",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "900",
    color: "#FFFFFF",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#E0F2FE",
    marginTop: 4,
  },
  filterContainer: {
    paddingVertical: 15,
    paddingLeft: 20,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    elevation: 1,
  },
  chipActive: {
    backgroundColor: "#0EA5E9",
    borderColor: "#0EA5E9",
  },
  chipText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#64748B",
  },
  chipTextActive: {
    color: "#FFFFFF",
  },
  gridContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  gridRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: COLUMN_WIDTH,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  cardImage: {
    width: "100%",
    height: 120,
    backgroundColor: "#CBD5E1",
  },
  cardContent: {
    padding: 12,
  },
  cardKategori: {
    fontSize: 9,
    fontWeight: "700",
    color: "#0EA5E9",
    textTransform: "uppercase",
    marginBottom: 2,
  },
  cardNama: {
    fontSize: 14,
    fontWeight: "800",
    color: "#1E293B",
  },
  cardDesc: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 4,
    lineHeight: 15,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "spaceBetween",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
    paddingTop: 6,
  },
  LiatDetail: {
    fontSize: 11,
    fontWeight: "700",
    color: "#0EA5E9",
    marginRight: 4,
  },
});