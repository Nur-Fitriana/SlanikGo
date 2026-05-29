import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Interface / Tipe Data untuk TypeScript
interface PengumumkanItem {
  id: number;
  judul: string;
  info: string;
}

interface MenuItem {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap; // Biar icon-nya aman di TypeScript
  color: string;
}

// Data dummy dari CMS Cindy (Nanti di-fetch dari API)
const DUMMY_PENGUMUMAN: PengumumkanItem[] = [
  { id: 1, judul: 'Promo Ramadhan', info: 'Diskon 50% untuk tiket terusan!' },
  { id: 2, judul: 'Wahana Baru', info: 'Nikmati sensasi seluncuran pelangi sekarang.' },
];

// Menu Navigasi Sesuai Instruksi Modul Kelompok Kalian
const MAIN_MENU: MenuItem[] = [
  { id: '1', title: 'Wahana', icon: 'water-outline', color: '#3b82f6' },
  { id: '2', title: 'Tiket', icon: 'ticket-outline', color: '#ef4444' },
  { id: '3', title: 'Galeri', icon: 'images-outline', color: '#10b981' },
  { id: '4', title: 'Info', icon: 'information-circle-outline', color: '#f59e0b' },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* HEADER GREETING DENGAN GRADASI PREMIUM */}
      <LinearGradient
        colors={['#1e3a8a', '#3b82f6']} // Biru gelap ke biru terang khas air Slanik
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Halo, Fitri!</Text>
            <Text style={styles.subGreeting}>Mau seru-seruan di SlanikGo hari ini?</Text>
          </View>
          <TouchableOpacity style={styles.notificationBadge}>
            <Ionicons name="notifications-outline" size={22} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* MENU QUICK LINKS (GRID ANTARMUKA) */}
      <View style={styles.menuContainer}>
        <Text style={styles.sectionTitle}>Menu Utama</Text>
        <View style={styles.menuGrid}>
          {MAIN_MENU.map((menu) => (
            <TouchableOpacity key={menu.id} style={styles.menuItem}>
              <View style={[styles.iconWrapper, { backgroundColor: menu.color + '20' }]}>
                <Ionicons name={menu.icon} size={26} color={menu.color} />
              </View>
              <Text style={styles.menuText}>{menu.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* SLIDER PENGUMUMAN (DARI CMS CINDY) */}
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>Info & Promo Terbaru</Text>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 50}
        decelerationRate="fast"
        contentContainerStyle={styles.sliderContainer}
      >
        {DUMMY_PENGUMUMAN.map((item) => (
          <View key={item.id} style={styles.announcementCard}>
            <LinearGradient
              colors={['#0284c7', '#06b6d4']} // Warna Cyan-Blue gradasi segar
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

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  
  // Polesan Header baru (Melengkung di bawah + Gradasi Warna)
  headerGradient: { 
    paddingHorizontal: 25, 
    paddingTop: 60, 
    paddingBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 8,
    shadowColor: '#1e3a8a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: { fontSize: 26, fontWeight: 'bold', color: '#FFFFFF' },
  subGreeting: { fontSize: 13, color: '#E2E8F0', marginTop: 4, opacity: 0.9 },
  notificationBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    borderRadius: 50,
  },

  // Polesan Grid Menu Navigasi Utama
  menuContainer: { paddingHorizontal: 20, marginTop: 25 },
  menuGrid: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#94a3b8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  menuItem: { alignItems: 'center', width: (width - 70) / 4 },
  iconWrapper: {
    padding: 12,
    borderRadius: 16,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: { fontSize: 12, fontWeight: '600', color: '#475569' },

  // Polesan Slider Card Promo
  sectionTitleContainer: { paddingHorizontal: 20, marginTop: 25 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#1E293B' },
  sliderContainer: { paddingLeft: 20, paddingRight: 5, paddingVertical: 12 },
  announcementCard: {
    width: width - 50,
    height: 130,
    marginRight: 15,
    borderRadius: 22,
    elevation: 6,
    shadowColor: '#0284c7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  gradientCard: { flex: 1, borderRadius: 22, padding: 20, justifyContent: 'center' },
  cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  announcementTitle: { color: '#FFFFFF', fontSize: 19, fontWeight: 'bold' },
  announcementInfo: { color: '#FFFFFF', fontSize: 13, marginTop: 6, opacity: 0.95 },
});