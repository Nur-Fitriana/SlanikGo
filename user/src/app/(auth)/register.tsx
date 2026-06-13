import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform, 
  Dimensions,
  ActivityIndicator,
  Keyboard
} from 'react-native';
import { useRouter } from 'expo-router';

const { height } = Dimensions.get('window');

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    Keyboard.dismiss();

    const inputName = name.trim();
    const inputUser = username.trim().toLowerCase(); 
    const inputPass = password;

    // ❌ 1. Notif Tengah Layar Browser jika data kosong
    if (!inputName || !inputUser || !inputPass) {
      if (Platform.OS === 'web') {
        window.alert("Registrasi Gagal: Semua kolom pendaftaran wajib diisi!");
      }
      return;
    }

    // ❌ 2. Notif Tengah Layar Browser jika password kurang dari 6 karakter
    if (inputPass.length < 6) {
      if (Platform.OS === 'web') {
        window.alert("Registrasi Gagal: Password minimal harus 6 karakter demi keamanan.");
      }
      return;
    }

    setLoading(true);

    try {
      // Simulasi delay seolah-olah nembak API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simpan ke memori global runtime browser
      if (!(window as any).akunSlanik) {
        (window as any).akunSlanik = {};
      }
      
      (window as any).akunSlanik = {
        username: inputUser, 
        password: inputPass,
        name: inputName
      };

      setLoading(false);
      
      // 🎉 3. POP-UP DI TENGAH LAYAR BROWSER (PASTI MUNCUL DI CHROME/EDGE)
      if (Platform.OS === 'web') {
        window.alert(`Registrasi Sukses!\nAkun "${inputUser}" berhasil dibuat di sistem SlanikGo.`);
      }

      // Setelah user klik 'OK' di pop-up browser, langsung bersihkan form dan balik ke login
      setName('');
      setUsername('');
      setPassword('');
      router.back(); 

    } catch (error) {
      setLoading(false);
      if (Platform.OS === 'web') {
        window.alert("Error Sistem: Gagal menghubungkan ke database registrasi.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topDecoration} />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.centering}
      >
        <View style={styles.registerCard}>
          <View style={styles.header}>
            <Text style={styles.title}>Registrasi</Text>
            <Text style={styles.subtitle}>Buat akun SlanikGo baru</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nama Lengkap</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Nama Anda" 
              value={name} 
              onChangeText={setName} 
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Username" 
              value={username} 
              onChangeText={setUsername} 
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput 
              style={styles.input} 
              placeholder="••••••••" 
              secureTextEntry 
              value={password} 
              onChangeText={setPassword} 
            />
          </View>

          <TouchableOpacity 
            style={[styles.btnRegister, loading && { opacity: 0.7 }]} 
            onPress={handleRegister}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" size="small" />
            ) : (
              <Text style={styles.btnText}>Registrasi</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.back()} style={styles.footer}>
            <Text style={styles.footerText}>Sudah punya akun? <Text style={styles.loginText}>Masuk</Text></Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F7FF' },
  topDecoration: { position: 'absolute', top: 0, width: '100%', height: height * 0.4, backgroundColor: '#0080FF', borderBottomLeftRadius: 60, borderBottomRightRadius: 60 },
  centering: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 25 },
  registerCard: { width: '100%', maxWidth: 400, backgroundColor: '#FFF', borderRadius: 30, padding: 30, shadowColor: "#000", shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 20, elevation: 10 },
  header: { alignItems: 'center', marginBottom: 25 },
  title: { fontSize: 24, fontWeight: '800', color: '#1A365D' },
  subtitle: { fontSize: 13, color: '#718096', marginTop: 5 },
  inputGroup: { marginBottom: 15 },
  label: { fontSize: 12, fontWeight: '700', color: '#4A5568', marginBottom: 6, marginLeft: 4 },
  input: { backgroundColor: '#F8FAFC', borderRadius: 12, paddingVertical: 10, paddingHorizontal: 15, borderWidth: 1, borderColor: '#EDF2F7', fontSize: 14, color: '#2D3748' },
  btnRegister: { backgroundColor: '#0080FF', paddingVertical: 14, borderRadius: 12, alignItems: 'center', marginTop: 15 },
  btnText: { color: '#FFF', fontSize: 15, fontWeight: 'bold' },
  footer: { marginTop: 20, alignItems: 'center' },
  footerText: { color: '#718096', fontSize: 13 },
  loginText: { color: '#0080FF', fontWeight: '700' },
});