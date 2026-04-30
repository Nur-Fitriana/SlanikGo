import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateTiketDto {
  @ApiProperty({
    example: 'weekday',
    enum: ['weekday', 'weekend', 'anak', 'dewasa'],
  })
  @IsString()
  kategori!: string;

  @ApiProperty({ example: 50000 })
  @IsNumber()
  harga!: number;

  @ApiProperty({ example: 'Harga weekday Senin-Jumat', required: false })
  @IsOptional()
  @IsString()
  deskripsi?: string;
}
