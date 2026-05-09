import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsUrl } from 'class-validator';

export class CreateGaleriDto {
  @ApiProperty({ example: 'Kolam Renang Utama' })
  @IsString()
  judul!: string;

  @ApiProperty({ example: 'https://storage.googleapis.com/slanik/foto1.jpg' })
  @IsUrl()
  gambarUrl!: string;

  @ApiProperty({
    example: 'Pemandangan kolam renang dari atas',
    required: false,
  })
  @IsOptional()
  @IsString()
  caption?: string;

  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsNumber()
  urutan?: number;
}
