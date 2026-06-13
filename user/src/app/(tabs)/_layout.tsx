import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform, Dimensions, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get("window");

export default function TabLayout() {
  const isWeb = width > 768;

  return (
    <Tabs
      screenOptions={{
        headerShown: false, 
        // 🎨 Kustomisasi Wadah Utama Tab Bar
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          position: 'absolute',
          bottom: isWeb ? 24 : 16,  
          left: isWeb ? '25%' : 16,    
          right: isWeb ? '25%' : 16,   
          height: 72,  // Sedikit ditinggikan agar proporsional dengan efek pil
          borderRadius: 24, 
          paddingBottom: Platform.OS === 'ios' ? 4 : 12,
          paddingTop: 10,
          borderWidth: 1,
          borderColor: 'rgba(2, 132, 199, 0.15)', // Border glossy biru transparan
          zIndex: 99,
          ...Platform.select({
            ios: {
              shadowColor: '#0284C7',
              shadowOffset: { width: 0, height: 12 },
              shadowOpacity: 0.12,
              shadowRadius: 24,
            },
            android: {
              elevation: 12,
            },
            web: {
              boxShadow: '0px 16px 40px rgba(2, 132, 199, 0.15)',
            }
          }),
        },
        tabBarActiveTintColor: '#0284C7', // Biru Cerah Slanik Waterpark
        tabBarInactiveTintColor: '#94A3B8', // Abu-abu Slate kalem
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
          marginTop: 6,
          letterSpacing: 0.3,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconWrapper, focused && styles.activeIconWrapper]}>
              <Ionicons name={focused ? "grid" : "grid-outline"} size={20} color={focused ? '#FFFFFF' : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="fasilitas"
        options={{
          title: 'Fasilitas',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconWrapper, focused && styles.activeIconWrapper]}>
              <Ionicons name={focused ? "water" : "water-outline"} size={21} color={focused ? '#FFFFFF' : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="tiket"
        options={{
          title: 'Tiket',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconWrapper, focused && styles.activeIconWrapper]}>
              <Ionicons name={focused ? "ticket" : "ticket-outline"} size={20} color={focused ? '#FFFFFF' : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="galeri"
        options={{
          title: 'Galeri',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconWrapper, focused && styles.activeIconWrapper]}>
              <Ionicons name={focused ? "images" : "images-outline"} size={20} color={focused ? '#FFFFFF' : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: 'Info',
          tabBarIcon: ({ color, focused }) => (
            <View style={[styles.iconWrapper, focused && styles.activeIconWrapper]}>
              <Ionicons name={focused ? "information-circle" : "information-circle-outline"} size={21} color={focused ? '#FFFFFF' : color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

// 💅 Style Kustom Tambahan untuk Efek Bubble/Pill Indicator
const styles = StyleSheet.create({
  iconWrapper: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  activeIconWrapper: {
    backgroundColor: '#0284C7', // Mengubah background ikon aktif menjadi pil biru cerah
    // Efek bayangan halus khusus untuk ikon yang sedang aktif
    ...Platform.select({
      ios: {
        shadowColor: '#0284C7',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: '0px 4px 10px rgba(2, 132, 199, 0.3)',
      }
    }),
  }
});