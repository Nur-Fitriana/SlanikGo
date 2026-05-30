import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { FasilitasService } from './fasilitas.service';
import { CreateFasilitasDto } from './dto/create-fasilitas.dto';
import { UpdateFasilitasDto } from './dto/update-fasilitas.dto';

@Controller('fasilitas')
export class FasilitasController {
  constructor(private readonly fasilitasService: FasilitasService) {}

  @Post()
  create(@Body() createFasilitasDto: CreateFasilitasDto) {
    return this.fasilitasService.create(createFasilitasDto);
  }

  @Get()
  findAll() {
    return this.fasilitasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.fasilitasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFasilitasDto: UpdateFasilitasDto,
  ) {
    return this.fasilitasService.update(id, updateFasilitasDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.fasilitasService.remove(id);
  }
}
