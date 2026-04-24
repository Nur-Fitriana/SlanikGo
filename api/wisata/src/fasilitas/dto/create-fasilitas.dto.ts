import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateFasilitasDto {
  @ApiProperty({ example: 'Kolam Renang' })
  @IsString()
  nama!: string;

  @ApiProperty({ example: 'fa-swimmer', required: false })
  @IsOptional()
  @IsString()
  ikon?: string;

  @ApiProperty({
    example: 'Kolam renang dewasa dengan kedalaman 2 meter',
    required: false,
  })
  @IsOptional()
  @IsString()
  deskripsi?: string;
}
