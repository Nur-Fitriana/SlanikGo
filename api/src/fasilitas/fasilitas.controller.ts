import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { FasilitasService } from './fasilitas.service';
import { CreateFasilitasDto } from './dto/create-fasilitas.dto';
import { UpdateFasilitasDto } from './dto/update-fasilitas.dto';

@ApiTags('fasilitas')
@Controller('fasilitas')
export class FasilitasController {
  constructor(private readonly fasilitasService: FasilitasService) {}

  @Post()
  @ApiOperation({ summary: 'Create fasilitas' })
  create(@Body() createFasilitasDto: CreateFasilitasDto) {
    return this.fasilitasService.create(createFasilitasDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all fasilitas' })
  findAll() {
    return this.fasilitasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get fasilitas by id' })
  findOne(@Param('id') id: string) {
    return this.fasilitasService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update fasilitas' })
  update(
    @Param('id') id: string,
    @Body() updateFasilitasDto: UpdateFasilitasDto,
  ) {
    return this.fasilitasService.update(+id, updateFasilitasDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete fasilitas' })
  remove(@Param('id') id: string) {
    return this.fasilitasService.remove(+id);
  }
}
