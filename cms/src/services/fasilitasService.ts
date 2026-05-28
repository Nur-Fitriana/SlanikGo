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
