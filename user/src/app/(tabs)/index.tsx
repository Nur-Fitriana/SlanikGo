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

// Data Dummy dari CMS Cindy
const DUMMY_PENGUMUMAN: PengumumkanItem[] = [
  { id: 1, judul: 'Promo Ramadhan', info: 'Diskon 50% untuk tiket terusan!' },
  { id: 2, judul: 'Wahana Baru', info: 'Nikmati sensasi seluncuran pelangi sekarang.' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* HEADER GRADASI RAMPING & ELEGAN */}
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

        {/* KONTEN UTAMA (TANPA MENU UTAMA DOBEL) */}
        <View style={styles.mainContent}>
          
          {/* SECTION INFO & PROMO TERBARU (LANGSUNG MUNCUL DI SINI) */}
          <Text style={styles.sectionTitle}>Info & Promo Terbaru</Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            snapToInterval={width - 32}
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
  
  // Desain Header yang compact dan mewah
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

  // Layout Konten utama
  mainContent: { paddingHorizontal: 16, marginTop: 25 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#1E293B' },
  
  // Slider Promo Rapi
  sliderContainer: { paddingVertical: 10, paddingRight: 10 },
  announcementCard: {
    width: width - 32, // Ukurannya pas memenuhi layar kiri-kanan secara proporsional
    height: 120,
    marginRight: 12,
    borderRadius: 20,
    shadowColor: '#0ea5e9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  gradientCard: { flex: 1, borderRadius: 20, padding: 18, justifyContent: 'center' },
  cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  announcementTitle: { color: '#FFFFFF', fontSize: 17, fontWeight: 'bold' },
  announcementInfo: { color: '#FFFFFF', fontSize: 12, marginTop: 5, opacity: 0.9 },
});