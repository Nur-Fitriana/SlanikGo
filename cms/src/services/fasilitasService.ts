import { apiRequest } from "../utils/api";

export interface Facility {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  status: "Aktif" | "Pemeliharaan" | "Tutup";
}

// Helper to map backend Fasilitas to frontend Facility with icon string parsing
export function mapToFacility(backendFasilitas: any): Facility {
  let category = "Wahana Air";
  let image = "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=400";
  let status: "Aktif" | "Pemeliharaan" | "Tutup" = "Aktif";

  if (backendFasilitas.ikon && backendFasilitas.ikon.trim().startsWith("{")) {
    try {
      const parsed = JSON.parse(backendFasilitas.ikon);
      category = parsed.category || "Wahana Air";
      image = parsed.image || image;
      status = parsed.status || "Aktif";
    } catch (e) {
      // Graceful fallback
    }
  }

  return {
    id: String(backendFasilitas.id),
    name: backendFasilitas.nama,
    category,
    description: backendFasilitas.deskripsi || "",
    image,
    status,
  };
}

// Helper to serialize frontend Facility into backend Fasilitas DTO
export function mapToBackendFasilitas(frontendFacility: Omit<Facility, "id">) {
  const serializedIcon = JSON.stringify({
    category: frontendFacility.category,
    image: frontendFacility.image,
    status: frontendFacility.status,
  });

  return {
    nama: frontendFacility.name,
    deskripsi: frontendFacility.description,
    ikon: serializedIcon,
  };
}

export const MOCK_FACILITIES: Facility[] = [
  {
    id: "1",
    name: "Olympic Pool",
    category: "Kolam Renang",
    description: "Kolam renang standar olimpiade dengan kedalaman 1.5m - 2m.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=400",
    status: "Aktif",
  },
  {
    id: "2",
    name: "Dragon Slide",
    category: "Wahana Air",
    description: "Perosotan air raksasa berbentuk naga dengan ketinggian 15 meter.",
    image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=400",
    status: "Aktif",
  },
  {
    id: "3",
    name: "Kids Playground",
    category: "Area Bermain",
    description: "Area bermain air khusus anak-anak dengan pancuran dan ember tumpah.",
    image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=400",
    status: "Aktif",
  },
];

// GET all facilities from NestJS API with local mock fallback if offline
export async function getAllFacilities(): Promise<Facility[]> {
  try {
    const data = await apiRequest<any[]>("/fasilitas");
    if (Array.isArray(data)) {
      return data.map(mapToFacility);
    }
    return MOCK_FACILITIES;
  } catch (error) {
    console.warn("Backend API offline or failed, using local MOCK_FACILITIES fallback. Details:", error);
    return MOCK_FACILITIES;
  }
}

