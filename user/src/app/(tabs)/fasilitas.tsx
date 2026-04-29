import { View, Text, ScrollView, StyleSheet } from 'react-native';

// Data dummy disamakan dengan Prisma: id, nama, ikon, deskripsi
const DUMMY_FASILITAS = [
  { 
    id: 1, 
    nama: 'Dragon River', 
    ikon: '🌊', 
    deskripsi: 'Nikmati sensasi menyusuri sungai dengan pemandangan naga raksasa.' 
  },
  { 
    id: 2, 
    nama: 'Crazy Slide', 
    ikon: '🎢', 
    deskripsi: 'Perosotan ekstrem untuk memacu adrenalin kamu!' 
  },
  { 
    id: 3, 
    nama: 'Olympic Pool', 
    ikon: '🏊', 
    deskripsi: 'Kolam renang standar olimpiade untuk yang hobi olahraga air.' 
  },
];

export default function FasilitasScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Wahana Slanik Waterpark</Text>
      
      {DUMMY_FASILITAS.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>{item.ikon}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>{item.nama}</Text>
            <Text style={styles.desc}>{item.deskripsi}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#0080FF' },
  card: { 
    flexDirection: 'row', 
    backgroundColor: '#f9f9f9', 
    borderRadius: 12, 
    marginBottom: 15, 
    padding: 15,
    elevation: 2,
    alignItems: 'center'
  },
  iconContainer: { 
    width: 60, 
    height: 60, 
    backgroundColor: '#E0F0FF', 
    borderRadius: 30, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginRight: 15
  },
  iconText: { fontSize: 30 },
  info: { flex: 1 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  desc: { color: '#666', fontSize: 13, marginTop: 4 }
});