import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Tipe Data untuk TypeScript
interface PengumumkanItem {
  id: number;
  judul: string;
  info: string;
}

interface MenuItem {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

// Data Dummy sesuai modul CMS Cindy
const DUMMY_PENGUMUMAN: PengumumkanItem[] = [
  { id: 1, judul: 'Promo Ramadhan', info: 'Diskon 50% untuk tiket terusan!' },
  { id: 2, judul: 'Wahana Baru', info: 'Nikmati sensasi seluncuran pelangi sekarang.' },
];

// Menu Utama SlanikGo
const MAIN_MENU: MenuItem[] = [
  { id: '1', title: 'Wahana', icon: 'water', color: '#0284c7' },
  { id: '2', title: 'Tiket', icon: 'ticket', color: '#ef4444' },
  { id: '3', title: 'Galeri', icon: 'images', color: '#10b981' },
  { id: '4', title: 'Info', icon: 'information-circle', color: '#f59e0b' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* HEADER GRADASI MODERN (MELENGKUNG INDAH) */}
        <LinearGradient
          colors={['#1e3a8a', '#3b82f6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerGradient}
        >
          <View style={styles.headerContent}>
            <View style={styles.textContainer}>
              <Text style={styles.greeting}>Halo, Fitri!</Text>
              <Text style={styles.subGreeting}>Mau seru-seruan di SlanikGo hari ini?</Text>
            </View>
            <TouchableOpacity style={styles.notificationBadge} activeOpacity={0.7}>
              <Ionicons name="notifications" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* SECTION MENU UTAMA */}
        <View style={styles.mainContent}>
          <Text style={styles.sectionTitle}>Menu Utama</Text>
          <View style={styles.menuGrid}>
            {MAIN_MENU.map((menu) => (
              <TouchableOpacity key={menu.id} style={styles.menuItem} activeOpacity={0.7}>
                <View style={[styles.iconWrapper, { backgroundColor: menu.color + '15' }]}>
                  <Ionicons name={menu.icon} size={24} color={menu.color} />
                </View>
                <Text style={styles.menuText}>{menu.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* SECTION INFO & PROMO */}
          <Text style={[styles.sectionTitle, { marginTop: 25 }]}>Info & Promo Terbaru</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            snapToInterval={width - 40}
            decelerationRate="fast"
            contentContainerStyle={styles.sliderContainer}
          >
            {DUMMY_PENGUMUMAN.map((item) => (
              <View key={item.id} style={styles.announcementCard}>
                <LinearGradient
                  colors={['#0ea5e9', '#06b6d4']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.gradientCard}
                >
                  <View style={styles.cardHeaderRow}>
                    <Text style={styles.announcementTitle}>{item.judul}</Text>
                    <Ionicons name="sparkles" size={18} color="#fef08a" />
                  </View>
                  <Text style={styles.announcementInfo}>{item.info}</Text>
                </LinearGradient>
              </View>
            ))}
          </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#1e3a8a' }, // Mencegah warna putih aneh di status bar HP
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  
  // Desain Header agar pas di HP dan melengkung rapi
  headerGradient: { 
    paddingHorizontal: 24, 
    paddingTop: 30, 
    paddingBottom: 45,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  textContainer: { flex: 1, marginRight: 15 },
  greeting: { fontSize: 26, fontWeight: 'bold', color: '#FFFFFF', letterSpacing: 0.5 },
  subGreeting: { fontSize: 13, color: '#E2E8F0', marginTop: 6, opacity: 0.9 },
  notificationBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 12,
    borderRadius: 50,
  },

  // Konten Utama di bawah Header
  mainContent: { paddingHorizontal: 20, marginTop: 25 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#1E293B', letterSpacing: 0.3 },
  
  // Grid Menu yang pas di layar HP manapun
  menuGrid: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 14,
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderRadius: 24,
    // Efek Bayangan halus (Shadow)
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  menuItem: { alignItems: 'center', width: (width - 64) / 4 },
  iconWrapper: {
    padding: 14,
    borderRadius: 20,
    marginBottom: 8,
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: { fontSize: 12, fontWeight: '600', color: '#475569', marginTop: 2 },

  // Slider Promo yang proporsional
  sliderContainer: { paddingVertical: 10, paddingRight: 10 },
  announcementCard: {
    width: width - 40, // Dinamis mengikuti lebar HP masing-masing
    height: 130,
    marginRight: 12,
    borderRadius: 24,
    shadowColor: '#0ea5e9',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
  },
  gradientCard: { flex: 1, borderRadius: 24, padding: 22, justifyContent: 'center' },
  cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  announcementTitle: { color: '#FFFFFF', fontSize: 19, fontWeight: 'bold', letterSpacing: 0.5 },
  announcementInfo: { color: '#FFFFFF', fontSize: 13, marginTop: 8, opacity: 0.95 },
});