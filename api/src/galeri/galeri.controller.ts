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
import { GaleriService } from './galeri.service';
import { CreateGaleriDto } from './dto/create-galeri.dto';
import { UpdateGaleriDto } from './dto/update-galeri.dto';

@ApiTags('galeri')
@Controller('galeri')
export class GaleriController {
  constructor(private readonly galeriService: GaleriService) {}

  @Post()
  @ApiOperation({ summary: 'Create galeri' })
  create(@Body() createGaleriDto: CreateGaleriDto) {
    return this.galeriService.create(createGaleriDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all galeri' })
  findAll() {
    return this.galeriService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get galeri by id' })
  findOne(@Param('id') id: string) {
    return this.galeriService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update galeri' })
  update(@Param('id') id: string, @Body() updateGaleriDto: UpdateGaleriDto) {
    return this.galeriService.update(+id, updateGaleriDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete galeri' })
  remove(@Param('id') id: string) {
    return this.galeriService.remove(+id);
  }
}
