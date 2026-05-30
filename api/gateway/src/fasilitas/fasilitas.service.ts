import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFasilitasDto } from './dto/create-fasilitas.dto';
import { UpdateFasilitasDto } from './dto/update-fasilitas.dto';

@Injectable()
export class FasilitasService {
  private fasilitas = [];

  create(createFasilitasDto: CreateFasilitasDto) {
    const newFasilitas = {
      id: Date.now(),
      ...createFasilitasDto,
    };
    this.fasilitas.push(newFasilitas);
    return newFasilitas;
  }

  findAll() {
    return this.fasilitas;
  }

  findOne(id: number) {
    const item = this.fasilitas.find((f) => f.id === id);
    if (!item)
      throw new NotFoundException(`Fasilitas dengan ID ${id} tidak ditemukan`);
    return item;
  }

  update(id: number, updateFasilitasDto: UpdateFasilitasDto) {
    const itemIndex = this.fasilitas.findIndex((f) => f.id === id);
    if (itemIndex === -1)
      throw new NotFoundException(`Fasilitas dengan ID ${id} tidak ditemukan`);

    this.fasilitas[itemIndex] = {
      ...this.fasilitas[itemIndex],
      ...updateFasilitasDto,
    };
    return this.fasilitas[itemIndex];
  }

  remove(id: number) {
    const itemIndex = this.fasilitas.findIndex((f) => f.id === id);
    if (itemIndex === -1)
      throw new NotFoundException(`Fasilitas dengan ID ${id} tidak ditemukan`);

    const deleted = this.fasilitas[itemIndex];
    this.fasilitas.splice(itemIndex, 1);
    return {
      message: `Fasilitas dengan ID ${id} berhasil dihapus`,
      data: deleted,
    };
  }
}
