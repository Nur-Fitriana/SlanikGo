import { View, Text, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Icon bawaan Expo

const WAHANA_DATA = [
  { 
    id: 1, 
    nama: 'Dragon River', 
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=500', // Foto dummy air
    desc: 'Menelusuri sungai buatan terpanjang dengan ban.' 
  },
  { 
    id: 2, 
    nama: 'Crazy Slide', 
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=500',
    desc: 'Seluncuran tinggi yang memacu adrenalin.' 
  },
];

export default function FasilitasScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header yang lebih menarik */}
      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>Jelajahi Slanik</Text>
        <Text style={styles.headerSub}>Temukan keseruan di setiap sudut</Text>
      </View>

      <View style={styles.content}>
        {WAHANA_DATA.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.imageCard} />
            <View style={styles.overlay}>
              <Text style={styles.cardTitle}>{item.nama}</Text>
              <View style={styles.tag}>
                <MaterialCommunityIcons name="water" size={14} color="#fff" />
                <Text style={styles.tagText}>Wahana Air</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FBFF' },
  headerBox: { padding: 30, backgroundColor: '#0080FF', borderBottomRightRadius: 50 },
  headerTitle: { fontSize: 28, fontWeight: '900', color: '#fff' },
  headerSub: { fontSize: 14, color: '#E0F0FF', marginTop: 5 },
  content: { padding: 20 },
  card: { 
    height: 200, 
    borderRadius: 20, 
    marginBottom: 20, 
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: '#fff'
  },
  imageCard: { width: '100%', height: '100%' },
  overlay: { 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    padding: 15, 
    backgroundColor: 'rgba(0,0,0,0.4)' // Gradasi gelap agar teks terbaca
  },
  cardTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  tag: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  tagText: { color: '#fff', fontSize: 12, marginLeft: 5 }
});