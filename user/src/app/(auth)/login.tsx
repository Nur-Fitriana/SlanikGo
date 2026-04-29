import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Sesuai aturan Pengumpulan 1: Pakai logika dummy dulu
    if (email === 'admin@gmail.com' && password === '123456') {
      router.replace('/(tabs)');
    } else {
      alert('Email atau Password salah! (Gunakan: admin@gmail.com / 123456)');
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.brand}>SLANIK<Text style={{color: '#FF8C00'}}>GO</Text></Text>
        <Text style={styles.title}>Welcome Back!</Text>
        
        <TextInput 
          style={styles.input} 
          placeholder="Email Address" 
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password" 
          value={password}
          onChangeText={setPassword}
          secureTextEntry 
        />
        
        <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
          <Text style={styles.footerText}>Dont have an account? <Text style={{color: '#0080FF', fontWeight: 'bold'}}>Register</Text></Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  inner: { flex: 1, justifyContent: 'center', padding: 30 },
  brand: { fontSize: 35, fontWeight: '900', color: '#0080FF', textAlign: 'center', marginBottom: 10 },
  title: { fontSize: 18, textAlign: 'center', color: '#666', marginBottom: 40 },
  input: { backgroundColor: '#F5F5F5', padding: 15, borderRadius: 10, marginBottom: 15 },
  btnLogin: { backgroundColor: '#0080FF', padding: 18, borderRadius: 10, marginTop: 10 },
  btnText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  footerText: { textAlign: 'center', marginTop: 25, color: '#666' }
});