import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { wisataAxiosInstance } from './instances/wisata.instance';
import axios from 'axios';

@Injectable()
export class WisataInstancesService {
  private readonly httpClient = wisataAxiosInstance;

  // Mengubah params?: any menjadi Record<string, unknown> agar lebih aman secara type-safety
  async getSharedWisataData(
    endpoint: string,
    params?: Record<string, unknown>,
  ) {
    try {
      const response = await this.httpClient.get<unknown>(endpoint, { params });
      return response.data;
    } catch (error: unknown) {
      // Memeriksa apakah error berasal dari Axios
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          throw new NotFoundException('Data di layanan Wisata tidak ditemukan');
        }
        throw new InternalServerErrorException(
          error.message || 'Gagal berkomunikasi dengan layanan Wisata',
        );
      }

      // Fallback untuk error JavaScript standar non-Axios
      throw new InternalServerErrorException(
        error instanceof Error
          ? error.message
          : 'Gagal berkomunikasi dengan layanan Wisata',
      );
    }
  }

  // Mengubah data: any menjadi unknown
  async postSharedWisataData(endpoint: string, data: unknown) {
    try {
      const response = await this.httpClient.post<unknown>(endpoint, data);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw new InternalServerErrorException(
          error.message || 'Gagal mengirim data ke layanan Wisata',
        );
      }

      throw new InternalServerErrorException(
        error instanceof Error
          ? error.message
          : 'Gagal mengirim data ke layanan Wisata',
      );
    }
  }
}
