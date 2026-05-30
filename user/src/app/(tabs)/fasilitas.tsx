import React from "react";
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
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HERO BANNER */}
        <View style={styles.hero}>
          <MaterialCommunityIcons
            name="office-building"
            size={50}
            color="#FFFFFF"
          />
          <Text style={styles.heroTitle}>Fasilitas Slanik</Text>
          <Text style={styles.heroSubtitle}>
            Kuliner, Toko belanja, dan Pelayanan Umum penunjang liburan Anda
          </Text>
        </View>

        {/* CONTENT LIST */}
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>🏢 Daftar Fasilitas Resmi</Text>

          {FASILITAS_DATA.map((item) => (
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

// Stylesheet untuk menyembuhkan eror merah variabel 'styles'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FF",
  },
  hero: {
    height: 220,
    backgroundColor: "#0EA5E9",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    paddingHorizontal: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#FFFFFF",
    marginTop: 10,
  },
  heroSubtitle: {
    fontSize: 13,
    color: "#E0F2FE",
    marginTop: 8,
    textAlign: "center",
    lineHeight: 18,
  },
  content: {
    padding: 20,
    marginTop: -10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 15,
  },
  card: {
    marginBottom: 20,
    borderRadius: 25,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    elevation: 5,
  },
  imageCard: {
    height: 230,
    justifyContent: "flex-end",
  },
  imageRadius: {
    borderRadius: 25,
  },
  overlay: {
    padding: 18,
    backgroundColor: "rgba(15, 23, 42, 0.55)",
  },
  badge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0EA5E9",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 8,
  },
  badgeText: {
    color: "#FFFFFF",
    marginLeft: 5,
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },
  cardDesc: {
    color: "#E2E8F0",
    fontSize: 13,
    lineHeight: 18,
    marginTop: 5,
  },
  bottomRow: {
    marginTop: 12,
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