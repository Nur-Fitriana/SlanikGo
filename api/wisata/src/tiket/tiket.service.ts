import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTiketDto } from './dto/create-tiket.dto';
import { UpdateTiketDto } from './dto/update-tiket.dto';

@Injectable()
export class TiketService {
  constructor(private prisma: PrismaService) {}

  create(createTiketDto: CreateTiketDto) {
    return this.prisma.tiket.create({
      data: createTiketDto,
    });
  }

  findAll() {
    return this.prisma.tiket.findMany({
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.tiket.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTiketDto: UpdateTiketDto) {
    return this.prisma.tiket.update({
      where: { id },
      data: updateTiketDto,
    });
  }

  remove(id: number) {
    return this.prisma.tiket.delete({
      where: { id },
    });
  }
}
