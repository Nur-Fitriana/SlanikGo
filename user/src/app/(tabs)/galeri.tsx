import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Data Akurat & Lengkap 100% Berdasarkan Menu Dropdown Website Slanik Waterpark
const DATA_GALERI = [
  // ==================== KATEGORI: WAHANA (15 Wahana Lengkap) ====================
  {
    id: "w1",
    title: "Octopus Kids Fun",
    category: "Wahana",
    desc: "Kolam bermain air yang dirancang khusus dan sangat aman untuk anak-anak, dilengkapi dengan berbagai dekorasi gurita yang ceria, perosotan mini, dan pancuran air interaktif.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "w2",
    title: "Dragon River",
    category: "Wahana",
    desc: "Wahana kolam arus santai yang membawa pengunjung hanyut menyusuri aliran air yang asri berhiaskan replika gua naga yang eksotis nan misterius.",
    image: "https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "w3",
    title: "Fast2Furious",
    category: "Wahana",
    desc: "Seluncuran air spiral ganda dengan ketinggian ekstrem mencapai 25 meter. Wahana ini siap memacu adrenalin tertinggi para pecinta tantangan.",
    image: "https://images.unsplash.com/photo-1562591176-a24128f090b8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "w4",
    title: "Crazy Slide",
    category: "Wahana",
    desc: "Seluncuran air lurus berkecepatan tinggi dengan tiga lintasan jalur berdampingan, sangat pas untuk ajang balapan seluncur bersama sahabat maupun keluarga.",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "w5",
    title: "Olympic Pool",
    category: "Wahana",
    desc: "Kolam renang dengan ukuran standar semi-olimpiade yang luas dan berkedalaman pas, ditujukan khusus bagi pengunjung yang ingin fokus berolahraga renang.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "w6",
    title: "Krakatau Wave",
    category: "Wahana",
    desc: "Wahana kolam ombak buatan ikonik Slanik yang memberikan sensasi terombang-ambing seru layaknya berada di pantai lepas, lengkap dengan pengawasan lifeguard.",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "w7",
    title: "Banji Trampolin",
    category: "Wahana",
    desc: "Wahana rekreasi non-air yang memicu adrenalin, di mana pengunjung dewasa bisa melompat bebas tinggi di udara menggunakan tali safety bungee dan trampolin khusus.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "w8",
    title: "Kids Trampoline",
    category: "Wahana",
    desc: "Area bermain trampolin yang empuk, menyenangkan, dan aman, khusus disediakan untuk melatih motorik aktif serta keceriaan anak-anak.",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "w9",
    title: "Kereta Gantung (Cable Car)",
    category: "Wahana",
    desc: "Wahana gantung ikonik yang melintasi area Slanik, menyajikan pemandangan indah seluruh lanskap waterpark dari ketinggian udara bagi keluarga.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "w10",
    title: "Fun Walker",
    category: "Wahana",
    desc: "Wahana petualangan luar ruangan berjalan di atas jembatan jaring tali khusus yang seru dan menantang dalam melatih keseimbangan tubuh.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "w11",
    title: "Siger Crane",
    category: "Wahana",
    desc: "Wahana edukatif anak bertema simulasi pengoperasian alat berat mini dengan sentuhan ornamen Siger megah khas adat Provinsi Lampung.",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "w12",
    title: "Banteng Ngamuk",
    category: "Wahana",
    desc: "Mekanikal wahana banteng gila (rodeo ride) menantang yang menuntut ketangkasan pengunjung untuk bertahan di atas punggung banteng mekanik selama mungkin.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "w13",
    title: "Candi Belah",
    category: "Wahana",
    desc: "Spot bangunan tematik berarsitektur gapura candi terbelah kuno yang megah, menjadi salah satu latar belakang foto favorit para pengunjung.",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "w14",
    title: "Sepeda Layang",
    category: "Wahana",
    desc: "Wahana atraksi sepeda gantung di atas rel udara yang memadukan aktivitas olahraga bersepeda dengan pemandangan lanskap Slanik yang memukau.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "w15",
    title: "Pesta Busa (Foam Party Area)",
    category: "Wahana",
    desc: "Sensasi keseruan mandi semburan busa salju massal ramah anak di kolam utama, rutin diselenggarakan setiap akhir pekan dan hari libur nasional.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
  },

  // ==================== KATEGORI: KULINER (4 Food & Drink) ====================
  {
    id: "k1",
    title: "Slanik Pujasera",
    category: "Kuliner",
    desc: "Pusat food court utama Slanik yang menyediakan aneka gerai/counter makanan variatif mulai dari ayam katsu, bakso, mi ayam, ketoprak, hingga pecel lele dengan harga terjangkau.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "k2",
    title: "Snack Bar",
    category: "Kuliner",
    desc: "Kedai makanan cepat saji pendukung yang menjual aneka ragam jajanan pasar tradisional khas Indonesia, sosis bakar, dan minuman segar.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "k3",
    title: "Slanik Cafe",
    category: "Kuliner",
    desc: "Tempat bersantai estetik dengan atmosfer nyaman untuk menikmati seduhan kopi hangat, jus buah segar, serta aneka hidangan penutup yang manis.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "k4",
    title: "Bagor Cafe",
    category: "Kuliner",
    desc: "Cafe pelengkap khusus yang menyajikan menu andalan bakso goreng renyah bumbu pedas hot dan aneka jajanan kekinian favorit remaja.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
  },

  // ==================== KATEGORI: TOKO (2 Shop & Souvenir) ====================
  {
    id: "t1",
    title: "Slanik Shop",
    category: "Toko",
    desc: "Toko perlengkapan berenang yang menyediakan pakaian renang pria/wanita/anak-anak, kacamata renang, ban pelampung, hingga kantong pelindung smartphone anti air.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "t2",
    title: "Slanik Souvenir",
    category: "Toko",
    desc: "Pusat oleh-oleh dan merchandise resmi Slanik Waterpark yang menjual pernak-pernik unik, gantungan kunci, cinderamata, hingga kaos seragam khas Slanik.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
  },

  // ==================== KATEGORI: FASILITAS (8 Service Lengkap) ====================
  {
    id: "f1",
    title: "Musola Slanik",
    category: "Fasilitas",
    desc: "Fasilitas rumah ibadah umat muslim yang terjaga kebersihannya, sejuk, dan tenang, lengkap dengan area tempat wudu pria dan wanita terpisah.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "f2",
    title: "Free WiFi Area",
    category: "Fasilitas",
    desc: "Akses jaringan internet nirkabel gratis berkecepatan tinggi yang tersebar di titik-titik kumpul strategis untuk menunjang kenyamanan pengunjung.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "f3",
    title: "Parkir Area Luas",
    category: "Fasilitas",
    desc: "Lahan parkir terbuka yang sangat luas, rapi, dan dijaga ketat oleh petugas keamanan, mampu menampung ratusan kendaraan roda dua, mobil pribadi, hingga bus pariwisata.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "f4",
    title: "Gazebo Keluarga",
    category: "Fasilitas",
    desc: "Pondokan pondok kayu teduh disewakan di sekeliling area kolam sebagai tempat beristirahat, berkumpul keluarga, dan menaruh barang bawaan selama berwisata.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "f5",
    title: "Secure Lockers",
    category: "Fasilitas",
    desc: "Fasilitas tempat penitipan barang berharga berupa barisan loker dengan kunci pengaman terjamin, agar pengunjung dapat berenang tanpa rasa cemas.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "f6",
    title: "CCTV 24 Jam",
    category: "Fasilitas",
    desc: "Sistem kamera pengawas keamanan terintegrasi yang aktif memantau 24 jam penuh di seluruh penjuru sudut area wisata demi menjamin keselamatan bersama.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "f7",
    title: "Pendopo Santai",
    category: "Fasilitas",
    desc: "Gedung pendopo panggung terbuka semi-tradisional berukuran besar yang ideal dijadikan lokasi berkumpul rombongan wisata atau gathering komunitas.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "f8",
    title: "GSG Slanik",
    category: "Fasilitas",
    desc: "Gedung Serba Guna berkapasitas besar berbentuk ruangan tertutup (indoor) yang dapat disewa pengunjung untuk keperluan gathering instansi, rapat, hingga acara formal.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
  },
];

