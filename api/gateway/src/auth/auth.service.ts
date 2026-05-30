// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginGatewayDto } from './dto/login-gateway.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: LoginGatewayDto) {
    // Validasi user dummy (Ganti dengan pengecekan database Anda)
    if (loginDto.username === 'admin' && loginDto.password === 'password') {
      const payload = { username: loginDto.username, sub: 1 };

      return this.generateTokens(payload);
    }
    throw new UnauthorizedException('Username atau password salah');
  }

  async generateTokens(payload: { username: string; sub: number }) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: 'SECRET_ACCESS_KEY',
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(payload, {
        secret: 'SECRET_REFRESH_KEY',
        expiresIn: '7d',
      }),
    ]);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async refreshTokens(userId: number, username: string) {
    // Di sini Anda bisa memvalidasi ulang refresh token ke database jika disimpan
    return this.generateTokens({ username, sub: userId });
  }
}
