import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

// Data Valid & Akurat Berdasarkan Menu Dropdown Website Resmi Slanik Waterpark
const DATA_GALERI = [
  {
    id: "1",
    title: "Krakatau Wave",
    category: "Wahana",
    desc: "Kolam ombak buatan yang seru dan menantang, memberikan sensasi berenang seperti di pantai lepas.",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "2",
    title: "Dragon River",
    category: "Wahana",
    desc: "Kolam arus santai bertema gua naga yang eksotis. Sempurna untuk healing menggunakan ban pelampung.",
    image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    title: "Fast 2 Furious",
    category: "Wahana",
    desc: "Seluncuran spiral ganda yang tinggi dan ekstrem untuk menguji adrenalin kamu bersama sahabat.",
    image: "https://images.unsplash.com/photo-1562591176-a24128f090b8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "4",
    title: "Slanik Pujasera & Cafe",
    category: "Fasilitas",
    desc: "Menyediakan aneka kuliner lezat di Slanik Pujasera, Snack Bar, Slanik Cafe, hingga Bagor Cafe.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "5",
    title: "Slanik Shop & Souvenir",
    category: "Fasilitas",
    desc: "Pusat perbelanjaan perlengkapan renang dan toko merchandise resmi untuk oleh-oleh khas Slanik.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "6",
    title: "Layanan Service & Gazebo",
    category: "Fasilitas",
    desc: "Fasilitas kenyamanan lengkap: Musola, Loker, Gazebo, Pendopo, GSG, Free WiFi, dan keamanan CCTV 24 Jam.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
  },
];

const KATEGORI = ["Semua", "Wahana", "Fasilitas"];

export default function GaleriScreen() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [fotoDetail, setFotoDetail] = useState<typeof DATA_GALERI[0] | null>(null);

  // Filter data berdasarkan kategori yang dipilih
  const dataTersaring = kategoriAktif === "Semua"
    ? DATA_GALERI
    : DATA_GALERI.filter(item => item.category === kategoriAktif);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="images" size={34} color="#FFF" />
          <Text style={styles.headerTitle}>Galeri Slanik</Text>
          <Text style={styles.headerSubtitle}>
            Dokumentasi wahana dan suasana wisata
          </Text>
        </View>

        {/* Filter Kategori Tabs (Chips) */}
        <View style={styles.filterContainer}>
          {KATEGORI.map((kat) => (
            <TouchableOpacity
              key={kat}
              style={[styles.chip, kategoriAktif === kat && styles.chipAktif]}
              onPress={() => setKategoriAktif(kat)}
            >
              <Text style={[styles.chipText, kategoriAktif === kat && styles.chipTextAktif]}>
                {kat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>
            📸 {kategoriAktif} Slanik
          </Text>

          <View style={styles.grid}>
            {dataTersaring.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.cardImage}
                activeOpacity={0.9}
                onPress={() => setFotoDetail(item)}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
                  <Text style={styles.cardTag}>{item.category}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Lightbox Pop-up Modal Detail Foto */}
      <Modal visible={fotoDetail !== null} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          {fotoDetail && (
            <View style={styles.modalContent}>
              <TouchableOpacity 
                style={styles.closeButton} 
                onPress={() => setFotoDetail(null)}
              >
                <Ionicons name="close-circle" size={32} color="#0EA5E9" />
              </TouchableOpacity>

              <Image source={{ uri: fotoDetail.image }} style={styles.modalImage} />
              
              <View style={styles.modalTextContainer}>
                <Text style={styles.modalTag}>{fotoDetail.category}</Text>
                <Text style={styles.modalTitle}>{fotoDetail.title}</Text>
                <Text style={styles.modalDesc}>{fotoDetail.desc}</Text>
              </View>
            </View>
          )}
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  header: {
    backgroundColor: "#0EA5E9",
    paddingVertical: 40,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "800",
    marginTop: 10,
  },
  headerSubtitle: {
    color: "#E0F2FE",
    marginTop: 5,
    fontSize: 13,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 10,
  },
  chip: {
    backgroundColor: "#FFF",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  chipAktif: {
    backgroundColor: "#0EA5E9",
    borderColor: "#0EA5E9",
  },
  chipText: {
    color: "#64748B",
    fontWeight: "600",
    fontSize: 13,
  },
  chipTextAktif: {
    color: "#FFF",
    fontWeight: "700",
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
    color: "#0F172A",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardImage: {
    width: "48%",
    backgroundColor: "#FFF",
    borderRadius: 18,
    marginBottom: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  cardInfo: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E293B",
  },
  cardTag: {
    fontSize: 11,
    color: "#0EA5E9",
    fontWeight: "600",
    marginTop: 2,
  },
  // Style Modal Lightbox
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    width: "100%",
    maxWidth: 400,
    overflow: "hidden",
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 10,
    backgroundColor: "#FFF",
    borderRadius: 16,
  },
  modalImage: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
  },
  modalTextContainer: {
    padding: 20,
  },
  modalTag: {
    color: "#0EA5E9",
    fontWeight: "700",
    fontSize: 12,
    marginBottom: 4,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 8,
  },
  modalDesc: {
    fontSize: 13,
    color: "#475569",
    lineHeight: 18,
  },
});