import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(loginAuthDto: LoginAuthDto) {
    const { username, password } = loginAuthDto;

    // --- BAGIAN GENERATOR HASH (Hapus ini setelah login berhasil) ---
    const salt = await bcrypt.genSalt(10);
    const manualHash = await bcrypt.hash('password123', salt);
    console.log('--------------------------------------------------');
    console.log('COPY KODE HASH DI BAWAH INI KE PRISMA STUDIO:');
    console.log(manualHash);
    console.log('--------------------------------------------------');
    // ----------------------------------------------------------------

    const admin = await this.prisma.admin.findUnique({
      where: { username },
    });

    if (!admin) {
      throw new UnauthorizedException('Username atau password salah');
    }

    // Pastikan admin.password ada isinya sebelum di compare
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      console.log('HASIL COMPARE: False (Password tidak cocok)');
      throw new UnauthorizedException('Username atau password salah');
    }

    return {
      success: true,
      message: 'Login berhasil',
      data: {
        id: admin.id,
        username: admin.username,
      },
    };
  }
}
