import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();
  const [form, setForm] = useState({ nama: '', email: '', password: '' });

  const handleRegister = () => {
    // Nanti di sini kita axios.post ke http://ALAMAT_IP:3000/auth/register
    console.log("Daftar:", form);
    router.replace('/(auth)/login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Buat Akun Baru</Text>
      <Text style={styles.subtitle}>Gabung SlanikGo untuk kemudahan pesan tiket</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Nama Lengkap" 
        onChangeText={(txt) => setForm({...form, nama: txt})}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        keyboardType="email-address"
        onChangeText={(txt) => setForm({...form, email: txt})}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        onChangeText={(txt) => setForm({...form, password: txt})}
      />

      <TouchableOpacity style={styles.btnRegister} onPress={handleRegister}>
        <Text style={styles.btnText}>DAFTAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.footerText}>Sudah punya akun? <Text style={{color: '#0080FF', fontWeight: 'bold'}}>Login</Text></Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: 30, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 30 },
  input: { backgroundColor: '#F9F9F9', padding: 15, borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: '#EEE' },
  btnRegister: { backgroundColor: '#0080FF', padding: 18, borderRadius: 10, marginTop: 10 },
  btnText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  footerText: { textAlign: 'center', marginTop: 20, color: '#666' }
});