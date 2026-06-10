import { apiRequest } from "../utils/api";

export interface OperationalDay {
  day: string;
  openTime: string;
  closeTime: string;
  isClosed: boolean;
}

export interface InfoWisata {
  id?: string;
  // Jam Operasional
  hours: OperationalDay[];
  // Lokasi & Kontak
  address: string;
  googleMapsUrl: string;
  phone: string;
  email: string;
  instagram: string;
  facebook: string;
  whatsapp: string;
}

export const DEFAULT_HOURS: OperationalDay[] = [
  { day: "Senin",  openTime: "08:00", closeTime: "17:00", isClosed: false },
  { day: "Selasa", openTime: "08:00", closeTime: "17:00", isClosed: false },
  { day: "Rabu",   openTime: "08:00", closeTime: "17:00", isClosed: false },
  { day: "Kamis",  openTime: "08:00", closeTime: "17:00", isClosed: false },
  { day: "Jumat",  openTime: "08:00", closeTime: "17:00", isClosed: false },
  { day: "Sabtu",  openTime: "07:30", closeTime: "18:00", isClosed: false },
  { day: "Minggu", openTime: "07:30", closeTime: "18:00", isClosed: false },
];

export const MOCK_INFO_WISATA: InfoWisata = {
  hours: DEFAULT_HOURS,
  address: "Jl. Raya Variasi No.1, Bandar Lampung, Lampung 35144, Indonesia",
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.9701831804364!2d105.25884947498427!3d-5.421453994558237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db72186985a9%3A0xe54d249f70d110!2sSlanik%20Waterpark!5e0!3m2!1sen!2sid!4v1713620000000!5m2!1sen!2sid",
  phone: "0812-3456-7890",
  email: "",
  instagram: "@slanikwaterpark",
  facebook: "Slanik Waterpark Official",
  whatsapp: "0812-3456-7890",
};

/**
 * Map backend InfoWisata record to frontend InfoWisata.
 * Backend stores hours as JSON string in kolom `jamOperasional`,
 * and contact fields as flat columns.
 */
export function mapToInfoWisata(backendData: any): InfoWisata {
  let hours: OperationalDay[] = DEFAULT_HOURS;
  if (backendData.jamOperasional) {
    try {
      const parsed = JSON.parse(backendData.jamOperasional);
      if (Array.isArray(parsed) && parsed.length === 7) {
        hours = parsed;
      }
    } catch (_) {
      // Keep default on parse error
    }
  }

  return {
    id: backendData.id ? String(backendData.id) : undefined,
    hours,
    address: backendData.alamat || MOCK_INFO_WISATA.address,
    googleMapsUrl: backendData.googleMapsUrl || MOCK_INFO_WISATA.googleMapsUrl,
    phone: backendData.telepon || MOCK_INFO_WISATA.phone,
    email: backendData.email || "",
    instagram: backendData.instagram || MOCK_INFO_WISATA.instagram,
    facebook: backendData.facebook || MOCK_INFO_WISATA.facebook,
    whatsapp: backendData.whatsapp || MOCK_INFO_WISATA.whatsapp,
  };
}

/**
 * Map frontend InfoWisata to backend DTO payload.
 */
export function mapToBackendInfo(info: InfoWisata) {
  return {
    jamOperasional: JSON.stringify(info.hours),
    alamat: info.address,
    googleMapsUrl: info.googleMapsUrl,
    telepon: info.phone,
    email: info.email,
    instagram: info.instagram,
    facebook: info.facebook,
    whatsapp: info.whatsapp,
  };
}
