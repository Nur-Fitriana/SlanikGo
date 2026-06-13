import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform, View, Image, StyleSheet, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default function TabLayout() {
  const isWeb = width > 768;
  const bannerHeight = isWeb ? 360 : 240;

  return (
    <View style={styles.mainContainer}>
      
      {/* 🌴 1. HERO BANNER FIX (Menggunakan View Statis agar Gambar Pasti Muncul di Web & HP) */}
      <View style={[styles.heroContainer, { height: bannerHeight }]}>
        <Image 
          source={require("../../../assets/images/slanik_hero.png")} 
          style={styles.heroImage}
          resizeMode="cover"
        />
        
        <View style={styles.ambientOverlay}>
          <View style={styles.heroContentCentering}>
            <View style={styles.premiumBadge}>
              <Text style={styles.premiumBadgeText}>THE LARGEST WATERPARK IN LAMPUNG</Text>
            </View>
            <Text style={styles.brandTitle}>Slanik Waterpark</Text>
            <Text style={styles.brandSubtitle}>
              Petualangan air spektakuler dan destinasi liburan keluarga terfavorit di Lampung.
            </Text>

            <View style={styles.metaRow}>
              <View style={styles.metaPill}>
                <Ionicons name="star" size={12} color="#FBBF24" />
                <Text style={styles.metaText}>4.9 Top Rated</Text>
              </View>
              <View style={styles.metaPill}>
                <Ionicons name="location" size={12} color="#38BDF8" />
                <Text style={styles.metaText}>Jati Agung, Lamsel</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Lengkungan halus transisi bawah */}
        <View style={styles.curvedMask} />
      </View>

      {/* 🌟 2. KONTEN TABS NAVIGASI (Bisa di-scroll lancar & rapi) */}
      <View style={styles.tabsContentBinder}>
        <Tabs
          screenOptions={{
            // Header bawaan dimatikan total karena kita sudah pakai Banner statis di atas
            headerShown: false, 

            // Layout Tab Menu Bawah yang Presisi & Mewah
            tabBarStyle: {
              backgroundColor: '#FFFFFF',
              position: 'absolute',
              bottom: isWeb ? 24 : 16,  
              left: isWeb ? '25%' : 16,    
              right: isWeb ? '25%' : 16,   
              height: 66,  
              borderRadius: 22, 
              paddingBottom: Platform.OS === 'ios' ? 0 : 8,
              paddingTop: 8,
              borderWidth: 0,
              
              ...Platform.select({
                ios: {
                  shadowColor: '#1E293B',
                  shadowOffset: { width: 0, height: 10 },
                  shadowOpacity: 0.08,
                  shadowRadius: 20,
                },
                android: {
                  elevation: 10,
                },
                web: {
                  boxShadow: '0px 12px 32px rgba(30, 41, 59, 0.12)',
                }
              }),
            },

            tabBarActiveTintColor: '#0284C7',
            tabBarInactiveTintColor: '#94A3B8',
            
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '700',
              marginTop: 4,
              letterSpacing: 0.2,
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: 'Beranda',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "grid" : "grid-outline"} size={21} color={color} />
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
                <Ionicons name={focused ? "ticket" : "ticket-outline"} size={21} color={color} />
              ),
            }}
          />

          <Tabs.Screen
            name="galeri"
            options={{
              title: 'Galeri',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "images" : "images-outline"} size={21} color={color} />
              ),
            }}
          />

          <Tabs.Screen
            name="info"
            options={{
              title: 'Info',
              tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? "information-circle" : "information-circle-outline"} size={22} color={color} />
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
  heroContainer: {
    width: "100%",
    backgroundColor: "#0284C7",
    position: 'relative',
  },
  heroImage: {
    width: "100%",
    height: "100%",
    position: 'absolute',
  },
  ambientOverlay: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.45)", 
    justifyContent: "flex-end",
    paddingBottom: 45,
  },
  heroContentCentering: {
    width: "100%",
    maxWidth: 1140, 
    alignSelf: "center",
    paddingHorizontal: "6%",
  },
  premiumBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 30,
    alignSelf: "flex-start",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  premiumBadgeText: { 
    color: "#FFF", 
    fontSize: 9, 
    fontWeight: "800", 
    letterSpacing: 1 
  },
  brandTitle: { 
    color: "#FFF", 
    fontSize: width > 768 ? 44 : 28, 
    fontWeight: "900", 
    letterSpacing: -0.5,
  },
  brandSubtitle: { 
    color: "#F1F5F9", 
    fontSize: width > 768 ? 15 : 12, 
    marginTop: 6, 
    fontWeight: "500", 
    maxWidth: 550, 
    lineHeight: width > 768 ? 22 : 18,
    opacity: 0.95,
  },
  metaRow: { 
    flexDirection: "row", 
    marginTop: 14,
    gap: 8
  },
  metaPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(15, 23, 42, 0.5)", 
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  metaText: { 
    color: "#FFF", 
    fontSize: 11, 
    fontWeight: "600", 
    marginLeft: 5 
  },
  curvedMask: {
    position: 'absolute',
    bottom: -1, 
    left: 0,
    right: 0,
    height: 28,
    backgroundColor: '#F8FAFC', 
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  // Membungkus tabs agar sisa layar di bawah banner sepenuhnya bisa di-scroll bebas
  tabsContentBinder: {
    flex: 1,
    marginTop: -4, // Menyisipkan sedikit ke dalam lengkungan agar rapi
  },
});