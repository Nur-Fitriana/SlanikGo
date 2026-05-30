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

const WAHANA_DATA = [
  {
    id: 1,
    nama: "Dragon River",
    kategori: "Wahana Air",
    image:
      "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=1200",
    desc: "Menyusuri sungai arus sepanjang area waterpark menggunakan ban.",
  },
  {
    id: 2,
    nama: "Fast2Furious",
    kategori: "Extreme Slide",
    image:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1200",
    desc: "Seluncuran ekstrem berkecepatan tinggi untuk pecinta adrenalin.",
  },
  {
    id: 3,
    nama: "Crazy Slide",
    kategori: "Slide",
    image:
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=1200",
    desc: "Lintasan seluncur berkelok yang memberikan sensasi seru.",
  },
  {
    id: 4,
    nama: "Krakatau Wave",
    kategori: "Kolam Ombak",
    image:
      "https://images.unsplash.com/photo-1576013551627-0b5b0d0c2f4d?q=80&w=1200",
    desc: "Kolam ombak terbesar dengan suasana pantai tropis.",
  },
  {
    id: 5,
    nama: "Olympic Pool",
    kategori: "Kolam Renang",
    image:
      "https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=1200",
    desc: "Kolam renang luas untuk olahraga dan aktivitas keluarga.",
  },
  {
    id: 6,
    nama: "Octopus Kids Fun",
    kategori: "Kids Zone",
    image:
      "https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=1200",
    desc: "Area bermain air khusus anak dengan berbagai permainan seru.",
  },
  {
    id: 7,
    nama: "Kereta Gantung",
    kategori: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
    desc: "Menikmati pemandangan Slanik dari atas menggunakan kereta gantung.",
  },
  {
    id: 8,
    nama: "Sepeda Layang",
    kategori: "Adventure",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200",
    desc: "Wahana unik yang menguji keseimbangan di ketinggian.",
  },
];

export default function FasilitasScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HERO */}
        <View style={styles.hero}>
          <MaterialCommunityIcons
            name="water"
            size={50}
            color="#FFFFFF"
          />

          <Text style={styles.heroTitle}>
            Jelajahi Slanik
          </Text>

          <Text style={styles.heroSubtitle}>
            Temukan keseruan di setiap sudut waterpark
          </Text>
        </View>

        {/* CONTENT */}
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>
            🎢 Wahana Favorit
          </Text>

          {WAHANA_DATA.map((item) => (
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
                  <View style={styles.badge}>
                    <MaterialCommunityIcons
                      name="water"
                      size={14}
                      color="#FFFFFF"
                    />

                    <Text style={styles.badgeText}>
                      {item.kategori}
                    </Text>
                  </View>

                  <Text style={styles.cardTitle}>
                    {item.nama}
                  </Text>

                  <Text style={styles.cardDesc}>
                    {item.desc}
                  </Text>

                  <View style={styles.bottomRow}>
                    <View style={styles.rating}>
                      <MaterialCommunityIcons
                        name="star"
                        size={15}
                        color="#FFD700"
                      />

                      <Text style={styles.ratingText}>
                        4.9
                      </Text>
                    </View>

                    <MaterialCommunityIcons
                      name="arrow-right-circle"
                      size={34}
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
    fontSize: 14,
    color: "#E0F2FE",
    marginTop: 8,
    textAlign: "center",
  },

  content: {
    padding: 20,
    marginTop: -20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 15,
  },

  card: {
    marginBottom: 20,
    borderRadius: 25,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    elevation: 8,
  },

  imageCard: {
    height: 260,
    justifyContent: "flex-end",
  },

  imageRadius: {
    borderRadius: 25,
  },

  overlay: {
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  badge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.25)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 12,
  },

  badgeText: {
    color: "#FFFFFF",
    marginLeft: 5,
    fontSize: 12,
    fontWeight: "600",
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
  },

  cardDesc: {
    color: "#E2E8F0",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 6,
  },

  bottomRow: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  rating: {
    flexDirection: "row",
    alignItems: "center",
  },

  ratingText: {
    color: "#FFFFFF",
    marginLeft: 5,
    fontWeight: "700",
  },
});