import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#0080FF',
      headerShown: true, // Menampilkan judul di atas
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="fasilitas"
        options={{
          title: 'Wahana',
          tabBarIcon: ({ color }) => <Ionicons name="water" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="tiket"
        options={{
          title: 'Tiket',
          tabBarIcon: ({ color }) => <Ionicons name="ticket" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="galeri"
        options={{
          title: 'Galeri',
          tabBarIcon: ({ color }) => <Ionicons name="images" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: 'Info',
          tabBarIcon: ({ color }) => <Ionicons name="information-circle" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}