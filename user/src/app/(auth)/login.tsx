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
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Navigasi ke Dashboard (tabs)
    router.replace("/(tabs)");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header Biru dengan Logo */}
        <LinearGradient colors={["#004AAD", "#0093E9"]} style={styles.header}>
          <View style={styles.logoWrapper}>
            <Image
              source={require("../../../assets/images/logo_slanik.png")}
              style={styles.logo}
              resizeMode="cover" // Pakai cover biar memenuhi ruang
            />
          </View>
        </LinearGradient>

        {/* Card Form Login */}
        <View style={styles.formCard}>
          <Text style={styles.title}>Selamat Datang!</Text>
          <Text style={styles.subtitle}>
            Silakan masuk untuk melanjutkan petualangan seru di Slanik Waterpark
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email atau Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan email/username"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(auth)/register")}
            style={styles.registerLink}
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
  },
  header: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    paddingBottom: 40,
  },
  logoWrapper: {
    width: 170,                
    height: 170,
    backgroundColor: "#fff",
    borderRadius: 85,          
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",        
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    borderWidth: 8,
    borderColor: "rgba(255,255,255,0.3)",
  },
  logo: {
    width: "100%",             
    height: "100%",           
    transform: [{ scale: 1.6 }], 
  },
  welcomeText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 20,
  },
  formCard: {
    backgroundColor: "#fff",
    marginHorizontal: 45,
    marginTop: -50, // Biar card-nya agak naik menimpa header
    borderRadius: 30,
    padding: 30,
    elevation: 8, // Shadow untuk Android
    shadowColor: "#000", // Shadow untuk iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1E293B",
  },
  subtitle: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 30,
    marginTop: 5,
    lineHeight: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#475569",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#F1F5F9",
    padding: 15,
    borderRadius: 12,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  loginButton: {
    backgroundColor: "#0081C9",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerLink: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#64748B",
    fontSize: 14,
  },
  registerText: {
    color: "#0081C9",
    fontWeight: "bold",
  },
});
