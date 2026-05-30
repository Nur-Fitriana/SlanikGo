import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, SafeAreaView, StatusBar, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface PengumumkanItem {
  id: number;
  judul: string;
  info: string;
}

// Data Dummy Promo
const DUMMY_PENGUMUMAN: PengumumkanItem[] = [
  { id: 1, judul: 'Promo Ramadhan', info: 'Diskon 50% untuk tiket terusan!' },
  { id: 2, judul: 'Wahana Baru', info: 'Nikmati sensasi seluncuran pelangi sekarang.' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1e3a8a" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* HEADER GRADASI */}
        <LinearGradient
          colors={['#1e3a8a', '#3b82f6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerGradient}
        >
          <View style={styles.headerContent}>
            
            {/* 1. SEKARANG LOGO BULAT SLANIK SUDAH MUNCUL DI SINI */}
            <Image 
              source={require("../../../assets/images/logo_slanik.png")} 
              style={styles.homeLogo}
              resizeMode="contain" // Menjaga topi gurita kuning dan bentuk bulatnya tetap aman utuh
            />

            {/* 2. TEKS GREETINGS USER */}
            <View style={styles.textContainer}>
              <Text style={styles.greeting}>Halo, Fitri!</Text>
              <Text style={styles.subGreeting}>Mau seru-seruan di SlanikGo hari ini?</Text>
            </View>
            
            {/* 3. TOMBOL NOTIFIKASI */}
            <TouchableOpacity style={styles.notificationBadge} activeOpacity={0.7}>
              <Ionicons name="notifications" size={20} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* KONTEN UTAMA */}
        <View style={styles.mainContent}>
          
          {/* SECTION INFO & PROMO TERBARU */}
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
  
  headerGradient: { 
    paddingHorizontal: 16, 
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
  
  // STYLING LOGO BARU: Berbentuk bulat proporsional, pas di samping teks greeting!
  homeLogo: {
    width: 60,         // Ukuran diset 60 biar pas tinggi & lebarnya di dalam header mobile
    height: 60,
    marginRight: 12,   // Memberikan jeda spasial biar gak dempetan sama "Halo, Fitri!"
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

  mainContent: { paddingHorizontal: 16, marginTop: 25 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#1E293B' },
  
  sliderContainer: { paddingVertical: 10, paddingRight: 10 },
  announcementCard: {
    width: width - 32, 
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