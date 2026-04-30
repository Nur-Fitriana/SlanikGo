import { Redirect } from 'expo-router';

export default function RootIndex() {
  // Nanti di sini kita pasang logika cek token asli.
  // Untuk sekarang, kita arahkan ke Login dulu.
  return <Redirect href="/(auth)/login" />;
}