import { ApiProperty } from '@nestjs/swagger';

export class InfoEntity {
  @ApiProperty()
  id!: number;

  @ApiProperty()
  jamBuka!: string;

  @ApiProperty()
  jamTutup!: string;

  @ApiProperty()
  alamat!: string;

  @ApiProperty({ required: false })
  mapsEmbedUrl?: string | null;

  @ApiProperty({ required: false })
  noTelepon?: string | null;

  @ApiProperty({ required: false })
  email?: string | null;

  @ApiProperty({ required: false, type: Object })
  sosialMedia?: any; // karena Json di Prisma

  @ApiProperty()
  createdAt!: Date;

  @ApiProperty()
  updatedAt!: Date;
}
