import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function TiketScreen() {
  const [tiket, setTiket] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fungsi ambil data dari CMS
  const fetchTiket = async () => {
    try {
      // GANTI DENGAN IP TEMAN KAMU
      const response = await axios.get('http://IP_CMS_TEMAN:3000/tiket'); 
      setTiket(response.data);
    } catch (error) {
      console.error("Gagal ambil data tiket:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTiket(); }, []);

  if (loading) return <ActivityIndicator size="large" style={styles.loader} />;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Harga Tiket</Text>
      <FlatList
        data={tiket}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.jenis}>{item.kategori || 'Tiket'}</Text>
            <Text style={styles.harga}>Rp {item.harga.toLocaleString()}</Text>
            <Text style={styles.ket}>{item.keterangan || 'Berlaku hari ini'}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  loader: { flex: 1, justifyContent: 'center' },
  card: { 
    padding: 15, 
    borderRadius: 10, 
    backgroundColor: '#F0F7FF', 
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#0080FF'
  },
  jenis: { fontSize: 16, fontWeight: 'bold' },
  harga: { fontSize: 20, color: '#0080FF', fontWeight: 'bold', marginVertical: 5 },
  ket: { fontSize: 12, color: '#666' }
});