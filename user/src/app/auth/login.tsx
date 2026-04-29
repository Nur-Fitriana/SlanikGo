import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Sementara kita langsung arahkan ke Beranda
    router.replace('/(tabs)');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.brand}>SLANIK<Text style={{color: '#FF8C00'}}>GO</Text></Text>
        <Text style={styles.title}>Selamat Datang!</Text>
        <Text style={styles.subtitle}>Masuk untuk mulai memesan tiket wahana</Text>

        <View style={styles.form}>
          <TextInput 
            style={styles.input} 
            placeholder="Alamat Email" 
            value={email}
            onChangeText={setEmail}
          />
          <TextInput 
            style={styles.input} 
            placeholder="Kata Sandi" 
            value={password}
            onChangeText={setPassword}
            secureTextEntry 
          />
          
          <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
            <Text style={styles.btnText}>MASUK SEKARANG</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
          <Text style={styles.footerText}>Belum punya akun? <Text style={{fontWeight: 'bold', color: '#0080FF'}}>Daftar</Text></Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { flex: 1, justifyContent: 'center', padding: 30 },
  brand: { fontSize: 35, fontWeight: '900', color: '#0080FF', textAlign: 'center', letterSpacing: 2 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginTop: 20 },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 40 },
  form: { width: '100%' },
  input: { backgroundColor: '#F5F5F5', padding: 15, borderRadius: 10, marginBottom: 15, fontSize: 16 },
  btnLogin: { backgroundColor: '#0080FF', padding: 18, borderRadius: 10, marginTop: 10, elevation: 3 },
  btnText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
  footerText: { textAlign: 'center', marginTop: 30, color: '#666' }
});