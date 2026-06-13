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
  Keyboard,
  ToastAndroid // 👑 SUPAYA TULISAN LANGSUNG MUNCUL DI LAYAR EMULATOR ANDROID
} from 'react-native';
import { useRouter } from 'expo-router';

const { height } = Dimensions.get('window');

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  // 👑 STATE TULISAN ERROR (Langsung nempel di layout, gak bakal bisa disembunyikan HP)
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = () => {
    Keyboard.dismiss();
    setErrorMessage('');
    setSuccessMessage('');

    const inputName = name.trim();
    const inputUser = username.trim(); // 👑 Hapus toLowerCase biar aman sesuai ketikanmu
    const inputPass = password;

    // ❌ 1. TULISAN JIKA KOLOM KURANG / KOSONG
    if (!inputName || !inputUser || !inputPass) {
      setErrorMessage("Semua kolom wajib diisi, tidak boleh kosong!");
      if (Platform.OS === 'android') {
        ToastAndroid.show("Kolom pendaftaran kurang!", ToastAndroid.SHORT);
      }
      return;
    }

    // ❌ 2. TULISAN JIKA PASSWORD KURANG DARI 6 KARAKTER
    if (inputPass.length < 6) {
      setErrorMessage("Password kurang panjang! Minimal 6 karakter.");
      if (Platform.OS === 'android') {
        ToastAndroid.show("Password kurang aman!", ToastAndroid.SHORT);
      }
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // Simpan ke memori global
      if (!(window as any).akunSlanik) {
        (window as any).akunSlanik = {};
      }
      
      (window as any).akunSlanik = {
        username: inputUser.toLowerCase(), // simpan versi kecil untuk login
        password: inputPass,
        name: inputName
      };

      setLoading(false);
      
      // 🎉 3. TULISAN UTAMA SKENARIO BERHASIL
      setSuccessMessage(`Akun "${inputUser}" Berhasil Disimpan!`);
      
      if (Platform.OS === 'android') {
        ToastAndroid.show("Registrasi Berhasil Disimpan!", ToastAndroid.LONG);
      }

      // Beri jeda 1.5 detik biar dosen sempat baca tulisan suksesnya, lalu otomatis balik ke login
      setTimeout(() => {
        router.back();
      }, 1500);

    }, 800);
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
              onChangeText={(txt) => { setName(txt); setErrorMessage(''); }} 
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Username" 
              value={username} 
              onChangeText={(txt) => { setUsername(txt); setErrorMessage(''); }}
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
              onChangeText={(txt) => { setPassword(txt); setErrorMessage(''); }} 
            />
          </View>

          {/* 👑 TEMPAT TULISAN ERROR & SUKSES MUNCULsecara Live */}
          {errorMessage ? <Text style={styles.errorTextTampil}>{errorMessage}</Text> : null}
          {successMessage ? <Text style={styles.successTextTampil}>{successMessage}</Text> : null}

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
  
  // 👑 STYLE TULISAN BARU
  errorTextTampil: { color: '#DC2626', fontSize: 13, fontWeight: '600', textAlign: 'center', marginTop: 5, backgroundColor: '#FEE2E2', padding: 8, borderRadius: 8 },
  successTextTampil: { color: '#15803D', fontSize: 13, fontWeight: '600', textAlign: 'center', marginTop: 5, backgroundColor: '#DCFCE7', padding: 8, borderRadius: 8 },

  btnRegister: { backgroundColor: '#0080FF', paddingVertical: 14, borderRadius: 12, alignItems: 'center', marginTop: 15 },
  btnText: { color: '#FFF', fontSize: 15, fontWeight: 'bold' },
  footer: { marginTop: 20, alignItems: 'center' },
  footerText: { color: '#718096', fontSize: 13 },
  loginText: { color: '#0080FF', fontWeight: '700' },
});