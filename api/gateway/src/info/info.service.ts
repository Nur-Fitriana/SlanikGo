import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';

@Injectable()
export class InfoService {
  private infoData = [];

  create(createInfoDto: CreateInfoDto) {
    const newInfo = {
      id: Date.now(),
      ...createInfoDto,
    };
    this.infoData.push(newInfo);
    return newInfo;
  }

  findAll() {
    return this.infoData;
  }

  findOne(id: number) {
    const item = this.infoData.find((info) => info.id === id);
    if (!item)
      throw new NotFoundException(`Info dengan ID ${id} tidak ditemukan`);
    return item;
  }

  update(id: number, updateInfoDto: UpdateInfoDto) {
    const itemIndex = this.infoData.findIndex((info) => info.id === id);
    if (itemIndex === -1)
      throw new NotFoundException(`Info dengan ID ${id} tidak ditemukan`);

    this.infoData[itemIndex] = {
      ...this.infoData[itemIndex],
      ...updateInfoDto,
    };
    return this.infoData[itemIndex];
  }

  remove(id: number) {
    const itemIndex = this.infoData.findIndex((info) => info.id === id);
    if (itemIndex === -1)
      throw new NotFoundException(`Info dengan ID ${id} tidak ditemukan`);

    const deleted = this.infoData[itemIndex];
    this.infoData.splice(itemIndex, 1);
    return { message: `Info dengan ID ${id} berhasil dihapus`, data: deleted };
  }
}
