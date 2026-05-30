import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Navigasi ke Beranda (tabs)
    router.replace("/(tabs)");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="#004AAD" />
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* Header Biru dengan Lengkungan Dinamis */}
        <LinearGradient colors={["#004AAD", "#0093E9"]} style={styles.header}>
          <View style={styles.logoWrapper}>
            <Image
              source={require("../../../assets/images/logo_slanik.png")}
              style={styles.logo}
              resizeMode="contain" // Menggunakan contain agar logo bulat Slanik utuh sempurna
            />
          </View>
        </LinearGradient>

        {/* Card Form Login yang Proporsional di HP */}
        <View style={styles.formCard}>
          <Text style={styles.title}>Selamat Datang!</Text>
          <Text style={styles.subtitle}>
            Silakan masuk untuk melanjutkan petualangan seru di Slanik Waterpark
          </Text>

          {/* Input Username/Email */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email atau Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan email/username"
              placeholderTextColor="#94A3B8"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Input Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#94A3B8"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* Tombol Login */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin} activeOpacity={0.8}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Navigasi ke Register */}
          <TouchableOpacity
            onPress={() => router.push("/(auth)/register")}
            style={styles.registerLink}
            activeOpacity={0.7}
          >
            <Text style={styles.footerText}>
              Belum punya akun?{" "}
              <Text style={styles.registerText}>Registrasi</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  // Mengurangi tinggi sedikit agar pas di layar HP (tidak makan tempat)
  header: {
    height: 260,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingBottom: 40,
  },
  // Mengatur ukuran lingkaran pembungkus logo agar lebih compact dan manis
  logoWrapper: {
    width: 140,                
    height: 140,
    backgroundColor: "#FFFFFF",
    borderRadius: 70,          
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",        
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    borderWidth: 6,
    borderColor: "rgba(255,255,255,0.4)",
    marginTop: 20,
  },
  logo: {
    width: "85%",             
    height: "85%",           
  },
  // Memperlebar card agar inputan terasa lega di jari pengguna
  formCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 24, // Diubah dari 45 ke 24 biar lebar form-nya pas dan lega
    marginTop: -30, 
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 28,
    elevation: 4, 
    shadowColor: "#0f172a", 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1E293B",
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 13,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 24,
    marginTop: 6,
    lineHeight: 18,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#475569",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    color: "#1E293B",
  },
  loginButton: {
    backgroundColor: "#0081C9",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
    elevation: 2,
    shadowColor: "#0081C9",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },
  registerLink: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#64748B",
    fontSize: 13,
  },
  registerText: {
    color: "#0081C9",
    fontWeight: "bold",
  },
});