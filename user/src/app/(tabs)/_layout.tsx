import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

export default function TabLayout() {
  const isWeb = width > 768;

  return (
    <Tabs
      screenOptions={{
        headerShown: false, 
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          position: 'absolute',
          bottom: isWeb ? 24 : 16,  
          left: isWeb ? '25%' : 16,    
          right: isWeb ? '25%' : 16,   
          height: 66,  
          borderRadius: 22, 
          paddingBottom: Platform.OS === 'ios' ? 0 : 8,
          paddingTop: 8,
          borderWidth: 0,
          zIndex: 99,
          ...Platform.select({
            ios: {
              shadowColor: '#1E293B',
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.08,
              shadowRadius: 20,
            },
            android: {
              elevation: 10,
            },
            web: {
              boxShadow: '0px 12px 32px rgba(30, 41, 59, 0.12)',
            }
          }),
        },
        tabBarActiveTintColor: '#0284C7',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
          marginTop: 4,
          letterSpacing: 0.2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "grid" : "grid-outline"} size={21} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="fasilitas"
        options={{
          title: 'Fasilitas',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "water" : "water-outline"} size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tiket"
        options={{
          title: 'Tiket',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "ticket" : "ticket-outline"} size={21} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="galeri"
        options={{
          title: 'Galeri',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "images" : "images-outline"} size={21} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: 'Info',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "information-circle" : "information-circle-outline"} size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}