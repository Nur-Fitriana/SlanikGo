import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginGatewayDto } from './dto/login-gateway.dto';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';
import type { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginGatewayDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  async register(@Body() registerDto: any) {
    return this.authService.register(registerDto);
  }

  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  async refresh(@Req() req: Request) {
    const user = (req as any).user;
    return this.authService.refreshTokens(user.sub, user.username);
  }
}