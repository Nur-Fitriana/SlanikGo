import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateFasilitasDto {
  @IsString()
  @IsNotEmpty()
  nama_fasilitas!: string;

  @IsString()
  @IsOptional()
  deskripsi?: string;
}
