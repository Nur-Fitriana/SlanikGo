import { apiRequest } from "../utils/api";

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  order: number;
}

export const MOCK_GALLERY: GalleryPhoto[] = [
  { id: "1", url: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=600", caption: "Dragon Slide", order: 1 },
  { id: "2", url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=600", caption: "Olympic Pool Area", order: 2 },
  { id: "3", url: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=600", caption: "Kids Zone Splash", order: 3 },
  { id: "4", url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=600", caption: "Main Entrance", order: 4 },
];

// Mapper to map backend Galeri to frontend GalleryPhoto
export function mapToGalleryPhoto(backendGaleri: any): GalleryPhoto {
  return {
    id: String(backendGaleri.id),
    url: backendGaleri.gambarUrl,
    caption: backendGaleri.caption || backendGaleri.judul || "",
    order: Number(backendGaleri.urutan) || 0,
  };
}

// Mapper to map frontend GalleryPhoto to backend payload
export function mapToBackendGaleri(frontendPhoto: Omit<GalleryPhoto, "id">) {
  return {
    judul: frontendPhoto.caption || "Foto Galeri",
    gambarUrl: frontendPhoto.url,
    caption: frontendPhoto.caption,
    urutan: Number(frontendPhoto.order) || 0,
  };
}

// GET all gallery photos from NestJS API with local fallback
export async function getAllGallery(): Promise<GalleryPhoto[]> {
  try {
    const data = await apiRequest<any[]>("/galeri");
    if (Array.isArray(data)) {
      return data.map(mapToGalleryPhoto).sort((a, b) => a.order - b.order);
    }
    return MOCK_GALLERY;
  } catch (error) {
    console.warn("Backend API offline or failed, using local MOCK_GALLERY fallback. Details:", error);
    return MOCK_GALLERY;
  }
}

// POST a new photo to NestJS API with local fallback
export async function createGallery(photo: Omit<GalleryPhoto, "id">): Promise<GalleryPhoto> {
  try {
    const backendData = mapToBackendGaleri(photo);
    const response = await apiRequest<any>("/galeri", {
      method: "POST",
      body: JSON.stringify(backendData),
    });
    return mapToGalleryPhoto(response);
  } catch (error) {
    console.warn("Backend API offline or failed, simulating gallery creation locally. Details:", error);
    return {
      ...photo,
      id: String(Date.now()),
    };
  }
}
// PATCH (update) an existing gallery photo in NestJS API with local fallback
export async function updateGallery(id: string, photo: Partial<GalleryPhoto>): Promise<GalleryPhoto> {
  try {
    const backendData: any = {};
    if (photo.url !== undefined) backendData.gambarUrl = photo.url;
    if (photo.caption !== undefined) {
      backendData.caption = photo.caption;
      backendData.judul = photo.caption;
    }
    if (photo.order !== undefined) backendData.urutan = Number(photo.order);

    const response = await apiRequest<any>(`/galeri/${id}`, {
      method: "PATCH",
      body: JSON.stringify(backendData),
    });
    return mapToGalleryPhoto(response);
  } catch (error) {
    console.warn(`Backend API offline or failed, simulating gallery update locally for ID ${id}. Details:`, error);
    return {
      id,
      url: photo.url || "",
      caption: photo.caption || "",
      order: photo.order || 0,
      ...photo,
    } as GalleryPhoto;
  }
}
