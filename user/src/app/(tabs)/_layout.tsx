import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // 🌟 Mempercantik Header Atas (Top Navbar)
        headerStyle: {
          backgroundColor: '#1E88E5',
          elevation: 2, // Bayangan tebal ringan untuk Android
          shadowColor: '#000', // Bayangan untuk iOS
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
        },
        headerTintColor: '#ffffff',
        headerTitleAlign: 'center', // Bikin judul otomatis di tengah biar simetris
        headerTitleStyle: {
          fontWeight: '700', // Lebih bold tegas
          fontSize: 18,
          letterSpacing: 0.5, // Kasih jarak tipis antar huruf biar elegan
        },

        // 🌟 Rombak Total Tampilan Menu Bawah (Floating Tab Bar)
        tabBarStyle: {
          backgroundColor: '#ffffff',
          position: 'absolute',
          bottom: 16,  // Bikin melayang (floating) dari bawah layar
          left: 16,    // Kasih jarak kiri
          right: 16,   // Kasih jarak kanan
          height: 64,  // Tinggi yang pas dan proporsional
          borderRadius: 24, // Sudut melengkung penuh yang modern dan halus
          paddingBottom: Platform.OS === 'ios' ? 0 : 4,
          
          // Efek Bayangan Lembut Premium (Soft Shadow Box)
          ...Platform.select({
            ios: {
              shadowColor: '#0F172A',
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.12,
              shadowRadius: 16,
            },
            android: {
              elevation: 8,
            },
          }),
          borderTopWidth: 0, // Hapus garis batas tipis yang kaku di bagian atas
        },

        // Warna Icon & Teks saat Aktif vs Tidak Aktif
        tabBarActiveTintColor: '#1E88E5',
        tabBarInactiveTintColor: '#9CA3AF',
        
        // Desain Label Teks Menu
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
          marginBottom: 4,
        },
        tabBarIconStyle: {
          marginTop: 4,
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          headerTitle: 'SlanikGo',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="fasilitas"
        options={{
          title: 'Fasilitas',
          headerTitle: 'Daftar Fasilitas',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "water" : "water-outline"} size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="tiket"
        options={{
          title: 'Tiket',
          headerTitle: 'Informasi Tiket',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "ticket" : "ticket-outline"} size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="galeri"
        options={{
          title: 'Galeri',
          headerTitle: 'Galeri Wisata',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "images" : "images-outline"} size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="info"
        options={{
          title: 'Info',
          headerTitle: 'Info Layanan',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "information-circle" : "information-circle-outline"}
              size={23}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}