const KATEGORI_TABS = ["Semua", "Wahana", "Kuliner", "Toko", "Fasilitas"];

export default function GaleriScreen() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [fotoDetail, setFotoDetail] = useState<typeof DATA_GALERI[0] | null>(null);

  // Filter data berdasarkan chip kategori yang sedang ditekan
  const dataTersaring = kategoriAktif === "Semua"
    ? DATA_GALERI
    : DATA_GALERI.filter(item => item.category === kategoriAktif);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Statis */}
      <View style={styles.header}>
        <Ionicons name="images" size={32} color="#FFF" />
        <Text style={styles.headerTitle}>Galeri Slanik</Text>
        <Text style={styles.headerSubtitle}>
          Eksplorasi seluruh wahana &amp; akomodasi resmi Slanik Waterpark
        </Text>
      </View>

      {/* Bar Kategori Horizontal yang Bisa Digeser */}
      <View style={styles.filterOuterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterContainer}>
          {KATEGORI_TABS.map((kat) => (
            <TouchableOpacity
              key={kat}
              style={[styles.chip, kategoriAktif === kat && styles.chipAktif]}
              onPress={() => setKategoriAktif(kat)}
            >
              <Text style={[styles.chipText, kategoriAktif === kat && styles.chipTextAktif]}>
                {kat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Grid List Foto Konten */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>
            📸 Kategori {kategoriAktif} ({dataTersaring.length} Item Tersedia)
          </Text>

          <View style={styles.grid}>
            {dataTersaring.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.cardImage}
                activeOpacity={0.8}
                onPress={() => setFotoDetail(item)}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
                  <Text style={styles.cardTag}>#{item.category}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Lightbox Modal Detail Informasi Objek Foto */}
      <Modal visible={fotoDetail !== null} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          {fotoDetail && (
            <View style={styles.modalContent}>
              <TouchableOpacity 
                style={styles.closeButton} 
                onPress={() => setFotoDetail(null)}
              >
                <Ionicons name="close-circle" size={32} color="#0EA5E9" />
              </TouchableOpacity>

              <Image source={{ uri: fotoDetail.image }} style={styles.modalImage} />
              
              <View style={styles.modalTextContainer}>
                <Text style={styles.modalTag}>Layanan Resmi - {fotoDetail.category}</Text>
                <Text style={styles.modalTitle}>{fotoDetail.title}</Text>
                <Text style={styles.modalDesc}>{fotoDetail.desc}</Text>
              </View>
            </View>
          )}
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  header: {
    backgroundColor: "#0EA5E9",
    paddingTop: 30,
    paddingBottom: 25,
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "800",
    marginTop: 8,
  },
  headerSubtitle: {
    color: "#E0F2FE",
    marginTop: 4,
    fontSize: 12,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  filterOuterContainer: {
    backgroundColor: "#F8FAFC",
    paddingVertical: 12,
  },
  filterContainer: {
    paddingHorizontal: 20,
    gap: 8,
  },
  chip: {
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  chipAktif: {
    backgroundColor: "#0EA5E9",
    borderColor: "#0EA5E9",
  },
  chipText: {
    color: "#64748B",
    fontWeight: "600",
    fontSize: 13,
  },
  chipTextAktif: {
    color: "#FFF",
    fontWeight: "700",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  content: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 15,
    color: "#0F172A",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardImage: {
    width: "48%",
    backgroundColor: "#FFF",
    borderRadius: 16,
    marginBottom: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  image: {
    width: "100%",
    height: 110,
    resizeMode: "cover",
  },
  cardInfo: {
    padding: 8,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E293B",
  },
  cardTag: {
    fontSize: 11,
    color: "#0EA5E9",
    fontWeight: "600",
    marginTop: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.75)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 24,
    width: "100%",
    maxWidth: 380,
    overflow: "hidden",
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 10,
    backgroundColor: "#FFF",
    borderRadius: 16,
  },
  modalImage: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
  },
  modalTextContainer: {
    padding: 20,
  },
  modalTag: {
    color: "#0EA5E9",
    fontWeight: "700",
    fontSize: 11,
    marginBottom: 4,
    textTransform: "uppercase",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 8,
  },
  modalDesc: {
    fontSize: 13,
    color: "#475569",
    lineHeight: 18,
  },
});