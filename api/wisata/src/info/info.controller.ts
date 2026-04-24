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
import { InfoService } from './info.service';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';

@ApiTags('info')
@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Post()
  @ApiOperation({ summary: 'Create info wisata' })
  create(@Body() createInfoDto: CreateInfoDto) {
    return this.infoService.create(createInfoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all info wisata' })
  findAll() {
    return this.infoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get info wisata by id' })
  findOne(@Param('id') id: string) {
    return this.infoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update info wisata' })
  update(@Param('id') id: string, @Body() updateInfoDto: UpdateInfoDto) {
    return this.infoService.update(+id, updateInfoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete info wisata' })
  remove(@Param('id') id: string) {
    return this.infoService.remove(+id);
  }
}
