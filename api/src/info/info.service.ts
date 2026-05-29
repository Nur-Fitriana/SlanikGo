import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';

@Injectable()
export class InfoService {
  constructor(private prisma: PrismaService) {}

  create(createInfoDto: CreateInfoDto) {
    return this.prisma.infoWisata.create({
      data: createInfoDto,
    });
  }

  findAll() {
    return this.prisma.infoWisata.findMany({
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.infoWisata.findUnique({
      where: { id },
    });
  }

  update(id: number, updateInfoDto: UpdateInfoDto) {
    return this.prisma.infoWisata.update({
      where: { id },
      data: updateInfoDto,
    });
  }

  remove(id: number) {
    return this.prisma.infoWisata.delete({
      where: { id },
    });
  }
}
