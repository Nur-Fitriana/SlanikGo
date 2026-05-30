// auth.guard.ts (Guard opsional/kombinasi jika diperlukan)
import { Injectable } from '@nestjs/common';
import { JwtAccessGuard } from './jwt-access.guard';

@Injectable()
export class AuthGuardDefault extends JwtAccessGuard {}
