import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateGaleriDto {
  @IsString()
  @IsNotEmpty()
  judul!: string;

  @IsUrl()
  @IsNotEmpty()
  url_gambar!: string;
}
