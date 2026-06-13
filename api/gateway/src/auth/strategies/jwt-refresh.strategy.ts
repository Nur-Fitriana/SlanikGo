// jwt-refresh.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';

// 1. Definisikan interface untuk payload Refresh Token agar terhindar dari error 'any'
interface JwtRefreshPayload {
  sub: string;
  username: string;
  // Tambahkan property lain di sini jika ada di dalam token Anda
}

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'SECRET_REFRESH_KEY', // Ganti dengan env variable Anda
      passReqToCallback: true,
    });
  }

  // 2. Gunakan interface JwtRefreshPayload dan hapus kata kunci 'async'
  validate(req: Request, payload: JwtRefreshPayload) {
    const refreshToken = req
      .get('Authorization')
      ?.replace('Bearer ', '')
      .trim();

    return {
      userId: payload.sub,
      username: payload.username,
      refreshToken,
    };
  }
}
