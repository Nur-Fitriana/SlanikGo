import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class CreateTiketDto {
  @IsString()
  @IsNotEmpty()
  jenis_tiket!: string;

  @IsNumber()
  @Min(0)
  harga!: number;

  @IsNumber()
  @Min(0)
  stok!: number;
}
