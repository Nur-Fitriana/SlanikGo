import { ApiProperty } from '@nestjs/swagger';

export class Tiket {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  kategori!: string;

  @ApiProperty()
  harga!: number;

  @ApiProperty({ required: false })
  deskripsi?: string;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;
}
