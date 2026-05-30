import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGaleriDto } from './dto/create-galeri.dto';
import { UpdateGaleriDto } from './dto/update-galeri.dto';

@Injectable()
export class GaleriService {
  private galeri = [];

  create(createGaleriDto: CreateGaleriDto) {
    const newGaleri = {
      id: Date.now(),
      ...createGaleriDto,
    };
    this.galeri.push(newGaleri);
    return newGaleri;
  }

  findAll() {
    return this.galeri;
  }

  findOne(id: number) {
    const item = this.galeri.find((g) => g.id === id);
    if (!item)
      throw new NotFoundException(`Galeri dengan ID ${id} tidak ditemukan`);
    return item;
  }

  update(id: number, updateGaleriDto: UpdateGaleriDto) {
    const itemIndex = this.galeri.findIndex((g) => g.id === id);
    if (itemIndex === -1)
      throw new NotFoundException(`Galeri dengan ID ${id} tidak ditemukan`);

    this.galeri[itemIndex] = { ...this.galeri[itemIndex], ...updateGaleriDto };
    return this.galeri[itemIndex];
  }

  remove(id: number) {
    const itemIndex = this.galeri.findIndex((g) => g.id === id);
    if (itemIndex === -1)
      throw new NotFoundException(`Galeri dengan ID ${id} tidak ditemukan`);

    const deleted = this.galeri[itemIndex];
    this.galeri.splice(itemIndex, 1);
    return {
      message: `Galeri dengan ID ${id} berhasil dihapus`,
      data: deleted,
    };
  }
}
