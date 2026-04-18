import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FasilitasService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.fasilitas.findMany();
  }
}
