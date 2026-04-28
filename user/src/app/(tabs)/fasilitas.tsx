import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function FasilitasScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Wahana Slanik Waterpark</Text>
      
      {/* Ini nanti datanya ambil dari CMS teman kamu */}
      <View style={styles.card}>
        <View style={styles.imagePlaceholder} />
        <View style={styles.info}>
          <Text style={styles.title}>Dragon River</Text>
          <Text style={styles.price}>Rp 45.000</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#0080FF' },
  card: { backgroundColor: '#f9f9f9', borderRadius: 10, marginBottom: 15, overflow: 'hidden', elevation: 3 },
  imagePlaceholder: { width: '100%', height: 150, backgroundColor: '#ddd' },
  info: { padding: 15 },
  title: { fontSize: 18, fontWeight: 'bold' },
  price: { color: '#2ecc71', fontWeight: 'bold', marginTop: 5 }
});