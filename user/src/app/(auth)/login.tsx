import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logika dummy
    if (email === 'admin@gmail.com' && password === '123456') {
      router.replace('/(tabs)');
    } else {
      alert('Coba: admin@gmail.com / 123456');
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      {/* Elemen Dekoratif Soft (Lingkaran di belakang) */}
      <View style={styles.circleDecorator} />
      
      <View style={styles.inner}>
        <View style={styles.headerSection}>
          <View style={styles.logoContainer}>
            <MaterialCommunityIcons name="waves" size={40} color="#0080FF" />
          </View>
          <Text style={styles.brand}>SLANIK<Text style={{color: '#4DA6FF'}}>GO</Text></Text>
          <Text style={styles.subtitle}>Silahkan masuk untuk memulai liburanmu</Text>
        </View>

        <View style={styles.formCard}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Email Address</Text>
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons name="email-outline" size={20} color="#A0AEC0" />
              <TextInput 
                style={styles.input} 
                placeholder="fitri@example.com" 
                placeholderTextColor="#CBD5E0"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons name="lock-outline" size={20} color="#A0AEC0" />
              <TextInput 
                style={styles.input} 
                placeholder="••••••••" 
                placeholderTextColor="#CBD5E0"
                value={password}
                onChangeText={setPassword}
                secureTextEntry 
              />
            </View>
          </View>

          <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
            <Text style={styles.btnText}>Masuk Sekarang</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          onPress={() => router.push('/(auth)/register')} 
          style={styles.footer}
        >
          <Text style={styles.footerText}> Belum punya akun? 
            <Text style={styles.registerText}> Daftar</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F7FF', // Biru sangat muda (Soft)
  },
  circleDecorator: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#E1EFFF',
  },
  inner: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#FFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    // Soft Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  brand: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1A365D',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 14,
    color: '#718096',
    marginTop: 5,
    textAlign: 'center',
  },
  formCard: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    padding: 25,
    // Very Soft Shadow
    shadowColor: "#0080FF",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 5,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4A5568',
    marginBottom: 8,
    marginLeft: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#EDF2F7',
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: '#2D3748',
    fontSize: 15,
  },
  btnLogin: {
    backgroundColor: '#0080FF',
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: "#0080FF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  btnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    color: '#718096',
    fontSize: 14,
  },
  registerText: {
    color: '#0080FF',
    fontWeight: '700',
  },
});