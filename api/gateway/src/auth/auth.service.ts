import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginGatewayDto } from './dto/login-gateway.dto';

// Variabel penyimpanan memori server (pasti aktif selama server NestJS hidup)
export const backendMemoryStorage = {
  username: '',
  password: '',
};

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(loginDto: LoginGatewayDto) {
    const reqUser = loginDto.username.trim().toLowerCase();
    const reqPass = loginDto.password;

    if (
      (reqUser === 'admin' && reqPass === 'password') ||
      (backendMemoryStorage.username &&
        reqUser === backendMemoryStorage.username &&
        reqPass === backendMemoryStorage.password)
    ) {
      const payload = { username: reqUser, sub: reqUser === 'admin' ? 1 : 99 };
      return this.generateTokens(payload);
    }
    throw new UnauthorizedException('Username atau password salah');
  }

  async register(registerDto: any) {
    if (!registerDto.username || !registerDto.password) {
      throw new UnauthorizedException('Data registrasi tidak lengkap');
    }

    // Simpan ke memori backend dengan format huruf kecil agar sinkron
    backendMemoryStorage.username = registerDto.username.trim().toLowerCase();
    backendMemoryStorage.password = registerDto.password;

    return {
      statusCode: 201,
      message: 'Registrasi akun berhasil disimpan di memori server NestJS!',
    };
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
    return this.generateTokens({ username, sub: userId });
  }
}
