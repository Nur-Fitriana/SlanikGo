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
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

// 💡 TIPS KILAT MEPOET: 
// Gunakan '10.0.2.2' jika tes pakai Emulator Android.
// Gunakan IP Wifi Laptop (misal: '192.168.1.X') jika tes pakai HP fisik/Expo Go.
const BASE_URL = "http://10.0.2.2:3000"; 

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState(""); // Menggunakan username agar match dengan DTO NestJS
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert("Peringatan", "Username dan password wajib diisi!");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password,
        }),
      });

      const hasil = await response.json();

      if (response.ok && hasil.success) {
        Alert.alert("Sukses", hasil.message || "Selamat datang kembali!");
        router.replace("/(tabs)"); // Masuk ke dashboard utama aplikasi
      } else {
        // Menangkap error 'UnauthorizedException' atau pesan gagal dari NestJS
        Alert.alert("Gagal Masuk", hasil.message || "Username atau password salah.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Koneksi Gagal", "Tidak dapat terhubung ke server backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="#004AAD" />
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        <LinearGradient colors={["#004AAD", "#0093E9"]} style={styles.header}>
          <Image
            source={require("../../../assets/images/logo_slanik.png")}
            style={styles.logoImageDirect}
            resizeMode="contain"
          />
        </LinearGradient>

        <View style={styles.formCard}>
          <Text style={styles.title}>Selamat Datang!</Text>
          <Text style={styles.subtitle}>
            Silakan masuk untuk melanjutkan petualangan seru di Slanik Waterpark
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan username anda"
              placeholderTextColor="#94A3B8"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </View>

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

          <TouchableOpacity 
            style={[styles.loginButton, loading && { opacity: 0.7 }]} 
            onPress={handleLogin} 
            disabled={loading}
            activeOpacity={0.8}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" size="small" />
            ) : (
              <Text style={styles.loginButtonText}>Login</Text>
            )}
          </TouchableOpacity>

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
  container: { flex: 1, backgroundColor: "#F8FAFC" },
  scrollContainer: { flexGrow: 1, paddingBottom: 30 },
  header: { height: 280, justifyContent: "center", alignItems: "center", borderBottomLeftRadius: 40, borderBottomRightRadius: 40, paddingBottom: 10 },
  logoImageDirect: { width: 350, height: 350, marginTop: 20 },
  formCard: { backgroundColor: "#FFFFFF", marginHorizontal: 24, marginTop: -40, borderRadius: 24, paddingHorizontal: 24, paddingVertical: 28, elevation: 4, shadowColor: "#0f172a", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 12 },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", color: "#1E293B", letterSpacing: 0.3 },
  subtitle: { fontSize: 13, color: "#64748B", textAlign: "center", marginBottom: 24, marginTop: 6, lineHeight: 18 },
  inputContainer: { marginBottom: 16 },
  label: { fontSize: 13, fontWeight: "600", color: "#475569", marginBottom: 6 },
  input: { backgroundColor: "#F1F5F9", paddingHorizontal: 16, paddingVertical: 12, borderRadius: 12, fontSize: 14, borderWidth: 1, borderColor: "#E2E8F0", color: "#1E293B" },
  loginButton: { backgroundColor: "#0081C9", paddingVertical: 14, borderRadius: 12, alignItems: "center", marginTop: 8, elevation: 2, shadowColor: "#0081C9", shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.2, shadowRadius: 6 },
  loginButtonText: { color: "#FFFFFF", fontSize: 15, fontWeight: "bold", letterSpacing: 0.3 },
  registerLink: { marginTop: 20, alignItems: "center" },
  footerText: { color: "#64748B", fontSize: 13 },
  registerText: { color: "#0081C9", fontWeight: "bold" },
});