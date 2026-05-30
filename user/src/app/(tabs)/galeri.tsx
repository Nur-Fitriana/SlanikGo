import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function GaleriScreen() {
  const galeri = [
    "https://picsum.photos/500/500?1",
    "https://picsum.photos/500/500?2",
    "https://picsum.photos/500/500?3",
    "https://picsum.photos/500/500?4",
    "https://picsum.photos/500/500?5",
    "https://picsum.photos/500/500?6",
  ];

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

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>
            📸 Foto & Aktivitas
          </Text>

          <View style={styles.grid}>
            {galeri.map((item, index) => (
              <Image
                key={index}
                source={{ uri: item }}
                style={styles.image}
              />
            ))}
          </View>
        </View>
      </ScrollView>
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

  image: {
    width: "48%",
    height: 150,
    borderRadius: 18,
    marginBottom: 12,
  },
});