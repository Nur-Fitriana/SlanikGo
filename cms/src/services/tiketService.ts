import { apiRequest } from "../utils/api";

export interface TicketPrice {
  id: string;
  category: string; // Dewasa, Anak, Lansia, dll
  type: "Weekday" | "Weekend" | "Paket";
  price: number;
  promoPrice?: number;
  isPromoActive: boolean;
  description: string;
}

export const MOCK_TICKETS: TicketPrice[] = [
  {
    id: "1",
    category: "Dewasa",
    type: "Weekday",
    price: 35000,
    isPromoActive: false,
    description: "Tiket standar hari biasa (Senin - Jumat)",
  },
  {
    id: "2",
    category: "Anak-anak",
    type: "Weekday",
    price: 25000,
    isPromoActive: true,
    promoPrice: 20000,
    description: "Tiket anak (tinggi badan di bawah 120cm)",
  },
  {
    id: "3",
    category: "Dewasa",
    type: "Weekend",
    price: 50000,
    isPromoActive: false,
    description: "Tiket akhir pekan & hari libur nasional",
  },
  {
    id: "4",
    category: "Anak-anak",
    type: "Weekend",
    price: 35000,
    isPromoActive: false,
    description: "Tiket anak akhir pekan",
  },
  {
    id: "5",
    category: "Paket Keluarga",
    type: "Paket",
    price: 150000,
    isPromoActive: true,
    promoPrice: 135000,
    description: "Paket 2 Dewasa + 2 Anak (Free 2 Softdrink)",
  },
];

// Helper to map backend Tiket to frontend TicketPrice with fallback parsing
export function mapToTicketPrice(backendTiket: any): TicketPrice {
  let description = backendTiket.deskripsi || "";
  let type: "Weekday" | "Weekend" | "Paket" = "Weekday";
  let promoPrice: number | undefined = undefined;
  let isPromoActive = false;

  if (backendTiket.deskripsi && backendTiket.deskripsi.trim().startsWith("{")) {
    try {
      const parsed = JSON.parse(backendTiket.deskripsi);
      description = parsed.description || "";
      type = parsed.type || "Weekday";
      promoPrice = parsed.promoPrice !== undefined ? Number(parsed.promoPrice) : undefined;
      isPromoActive = !!parsed.isPromoActive;
    } catch (e) {
      // Graceful fallback if the description isn't JSON
    }
  }

  return {
    id: String(backendTiket.id),
    category: backendTiket.kategori,
    type,
    price: Number(backendTiket.harga),
    promoPrice,
    isPromoActive,
    description,
  };
}

// Helper to map frontend TicketPrice to backend DTO structure
export function mapToBackendTiket(frontendTicket: Omit<TicketPrice, "id">) {
  const serializedDesc = JSON.stringify({
    description: frontendTicket.description,
    type: frontendTicket.type,
    promoPrice: frontendTicket.promoPrice,
    isPromoActive: frontendTicket.isPromoActive,
  });

  return {
    kategori: frontendTicket.category,
    harga: Number(frontendTicket.price),
    deskripsi: serializedDesc,
  };
}

// GET all tickets from NestJS API with local mock fallback if offline
export async function getAllTickets(): Promise<TicketPrice[]> {
  try {
    const data = await apiRequest<any[]>("/tiket");
    if (Array.isArray(data)) {
      return data.map(mapToTicketPrice);
    }
    return MOCK_TICKETS;
  } catch (error) {
    console.warn("Backend API offline or failed, using local MOCK_TICKETS fallback. Details:", error);
    return MOCK_TICKETS;
  }
}

// POST a new ticket category to NestJS API with local fallback
export async function createTicket(ticket: Omit<TicketPrice, "id">): Promise<TicketPrice> {
  try {
    const backendData = mapToBackendTiket(ticket);
    const response = await apiRequest<any>("/tiket", {
      method: "POST",
      body: JSON.stringify(backendData),
    });
    return mapToTicketPrice(response);
  } catch (error) {
    console.warn("Backend API offline or failed, simulating create locally. Details:", error);
    return {
      ...ticket,
      id: String(Date.now()),
    };
  }
}


