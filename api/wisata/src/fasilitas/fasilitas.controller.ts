import { Controller, Get } from '@nestjs/common';
import { FasilitasService } from './fasilitas.service';

@Controller('fasilitas')
export class FasilitasController {
  constructor(private fasilitasService: FasilitasService) {}

  @Get()
  findAll() {
    return this.fasilitasService.findAll();
  }
}
