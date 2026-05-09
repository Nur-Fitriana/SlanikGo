import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

// Data dummy ini nantinya akan ditarik dari API Pengumuman
const DUMMY_PENGUMUMAN = [
  { id: 1, judul: 'Promo Ramadhan', info: 'Diskon 50% untuk tiket terusan!' },
  { id: 2, judul: 'Wahana Baru', info: 'Nikmati sensasi seluncuran pelangi sekarang.' },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* HEADER GREETING */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Halo, Fitri!</Text>
        <Text style={styles.subGreeting}>Mau seru-seruan di SlanikGo hari ini?</Text>
      </View>

      {/* SLIDER PENGUMUMAN (Dari CMS) */}
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>Info Terbaru</Text>
      </View>
      
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
              colors={['#4facfe', '#00f2fe']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientCard}
            >
              <Text style={styles.announcementTitle}>{item.judul}</Text>
              <Text style={styles.announcementInfo}>{item.info}</Text>
            </LinearGradient>
          </View>
        ))}
      </ScrollView>

      {/* MENU QUICK LINKS */}
      <View style={styles.menuGrid}>
        {/* Kamu bisa tambahkan navigasi ke Tiket, Fasilitas, dll di sini */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { padding: 25, paddingTop: 60, backgroundColor: '#FFFFFF' },
  greeting: { fontSize: 24, fontWeight: 'bold', color: '#1E293B' },
  subGreeting: { fontSize: 14, color: '#64748B', marginTop: 5 },
  sectionTitleContainer: { paddingHorizontal: 20, marginTop: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#334155' },
  sliderContainer: { paddingLeft: 20, paddingRight: 10, paddingVertical: 15 },
  announcementCard: {
    width: width - 60,
    height: 120,
    marginRight: 15,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#4facfe',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  gradientCard: { flex: 1, borderRadius: 20, padding: 20, justifyContent: 'center' },
  announcementTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  announcementInfo: { color: '#FFFFFF', fontSize: 13, marginTop: 5, opacity: 0.9 },
});