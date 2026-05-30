import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
// Membuat tampilan grid 2 kolom yang pas dengan layar
const CARD_WIDTH = (width - 50) / 2; 

export const GALERI_DATA = [
  { 
    id: "1", 
    url: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=600", 
    caption: "Keseruan rombongan keluarga besar saat menjajal kolam arus Dragon River akhir pekan ini! 🌊👨‍👩‍👧‍👦", 
    order: 1 
  },
  { 
    id: "2", 
    url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=600", 
    caption: "Ceria bersama adik-adik kecil di wahana Octopus Kids Fun. Aman dan penuh tawa! 🐙✨", 
    order: 2 
  },
  { 
    id: "3", 
    url: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=600", 
    caption: "Aksi berani pengunjung remaja menguji nyali di seluncuran ekstrem Fast2Furious! 🏄‍♂️🔥", 
    order: 3 
  },
  { 
    id: "4", 
    url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=600", 
    caption: "Senyum bahagia abis seharian keliling spot foto ikonik Slanik Waterpark. Sampai jumpa di kunjungan berikutnya! 📸❤️", 
    order: 4 
  },
];

export default function GaleriScreen() {
  // Mengurutkan data berdasarkan 'order' (Fitur utama dari CMS temanmu)
  const dataTerurut = [...GALERI_DATA].sort((a, b) => a.order - b.order);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <MaterialCommunityIcons name="image-multiple" size={28} color="#FFFFFF" />
          <Text style={styles.headerTitle}>Spotlight Slanik</Text>
        </View>
        <Text style={styles.headerSubtitle}>
          Foto dokumentasi suasana dan keseruan wahana terbaru di Slanik Waterpark.
        </Text>
      </View>

      {/* GRID FOTO */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollArea}>
        <View style={styles.grid}>
          {dataTerurut.map((photo) => (
            <TouchableOpacity key={photo.id} activeOpacity={0.9} style={styles.card}>
              <View style={styles.imageWrapper}>
                <Image source={{ uri: photo.url }} style={styles.image} />
                
                {/* Badge Nomor Urutan sesuai CMS */}
                <View style={styles.orderBadge}>
                  <Text style={styles.orderBadgeText}>#{photo.order}</Text>
                </View>
              </View>
              
              <View style={styles.cardInfo}>
                <Text style={styles.captionText} numberOfLines={2}>
                  {photo.caption}
                </Text>
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
    paddingTop: 55,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 4,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#FFFFFF",
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#E0F2FE",
    marginTop: 6,
    lineHeight: 18,
  },
  scrollArea: {
    padding: 18,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 18,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: 150,
    backgroundColor: "#E2E8F0",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  orderBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(15, 23, 42, 0.65)",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  orderBadgeText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
  },
  cardInfo: {
    padding: 12,
    justifyContent: "center",
  },
  captionText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E293B",
    lineHeight: 17,
  },
});