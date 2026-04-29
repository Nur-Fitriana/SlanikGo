import { View, Text, StyleSheet } from 'react-native';

export default function GaleriScreen() {
  return (
    <View style={styles.container}>
      <Text>Halaman Galeri Slanik</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});