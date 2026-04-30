import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsObject } from 'class-validator';

export class CreateInfoDto {
  @ApiProperty({ example: '08:00' })
  @IsString()
  jamBuka!: string;

  @ApiProperty({ example: '17:00' })
  @IsString()
  jamTutup!: string;

  @ApiProperty({ example: 'Jl. Raya Slanik No. 123, Jawa Timur' })
  @IsString()
  alamat!: string;

  @ApiProperty({
    example: 'https://maps.google.com/embed/...',
    required: false,
  })
  @IsOptional()
  @IsString()
  mapsEmbedUrl?: string;

  @ApiProperty({ example: '+628123456789', required: false })
  @IsOptional()
  @IsString()
  noTelepon?: string;

  @ApiProperty({ example: 'info@slanikwaterpark.com', required: false })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty({
    example: { facebook: 'slanikwp', instagram: 'slanikwp' },
    required: false,
  })
  @IsOptional()
  @IsObject()
  sosialMedia?: object;
}
