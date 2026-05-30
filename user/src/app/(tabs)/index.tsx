import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

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

const DUMMY_PENGUMUMAN: PengumumkanItem[] = [
  { id: 1, judul: 'Promo Ramadhan', info: 'Diskon 50% untuk tiket terusan!' },
  { id: 2, judul: 'Wahana Baru', info: 'Nikmati sensasi seluncuran pelangi sekarang.' },
];

const MAIN_MENU: MenuItem[] = [
  { id: '1', title: 'Wahana', icon: 'water', color: '#0284c7' },
  { id: '2', title: 'Tiket', icon: 'ticket', color: '#ef4444' },
  { id: '3', title: 'Galeri', icon: 'images', color: '#10b981' },
  { id: '4', title: 'Info', icon: 'information-circle', color: '#f59e0b' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* HEADER GRADASI YANG COMPACT (TIDAK KEBESARAN) */}
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
              <Ionicons name="notifications" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* KONTEN UTAMA */}
        <View style={styles.mainContent}>
          
          {/* MENU UTAMA GRID (KUNCI BERJEJER PAS) */}
          <Text style={styles.sectionTitle}>Menu Utama</Text>
          <View style={styles.menuGrid}>
            {MAIN_MENU.map((menu) => (
              <TouchableOpacity key={menu.id} style={styles.menuItem} activeOpacity={0.7}>
                <View style={[styles.iconWrapper, { backgroundColor: menu.color + '15' }]}>
                  <Ionicons name={menu.icon} size={22} color={menu.color} />
                </View>
                <Text style={styles.menuText}>{menu.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* INFO & PROMO SLIDER */}
          <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Info & Promo Terbaru</Text>
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
                    <Ionicons name="sparkles" size={16} color="#fef08a" />
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
  safeArea: { flex: 1, backgroundColor: '#1e3a8a' }, 
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  
  // Mengurangi padding biar header ramping dan pas di layar HP
  headerGradient: { 
    paddingHorizontal: 20, 
    paddingTop: 20, 
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: { flex: 1 },
  greeting: { fontSize: 22, fontWeight: 'bold', color: '#FFFFFF' },
  subGreeting: { fontSize: 13, color: '#E2E8F0', marginTop: 4, opacity: 0.85 },
  notificationBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
  },

  mainContent: { paddingHorizontal: 16, marginTop: 20 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#1E293B' },
  
  // Kunci layout grid biar berjejer rapi mendatar 4 menu
  menuGrid: { 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderRadius: 20,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  menuItem: { 
    alignItems: 'center', 
    width: (width - 48) / 4, // Membagi rata lebar layar hp dikurangi padding
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  menuText: { fontSize: 11, fontWeight: '600', color: '#475569' },

  sliderContainer: { paddingVertical: 8, paddingRight: 10 },
  announcementCard: {
    width: width - 32 - 16, // Presisi pas di tengah layar HP
    height: 110,
    marginRight: 12,
    borderRadius: 20,
    shadowColor: '#0ea5e9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  gradientCard: { flex: 1, borderRadius: 20, padding: 16, justifyContent: 'center' },
  cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  announcementTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  announcementInfo: { color: '#FFFFFF', fontSize: 12, marginTop: 4, opacity: 0.9 },
});