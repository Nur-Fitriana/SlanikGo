import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di SlanikGo</Text>
      <Text style={styles.subtitle}>E-Ticketing Slanik Waterpark</Text>
      {/* Nanti kita tambah banner gambar di sini */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0080FF' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  subtitle: { fontSize: 16, color: '#fff', marginTop: 10 },
});