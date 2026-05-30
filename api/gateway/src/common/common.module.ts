import { Module, Global } from '@nestjs/common';
import { WisataInstancesService } from './wisata.instances';

// Menggunakan @Global() opsional, jika ingin modul common ini langsung otomatis dapat diakses
// di seluruh aplikasi tanpa perlu di-import berulang kali di modul lain.
@Global()
@Module({
  providers: [WisataInstancesService],
  exports: [WisataInstancesService], // Wajib di-export agar service bisa digunakan di luar modul ini
})
export class CommonModule {}
