import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGaleriDto } from './dto/create-galeri.dto';
import { UpdateGaleriDto } from './dto/update-galeri.dto';

@Injectable()
export class GaleriService {
  constructor(private prisma: PrismaService) {}

  create(createGaleriDto: CreateGaleriDto) {
    return this.prisma.galeri.create({
      data: createGaleriDto,
    });
  }

  findAll() {
    return this.prisma.galeri.findMany({
      orderBy: { urutan: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.galeri.findUnique({
      where: { id },
    });
  }

  update(id: number, updateGaleriDto: UpdateGaleriDto) {
    return this.prisma.galeri.update({
      where: { id },
      data: updateGaleriDto,
    });
  }

  remove(id: number) {
    return this.prisma.galeri.delete({
      where: { id },
    });
  }
}
