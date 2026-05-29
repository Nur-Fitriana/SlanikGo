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
import { TiketService } from './tiket.service';
import { CreateTiketDto } from './dto/create-tiket.dto';
import { UpdateTiketDto } from './dto/update-tiket.dto';

@ApiTags('tiket')
@Controller('tiket')
export class TiketController {
  constructor(private readonly tiketService: TiketService) {}

  @Post()
  @ApiOperation({ summary: 'Create tiket' })
  create(@Body() createTiketDto: CreateTiketDto) {
    return this.tiketService.create(createTiketDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tiket' })
  findAll() {
    return this.tiketService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get tiket by id' })
  findOne(@Param('id') id: string) {
    return this.tiketService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update tiket' })
  update(@Param('id') id: string, @Body() updateTiketDto: UpdateTiketDto) {
    return this.tiketService.update(+id, updateTiketDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete tiket' })
  remove(@Param('id') id: string) {
    return this.tiketService.remove(+id);
  }
}
