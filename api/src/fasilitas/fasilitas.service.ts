import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFasilitasDto } from './dto/create-fasilitas.dto';
import { UpdateFasilitasDto } from './dto/update-fasilitas.dto';

@Injectable()
export class FasilitasService {
  constructor(private prisma: PrismaService) {}

  create(createFasilitasDto: CreateFasilitasDto) {
    return this.prisma.fasilitas.create({
      data: createFasilitasDto,
    });
  }

  findAll() {
    return this.prisma.fasilitas.findMany({
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.fasilitas.findUnique({
      where: { id },
    });
  }

  update(id: number, updateFasilitasDto: UpdateFasilitasDto) {
    return this.prisma.fasilitas.update({
      where: { id },
      data: updateFasilitasDto,
    });
  }

  remove(id: number) {
    return this.prisma.fasilitas.delete({
      where: { id },
    });
  }
}
