import { View, Text, StyleSheet } from 'react-native';

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text>Halaman Informasi & Kontak</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});