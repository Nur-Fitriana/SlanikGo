import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform, View, Image, StyleSheet, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default function TabLayout() {
  return (
    // Pembungkus utama agar foto berada di atas dan menu navigasi berada di bawahnya
    <View style={styles.mainContainer}>
      
      {/* ================= 1. HERO BANNER DI ATAS NAVIGASI ================= */}
      <View style={styles.heroContainer}>
        <Image 
          source={require("../../../assets/images/slanik_hero.png")} 
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.heroGradientOverlay}>
          <View style={styles.heroContentCentering}>
            <View style={styles.heroContentWrapper}>
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
      </View>

      {/* ================= 2. SISTEM TABS NAVIGASI ASLI (TIDAK DIUBAH) ================= */}
      <View style={styles.tabsWrapper}>
        <Tabs
          screenOptions={{
            // 🌟 KUNCI UTAMA: Menghilangkan total header/navbar bawaan di bagian atas layar
            headerShown: false, 

            // 🌟 Rombak Total Tampilan Menu Bawah (Floating Tab Bar)
            tabBarStyle: {
              backgroundColor: '#ffffff',
              position: 'absolute',
              bottom: 16,  // Bikin melayang (floating) dari bawah layar
              left: 16,    // Kasih jarak kiri
              right: 16,   // Kasih jarak kanan
              height: 64,  // Tinggi yang pas dan proporsional
              borderRadius: 24, // Sudut melengkung penuh yang modern dan halus
              paddingBottom: Platform.OS === 'ios' ? 0 : 4,
              
              // Efek Bayangan Lembut Premium (Soft Shadow Box)
              ...Platform.select({
                ios: {
                  shadowColor: '#0F172A',
                  shadowOffset: { width: 0, height: 8 },
                  shadowOpacity: 0.12,
                  shadowRadius: 16,
                },
                android: {
                  elevation: 8,
                },
              }),
              borderTopWidth: 0, // Hapus garis batas tipis yang kaku di bagian atas
            },

            // Warna Icon & Teks saat Aktif vs Tidak Aktif
            tabBarActiveTintColor: '#1E88E5',
            tabBarInactiveTintColor: '#9CA3AF',
            
            // Desain Label Teks Menu
            tabBarLabelStyle: {
              fontSize: 11,
              fontWeight: '700',
              marginBottom: 4,
            },
            tabBarIconStyle: {
              marginTop: 4,
            }
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Beranda',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "home" : "home-outline"} size={22} color={color} />
              ),
            }}
          />

          <Tabs.Screen
            name="fasilitas"
            options={{
              title: 'Fasilitas',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "water" : "water-outline"} size={22} color={color} />
              ),
            }}
          />

          <Tabs.Screen
            name="tiket"
            options={{
              title: 'Tiket',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "ticket" : "ticket-outline"} size={22} color={color} />
              ),
            }}
          />

          <Tabs.Screen
            name="galeri"
            options={{
              title: 'Galeri',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "images" : "images-outline"} size={22} color={color} />
              ),
            }}
          />

          <Tabs.Screen
            name="info"
            options={{
              title: 'Info',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons
                  name={focused ? "information-circle" : "information-circle-outline"}
                  size={23}
                  color={color}
                />
              ),
            }}
          />
        </Tabs>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  tabsWrapper: {
    flex: 1,
  },
  // Desain banner atas agar responsive & HD di Web/Mobile
  heroContainer: {
    width: "100%",
    height: width > 768 ? 320 : 220, // Tinggi disesuaikan agar proporsional sebagai header global
    position: "relative",
    backgroundColor: "#0284C7",
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  heroGradientOverlay: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.4)", 
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  heroContentCentering: {
    width: "100%",
    maxWidth: width > 1024 ? 1100 : "100%",
    alignSelf: "center",
  },
  heroContentWrapper: {
    paddingHorizontal: "6%",
  },
  heroBadge: {
    backgroundColor: "#0284C7",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 6,
  },
  heroBadgeText: { color: "#FFF", fontSize: 9, fontWeight: "800", letterSpacing: 0.5 },
  heroMainTitle: { color: "#FFF", fontSize: width > 768 ? 32 : 24, fontWeight: "900", letterSpacing: -0.5 },
  heroSubTitle: { color: "#F1F5F9", fontSize: width > 768 ? 14 : 12, marginTop: 4, fontWeight: "500", maxWidth: 650, lineHeight: 18 },
  heroStatsRow: { flexDirection: "row", marginTop: 10 },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
  },
  statItemBlank: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
  },
  statText: { color: "#FFF", fontSize: 10, fontWeight: "600", marginLeft: 4 },
});