import { ApiProperty } from '@nestjs/swagger';

export class GaleriEntity {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  judul!: string;

  @ApiProperty()
  gambarUrl!: string;

  @ApiProperty({ required: false })
  caption?: string | null;

  @ApiProperty()
  urutan!: number;

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;
}
