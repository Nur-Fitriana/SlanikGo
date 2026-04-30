import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Ini DATA STATIC agar pengumpulan 1 aman (sesuai instruksi PBS)
const DUMMY_TIKET = [
  { id: '1', kategori: 'Tiket Terusan (Weekday)', harga: 35000, ket: 'Senin - Jumat' },
  { id: '2', kategori: 'Tiket Terusan (Weekend)', harga: 50000, ket: 'Sabtu, Minggu & Libur Nasional' },
  { id: '3', kategori: 'Sewa Ban (Single)', harga: 15000, ket: 'Durasi sepuasnya' },
];

export default function TiketScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Harga Tiket Slanik Waterpark</Text>
      <FlatList
        data={DUMMY_TIKET}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.jenis}>{item.kategori}</Text>
              <Text style={styles.ket}>{item.ket}</Text>
            </View>
            <Text style={styles.harga}>Rp {item.harga.toLocaleString()}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  card: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 20, 
    borderRadius: 15, 
    backgroundColor: '#F0F7FF', 
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#0080FF',
    elevation: 2
  },
  jenis: { fontSize: 16, fontWeight: 'bold', color: '#444' },
  harga: { fontSize: 18, color: '#0080FF', fontWeight: 'bold' },
  ket: { fontSize: 12, color: '#888', marginTop: 4 }
});