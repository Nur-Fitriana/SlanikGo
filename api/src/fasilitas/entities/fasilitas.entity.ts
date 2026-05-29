import { ApiProperty } from '@nestjs/swagger';

export class FasilitasEntity {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  nama!: string;

  @ApiProperty({ required: false })
  ikon?: string | null;

  @ApiProperty({ required: false })
  deskripsi?: string | null;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;
}
