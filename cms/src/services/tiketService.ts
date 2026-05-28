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
