import { PartialType } from '@nestjs/swagger';
import { CreateGaleriDto } from './create-galeri.dto';

export class UpdateGaleriDto extends PartialType(CreateGaleriDto) {}
