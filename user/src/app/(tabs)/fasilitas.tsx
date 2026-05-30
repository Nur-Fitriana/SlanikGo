import React from "react";
import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
// Import data lokal buatan kita
import { FASILITAS_DATA } from "../../constants/slanikData"; 

export default function FasilitasScreen() {
  return (
    <ScrollView>
      {/* ... bagian hero banner ... */}
      
      {FASILITAS_DATA.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card}>
          {/* Tampilkan data dari item konstanta */}
          <Text>{item.nama}</Text> 
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}