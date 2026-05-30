import { PartialType } from '@nestjs/mapped-types';
import { CreateFasilitasDto } from './create-fasilitas.dto';

export class UpdateFasilitasDto extends PartialType(CreateFasilitasDto) {}
