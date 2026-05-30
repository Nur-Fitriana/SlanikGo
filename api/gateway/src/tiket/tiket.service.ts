import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTiketDto } from './dto/create-tiket.dto';
import { UpdateTiketDto } from './dto/update-tiket.dto';

@Injectable()
export class TiketService {
  private tiketData = [];

  create(createTiketDto: CreateTiketDto) {
    const newTiket = {
      id: Date.now(),
      ...createTiketDto,
    };
    this.tiketData.push(newTiket);
    return newTiket;
  }

  findAll() {
    return this.tiketData;
  }

  findOne(id: number) {
    const item = this.tiketData.find((t) => t.id === id);
    if (!item)
      throw new NotFoundException(`Tiket dengan ID ${id} tidak ditemukan`);
    return item;
  }

  update(id: number, updateTiketDto: UpdateTiketDto) {
    const itemIndex = this.tiketData.findIndex((t) => t.id === id);
    if (itemIndex === -1)
      throw new NotFoundException(`Tiket dengan ID ${id} tidak ditemukan`);

    this.tiketData[itemIndex] = {
      ...this.tiketData[itemIndex],
      ...updateTiketDto,
    };
    return this.tiketData[itemIndex];
  }

  remove(id: number) {
    const itemIndex = this.tiketData.findIndex((t) => t.id === id);
    if (itemIndex === -1)
      throw new NotFoundException(`Tiket dengan ID ${id} tidak ditemukan`);

    const deleted = this.tiketData[itemIndex];
    this.tiketData.splice(itemIndex, 1);
    return { message: `Tiket dengan ID ${id} berhasil dihapus`, data: deleted };
  }
}
