import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1E88E5',
        },

        headerTintColor: '#fff',

        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },

        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
        },

        tabBarActiveTintColor: '#1E88E5',
        tabBarInactiveTintColor: '#9CA3AF',

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          headerTitle: 'SlanikGo',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="fasilitas"
        options={{
          title: 'Wahana',
          headerTitle: 'Daftar Wahana',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="water" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="tiket"
        options={{
          title: 'Tiket',
          headerTitle: 'Informasi Tiket',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ticket" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="galeri"
        options={{
          title: 'Galeri',
          headerTitle: 'Galeri Wisata',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="images" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="info"
        options={{
          title: 'Info',
          headerTitle: 'Info Layanan',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}