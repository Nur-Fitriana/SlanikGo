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

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Fungsi pembantu: Biar Alert di web browser maupun HP beneran muncul di tengah layar!
  const tampilkanAlert = (judul: string, pesan: string) => {
    if (Platform.OS === "web") {
      window.alert(`${judul}: ${pesan}`);
    } else {
      Alert.alert(judul, pesan);
    }
  };

  const handleLogin = async () => {
    const inputUser = username.trim().toLowerCase(); // Di-lowercase agar tidak sensitif huruf besar/kecil
    const inputPass = password;

    // 1. Validasi Input Kosong
    if (!inputUser || !inputPass) {
      tampilkanAlert("Peringatan", "Username dan password wajib diisi!");
      return;
    }

    setLoading(true);

    // 2. Efek loading simulasi ngecek ke server memori NestJS
    setTimeout(() => {
      setLoading(false);

      if (
        (inputUser === "admin" && inputPass === "password") ||
        (inputUser === "fitria" && inputPass === "123456")
      ) {
        tampilkanAlert("Sukses", "Login berhasil via API Gateway!");
        router.replace("/(tabs)"); // Melepar langsung ke halaman dashboard utama
      } else {
        // Jika username & password salah
        tampilkanAlert(
          "Gagal Masuk", 
          "Username atau password salah, silakan cek kembali data akun Anda."
        );
      }
    }, 1000); // Muter 1 detik biar kelihatan profesional prosesnya
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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

          {/* Navigasi pindah ke halaman Register */}
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