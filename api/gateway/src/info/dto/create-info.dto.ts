import { IsNotEmpty, IsString } from 'class-validator';

export class CreateInfoDto {
  @IsString()
  @IsNotEmpty()
  judul!: string;

  @IsString()
  @IsNotEmpty()
  konten!: string;
}
