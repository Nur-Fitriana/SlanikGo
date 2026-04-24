import { PartialType } from '@nestjs/swagger';
import { CreateFasilitasDto } from './create-fasilitas.dto';

export class UpdateFasilitasDto extends PartialType(CreateFasilitasDto) {}
