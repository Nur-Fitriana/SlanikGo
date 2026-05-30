import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { wisataAxiosInstance } from './instances/wisata.instance';

@Injectable()
export class WisataInstancesService {
  private readonly httpClient = wisataAxiosInstance;

  // Contoh fungsi untuk mengambil data wisata dari microservice sebelah
  async getSharedWisataData(endpoint: string, params?: any) {
    try {
      const response = await this.httpClient.get(endpoint, { params });
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 404) {
        throw new NotFoundException('Data di layanan Wisata tidak ditemukan');
      }
      throw new InternalServerErrorException(
        error.message || 'Gagal berkomunikasi dengan layanan Wisata',
      );
    }
  }

  // Contoh fungsi untuk mengirim data ke microservice sebelah
  async postSharedWisataData(endpoint: string, data: any) {
    try {
      const response = await this.httpClient.post(endpoint, data);
      return response.data;
    } catch (error: any) {
      throw new InternalServerErrorException(
        error.message || 'Gagal mengirim data ke layanan Wisata',
      );
    }
  }
}
