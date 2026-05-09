import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Dummy login
    if (email === 'user' || email === 'user@gmail.com') {
      router.replace('/(tabs)');
    } else {
      alert('Gunakan username: user');
    }
  };

  return (
    <View style={styles.container}>
      {/* Dekorasi Background Biru di Atas */}
      <View style={styles.topDecoration} />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.centering}
      >
        <View style={styles.loginCard}>
          <View style={styles.header}>
            <View style={styles.iconCircle}>
              <MaterialCommunityIcons name="water" size={32} color="#0080FF" />
            </View>
            <Text style={styles.title}>Masuk</Text>
            <Text style={styles.subtitle}>Selamat datang kembali di SlanikGo</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email atau Username</Text>
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons name="account-outline" size={20} color="#A0AEC0" />
              <TextInput 
                style={styles.input} 
                placeholder="Masukkan email/username" 
                value={email} 
                onChangeText={setEmail}
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <MaterialCommunityIcons name="lock-outline" size={20} color="#A0AEC0" />
              <TextInput 
                style={styles.input} 
                placeholder="••••••••" 
                secureTextEntry 
                value={password} 
                onChangeText={setPassword} 
              />
            </View>
          </View>

          <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => router.push('/(auth)/register')} 
            style={styles.footer}
          >
            <Text style={styles.footerText}>Belum punya akun? 
              <Text style={styles.registerText}> Registrasi</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F7FF',
  },
  topDecoration: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: height * 0.4,
    backgroundColor: '#0080FF',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  centering: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  loginCard: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#FFF',
    borderRadius: 30,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
  },
  iconCircle: {
    width: 60,
    height: 60,
    backgroundColor: '#F0F7FF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A365D',
  },
  subtitle: {
    fontSize: 13,
    color: '#718096',
    marginTop: 5,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4A5568',
    marginBottom: 6,
    marginLeft: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#EDF2F7',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#2D3748',
  },
  btnLogin: {
    backgroundColor: '#0080FF',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
  },
  btnText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#718096',
    fontSize: 13,
  },
  registerText: {
    color: '#0080FF',
    fontWeight: '700',
  },
});